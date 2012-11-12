(function () {
    "use strict";

    var _appBar = WinJS.UI.Pages.define("/pages/appBar/appBar.html", {

        ready: function (element, options) {

        },

        updateLayout: function (element, viewState, lastViewState) {

        },

        unload: function () {

        }
    });

    WinJS.Namespace.define("Application.Nav", { "appBar": _appBar });

})();
