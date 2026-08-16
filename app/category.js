(function () {
  var page = window.CATEGORY_PAGE;

  if (!page) {
    return;
  }

  function createHeading(tagName, text) {
    var heading = document.createElement(tagName);
    heading.textContent = text;
    return heading;
  }

  function createContainer(singleSection) {
    var container = document.createElement("div");

    if (singleSection) {
      container.id = "posts-container";
    }

    container.className = "posts-container";
    return container;
  }

  function appendItems(container, items) {
    var index;

    for (index = 0; index < items.length; index += 1) {
      var item = items[index];
      var link = document.createElement("a");
      var href = item.href || item.text.replace(/ /g, "-").toLowerCase() + ".html";

      link.href = href;
      link.textContent = item.text;
      container.appendChild(link);
      container.appendChild(document.createElement("br"));
    }
  }

  function renderSections(sections) {
    var singleSection = sections.length === 1;
    var index;

    for (index = 0; index < sections.length; index += 1) {
      var section = sections[index];
      var container = createContainer(singleSection);

      if (section.title) {
        document.body.appendChild(createHeading("h1", section.title));
      }

      appendItems(container, section.items || []);
      document.body.appendChild(container);
    }
  }

  if (page.title) {
    document.body.appendChild(createHeading("h1", page.title));
    document.title = page.title;
  }

  renderSections(page.sections || []);
})();
