(function () {
    "use strict";

    function ready(element, options) {

        var
            appbar = document.querySelector("#appBar").winControl,
            msg = document.querySelector("#msg");

        appbar.addEventListener("aftershow", function (e) {
            WinJS.Utilities.setInnerHTML(msg, "<p>after show</p>");
        });

        appbar.addEventListener("beforehide", function (e) {
            WinJS.Utilities.setInnerHTML(msg, "<p>before hide</p>");
        });
    }

    var _appBar = WinJS.UI.Pages.define("/pages/appBar/appBar.html", {
        ready: ready
    });

    WinJS.Namespace.define("Application.Pages", { "appBar": _appBar });

})();
