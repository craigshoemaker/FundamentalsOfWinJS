(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        
        ready: function (element, options) {
            WinJS.Navigation.Utilities.enableNavigationElements(".homepage");
        }
    });
})();
