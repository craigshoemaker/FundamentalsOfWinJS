(function () {
    "use strict";
    var msg, listView;

    WinJS.UI.Pages.define("/pages/home/home.html", {
        
        itemSelected : function(e) {
            e.detail.itemPromise.done(function (item) {

                var markup = 
                    "<h2>" + item.data.title + " (index: " + item.index + ")</h2>" +
                    "<p>" + item.data.synopsis + "</p>";

                WinJS.Utilities.setInnerHTML(msg, markup);
            })
        },

        ready: function (element, options) {
            
            msg = document.querySelector("#msg");
            listView = element.querySelector("#listView").winControl;

            listView.addEventListener("iteminvoked", this.itemSelected.bind(this));
        }
    });
})();
