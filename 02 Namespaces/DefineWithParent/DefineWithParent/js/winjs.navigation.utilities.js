
WinJS.Namespace.defineWithParent(WinJS.Navigation, "Utilities",
    {
        goHome: function () {
            WinJS.Navigation.navigate("/pages/home/home.html");
        }
    }
);