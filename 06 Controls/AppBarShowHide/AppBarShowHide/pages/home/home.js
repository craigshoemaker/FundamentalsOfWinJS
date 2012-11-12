(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        ready: function (element, options) {

            document.getElementById("show-appbar-button").addEventListener("click", function (e) {
                var appbar = document.querySelector("#appBar");
                if (appbar && appbar.winControl) {
                    appbar.winControl.show();
                }
            });

            document.getElementById("hide-appbar-button").addEventListener("click", function (e) {
                var appbar = document.querySelector("#appBar");
                if (appbar) {
                    appbar.winControl.hide();
                }
            });
        }
    });
})();
