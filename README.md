# ubuntu.com codebase

[![CircleCI build status](https://circleci.com/gh/canonical-web-and-design/ubuntu.com.svg?style=shield)](https://circleci.com/gh/canonical-web-and-design/ubuntu.com) [![Django version](https://img.shields.io/badge/endpoint.svg?url=https%3A%2F%2Fdjango-from-requirements-txt-54rf3n1zxedi.runkit.sh%2F%3Fwebsite%3Dubuntu.com)](https://www.djangoproject.com/) [![Code coverage](https://codecov.io/gh/canonical-web-and-design/ubuntu.com/branch/master/graph/badge.svg)](https://codecov.io/gh/canonical-web-and-design/ubuntu.com)

This is the codebase and content for [ubuntu.com](https://ubuntu.com), a simple databaseless informational website project based on [Flask](https://flask.palletsprojects.com/en/1.1.x/).

## Bugs and issues

Found a bug or have an idea for a new feature? Feel free to [create a new issue](https://github.com/ubuntudesign/www.ubuntu.com/issues/new), or suggest a fix by [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Local development

The simplest way to run the site locally is to first [install Docker](https://docs.docker.com/engine/installation/) (on Linux you may need to [add your user to the `docker` group](https://docs.docker.com/engine/installation/linux/linux-postinstall/)), and then use the `./run` script:

``` bash
./run
```

Once the containers are setup, you can visit <http://127.0.0.1:8001> in your browser.

### Building CSS

For working on [Sass files](static/css), you may want to dynamically watch for changes to rebuild the CSS whenever something changes.

To setup the watcher, open a new terminal window and run:

``` bash
./run watch
```

For more detailed local development instructions, see [HACKING.md](HACKING.md).

License
---

The content of this project is licensed under the [Creative Commons Attribution-ShareAlike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/), and the underlying code used to format and display that content is licensed under the [LGPLv3](http://opensource.org/licenses/lgpl-3.0.html) by [Canonical Ltd](http://www.canonical.com/).


With ♥ from Canonical
