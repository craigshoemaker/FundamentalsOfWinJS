
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    WinJS.strictProcessing();

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {

                // start on the home page
                WinJS.Navigation.navigate("/pages/home/home.html");

                // enable buttons to navigate
                WinJS.Utilities.query("[data-page$='.html']").listen("click", function (e) {
                    var fileName = this.getAttribute("data-page");
                    var name = fileName.substring(0, fileName.lastIndexOf("."));
                    WinJS.Navigation.navigate("/pages/" + name + "/" + fileName);
                });
            } 
        }
    });

    WinJS.Navigation.addEventListener("navigated", function (e) {
        var
            url = e.detail.location,
            host = document.querySelector("#contenthost");

        // rids content host of current elements
        WinJS.Utilities.empty(host);

        // tells OS not to consider this function "complete" until
        // what's inside setPromise is complete
        e.detail.setPromise(WinJS.UI.Pages.render(url, host, e.detail.state));
    });

    app.start();
})();
