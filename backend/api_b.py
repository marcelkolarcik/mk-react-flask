import random
from pprint import pprint
from traceback import format_exc

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
        limit = 20
        if request.values and 'map' in request.values:
            limit = 500
        _rooms = list(mongo.db.listingsAndReviews.find({},
                                                       {'name': 1,
                                                        'summary': 1,
                                                        'price': {"$toString": "$price"},
                                                        'space': 1,
                                                        'description': 1,
                                                        'reviews': 1,
                                                        'images': 1,
                                                        'accommodates': 1,
                                                        'bedrooms': 1,
                                                        'beds': 1,
                                                        'coordinates':'$address.location.coordinates',
                                                        '_id': {"$toString": "$_id"}}).skip(
            random.randint(1, 2000)).limit(limit))

        return jsonify(rooms=_rooms)
    except Exception as e:
        pprint(e)
        return jsonify(rooms=[])


@api_bp.route('add_user/', methods=['POST'])
def add_user():
    try:

        user = request.get_json()

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


@api_bp.route('get_room/<room_id>/')
def get_room(room_id):
    try:
        room = mongo.db.listingsAndReviews.find_one(
            {'_id': room_id}
        )
        # mongoDB decimal128 is not jsonifyable so converting to float
        for field in ['bathrooms', 'price', 'weekly_price', 'monthly_price', 'cleaning_fee', 'extra_people',
                      'security_deposit',
                      'guests_included']:
            if field in room:
                room[field] = str(room[field])
            else:
                room[field] = '0'

        room['amenities'] = list(set(room['amenities']))
        return jsonify(room=room)
    except Exception as e:
        pprint(format_exc())
        return jsonify(room={})


@api_bp.route('search/', methods=['POST'])
def search():
    try:
        form_data = request.get_json()

        country = form_data['country']
        guests = form_data['guests']
        nights = form_data['nights']
        pprint(form_data)
        results = list(mongo.db.listingsAndReviews.find(
            {'address.country': country,
             'accommodates': {"$gte": guests},
             # 'minimum_nights': {"$gte": nights}
             },
            {'name': 1,
             'summary': 1,
             'price': {"$toString": "$price"},
             'space': 1,
             'description': 1,
             'reviews': 1,
             'images': 1,
             'accommodates': 1,
             'bedrooms': 1,
             'beds': 1,
             'address': 1,
             '_id': {"$toString": "$_id"}}
        ).limit(20))



        return jsonify(results=results)
    except Exception as e:
        pprint(format_exc())
        return jsonify(results=[])
