
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: function (element, options) {
            Application.eventLog.log("Page", "Home: Ready");
            Application.eventLog.render();
        },

        updateLayout: function (element, viewState, lastViewState) {
            // Responds to changes in view state
            Application.eventLog.log("Page", "Home: Update Layout");
            Application.eventLog.render();
        },

        unload: function () {
            Application.eventLog.log("Page", "Home: Unload");
        }
    });
})();
