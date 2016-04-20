# Electron
This repo focuses on the functionality of the use of electron - a tool that helps in developing cross-platform desktop based applications. For more details about it and its documentation, visit <a href = "http://electron.atom.io/">here</a><br/><br/>
It contains 2 directories:<br/>
1. local:<br/>
  This directory containes files that do not need the use of server. Just make sure that all the web pages that are being used to make the application have been built properly (with required files and their proper paths set) and just run the index.html file.<br/><br/>
2. server:<br/>
  This directory containes files that need a server (say python flask - the example uses it) to run the files. Make sure that the loading URL and the host and port numbers in the main.js file and python file are the same. <br/><br/>
To run the file:<br/>
Navigate to the directory. Type in:<br/>
npm install && npm start <br/>
For the purpose, I have also uploaded the npm files in the repository. If you clone or download this repository, there is no need for npm install. Just type npm start.<br/><br/>
<b>Important:</b>
The folder 'server' contains a sub-folder 'dynamic_wtforms'. The code 'app.py' enables dynamic addition of form-fields ie. this feature can be very well used in case where the input parameters become dynamic. All the entries that are made get stored in the database 'app.db' from which data can be easily accessed using sqlite. A demo video of the same can be found <a href = "https://drive.google.com/open?id=0BwrSYlOsMCyWMmJ0aEdQR0tfNWs">here.</a><br/>
