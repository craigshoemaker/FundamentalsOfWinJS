(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    WinJS.strictProcessing();

    var _eventLog = {
        "key": "eventLog",
        "log": function (location, msg) {
            var values = Windows.Storage.ApplicationData.current.localSettings.values;
            if (values.hasKey(Application.eventLog.key)) {
                values[Application.eventLog.key] += "<tr><td>" + location + "</td><td>" + msg + "</td></tr>";
            } else {
                values[Application.eventLog.key] = "<tr><td>" + location + "</td><td>" + msg + "</td></tr>";;
            }
        },

        "del": function () {
            var values = Windows.Storage.ApplicationData.current.localSettings.values;
            if (values.hasKey(Application.eventLog.key)) {
                values.remove(Application.eventLog.key);
            }
        },

        "render": function () {
            var
                markup = "",
                values = Windows.Storage.ApplicationData.current.localSettings.values;

            if (values.hasKey(Application.eventLog.key)) {
                markup = "<table border='1' cellspacing='6' cellpadding='6' style='border-collapse:collapse;'><tr><td>Location</td><td>Message</td></tr>" + values[Application.eventLog.key] + "</table>";
            }
            var log = document.querySelector(".event-log");
            WinJS.Utilities.setInnerHTMLUnsafe(log, markup);
        }
    };

    WinJS.Namespace.define("Application", { "eventLog": _eventLog });

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
                Application.eventLog.log("Application", "Activated (newly launched)");

            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
                Application.eventLog.log("Application", "Activated (reactivated from suspension)");
            }

            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {
                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    return nav.navigate(Application.navigator.home);
                }
            }));


            document.getElementById("clear-log-button").addEventListener("click", function () {
                Application.eventLog.del();
                Application.eventLog.render();
            });
        }
    });

    app.oncheckpoint = function (args) {
        app.sessionState.history = nav.history;
        Application.eventLog.log("Application", "Checkpoint (before suspension)");
    };

    Windows.UI.WebUI.WebUIApplication.addEventListener("resuming", function () {
        Application.eventLog.log("Application", "Resuming");
    });

    app.start();
})();
