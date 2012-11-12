(function () {
    "use strict";

    var _model = {
        simpleResponse: "",
        complexResponse: "",

        person : {
            "id": "1092",
            "firstName": "Craig",
            "lastName": "Shoemaker"
        },

        orders : [
                    {
                        "id": 100,
                        "items": [
                            { "id": 1001, "name": "Super Bouncy Balls", "description": "The farthest bouncing balls on the market", "price": 1.00, "quantity": 7 },
                            { "id": 1002, "name": "Mystical Slime", "description": "Non-toxic, non-staining toy slime", "price": 2.00, "quantity": 3 }
                        ],
                        "customer": {
                            "id": 1001,
                            "firstName": "John",
                            "lastName": "Doe"
                        }
                    },
                    {
                        "id": 200,
                        "items": [
                            { "id": 2001, "name": "Go Fish Playing Cards", "description": "Deck of fish-themed playing cards", "price": 3.00, "quantity": 2 },
                            { "id": 2002, "name": "Yo Yo", "description": "Blue trick yo-yo", "price": 5.00, "quantity": 2 }
                        ],
                        "customer": {
                            "id": 1002,
                            "firstName": "Jane",
                            "lastName": "Doe"
                        }
                    }]
    };

    var _viewModel = {
        model: WinJS.Binding.as(_model),

        addPerson: function () {
            var controller = ParseJSONMessages.Utility.OrderController();
            controller.addPersonAsync(JSON.stringify(_viewModel.model.person)).done(function (response) {
                _viewModel.model.simpleResponse = response;
            });
        },

        addOrder: function () {
            var controller = ParseJSONMessages.Utility.OrderController();
            controller.addOrdersAsync(JSON.stringify(_viewModel.model.orders)).done(function (response) {
                _viewModel.model.complexResponse = response;
            });
        }
    };

    WinJS.Namespace.define("Application.Pages.Home", { "ViewModel": _viewModel });

    WinJS.UI.Pages.define("/pages/home/home.html", {

        vm : Application.Pages.Home.ViewModel,

        init : function(element, options){
            WinJS.Utilities.markSupportedForProcessing(this.vm.addPerson);
            WinJS.Utilities.markSupportedForProcessing(this.vm.addOrder);
        },
        
        ready: function (element, options) {
            var root = document.querySelector("[data-win-bindsource='Application.Pages.Home.ViewModel']");
            WinJS.Binding.processAll(root, this.vm);
        }
    });
})();
