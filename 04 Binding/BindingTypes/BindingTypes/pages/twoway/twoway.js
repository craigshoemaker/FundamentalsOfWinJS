
(function () {
    "use strict";

    var _model = {
        name: "Craig"
    };

    var _viewModel = {
        model: WinJS.Binding.as(_model),

        setName: function (e) {
            _vm.model.name = e.srcElement.value;
        }
    };

    WinJS.Namespace.define("Application.Pages.TwoWay", { "ViewModel": _viewModel });

    var _vm = Application.Pages.TwoWay.ViewModel;

    WinJS.UI.Pages.define("/pages/twoway/twoway.html", {

        init: function () {
            WinJS.Utilities.markSupportedForProcessing(_vm.setName);
        },
        
        ready: function (element, options) {
            WinJS.Binding.processAll(null, _vm);
        }

    });
})();
