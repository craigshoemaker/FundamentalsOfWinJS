(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        
        ready: function (element, options) {
            document.getElementById("settingsButton").addEventListener("click", function (e) {
                var state = { waitForAsync: true };
                WinJS.Navigation.navigate("/pages/settings/settings.html", state);
                msg.innerText = "Waiting for operation to finish before navigating to Settings.";
            });
        }
    });
})();
