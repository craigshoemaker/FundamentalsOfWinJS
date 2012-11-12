(function () {
    "use strict";

    var app = WinJS.Application;

    var _viewModel = {
        fileName: "LocalStorageTest.txt",
        content: "",

        getContent: function (e) {
            _viewModel.content = e.srcElement.value;
        },

        write: function () {
            var output = document.getElementById("output");

            app.local.writeText(_viewModel.fileName, _viewModel.content).then(function (args) {
                output.innerText = "Saved";
            }, function (e) {
                output.innerText = "Error while trying to save file. " + e;
            });
        },

        read: function () {
            app.local.readText(_viewModel.fileName, "File does not exist.").then(function (e) {
                document.getElementById("output").innerText = "File contents: '" + e + "'";
            });
        }
    };

    WinJS.Namespace.define("Application.Pages.Home.ViewModel", _viewModel);

    WinJS.UI.Pages.define("/pages/home/home.html", {

        init: function (element, options) {
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.getContent);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.read);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.write);
        },

        ready: function (element, options) {
            var root = document.querySelector("[data-win-bindsource='Application.Pages.Home.ViewModel']");
            WinJS.Binding.processAll(root, Application.Pages.Home.ViewModel);
        }

    });
})();
