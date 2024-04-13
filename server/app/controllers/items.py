from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from ..models import Items
from .. import db
from flask_jwt_extended import jwt_required, get_jwt_identity

items_bp = Blueprint("items_blueprint", __name__)
api = Api(items_bp)

items_parser = reqparse.RequestParser()
items_parser.add_argument('seller_name', type=str, required=True, help='name is required')
items_parser.add_argument('description', type=str, required=True, help='description is required')
items_parser.add_argument('item_photo', type=str, required=False, help='item_photo is required')
items_parser.add_argument('seller_photo', type=str, required=False, help='seller_photo is required')
items_parser.add_argument('category', type=str, required=False, help='category is required')
items_parser.add_argument('price', type=str, required=True, help='price is required')

class ListItems(Resource):
    def get(self):
        items = Items.query.all()
        return jsonify([item.serialize() for item in items])

    @jwt_required()
    def post(self):
        args = items_parser.parse_args()
        current_user_id = get_jwt_identity()
        item = Items(id=current_user_id, **args)
        db.session.add(item)
        db.session.commit()
        return jsonify(item.serialize()), 201

class ItemsResource(Resource):
    @jwt_required()
    def get(self):
        current_user_id = get_jwt_identity()
        items = Items.query.filter_by(id=current_user_id).all()
        return jsonify([item.serialize() for item in items])

    @jwt_required()
    def put(self):
        args = items_parser.parse_args()
        current_user_id = get_jwt_identity()
        item = Items.query.filter_by(id=current_user_id).first()
        if item:
            for key, value in args.items():
                setattr(item, key, value)
            db.session.commit()
            return jsonify(item.serialize())
        return jsonify({"message": "Item not found"}), 404

    @jwt_required()
    def delete(self):
        current_user_id = get_jwt_identity()
        item = Items.query.filter_by(id=current_user_id).first()
        if item:
            db.session.delete(item)
            db.session.commit()
            return jsonify({"message": "Item deleted successfully"})
        return jsonify({"message": "Item not found"}), 404

api.add_resource(ListItems, "/items")
api.add_resource(ItemsResource, "/singleitem")
