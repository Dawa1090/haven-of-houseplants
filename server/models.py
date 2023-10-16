from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

db = SQLAlchemy()

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "user_table"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)

    coffees = db.relationship("Coffee", back_populates="user")
    reviews = association_proxy("coffees", "review")


'''
user>- userCoffee -<coffee

'''
class Coffee(db.Model, SerializerMixin):
    __tablename__ = "coffee_table"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    review_id = db.Column(db.Integer, db.ForeignKey("review_table.id"))

    user = db.relationship("User", back_populates="coffees")
    review = db.relationship("Review", back_populates = "coffees")






class Review(db.Model, SerializerMixin):
    __tablename__ = "review_table"

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    
    coffees = db.relationship("Coffee", back_populates="review")
    users = association_proxy("coffees", "user")


