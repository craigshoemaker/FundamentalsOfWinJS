(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        init: function (element, options) {
            Application.eventLog.log("Home: Initialize");
        },
        
        ready: function (element, options) {
            Application.eventLog.log("Home: Ready");
            Application.eventLog.render();
        },

        unload: function (element, options) {
            Application.eventLog.log("Home: Unload");
        }

    });
})();
