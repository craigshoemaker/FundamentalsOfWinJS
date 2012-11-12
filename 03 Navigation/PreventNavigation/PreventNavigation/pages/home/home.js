(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        onBeforeNavigate: function (e) {

            var loginNameBox = document.getElementById("loginNameBox");
            if (loginNameBox) {
                if (loginNameBox.value.length == 0) {
                    e.preventDefault();
                    var msg = document.getElementById("msg");
                    msg.innerText = "You must enter your name into the box.";

                    WinJS.Promise.timeout(1500).done(function () {
                        msg.innerText = "";
                    });
                }
            }
        },

        init: function () {
            WinJS.Navigation.addEventListener("beforenavigate", this.onBeforeNavigate.bind(this));
        },

        ready: function (element, options) {
            WinJS.Navigation.Utilities.enableNavigationElements(".homepage");
        }
    });
})();
