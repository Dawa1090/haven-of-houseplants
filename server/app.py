#!/usr/bin/env python3

from flask import Flask, make_response, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from models import db, Coffee, Review, User  

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)




@app.route('/')
def index():
    return '<h1>Caffine Connect</h1>'

@app.get("/coffees")
def get_coffees():
    coffees = Coffee.query.all()
    data = [coffee.to_dict() for coffee in coffees]
    return make_response(jsonify(data), 200)



if __name__ == '__main__':
    app.run(port=5555, debug=True)

