from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)

model = pickle.load(open('mental_health_model.pkl', 'rb'))

@app.route('/')
def home():
    return "Mental Health Prediction API Running"

@app.route('/predict', methods=['POST'])
def predict():

    try:

        data = request.get_json()

        gender = int(data['gender'])
        age = float(data['age'])

        academic_pressure = float(
            data['academic_pressure']
        )

        cgpa = float(data['cgpa'])

        study_satisfaction = float(
            data['study_satisfaction']
        )

        sleep_duration = int(
            data['sleep_duration']
        )

        dietary_habits = int(
            data['dietary_habits']
        )

        suicidal_thoughts = int(
            data['suicidal_thoughts']
        )

        work_study_hours = float(
            data['work_study_hours']
        )

        financial_stress = float(
            data['financial_stress']
        )

        family_history = int(
            data['family_history']
        )

        features = np.array([[

            gender,
            age,
            academic_pressure,
            cgpa,
            study_satisfaction,
            sleep_duration,
            dietary_habits,
            suicidal_thoughts,
            work_study_hours,
            financial_stress,
            family_history

        ]])

        prediction = model.predict(features)

        result = (
            "High Depression Risk"
            if prediction[0] == 1
            else "Low Depression Risk"
        )

        return jsonify({
            "prediction": result
        })

    except Exception as e:

        print("ERROR:", str(e))

        return jsonify({
            "error": str(e)
        })

if __name__ == "__main__":
    app.run(debug=True)