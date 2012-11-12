(function () {
    "use strict";

    var _viewModel= {
        name: "Craig",
        _id: 1
    };

    WinJS.Namespace.define("Application.Pages.Home.ViewModel", _viewModel);

    WinJS.UI.Pages.define("/pages/home/home.html", {
        ready: function (element, options) {

            var 
                name = document.getElementById("name"),
                id = document.getElementById("id");

            name.innerText = Application.Pages.Home.ViewModel.name;

            //*
            // WinJS.Namespace.define does not expose properties
            // prefixed by an underscore - which, by convention, protects
            // "private" JavaScript members.
            // Try deleting '_guid' from the following line of code and
            // then see how it's not available through IntelliSense.
            id.innerText += Application.Pages.Home.ViewModel._id;
            // If you run the code above, the value will display, as
            // you would expect if you accessed any 'private' member in
            // JavaScript, but underscore-prefixed members are hidden from
            // IntelliSense when using the 'define' method.
            // */
        }
    });
})();
