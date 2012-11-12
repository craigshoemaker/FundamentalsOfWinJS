
(function () {
    "use strict";

    var _model = {
        name : "Craig"
    };

    var _viewModel = {
        model: _model
    };

    WinJS.Namespace.define("Application.Pages.OneTime", { "ViewModel": _viewModel });

    WinJS.UI.Pages.define("/pages/onetime/onetime.html", {
        
        ready: function (element, options) {
            WinJS.Binding.processAll(null, Application.Pages.OneTime.ViewModel);

            document.getElementById("changeNameButton").addEventListener("click", function () {
                Application.Pages.OneTime.ViewModel.model.name = "Craig Shoemaker";
            });
        }

    });
})();
