from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app=Flask(__name__)
db=SQLAlchemy()

app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///student_community.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route("/",methods=['GET'])
def home():
    return "welcome home"


class Users(db.Model):
    __tablename__="users"
    user_id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    password=db.Column(db.String(100))
    photo=db.Column(db.LargeBinary)
    number=db.Column(db.String(100))

class Items(db.Model):
    __tablename__="items"
    id=db.Column(db.Integer(),primary_key=True)
    seller_name=db.Column(db.String(100))
    description=db.Column(db.String(700))
    category=db.Column(db.String(100))
    item_photo=db.Column(db.LargeBinary)
    seller_photo=db.Column(db.LargeBinary)
    price=db.Column(db.String(100))

class Creditcard(db.Model):
    __tablename__="creditcard"
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    password=db.Column(db.String(100))
    number=db.Column(db.String(100))
    
class Payment(db.Model):
    __tablename__="payment"
    id=db.Column(db.Integer(),primary_key=True)  
    amount=db.Column(db.String(100))
    number=db.Column(db.String(100))

class Cart(db.Model):
    __tablename__="cart"
    id=db.Column(db.Integer(),primary_key=True)
    name=db.Column(db.String(100))
    item_photo=db.Column(db.LargeBinary)
    seller_photo=db.Column(db.LargeBinary) 
    total_amount=db.Column(db.String(100))
    price=db.Column(db.String(100))



if __name__=="__main__":
    app.run(debug=True)