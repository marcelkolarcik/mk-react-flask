from pprint import pprint

from flask import Blueprint, send_from_directory, jsonify, request

from settings import mongo

api_bp = Blueprint('api_bp', __name__,
                   static_folder='static',
                   static_url_path='assets/api',
                   template_folder='templates')


@api_bp.route('index/')
def index():
    return send_from_directory(
        'frontend/build', 'index.html')


@api_bp.route('rooms/', methods=['GET'])
def rooms():
    try:
        _rooms = list(mongo.db.listingsAndReviews.find({},
                                                       {'name': 1,
                                                        'summary': 1,
                                                        'space': 1,
                                                        'description': 1,
                                                        'reviews': 1,
                                                        'images': 1,
                                                        'price': {"$toString": "$price"},
                                                        '_id': {"$toString": "$_id"}}).limit(20))

        return jsonify(rooms=_rooms)
    except Exception as e:
        pprint(e)
        return jsonify(rooms=[])


@api_bp.route('add_user/', methods=['POST'])
def add_user():
    try:

        user = request.get_json()
        pprint(user)
        mongo.db.users.insert_one(user)

        return jsonify(response='success')
    except Exception as e:
        pprint(e)
        return jsonify(response='error')


@api_bp.route('user/<user_id>')
def get_user(user_id):
    try:
        user = mongo.db.users.find_one({'uid': user_id})
        pprint(f"user {user}")
        return jsonify(name=user['name'], email=user['email'])
    except Exception as e:
        pprint(e)
        return {}
