(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        ready: function (element, options) {

            WinJS.UI.processAll();

            var
                saveMenu = document.getElementById("saveMenu").winControl,
                saveButton = document.getElementById("saveButton");

            saveButton.addEventListener("click", showMenu, false);

            document.getElementById("saveCommand").addEventListener("click", save, false);
            document.getElementById("saveAsCommand").addEventListener("click", saveAs, false);

            function showMenu() {
                saveMenu.show(saveButton, "bottom");
            }

            function save() {
                saveMenu.hide();
            }

            function saveAs() {
                saveMenu.hide();
            }
        }
    });
})();
