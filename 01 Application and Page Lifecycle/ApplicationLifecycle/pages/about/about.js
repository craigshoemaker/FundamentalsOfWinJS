
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/about/about.html", {
        ready: function (element, options) {
            Application.eventLog.log("Page", "About: Ready");
            Application.eventLog.render();
        },

        updateLayout: function (element, viewState, lastViewState) {
            Application.eventLog.log("Page", "About: Update Layout");
            Application.eventLog.render();
        },

        unload: function () {
            Application.eventLog.log("Page", "About: Unload");
        }
    });
})();
