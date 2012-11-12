(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {

        ready: function (element, options) {
            
            document.querySelector("#direct-call-button").addEventListener("click", function () {

                // don't do this ;)
                var
                    o = new AsyncResponse.Utility.ManagedClass(),
                    userMsg = document.querySelector("#direct-message").value;

                document.querySelector("#direct-call-result").innerText = o.responseDirect(userMsg);
            });

            // While direct-call approach may seem more natural at first,
            // using async methods is the correct Windows Store way of interacting
            // with managed code.
            document.querySelector("#async-call-button").addEventListener("click", function () {
                var
                    o = new AsyncResponse.Utility.ManagedClass(),
                    clientMsg = document.querySelector("#async-message").value;

                o.responseAsync(clientMsg).then(function (managedMessage) {
                    document.querySelector("#async-call-result").innerText = managedMessage;
                });
            });

        }
    });
})();
