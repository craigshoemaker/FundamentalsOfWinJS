(function () {
    "use strict";

    // --- Could be in a separate file -------
    WinJS.Namespace.define("Application.Models", {
            "Person": WinJS.Binding.define({
                name: "",
                twitter: ""
            })
    });
    // ----------------------------------------

    var _person = new Application.Models.Person();
    _person.name = "Craig";
    _person.twitter = "@craigshoemaker";

    var _viewModel = {
        model : _person
    };

    WinJS.Namespace.define("Application.Pages.Home", { "ViewModel": _viewModel });

    WinJS.UI.Pages.define("/pages/home/home.html", {
        
        ready: function (element, options) {
            
            WinJS.Binding.processAll(null, Application.Pages.Home.ViewModel);

            document.getElementById("changeNameButton").addEventListener("click", function () {
                Application.Pages.Home.ViewModel.model.name = "Craig Shoemaker";
            });

        }
    });
})();
