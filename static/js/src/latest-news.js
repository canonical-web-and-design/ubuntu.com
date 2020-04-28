(function () {
  function _formatDate(date) {
    const parsedDate = new Date(date);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return (
      parsedDate.getDate() +
      " " +
      monthNames[parsedDate.getMonth()] +
      " " +
      parsedDate.getFullYear()
    );
  }

  function _articleDiv(article, articleTemplateSelector, options) {
    const articleFragment = _getTemplate(articleTemplateSelector);
    const time = articleFragment.querySelector(".article-time");
    const link = articleFragment.querySelector(".article-link");
    const title = articleFragment.querySelector(".article-title");
    const image = articleFragment.querySelector(".article-image");

    let url = "";

    if (options.hostname) {
      url = "https://" + options.hostname;
    }

    let articleImage;

    if (
      article._embedded &&
      article._embedded["wp:featuredmedia"] &&
      article._embedded["wp:featuredmedia"][0] &&
      article._embedded["wp:featuredmedia"][0].media_details &&
      article._embedded["wp:featuredmedia"][0].media_details.width &&
      article._embedded["wp:featuredmedia"][0].media_details.height
    ) {
      let media = article._embedded["wp:featuredmedia"][0];
      articleImage = {
        url: media.source_url,
        alt: media.alt_text,
        width: media.media_details.width,
        height: media.media_details.height,
      };
    }

    if (time) {
      time.setAttribute("datetime", article.date);
      time.innerText = _formatDate(article.date);
    }

    if (link) {
      link.href = url + "/blog/" + article.slug;
      if (options.gtmEventLabel) {
        link.onclick = function () {
          dataLayer.push({
            event: "GAEvent",
            eventCategory: "blog",
            eventAction: options.gtmEventLabel + " news link",
            eventLabel: article.slug,
          });
        };
      }
    }

    if (title) {
      title.innerHTML = article.title.rendered;
    }

    if (image && articleImage) {
      let img = document.createElement("img");
      img.setAttribute("src", articleImage.url);
      img.setAttribute("alt", articleImage.alt);
      img.setAttribute("width", articleImage.width);
      img.setAttribute("height", articleImage.height);
      image.appendChild(img);
    }

    return articleFragment;
  }

  function _getTemplate(selector) {
    const template = document.querySelector(selector);
    let fragment;

    if ("content" in template) {
      fragment = document.importNode(template.content, true);
    } else {
      fragment = document.createDocumentFragment();

      for (let i = 0; i < template.childNodes.length; i++) {
        fragment.appendChild(template.childNodes[i].cloneNode(true));
      }
    }

    return fragment;
  }

  function _latestArticlesCallback(options) {
    return function (event) {
      const articlesContainer = document.querySelector(
        options.articlesContainerSelector
      );

      // Clear out latest news container
      while (articlesContainer.hasChildNodes()) {
        articlesContainer.removeChild(articlesContainer.lastChild);
      }

      const data = JSON.parse(event.target.responseText);

      if ("spotlightContainerSelector" in options) {
        const spotlightContainer = document.querySelector(
          options.spotlightContainerSelector
        );
        const latestPinned = data.latest_pinned_articles[0];

        if (latestPinned) {
          spotlightContainer.appendChild(
            _articleDiv(
              latestPinned,
              options.spotlightTemplateSelector,
              options
            )
          );
        }
      }

      if (data.latest_articles) {
        data.latest_articles.forEach(function (article) {
          articlesContainer.appendChild(
            _articleDiv(article, options.articleTemplateSelector, options)
          );
        });
      }
    };
  }

  function fetchLatestNews(options) {
    let url = "https://ubuntu.com/blog/latest-news";
    let params = [];

    if (options.limit) {
      params.push("limit=" + options.limit);
    }

    if (options.tagId) {
      params.push("tag-id=" + options.tagId);
    }

    if (options.groupId) {
      params.push("group-id=" + options.groupId);
    }

    if (params.length) {
      url += "?" + params.join("&");
    }

    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", _latestArticlesCallback(options));
    oReq.open("GET", url);
    oReq.send();
  }

  if (typeof window.fetchLatestNews == "undefined") {
    window.fetchLatestNews = fetchLatestNews;
  }
})();
