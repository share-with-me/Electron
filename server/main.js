const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
electron.crashReporter.start(); //Helps in debugging and keeping log of errors

var mainWindow = null;

app.on('window-all-closed', function() {
  //  if (process.platform != 'darwin') {
    app.quit();
  //  }
});

app.on('ready', function() {
  
  var child = require('child_process').spawn('python', ['./hello.py']); //Make an instance of child process of server
  //The executable file in the above line should be hello.exe in case of Windows
  var rq = require('request-promise');
  var main = 'http://localhost:5000';

  var openWindow = function(){
    mainWindow = new BrowserWindow({width:800, height: 600 , title: "Electron using flask server"}); //Dimensions of the window
    
    mainWindow.loadURL('http://localhost:5000');
    //mainWindow.webContents.openDevTools(); COmmenting it for the purpose of better UI. Uncomment it tand render the devTools on the screen
    mainWindow.on('closed', function() {
      mainWindow = null;
      child.kill('SIGINT'); //Kill the instance of child process
    });
  };

  var start = function(){
    rq(main)
      .then(function(htmlString){
        console.log('Server has started yo!');
        openWindow(); //Call the openWindow function
      })
      .catch(function(err){
        //console.log('Waiting...');
        start();
      });
  };


  start(); //call the start function
});

