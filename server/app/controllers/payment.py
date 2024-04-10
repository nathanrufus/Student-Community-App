from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from ..models import Payment
from .. import db

payment_bp=Blueprint("payment_blueprint",__name__)
api=Api(payment_bp)

payment_parser=reqparse.RequestParser()
payment_parser.add_argument('amount', type=str, required=True, help='amount is required')
payment_parser.add_argument('number', type=str, required=True, help='number is required')

class ListPayment(Resource):
    def get(self):
        cart=Payment.query.all()
        return jsonify([cart.serialize() for cart in cart])
    def post():
        args=payment_parser.parse_args()
        user=Payment(**args)
        db.session.add(user)
        db.session.commit()
        return jsonify(user.serialize()),201
class PaymentResource(Resource):
     def get(self, user_id):
        user = Payment.query.get_or_404(user_id)
        return jsonify(user.serialize())

     def put(self, user_id):
        args = payment_parser.parse_args()
        user = Payment.query.get_or_404(user_id)
        for key, value in args.items():
            if value is not None:
                setattr(user, key, value)
        db.session.commit()
        return jsonify(user.serialize())

     def delete(self, user_id):
        user = Payment.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return jsonify(message="User deleted successfully")

api.add_resource(ListPayment,"/items")    
api.add_resource(PaymentResource,"/items/<int:id>")    