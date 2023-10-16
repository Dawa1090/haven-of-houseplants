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
        Review.query.delete()
        Coffee.query.delete()
        User.query.delete()
        coffees = []
        used_names = set()
        for _ in range(10):
            name = fake.name()
            if name not in used_names:
                coffees.append(Coffee(name=name))
                used_names.add(name)
        db.session.add_all(coffees)
        db.session.commit()

        users = []
        for _ in range(10):
            users.append(User(username="".join(choices(string.ascii_uppercase, k=5))))
        db.session.add_all(users)
        db.session.commit()

        reviews = []

        for _ in range(10):
            reviews.append(
                Review(
                    text=fake.paragraph(),
                    rating=randint(1,5),
                    user_id=choice(users).id,
                    coffee_id=choice(coffees).id,
                    
                )
            )
        db.session.add_all(reviews)
        db.session.commit()