(function () {
    "use strict";

    var settings = Windows.Storage.ApplicationData.current.localSettings;

    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: function (element, options) {

            var
                sync = settings.values["sync"],
                toggle = document.getElementById("enableSyncToggle").winControl;

            toggle.checked = sync;

            toggle.addEventListener("change", function () {
                settings.values["sync"] = toggle.checked;
            });
        }
    });
})();
