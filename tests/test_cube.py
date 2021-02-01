# Packages
from flask import template_rendered
from vcr_unittest import VCRTestCase

# Local
from webapp.app import app


def captured_templates(app, recorded, **extra):
    def record(sender, template, context):
        recorded.append((template, context))

    return template_rendered.connected_to(record, app)


class TestCube(VCRTestCase):
    def _get_vcr_kwargs(self):
        """
        This removes the authorization header
        from VCR so we don't record auth parameters
        """
        return {
            "decode_compressed_response": True,
            "filter_headers": ["Authorization", "Cookie"],
        }

    def setUp(self):
        app.testing = True
        self.client = app.test_client()
        return super().setUp()

    def test_microcerts_authenticated(self):
        expected_module = {
            "course-v1:CUBE+admintasks+2020": "not-enrolled",
            "course-v1:CUBE+commands+2020": "passed",
            "course-v1:CUBE+devices+2020": "enrolled",
            "course-v1:CUBE+juju+2020": "passed",
            "course-v1:CUBE+kernel+2020": "enrolled",
            "course-v1:CUBE+maas+2020": "enrolled",
            "course-v1:CUBE+microk8s+2020": "enrolled",
            "course-v1:CUBE+networking+2020": "enrolled",
            "course-v1:CUBE+package+2020": "failed",
            "course-v1:CUBE+security+2020": "in-progress",
            "course-v1:CUBE+shellscript+2020": "passed",
            "course-v1:CUBE+storage+2020": "enrolled",
            "course-v1:CUBE+sysarch+2020": "enrolled",
            "course-v1:CUBE+systemd+2020": "enrolled",
            "course-v1:CUBE+virtualisation+2020": "passed",
        }

        with self.client.session_transaction() as session:
            session["authentication_token"] = "test_token"
            session["openid"] = {
                "fullname": "Cube Engineer",
                "email": "cube@canonical.com",
            }

        templates = []
        with captured_templates(app, templates):
            response = self.client.get("/cube/microcerts")

        template, context = templates[0]
        modules = context["modules"]

        self.assertEqual(template.name, "cube/microcerts.html")

        self.assertEqual(len(modules), 15)

        # Assert all modules have defined topics
        for module in modules:
            self.assertGreater(len(module["topics"]), 0)
            self.assertEqual(module["status"], expected_module[module["id"]])
            self.assertTrue(
                module["take_url"].endswith(
                    f"{module['id']}/courseware/2020/start/?child=first"
                )
            )
            self.assertTrue(
                module["training_url"].endswith(f"{module['id']}/course")
            )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.headers.get("Cache-Control"), "private")

    def test_microcerts_403_authenticated_non_canonical_user(self):
        with self.client.session_transaction() as session:
            session["authentication_token"] = "test_token"
            session["openid"] = {
                "fullname": "Cube Engineer",
                "email": "cube@ubuntu.com",
            }

        response = self.client.get("/cube/microcerts")
        self.assertEqual(response.status_code, 403)

    def test_home_login_required(self):
        response = self.client.get("/cube")
        self.assertEqual(response.status_code, 302)

    def test_home_authenticated(self):
        with self.client.session_transaction() as session:
            session["authentication_token"] = "test_token"
            session["openid"] = {
                "fullname": "Cube Engineer",
                "email": "cube@canonical.com",
            }

        response = self.client.get("/cube")
        self.assertEqual(response.status_code, 200)

    def test_home_403_non_canonical_user(self):
        with self.client.session_transaction() as session:
            session["authentication_token"] = "test_token"
            session["openid"] = {
                "fullname": "Cube Engineer",
                "email": "cube@ubuntu.com",
            }

        response = self.client.get("/cube")
        self.assertEqual(response.status_code, 403)
