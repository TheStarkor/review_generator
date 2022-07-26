from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def status():
    return render_template("index.html")

@app.route('/quiz')
def get_quiz():

    return jsonify({
        "id": 123,
        "text": "awesome",
    })

@app.route('/result', methods=["POST"])
def save_result():
    params = request.get_json()
    print(params)

    return "OK"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=9090)