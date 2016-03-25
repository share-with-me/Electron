'use strict';

const electron = require('electron');

const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600}); //Dimensions of window

  mainWindow.loadURL('file://' + __dirname + '/index.html'); //The url of file to be loaded

 //mainWindow.webContents.openDevTools(); Disabling it for the purpose of UI of web page only. Uncommenting it will also render the DevTools of the browser

  mainWindow.on('closed', function() {

    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow();
  }
});
