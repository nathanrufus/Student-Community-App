from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

db=SQLAlchemy()
migrate=Migrate()
def create_app():
    app=Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"]="sqlite:///student_community.db"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    migrate.init_app(app, db)
    
    from .controllers.user import user_bp
    from .controllers.cart import cart_bp
    from .controllers.creditcard_controller import creditcard_bp
    from .controllers.items import items_bp
    from .controllers.payment import payment_bp

    app.register_blueprint(user_bp)
    app.register_blueprint(creditcard_bp)
    app.register_blueprint(cart_bp)
    app.register_blueprint(items_bp)
    app.register_blueprint(payment_bp)



    return app