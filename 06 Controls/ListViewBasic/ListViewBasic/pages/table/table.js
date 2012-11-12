(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/table/table.html", {

        ready: function (element, options) {

            WinJS.UI.processAll().then(function () {
                var tableBody = document.getElementById("tableBodyContainer");
                var template = document.getElementById("itemTemplate").winControl;

                Application.Data.movies.forEach(function (item) {
                    template.render(item, tableBody);
                });
            });
        }

    });
})();
