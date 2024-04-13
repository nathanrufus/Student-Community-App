from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from flask_jwt_extended import create_access_token
from ..models import Users
from .. import db
import bcrypt

auth_bp = Blueprint("auth_blueprint", __name__)
api = Api(auth_bp)

class SignUpResource(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('name', type=str, required=True, help='Name is required')
        parser.add_argument('email', type=str, required=True, help='Email is required')
        parser.add_argument('password', type=str, required=True, help='Password is required')
        args = parser.parse_args()
        
        name = args['name']
        email = args['email']
        password = args['password']
        
        if Users.query.filter_by(name=name).first():
            return {'message': 'User already exists'}, 400
        
        # Hashing the password before storing it
        hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

        new_user = Users(name=name, email=email, password=hashed_password)
        db.session.add(new_user)
        db.session.commit()
        
        return {'message': 'User created successfully'}, 201

class SignInResource(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str, required=True, help='Email is required')
        parser.add_argument('password', type=str, required=True, help='Password is required')
        args = parser.parse_args()
        
        email = args['email']
        password = args['password']
        
        user = Users.query.filter_by(email=email).first()
        
        # Checking if user exists and verifying the hashed password
        if user and bcrypt.checkpw(password.encode('utf-8'), user.password):
            # Generating access token
            access_token = create_access_token(identity=user.user_id)
            return {'access_token': access_token}, 200
        else:
            return {'message': 'Invalid credentials'}, 401

# Adding resources to the API
api.add_resource(SignUpResource, '/signup')
api.add_resource(SignInResource, '/signin')
