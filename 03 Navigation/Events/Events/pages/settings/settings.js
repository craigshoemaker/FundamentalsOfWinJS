(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/settings/settings.html", {

        init: function (element, options) {
            Application.eventLog.log("Settings: Initialize");
        },

        ready: function (element, options) {
            Application.eventLog.log("Settings: Ready");
            Application.eventLog.render();
        },

        unload: function (element, options) {
            Application.eventLog.log("Settings: Unload");
        }

    });
})();
