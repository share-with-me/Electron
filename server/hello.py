from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello from the other side! :D . Well, this is an output from the server running on localhost at port no. 5000"

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000)