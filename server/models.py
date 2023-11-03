from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from flask_bcrypt import Bcrypt

from config import db
bcrypt = Bcrypt()

db = SQLAlchemy()

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = "user_table"


    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String)
    role = db.Column(db.String, default="customer") 


class Plant(db.Model, SerializerMixin):
    __tablename__ = "plant_table"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    image = db.Column(db.String)
    price = db.Column(db.Float)

class Staff(db.Model, SerializerMixin):
    __tablename__ = "staff_table"

    id = db.Column(db.Integer, primary_key=True)
    staffname = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    role = db.Column(db.String, default="staff") 

    # def __init__(self, staffname, password):
    #     self.staffname = staffname
    #     self.password = bcrypt.generate_password_hash(password).decode('utf-8')
