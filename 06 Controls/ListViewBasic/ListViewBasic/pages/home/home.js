(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            WinJS.Utilities.query("#layout-toggle-button").listen("click", function () {
                var
                    label = "",
                    list = document.querySelector("#listView").winControl;

                if (list.layout instanceof WinJS.UI.GridLayout) {
                    label = "Grid";
                    list.layout = new WinJS.UI.ListLayout();
                } else {
                    label = "List";
                    list.layout = new WinJS.UI.GridLayout();
                }

                document.querySelector("#layout-label").innerText = label;

            });
        }
    });
})();
