from . import db
import base64
import uuid
def generate_uuid():
    return str(uuid.uuid4())

class Users(db.Model):
    __tablename__="users"
    user_id=db.Column(db.String,primary_key=True,default=generate_uuid)
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    password=db.Column(db.String(100))
    number=db.Column(db.String(100))
    items= db.relationship('Items', backref='user', lazy=False)
    creditcards= db.relationship('Creditcard', backref='user', uselist=False, lazy=False)
    carts= db.relationship('Cart', backref='user', lazy=False)
    payments= db.relationship('Payment', backref='user', lazy=False)




    def serialize(self):
        return {
        "user_id":self.user_id,
        "name":self.name,
        "email":self.email,
        "password":self.password,
        "number":self.number
        }

class Items(db.Model):
    __tablename__="items"
    id=db.Column(db.String,primary_key=True,default=generate_uuid)
    userid = db.Column(db.Integer, db.ForeignKey('users.user_id', name="items_user_fk"))
    seller_name=db.Column(db.String(100))
    description=db.Column(db.String(700))
    category=db.Column(db.String(100))
  
    price=db.Column(db.String(100))

    def serialize(self):
        return {
        "id":str(self.id),
        "seller_name":self.seller_name,
        "description":self.description,
        "category":self.category,
        "price": str(self.price)  # Cast price to string
        }

class Creditcard(db.Model):
    __tablename__="creditcard"
    id=db.Column(db.String,primary_key=True,default=generate_uuid)
    userid = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    name=db.Column(db.String(100))
    email=db.Column(db.String(100))
    password=db.Column(db.String(100))
    number=db.Column(db.String(100))

    def serialize(self):
        return {
       "id":self.id,
        "name":self.name,
        "email":self.email,
        "password":self.password,
        "number":self.number,
        }
    
class Payment(db.Model):
    __tablename__="payment"
    id=db.Column(db.String,primary_key=True,default=generate_uuid)  
    userid = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    amount=db.Column(db.String(100))
    number=db.Column(db.String(100))

    def serialize(self):
        return {
        "id":self.id,
        "amount":self.amount,
        "number":self.number,
        }
    

class Cart(db.Model):
    __tablename__="cart"
    id=db.Column(db.String,primary_key=True,default=generate_uuid)
    userid = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    cart_id = db.Column(db.Integer, db.ForeignKey('items.id'))
    name=db.Column(db.String(100))
    item_photo=db.Column(db.LargeBinary)
    seller_photo=db.Column(db.LargeBinary) 
    total_amount=db.Column(db.String(100))
    price=db.Column(db.String(100))

    def serialize(self):
        return {
        "id":self.id,
        "name":self.name,
        "item_photo":base64.b64encode(self.item_photo).decode('utf-8') if self.item_photo else None,
        "seller_photo":base64.b64encode(self.seller_photo).decode('utf-8') if self.seller_photo else None,
        "total_amount":self.total_amount,
        "price":self.price
        }

