#!/usr/bin/env python3

from app import app
from models import db  # models go here
from faker import Faker
from random import randint, choice, choices
from models import Coffee, User, Review
import string

fake = Faker()

if __name__ == "__main__":
    with app.app_context():
        User.query.delete()
        Coffee.query.delete()
        Review.query.delete()

        users = []
        usernames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"]
        for username in usernames:
            user = User(username=username)
            users.append(user)
        
        db.session.add_all(users)
        db.session.commit()

        coffees = []
        coffee_names = ["Espresso", "Latte", "Cappuccino", "Americano", "Mocha", "Macchiato", "Irish Coffee", "Affogato", "Flat White", "Turkish Coffee"]
        for coffee_name in coffee_names:
            coffee = Coffee(name=coffee_name)
            coffees.append(coffee)
        
        db.session.add_all(coffees)
        db.session.commit()

        

        reviews = []
        reviews_data = [
            {"text": "Great coffee!", "rating": 5},
            {"text": "Love!", "rating": 4},
            {"text": "Not so good.", "rating": 2},
            {"text": "Average coffee.", "rating": 3},
            {"text": "Could be better.", "rating": 2},
            {"text": "Amazing coffee!", "rating": 5},
            {"text": "Terrible.", "rating": 1},
            {"text": "Delicious coffee.", "rating": 4},
            {"text": "Perfect espresso.", "rating": 5},
            {"text": "Decent cappuccino.", "rating": 3},
        ]

        for data in reviews_data:
            review = Review(
                text=data["text"],
                rating=data["rating"],
                user_id=choice(users).id,
                coffee_id=choice(coffees).id,
            )
            reviews.append(review)
        
        db.session.add_all(reviews)
        db.session.commit()
