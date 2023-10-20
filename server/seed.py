
from app import app
from models import db  
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
        coffee_data = [
            {"name": "Espresso", "image_url": "https://www.acouplecooks.com/wp-content/uploads/2020/09/Latte-Art-066s.jpg"},
            {"name": "Latte", "image_url": "https://sprudge.com/wp-content/uploads/2016/04/Sprudge-ObjetoEncontrado-JulianaGanan-Sprudge-ObjetoEncontrado-JulianaGanan-BSB_Coffee_Shops_Guide_objeto_latte_art_Lucas_Hamu_01.jpg"},
            {"name": "Cappuccino", "image_url": "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2021/Italian%20Cappuccino.jpg.jpeg?itok=0WxeK4V7"},
            {"name": "Americano", "image_url": "https://www.cleaneatingkitchen.com/wp-content/uploads/2022/07/espresso-americano-over-ice-with-straw.jpg"},
            {"name": "Mocha", "image_url": "https://athome.starbucks.com/sites/default/files/2021-06/1_CAH_CaffeMocha_Hdr_2880x16602.jpg"},
            {"name": "Macchiato", "image_url": "https://fandbrecipes.com/wp-content/uploads/2022/07/Espresso-Macchiato_Step-By-Step-Recipe.png"},
            {"name": "Irish Coffee", "image_url": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/02/Irish-Coffee-3.jpg"},
            {"name": "Affogato", "image_url": "https://www.siftandsimmer.com/wp-content/uploads/2021/11/affogato2.jpg"},
            {"name": "Flat White", "image_url": "https://images.immediate.co.uk/production/volatile/sites/2/2021/11/Flat-White-d195a5f.png?quality=90&resize=556,505"},
            {"name": "Turkish Coffee", "image_url": "https://foolproofliving.com/wp-content/uploads/2019/03/Turkish-Coffee-Recipe-600x600.jpg"}
            
        ]
        for coffee_info in coffee_data:
            coffee = Coffee(name=coffee_info["name"], image_url=coffee_info["image_url"])
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


