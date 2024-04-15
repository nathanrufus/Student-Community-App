from .app import create_app
app=create_app()
# from flask import Flask
# from flask_sqlalchemy import SQLAlchemy

# db=SQLAlchemy()
# app=Flask(__name__)
# app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///student_community.db"

# db.init_app(app)


# class Users(db.Model):
#     __tablename__="users"
#     user_id = db.Column(db.String(36), primary_key=True, )
#     name = db.Column(db.String(100))
#     email = db.Column(db.String(100))
#     password = db.Column(db.String(300))
#     number = db.Column(db.String(200))
#     items = db.relationship('Items', backref='user', lazy=False)
#     creditcards = db.relationship('Creditcard', backref='user', uselist=False, lazy=False)
#     carts = db.relationship('Cart', backref='user', lazy=False)
#     payments = db.relationship('Payment', backref='user', lazy=False)

#     def serialize(self):
#         return {
#             "user_id": self.user_id,
#             "name": self.name,
#             "email": self.email,
#             "password": self.password,
#             "number": self.number
#         }

# class Items(db.Model):
#     __tablename__="items"
#     id = db.Column(db.String(36), primary_key=True, )
#     userid = db.Column(db.String(36), db.ForeignKey('users.user_id'))
#     seller_name = db.Column(db.String(400))
#     description = db.Column(db.String(700))
#     category = db.Column(db.String(100))
#     item_photo = db.Column(db.String(255))  
#     seller_photo = db.Column(db.String(255))
#     price = db.Column(db.String(100))

#     def serialize(self):
#         return {
#             "id": self.id,
#             "seller_name": self.seller_name,
#             "description": self.description,
#             "category": self.category,
#             "item_photo": self.item_photo,
#             "seller_photo": self.seller_photo,
#             "price": self.price
#         }

# class Creditcard(db.Model):
#     __tablename__="creditcard"
#     id = db.Column(db.String(36), primary_key=True, )
#     userid = db.Column(db.String(36), db.ForeignKey('users.user_id'))
#     name = db.Column(db.String(100))
#     email = db.Column(db.String(100))
#     password = db.Column(db.String(100))
#     number = db.Column(db.String(100))

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "email": self.email,
#             "password": self.password,
#             "number": self.number
#         }
    
# class Payment(db.Model):
#     __tablename__="payment"
#     id = db.Column(db.String(36), primary_key=True, )  
#     userid = db.Column(db.String(36), db.ForeignKey('users.user_id'))
#     amount = db.Column(db.String(100))
#     number = db.Column(db.String(100))

#     def serialize(self):
#         return {
#             "id": self.id,
#             "amount": self.amount,
#             "number": self.number
#         }

# class Cart(db.Model):
#     __tablename__="cart"
#     id = db.Column(db.String(36), primary_key=True, )
#     userid = db.Column(db.String(36), db.ForeignKey('users.user_id'))
#     cart_id = db.Column(db.String(36), db.ForeignKey('items.id'))
#     name = db.Column(db.String(100))
#     item_photo = db.Column(db.String(255))  
#     seller_photo = db.Column(db.String(255))
#     total_amount = db.Column(db.String(100))
#     price = db.Column(db.String(100))

#     def serialize(self):
#         return {
#             "id": self.id,
#             "name": self.name,
#             "item_photo": self.item_photo,
#             "seller_photo": self.seller_photo,
#             "total_amount": self.total_amount,
#             "price": self.price
#         }


if __name__=="__main__":
    app.run(debug=True)