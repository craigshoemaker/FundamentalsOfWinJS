(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/ul/ul.html", {

        ready: function (element, options) {

            WinJS.UI.processAll().then(function () {
                var tableBody = document.getElementById("ulContainer");
                var template = document.getElementById("itemTemplate").winControl;

                Application.Data.movies.forEach(function (item) {
                    template.render(item, tableBody);
                });
            });
        }
    });
})();
