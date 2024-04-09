from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from ..models import Cart
from .. import db

cart_bp=Blueprint("cart_blueprint",__name__)
api=Api(cart_bp)

cart_parser=reqparse.Requestarser()
cart_parser.add_argument('name', type=str, required=True, help='name is required')
cart_parser.add_argument('item_photo', type=str, required=True, help='item_photo is required')
cart_parser.add_argument('seller_photo', type=str, required=True, help='seller_photo is required')
cart_parser.add_argument('total_amount', type=str, required=True, help='total_amount is required')
cart_parser.add_argument('price', type=str, required=True, help='price is required')

class ListCart(Resource):
    def get(self):
        cart=Cart.query.all()
        return jsonify([cart.serialize() for cart in cart])
    def post():
        args=cart_parser.parse_args()
        user=Cart(**args)
        db.session.add(user)
        db.session.commit()
        return jsonify(user.serialize()),201
class CartResource(Resource):
     def get(self, user_id):
        user = Cart.query.get_or_404(user_id)
        return jsonify(user.serialize())

     def put(self, user_id):
        args = cart_parser.parse_args()
        user = Cart.query.get_or_404(user_id)
        for key, value in args.items():
            if value is not None:
                setattr(user, key, value)
        db.session.commit()
        return jsonify(user.serialize())

     def delete(self, user_id):
        user = Cart.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return jsonify(message="User deleted successfully")

api.add_resource(ListCart,"/cart")    
api.add_resource(CartResource,"/cart/<int:id>")    