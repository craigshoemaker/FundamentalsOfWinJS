// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    WinJS.strictProcessing();

    var sensor = null;

    function onOrientationChanged(e) {
        // do something based on the curent orientation
        var 
            msg = "", 
            element;

        switch (e.orientation) {
            case Windows.Devices.Sensors.SimpleOrientation.notRotated:
                msg = "Not Rotated";
                break;
            case Windows.Devices.Sensors.SimpleOrientation.rotated90DegreesCounterclockwise:
                msg = "Rotated 90 degrees counter clockwise (rotated to the left)";
                break;
            case Windows.Devices.Sensors.SimpleOrientation.rotated180DegreesCounterclockwise:
                msg = "Rotated 180 degrees counter clockwise (rotated upside down)";
                break;
            case Windows.Devices.Sensors.SimpleOrientation.rotated270DegreesCounterclockwise:
                msg = "Rotated 270 degrees counter clockwise (rotated to the right)";
                break;
            case Windows.Devices.Sensors.SimpleOrientation.faceup:
                msg = "Face Up";
                break;
            case Windows.Devices.Sensors.SimpleOrientation.facedown:
                msg = "Face Down";
                break;
            default:
                msg = "Undefined orientation " + e.orientation;
                break;
        }
        element = document.getElementById("msg");
        msg = element.innerHTML + "<p>" + msg + "</p>";
        WinJS.Utilities.setInnerHTML(element, msg);
    }

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());

            sensor = Windows.Devices.Sensors.SimpleOrientationSensor.getDefault();
            sensor.addEventListener("orientationchanged", onOrientationChanged.bind(this));
        }
    };

    app.start();
})();
