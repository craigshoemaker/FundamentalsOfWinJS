(function () {
    "use strict";

    var _model = {
        make: "Gibson",
        model: "SG",
        productType: "ELEC",
        quantity: 10
    };

    var _viewModel = {
        model: _model,

        productNameConverter: WinJS.Binding.converter(function (model) {
            return model.make + ": " + model.model;
        }),

        productTypeConverter: WinJS.Binding.converter(function (productType) {
            var returnValue = "Unkown";

            if (productType == "ELEC") {
                returnValue = "Electric";
            } else if (productType == "ACOU") {
                returnValue = "Acoustic"
            }

            return returnValue + " Guitar";
        }),

        quantityThresholdConverter: WinJS.Binding.converter(function (quantity) {
            var returnValue = "";

            if (quantity < 5) {
                returnValue = "critical";
            }

            return returnValue;
        })
    };

    WinJS.Namespace.define("Application.Pages.Home", { "ViewModel": _viewModel });

    WinJS.UI.Pages.define("/pages/home/home.html", {
        
        ready: function (element, options) {
            WinJS.Binding.processAll(document.getElementById("orderSummary"),
                Application.Pages.Home.ViewModel);
        }

    });
})();
