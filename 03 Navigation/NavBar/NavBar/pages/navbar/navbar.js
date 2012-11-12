(function () {
    "use strict";

    var _navbar = WinJS.UI.Pages.define("/pages/navbar/navbar.html", {

        onNavigated: function () {

            WinJS.Utilities.query(".navbar button").forEach(function (e) {
                e.setAttribute("disabled", "disabled");
            });

            if (WinJS.Navigation.canGoBack) {
                WinJS.Utilities.query(".back").forEach(function (e) {
                        e.removeAttribute("disabled");
                });
            }

            if (WinJS.Navigation.canGoForward) {
                WinJS.Utilities.query(".forward").forEach(function (e) {
                    e.removeAttribute("disabled");
                });
            }
        },

        ready: function (element, options) {

            WinJS.Utilities.query(".back").listen("click", function (e) {
                WinJS.Navigation.back();
            });

            WinJS.Utilities.query(".forward").listen("click", function (e) {
                WinJS.Navigation.forward();
            });

            WinJS.Navigation.addEventListener("navigated", this.onNavigated.bind(this));
        }
    });

    WinJS.Namespace.define("Application.Pages", { "navbar": _navbar });

})();
