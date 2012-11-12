(function () {
    "use strict";
    var msg, listView;

    WinJS.UI.Pages.define("/pages/multiple/multiple.html", {

        ready: function (element, options) {

            msg = document.querySelector("#msg");
            listView = element.querySelector("#listView").winControl;

            function showSelections() {
                var selectionCount = listView.selection.count();

                if (selectionCount > 0) {
                    listView.selection.getItems().done(function (selection) {
                        var msgText = "<h2>Items Selected (" + selection.length + ")</h2>";

                        msgText += "<ol>";

                        for (var i = 0; i < selection.length; i++) {
                            msgText += "<li>" + selection[i].data.title + "</li>";
                        }

                        msgText += "</ol>";

                        WinJS.Utilities.setInnerHTML(msg, msgText);
                    });
                } else {
                    WinJS.Utilities.setInnerHTML(msg, "<h2>No items selected</h2>");
                }
            }

            WinJS.Utilities.query("#showSelections").listen("click", function (e) {
                showSelections();
            });

            WinJS.Utilities.query("#clearAll").listen("click", function (e) {
                listView.selection.clear();
                WinJS.Utilities.setInnerHTML(msg, "");
            });

            WinJS.Utilities.query("#selectAll").listen("click", function (e) {
                listView.selection.selectAll();
                showSelections();
            });
        }
    });
})();
