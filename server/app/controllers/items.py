from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from ..models import Items
from .. import db

items_bp=Blueprint("items_blueprint",__name__)
api=Api(items_bp)

items_parser=reqparse.Requestarser()
items_parser.add_argument('seller_name', type=str, required=True, help='name is required')
items_parser.add_argument('description', type=str, required=True, help='description is required')
items_parser.add_argument('item_photo', type=str, required=True, help='item_photo is required')
items_parser.add_argument('seller_photo', type=str, required=True, help='seller_photo is required')
items_parser.add_argument('category', type=str, required=True, help='category is required')
items_parser.add_argument('price', type=str, required=True, help='price is required')

class ListItems(Resource):
    def get(self):
        cart=Items.query.all()
        return jsonify([cart.serialize() for cart in cart])
    def post():
        args=items_parser.parse_args()
        user=Items(**args)
        db.session.add(user)
        db.session.commit()
        return jsonify(user.serialize()),201
class ItemsResource(Resource):
     def get(self, user_id):
        user = Items.query.get_or_404(user_id)
        return jsonify(user.serialize())

     def put(self, user_id):
        args = items_parser.parse_args()
        user = Items.query.get_or_404(user_id)
        for key, value in args.items():
            if value is not None:
                setattr(user, key, value)
        db.session.commit()
        return jsonify(user.serialize())

     def delete(self, user_id):
        user = Items.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return jsonify(message="User deleted successfully")

api.add_resource(ListItems,"/items")    
api.add_resource(ItemsResource,"/items/<int:id>")    