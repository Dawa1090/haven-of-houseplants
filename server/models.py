from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

db = SQLAlchemy()

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "user_table"

    serialize_rules = ("-reviews.user",)

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String)


    reviews = db.relationship("Review", back_populates="user")
    coffees = association_proxy("reviews", "coffee")




class Coffee(db.Model, SerializerMixin):
    __tablename__ = "coffee_table"

    serialize_rules = ("-reviews.coffee",)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)

    reviews = db.relationship("Review", back_populates="coffee")
    users = association_proxy("reviews", "user")



class Review(db.Model, SerializerMixin):
    __tablename__ = "review_table"

    serialize_rules = ("-user.reviews","-coffee.reviews")

    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user_table.id"))
    coffee_id = db.Column(db.Integer, db.ForeignKey("coffee_table.id"))
    

    user = db.relationship("User", back_populates="reviews")
    coffee = db.relationship("Coffee", back_populates="reviews")


