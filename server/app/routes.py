from flask import Blueprint
bp = Blueprint('bp', __name__)



@bp.route("/",methods=['GET'])
def home():
    return "welcome home"