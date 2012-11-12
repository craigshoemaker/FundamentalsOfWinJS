(function () {
    "use strict";

    var _list;

    function bindList(ds) {
        _list = new WinJS.UI.ListView(document.getElementById("listView"), {
            itemDataSource: ds.dataSource,
            itemTemplate: document.getElementById("itemTemplateContainer"),
            selectionMode: 'none',
            tapBehavior: 'none',
            swipeBehavior: 'none',
            layout: { type: WinJS.UI.ListLayout }
        });
    }

    function ready(element, options) {
        bindList(Application.Data.movies.noSort);

        sortNoneButton.addEventListener("click", function () {
            bindList(Application.Data.movies.noSort);
        });

        sortTitleButtton.addEventListener("click", function () {
            bindList(Application.Data.movies.sortedByTitle);
        });

        sortTypeButton.addEventListener("click", function () {
            bindList(Application.Data.movies.sortedByType);
        });
    }

    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: ready
    });
})();
