(function () {
    "use strict";

    WinJS.Namespace.define("Application.Data.movies", {
        "movieClassNames": WinJS.Binding.converter(function (title) {
            return (title.toLowerCase() == "the matrix" ? "item favorite" : "item");
        })
    });

    WinJS.UI.Pages.define("/pages/converters/converters.html", {
        
        ready: function (element, options) {
        }
    });

})();
