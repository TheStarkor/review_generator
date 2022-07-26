from flask import Flask, render_template, jsonify, request
import time

app = Flask(__name__)

@app.route('/')
def status():
    return render_template("index.html")

@app.route('/start')
def start():
    return str(int(time.time() * 100000))

@app.route('/quiz')
def get_quiz():

    return jsonify([{
        "id": 123,
        "text": "awesome",
    }, {
        "id": 345,
        "text": "okok"
    }])

@app.route('/result', methods=["POST"])
def save_result():
    params = request.get_json()
    print(params)

    return "OK"
    
@app.route('/complete', methods=["POST"])
def complete():
    params = request.get_json()
    print(params)

    return "OK"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9090)