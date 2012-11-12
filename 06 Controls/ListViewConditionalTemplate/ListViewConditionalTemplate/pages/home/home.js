(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        getItemTemplate: function (promise) {

            return promise.then(function (item) {
                var
                    itemTemplate = null,
                    parent = document.createElement("div");

                if (item.data.title.toLowerCase() == "a few good men") {
                    itemTemplate = document.querySelector("#favoriteMovieTemplate");
                } else {
                    itemTemplate = document.querySelector("#standardMovieTemplate");
                }

                itemTemplate.winControl.render(item.data, parent);
                return parent;
            });
        },

        ready: function (element, options) {
            var listView = document.querySelector("#listView").winControl;

            listView.itemTemplate = this.getItemTemplate;
        }
    });
})();
