from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin
app = Flask(__name__, static_folder='frontend/build', static_url_path='')

CORS(app)
@app.route('/api', methods=['GET'])

def index():
    print('getting fetch')
    return {
        'tutorial':'React-Flask-Heroku'
    }

@app.route('/')

def serve():
    return send_from_directory(app.static_folder,'index.html')

if __name__ == '__main__':
    app.run(debug=True)
