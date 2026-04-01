from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

# ---------------- WEATHER ----------------
def get_weather():
    weather_list = [
        "Sunny ☀️ - Good for irrigation",
        "Rain Expected 🌧️ - Avoid watering",
        "Cloudy ☁️ - Monitor crop health",
        "Windy 🌬️ - Protect crops",
        "Humid 🌫️ - Risk of pests"
    ]
    return random.choice(weather_list)

# ---------------- CHAT STORAGE ----------------
messages = []

# ---------------- ROUTES ----------------
@app.route('/')
def home():
    return render_template("frontend.html")

@app.route('/otp')
def otp():
    return render_template("otp.html")

@app.route('/farmer')
def farmer():
    return render_template("farmer.html")

@app.route('/dashboard')
def dashboard():
    weather = get_weather()
    return render_template("dashboard.html", weather=weather)

# ---------------- CHAT APIs ----------------
@app.route('/send_message', methods=['POST'])
def send_message():
    msg = request.form.get('message')
    if msg:
        messages.append(msg)
    return jsonify({"status": "ok"})

@app.route('/get_messages')
def get_messages():
    return jsonify(messages)

# ---------------- RUN ----------------
if __name__ == "__main__":
    app.run(debug=True)
