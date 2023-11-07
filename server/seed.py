
from app import app
from faker import Faker
from random import randint, choice, choices
from models import db, User, Plant, Staff
from flask_bcrypt import Bcrypt

fake = Faker()
bcrypt = Bcrypt(app)

if __name__ == "__main__":
    with app.app_context():
        User.query.delete()
        Plant.query.delete()
        Staff.query.delete()
        
        users = []
        usernames = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Hannah", "Ivy", "Jack"]
        for username in usernames:
            user = User(username=username)
            users.append(user)
        
        db.session.add_all(users)
        db.session.commit()

        # plants = []
        # plant_data = [
        #     {"name": "Spider Plant", "image": "https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg", "price": 15.99, "discounted_price":10.99},
        #     {"name": "Snake Plant","image": "https://d3gkbidvk2xej.cloudfront.net/images/products/77a60682-9128-4980-bdf6-a0ee46c97e71/s/snake-plant-laurentii-white-mid-century-ceramic.jpeg?version=1654866934.25190019800","price": 25.98, "discounted_price":20.50 },
        #     {"name": "Pothos","image": "https://fleuressence.ca/cdn/shop/files/Pothos-Golden-Fleuressence-313.jpg?v=1685453762","price": 5.99,"discounted_price": 3.99 },
        #     {"name": "Peace Lily","image": "https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg","price": 12.11, "discounted_price": 10.34},
        #     {"name": "ZZ Plant","image": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202343/0098/faux-potted-zz-plant-o.jpg","price": 10.37},
        #     {"name": "Fiddle Leaf Fig","image": "https://d3gkbidvk2xej.cloudfront.net/images/products/bb6076fa-2dbc-42cc-a9f0-e5cf30aef024/s/fiddle-leaf-fig-bush-white-mid-century-ceramic-black-wood-stand.jpeg?version=1656084975.30690019800","price": 25.99},
        #     {"name": "Rubber Plant","image": "https://abeautifulmess.com/wp-content/uploads/2023/06/rubbertree-1.jpg","price": 55},
        #     {"name": "Aloe Vera","image": "https://lagreentouch.fr/cdn/shop/articles/quel-entretien-pour-un-aloe-vera-875968.jpg?crop=center&height=1200&v=1693387378&width=1200","price": 12},
        #     {"name": "Chinese Evergreen","image": "https://www.gardendesign.com/pictures/images/900x705Max/site_3/chinese-evergreen-plant-aglaonema-shutterstock-com_15962.jpg","price": 19},
        #     {"name": "Boston Fern","image": "https://s7d1.scene7.com/is/image/terrain/58122755_000_a?$zoom2$","price": 50}
        # ]
        # for plant_info in plant_data:
        #     discounted_price = plant_info.get("discounted_price") 
        #     plant = Plant(name=plant_info["name"], image=plant_info["image"], price=plant_info["price"], discounted_price=plant_info["discounted_price"])
        #     plants.append(plant)
        
        # db.session.add_all(plants)
        # db.session.commit()


        plants = []
        plant_data = [
            {"name": "Spider Plant", "image": "https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg", "price": 15.99, "discounted_price": 10.99},
            {"name": "Snake Plant", "image": "https://d3gkbidvk2xej.cloudfront.net/images/products/77a60682-9128-4980-bdf6-a0ee46c97e71/s/snake-plant-laurentii-white-mid-century-ceramic.jpeg?version=1654866934.25190019800", "price": 25.98, "discounted_price": 20.50},
            {"name": "Pothos", "image": "https://fleuressence.ca/cdn/shop/files/Pothos-Golden-Fleuressence-313.jpg?v=1685453762", "price": 5.99, "discounted_price": 3.99},
            {"name": "Peace Lily", "image": "https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg", "price": 12.11, "discounted_price": 10.34},
            {"name": "ZZ Plant", "image": "https://assets.weimgs.com/weimgs/rk/images/wcm/products/202343/0098/faux-potted-zz-plant-o.jpg", "price": 10.37},
            {"name": "Fiddle Leaf Fig", "image": "https://d3gkbidvk2xej.cloudfront.net/images/products/bb6076fa-2dbc-42cc-a9f0-e5cf30aef024/s/fiddle-leaf-fig-bush-white-mid-century-ceramic-black-wood-stand.jpeg?version=1656084975.30690019800", "price": 25.99},
            {"name": "Rubber Plant", "image": "https://abeautifulmess.com/wp-content/uploads/2023/06/rubbertree-1.jpg", "price": 55},
            {"name": "Aloe Vera", "image": "https://lagreentouch.fr/cdn/shop/articles/quel-entretien-pour-un-aloe-vera-875968.jpg?crop=center&height=1200&v=1693387378&width=1200", "price": 12},
            {"name": "Chinese Evergreen", "image": "https://www.gardendesign.com/pictures/images/900x705Max/site_3/chinese-evergreen-plant-aglaonema-shutterstock-com_15962.jpg", "price": 19},
            {"name": "Boston Fern", "image": "https://s7d1.scene7.com/is/image/terrain/58122755_000_a?$zoom2$", "price": 50}
        ]

        for plant_info in plant_data:
            discounted_price = plant_info.get("discounted_price")  
            plant = Plant(name=plant_info["name"], image=plant_info["image"], price=plant_info["price"], discounted_price=discounted_price)
            plants.append(plant)

            db.session.add_all(plants)
            db.session.commit()










    

        # staffs = []
        # staffnames = ["Staff1"]
        # # for staffname in staffnames:
        # #     staff = Staff(staffname="staff", password=bcrypt.generate_password_hash('p').decode('utf-8'))  # Use staffname from the loop variable
        # #     staffs.append(staff)

        # # db.session.add_all(staffs)
        # # db.session.commit()
        

        staffs = [{"staffname": "staff"}]  # List with a single staff member

        for staff_data in staffs:

            staffname = staff_data["staffname"]
            password = "p"
            
            hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')  # Hash the password

            # Create a Staff instance with the staffname and hashed password
            staff = Staff(staffname=staffname, password=hashed_password)

            # Add the staff member to the database and commit the changes
            db.session.add(staff)
            db.session.commit()






