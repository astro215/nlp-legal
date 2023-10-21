from flask import Flask, request, jsonify
from gradio_client import Client
from flask_cors import CORS, cross_origin

import logging

app = Flask(__name__)
cors = CORS(app)

logging.basicConfig(level=logging.DEBUG)  

# Define the Gradio API endpoint
gradio_api_url = "https://astro21-test-2.hf.space/--replicas/ksr7q/"

# Function to summarize a file using the Gradio API
def summarize_file_with_gradio(file_content):
    try:
        client = Client(gradio_api_url)
        result = client.predict([file_content], api_name="/predict")
        app.logger.info(result)

        if result is not None:
            # summarized_text = result[0]
            # app.logger.info(summarized_text)
            return {"summary": result}
        else:
            return {"error": "Gradio API request failed"}
    except Exception as e:
        return {"error": str(e)}

# Define a route to handle summarization requests
@app.route('/summarize', methods=['GET' , 'POST'])
def summarize_text():
    if request.method == 'POST':
        data = request.get_json()
        app.logger.info(data)
        file_content = data.get('file_content')
        # app.logger.info(file_content)
        result = summarize_file_with_gradio(file_content)
        return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True , host='10.24.94.22')
