from faker import Faker
from random import choice as rc, randint as ri
from app import Users,Payment,Creditcard,Cart,app,db,Items

fake=Faker()

with app.app_context():
    # Users.query.delete()
    # for i in range(20):
    #    result=[]
    #    new_users= Users (
    #     user_id=ri(0,230),
    #     name=fake.name(), 
    #     email=fake.email(),
    #     password=fake.password(),
    #    )
    #    result.append(new_users)
    #    db.session.add_all(result)
    #    db.session.commit()

    # Items.query.delete()
    # for i in range(20):
    #    result=[]
    #    new_users= Items (
    #     id=ri(0,230),
    #     seller_name=fake.name(),
    #     description=fake.sentence(),
    #     item_photo=fake.image(),
    #     seller_photo=fake.image(),
    #     price=ri(200,20000),
    #    )
    #    result.append(new_users)
    #    db.session.add_all(result)
    #    db.session.commit()


    # Creditcard.query.delete()
    # for i in range(20):
    #    result=[]
    #    new_users= Creditcard (
    #     id=ri(230,23001),
    #     name=fake.name(),
    #     email=fake.email(),
    #     password=fake.password(),
    #     number=fake.phone_number(),
    #    )
    #    result.append(new_users)
    #    db.session.add_all(result)
    #    db.session.commit()
 
    # Payment.query.delete()
    # for i in range(20):
    #    result=[]
    #    new_users= Payment (
    #     id=ri(1,100),
    #     userid=ri(101,11001),
    #   #   amount=fake.currency(),
    #     number=fake.phone_number(),
    #    )
    #    result.append(new_users)
    #    db.session.add_all(result)
    #    db.session.commit()
    Cart.query.delete()
    for i in range(20):
       result=[]
       new_users= Cart (
        id=ri(0,230),
        name=fake.name(),
        item_photo=fake.image(),
        seller_photo=fake.image(),
        price=ri(200,20000),
       )
       result.append(new_users)
       db.session.add_all(result)
       db.session.commit()