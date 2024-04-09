from flask import Blueprint, jsonify
from flask_restful import Api, Resource, reqparse
from ..models import Creditcard
from .. import db


creditcard_bp = Blueprint('creditcard_blueprint', __name__)
api = Api(creditcard_bp)

# Request parser for creditcard data
creditcard_parser = reqparse.RequestParser()
creditcard_parser.add_argument('name', type=str, required=True, help='name is required')
creditcard_parser.add_argument('email', type=str, required=True, help='email is required')
creditcard_parser.add_argument('password', type=str, required=True, help='password is required')
creditcard_parser.add_argument('number', type=str, required=True, help='number is required')

class CreditcardResource(Resource):
    def get(self, creditcard_id):
        creditcard = Creditcard.query.get_or_404(creditcard_id)
        return jsonify(creditcard.serialize())

    def put(self, creditcard_id):
        args = creditcard_parser.parse_args()
        creditcard = Creditcard.query.get_or_404(creditcard_id)
        for key, value in args.items():
            if value is not None:
                setattr(creditcard, key, value)
        db.session.commit()
        return jsonify(creditcard.serialize())

    def delete(self, creditcard_id):
        creditcard = Creditcard.query.get_or_404(creditcard_id)
        db.session.delete(creditcard)
        db.session.commit()
        return jsonify(message="Credit card deleted successfully")


class CreditcardListResource(Resource):
    def get(self):
        creditcards = Creditcard.query.all()
        return jsonify([creditcard.serialize() for creditcard in creditcards])

    def post(self):
        args = creditcard_parser.parse_args()
        creditcard = Creditcard(**args)
        db.session.add(creditcard)
        db.session.commit()
        return jsonify(creditcard.serialize()), 201

# Adding resources to API
api.add_resource(CreditcardListResource, '/creditcards')
api.add_resource(CreditcardResource, '/creditcards/<int:creditcard_id>')
