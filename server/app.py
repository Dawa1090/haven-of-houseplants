#!/usr/bin/env python3
from flask import Flask, make_response, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from models import db, Coffee, Review, User

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)

@app.route('/home')
def index():
    return '<h1>Caffeine Connect</h1'

@app.route("/users", methods=["POST"])
def create_user():
    json = request.json

    password = bcrypt.generate_password_hash(json["password"]).decode("utf-8")

    new_user = User(username=json["username"], password=password)
    db.session.add(new_user)
    db.session.commit()
    session["user_id"] = new_user.id
    return new_user.to_dict(), 201

# SESSION LOGIN/LOGOUT#

@app.route("/login", methods=["POST"])
def login():
    json = request.json
    user = User.query.filter(User.username == json["username"]).first()

    if user and bcrypt.check_password_hash(user.password, json["password"]):
        session["user_id"] = user.id
        return user.to_dict(), 200
    else:
        return {"error": "Invalid username or password"}, 401

@app.route("/check_session", methods=["GET"])
def check_session():
    user = User.query.filter(User.id == session.get("user_id")).first()
    if user:
        return user.to_dict(), 200
    else:
        return {"message": "No user logged in"}, 401

@app.route("/logout", methods=["DELETE"])
def logout():
    session.pop("user_id")
    return {"message": "Logged out"}, 200

# COFFEE

@app.route("/coffees", methods=["GET"])
def get_coffees():
    coffees = Coffee.query.all()
    data = [coffee.to_dict() for coffee in coffees]
    return make_response(jsonify(data), 200)

@app.get("/coffees/<int:id>")
def get_coffee_by_id(id: int):
    coffee = Coffee.query.filter(Coffee.id == id).first()
    if not coffee:
        make_response(jsonify({"error": "no right"}), 404)
    return make_response(jsonify(coffee.to_dict()), 200)

# REVIEW

@app.get("/reviews")
def get_reviews():
    reviews = Review.query.all()
    data = [review.to_dict() for review in reviews]
    return make_response(jsonify(data), 200)


@app.get("/reviews/<int:id>")
def get_reviews_by_id(id: int):
    review = Review.query.filter(Review.id == id).first()
    if not review:
        make_response(jsonify({"error": "no right"}), 404)
    return make_response(jsonify(review.to_dict()), 200)

@app.post("/reviews")
def post_reviews():
    data = request.json
    try:
        review = Review(column=data.get("column"))
        db.session.add(review)
        db.session.commit()
        return make_response(jsonify(review.to_dict()), 201)
    except Exception as e:
        print(e)
        return make_response(jsonify({"error": "invalid review" + str(e)}), 405)
    
@app.patch("/reviews/<int:id>")
def patch_review(id: int):
    review = Review.query.filter(Review.id == id).first()
    if not review:
        return make_response(jsonify({"error": f"id {id} not found"}), 404)
    request_data = request.get_json()
    for key in request_data:
        setattr(review, key, request_data[key])
    db.session.add(review)
    db.session.commit()
    return make_response(jsonify(review.to_dict(rules=("-left", "-right"))), 200)

@app.delete("/reviews/<int:id>")
def delete_review(id: int):
    review = Review.query.filter(Review.id == id).first()
    if not review:
        return make_response(jsonify({"error":f"id {id} not found"}), 404)
    db.session.delete(review)
    db.session.commit()

    return make_response(jsonify({}), 200)







if __name__ == '__main__':
    app.run(port=5555, debug=True)
