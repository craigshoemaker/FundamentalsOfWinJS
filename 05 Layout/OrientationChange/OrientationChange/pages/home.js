// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var page = WinJS.UI.Pages.define("/pages/home.html", {
        
        ready: function (element, options) {
        },

        unload: function () {
        }
    });

    WinJS.Namespace.define("Application", {
        "home": page
    });
})();
