
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/settings/settings.html", {
        ready: function (element, options) {
            document.getElementById("home-button").addEventListener("click", function () {
                WinJS.Navigation.Utilities.goHome();
            });
        }
    });
})();
