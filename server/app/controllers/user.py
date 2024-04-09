from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from ..models import Users
from .. import db

user_bp = Blueprint('user_blueprint', __name__)
api = Api(user_bp)

# Request parser for user data
user_parser = reqparse.RequestParser()
user_parser.add_argument('name', type=str, required=True, help='name is required')
user_parser.add_argument('email', type=str, required=True, help='email is required')
user_parser.add_argument('password', type=str, required=True, help='password is required')
user_parser.add_argument('photo', type=str, required=True, help='photo is required')  # Assuming photo is a base64 encoded string
user_parser.add_argument('number', type=str, required=True, help='number is required')


class UserResource(Resource):
    def get(self, user_id):
        user = Users.query.get_or_404(user_id)
        return jsonify(user.serialize())

    def put(self, user_id):
        args = user_parser.parse_args()
        user = Users.query.get_or_404(user_id)
        for key, value in args.items():
            if value is not None:
                setattr(user, key, value)
        db.session.commit()
        return jsonify(user.serialize())

    def delete(self, user_id):
        user = Users.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return jsonify(message="User deleted successfully")


class UserListResource(Resource):
    def get(self):
        users = Users.query.all()
        return jsonify([user.serialize() for user in users])

    def post(self):
        args = user_parser.parse_args()
        user = Users(**args)
        db.session.add(user)
        db.session.commit()
        return jsonify(user.serialize()), 201


# Adding resources to API
api.add_resource(UserListResource, '/users')
api.add_resource(UserResource, '/users/<int:user_id>')

