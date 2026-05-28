from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

# =========================
# INITIALIZE APP
# =========================

app = Flask(__name__)

# Enable CORS
CORS(app)

# =========================
# LOAD TRAINED MODEL
# =========================

model = pickle.load(open('mental_health_model.pkl', 'rb'))

# =========================
# HOME ROUTE
# =========================

@app.route('/')
def home():
    return "Mental Health Prediction API Running"

# =========================
# PREDICTION ROUTE
# =========================

@app.route('/predict', methods=['POST'])
def predict():

    try:

        data = request.get_json()

        # =========================
        # GET DATA FROM FRONTEND
        # =========================

        gender = int(data['gender'])
        age = int(data['age'])
        study_year = int(data['study_year'])
        cgpa = int(data['cgpa'])
        anxiety = int(data['anxiety'])
        panic_attack = int(data['panic_attack'])

        # =========================
        # MATCH TRAINING FEATURES
        # =========================

        features = np.array([[
            gender,
            age,
            study_year,
            cgpa,
            0,  # marital_status
            anxiety,
            panic_attack,
            0   # treatment
        ]])

        # =========================
        # MODEL PREDICTION
        # =========================

        prediction = model.predict(features)

        result = (
            "High Mental Health Risk"
            if prediction[0] == 1
            else "Low Mental Health Risk"
        )

        return jsonify({
            "prediction": result
        })

    except Exception as e:

        print("ERROR:", str(e))

        return jsonify({
            "error": str(e)
        })

# =========================
# RUN SERVER
# =========================

if __name__ == '__main__':
    app.run(debug=True)