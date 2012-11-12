
(function () {
    "use strict";

    var _model = {
        name: "Craig"
    };

    var _viewModel = {
        ViewModel: WinJS.Binding.as({model:_model})
    };

    WinJS.Namespace.define("Application.Pages", { "OneWay": _viewModel });

    WinJS.UI.Pages.define("/pages/oneway/oneway.html", {
        
        ready: function (element, options) {

            WinJS.Binding.processAll(null, Application.Pages.OneWay.ViewModel);

            document.getElementById("changeNameButton").addEventListener("click", function () {
                Application.Pages.OneWay.ViewModel.model.name = "Craig Shoemaker";
            });
            
        }
    });
})();
