
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;
    WinJS.strictProcessing();

    var _eventLog = {
        activity: "",

        log: function (msg) {
            this.activity += "<li>" + msg + "</li>";
        },

        render: function () {
            var markup = "<ul>" + this.activity + "</ul>";
            WinJS.Utilities.setInnerHTML(document.querySelector("#event-log"), markup);
        }
    };

    WinJS.Namespace.define("Application", { "eventLog": _eventLog });

    function onBeforeNavigate(e) {
        Application.eventLog.log("Before Navigate: " + e.detail.location);
    }

    function onNavigating(e) {
        Application.eventLog.log("Navigating: " + e.detail.location);
    }

    function onNavigated(e) {
        Application.eventLog.log("Navigated: " + e.detail.location);
    }

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {

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

            WinJS.Navigation.addEventListener("beforenavigate", onBeforeNavigate.bind(this));
            WinJS.Navigation.addEventListener("navigating", onNavigating.bind(this));
            WinJS.Navigation.addEventListener("navigated", onNavigated.bind(this));
        }
    });

    app.start();
})();
