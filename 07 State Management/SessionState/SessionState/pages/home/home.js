(function () {
    "use strict";

    var
        label = null,
        that = null;
   
    WinJS.UI.Pages.define("/pages/home/home.html", {

        update: function () {
            that = this;

            WinJS.Promise.timeout(500).then(
                function () {
                    label.innerText = WinJS.Application.sessionState.index;
                    WinJS.Application.sessionState.index++;
                }).done(function () {
                    that.update();
                });;
        },

        ready: function (element, options) {
            label = document.getElementById("label");

            if(!WinJS.Application.sessionState.index){
                WinJS.Application.sessionState.index = 0;
            }

            this.update();
        }
    });
})();
