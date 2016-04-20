# Dynamic Flask Form
The code 'app.py' enables dynamic addition of form-fields ie. this feature can be very well used in case where the input parameters become dynamic. All the entries that are made get stored in the database 'app.db' from which data can be easily accessed using sqlite. A demo video of the same can be found <a href = "https://drive.google.com/open?id=0BwrSYlOsMCyWMmJ0aEdQR0tfNWs">here.</a><br/><br/><br/>
To run:<br/>
1. pip install -r requirements.txt<br/>
Make sure you have all the installed dependencies<br/>
2. Open your terminal and navigate to current directory.<br/>
3. a : To run it using flask server:<br/>
   i. python app.py<br/>
   ii. Point your browser to '127.0.0.1:5000'<br/>
   b: To run it using electron:<br/>
   i. npm install && start<br/>
An important point to note is 'node integration : false' in the browserWindow options in main.js. This ensures that jquery works properly. (This already has been done in the code)<br/>
   
