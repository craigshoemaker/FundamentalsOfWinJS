(function () {
    "use strict";

    // NOTE: make sure to enable the 'Documents Library Access' Capability along
    // with an associated 'File Type Associations' Declaration in order to use
    // Windows.Storage.KnownFolders.documentsLibrary.
    var _documentsLibrary = Windows.Storage.KnownFolders.documentsLibrary;

    var _viewModel = {
        "ViewModel": WinJS.Binding.as({
            message: "",
            fileName: "",
            folderName: "",
            fileContent: "",

            setFileName: function () {
                Application.Pages.Home.ViewModel.fileName =
                    document.querySelector("#file-name-box").value;
            },

            setFolderName: function () {
                Application.Pages.Home.ViewModel.folderName =
                    document.querySelector("#folder-name-box").value;
            },

            setFileContent: function () {
                Application.Pages.Home.ViewModel.fileContent =
                    document.querySelector("#file-content-box").value;
            },

            createFolder: function () {
                var folderName = Application.Pages.Home.ViewModel.folderName;

                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "You must enter a folder name before you can create it.";
                    return;
                }

                _documentsLibrary.createFolderAsync(folderName).done(function (folder) {
                    Application.Pages.Home.ViewModel.message = "Created folder: " + folderName + ".";
                }, function (e) {
                    Application.Pages.Home.ViewModel.message = "Error while trying to create the '" + folderName + "' folder. " + e;
                });
            },

            getFolder: function (folderName, successCallback, errorCallback) {
                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "You must enter a folder name before you can retrieve it.";
                    return;
                }

                _documentsLibrary.getFolderAsync(folderName).done(function (folder) {
                    successCallback(folder);
                }, function (e) {
                    errorCallback(e);
                });
            },

            createFile: function () {
                var
                    fileName = Application.Pages.Home.ViewModel.fileName,
                    folderName = Application.Pages.Home.ViewModel.folderName;

                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the folder name where you want to create the file.";
                    return;
                }

                if (fileName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the file name to create.";
                    return;
                }

                Application.Pages.Home.ViewModel.getFolder(folderName, function (folder) {
                    folder.getFileAsync(fileName).done(function () {
                        Application.Pages.Home.ViewModel.message = "Cannot create file. It already exists.";
                    }, function () {
                        folder.createFileAsync(fileName).done(function () {
                            Application.Pages.Home.ViewModel.message = "'" + fileName + "' created in the '" + folderName + "' folder.";
                        });
                    });
                });
            },

            getFilePath: function () {
                var
                    fileName = Application.Pages.Home.ViewModel.fileName,
                    folderName = Application.Pages.Home.ViewModel.folderName;

                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the folder name where you want to get the file.";
                    return;
                }

                if (fileName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the file name to retrieve.";
                    return;
                }

                Application.Pages.Home.ViewModel.getFolder(folderName, function (folder) {
                    folder.getFileAsync(fileName).done(function (file) {
                        Application.Pages.Home.ViewModel.message = "File path: " + file.path;
                    });
                });
            },

            getFiles: function () {
                var folderName = Application.Pages.Home.ViewModel.folderName;

                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the folder name where you want to get files.";
                    return;
                }

                _documentsLibrary.getFolderAsync(folderName).done(function (folder) {
                    folder.getFilesAsync().done(function (files) {
                        Application.Pages.Home.ViewModel.message = "There are " + files.size + " file(s) in the '" + folderName + "' folder.";
                    });
                }, function (e) {
                    Application.Pages.Home.ViewModel.message = "The folder you are trying to access does not exist.";
                });
            },

            deleteFile: function () {
                var
                    fileName = Application.Pages.Home.ViewModel.fileName,
                    folderName = Application.Pages.Home.ViewModel.folderName;

                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the folder name where you want to delete the file.";
                    return;
                }

                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the file name to delete.";
                    return;
                }

                Application.Pages.Home.ViewModel.getFolder(folderName, function (folder) {
                    folder.getFileAsync(fileName).done(function (file) {
                        file.deleteAsync().done(function () {
                            Application.Pages.Home.ViewModel.message = "The '" + fileName + "' file is deleted.";
                        }, function (e) {
                            Application.Pages.Home.ViewModel.message = "There was an error while trying to delete the '" + fileName + "' file. " + e;
                        });
                    });
                }, function (e) {
                    Application.Pages.Home.ViewModel.message = "There was an error while trying to access the '" + folderName + "' folder. " + e;
                });
            },

            deleteFolder: function () {

                var folderName = Application.Pages.Home.ViewModel.folderName;

                if (folderName.length == 0) {
                    Application.Pages.Home.ViewModel.message = "Please specify the folder name to delete.";
                    return;
                }

                if (folderName.length > 0) {
                    _documentsLibrary.getFolderAsync(folderName).done(function (folder) {
                        folder.deleteAsync().done(function () {
                            Application.Pages.Home.ViewModel.message = "Deleted '" + folderName + "'.";
                        }, function (e) {
                            Application.Pages.Home.ViewModel.message = "Error while trying to delete folder. " + e;
                        });
                    });
                }
            },

            writeContent: function () {
                var
                    fileName = Application.Pages.Home.ViewModel.fileName,
                    folderName = Application.Pages.Home.ViewModel.folderName,
                    fileContents = Application.Pages.Home.ViewModel.fileContent;

                Application.Pages.Home.ViewModel.getFolder(folderName, function (folder) {
                    folder.getFileAsync(fileName).done(function (file) {

                        // Success: Writing content to file
                        Windows.Storage.FileIO.writeTextAsync(file, fileContents).done(function () {
                            Application.Pages.Home.ViewModel.message = "Your text is written to " + fileName + ".";
                        }, function (e) {

                        // Failure: Writing content to file
                            Application.Pages.Home.ViewModel.message = "Error while trying to write to " + fileName + ". " + e;
                        });
                    }, function (e) {

                        // Failure: Accessing file
                        Application.Pages.Home.ViewModel.message = "Error while trying to access file: " + fileName + ". " + e;
                    });
                }, function (e) {

                        // Failure: Accessing folder
                    Application.Pages.Home.ViewModel.message = "Error while trying to access folder: " + folderName + ". " + e;
                });
            }
        })
    };

    WinJS.Namespace.define("Application.Pages.Home", _viewModel);

    WinJS.UI.Pages.define("/pages/home/home.html", {

        init: function (element, options) {

            // WinJS.Utilities.markSupportedForProcessing function
            // http://msdn.microsoft.com/en-us/library/windows/apps/Hh967819.aspx
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.setFileName);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.setFolderName);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.setFileContent);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.createFile);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.createFolder);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.deleteFile);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.deleteFolder);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.getFilePath);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.getFiles);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.getFolder);
            WinJS.Utilities.markSupportedForProcessing(Application.Pages.Home.ViewModel.writeContent);
        },

        ready: function (element, options) {

            var root = document.querySelector("[data-win-bind='Application.Pages.Home.ViewModel']");
            WinJS.Binding.processAll(root, Application.Pages.Home.ViewModel);

        }
    });
})();
