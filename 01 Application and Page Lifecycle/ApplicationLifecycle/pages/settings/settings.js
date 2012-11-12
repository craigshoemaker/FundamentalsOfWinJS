
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/settings/settings.html", {
        ready: function (element, options) {
            Application.eventLog.log("Page", "Settings: Ready");
            Application.eventLog.render();
        },

        updateLayout: function (element, viewState, lastViewState) {
            Application.eventLog.log("Page", "Settings: Update Layout");
            Application.eventLog.render();
        },

        unload: function () {
            Application.eventLog.log("Page", "Settings: Unload");
        }
    });
})();
