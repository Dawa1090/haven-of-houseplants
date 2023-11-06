from flask import Flask, make_response, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from models import db, User, Plant, Staff
from flask_cors import CORS
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


app.secret_key = 'DAWA_SHERPA_SECRET_KEY'

db.init_app(app)
bcrypt = Bcrypt(app)
migrate = Migrate(app, db)
CORS(app)


# @app.route('/home')
# def index():
#     return '<h1>Grown with Love</h1'

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
def check_user_session():
    user = User.query.filter(User.id == session.get("user_id")).first()
    if user:
        return user.to_dict(), 200
    else:
        return {"message": "No user logged in"}, 401


@app.route("/logout", methods=["DELETE"])
def logout():
    messages = []
    
    if "user_id" in session:
        session.pop("user_id")
        messages.append("User logged out")
    
    if "staff_id" in session:
        session.pop("staff_id")
        messages.append("Staff logged out")
    
    if messages:
        return {"message": ", ".join(messages)}, 200
    else:
        return {"message": "No session to log out"}, 200
    

# STAFF
# @app.route("/staff", methods=["GET"])
# def staff_route():
#     user_role = session.get("staff_id")
#     if user_role == "staff":
#         # Allow staff to access this route
#         return {"message": "Welcome, staff!"}, 200
#     else:
#         return {"error": "Access denied"}, 403 

# @app.route("/staff/register", methods=["POST"])
# def staff_register():
#     data = request.json
#     username = data.get("username")
#     password = data.get("password")

#     # Check if a staff member with the same username already exists
#     existing_staff = Staff.query.filter_by(username=username).first()

#     if existing_staff:
#         return jsonify({"error": "Username already taken"}), 400

#     staff = Staff(username=username, password=password)
#     db.session.add(staff)
#     db.session.commit()

#     return jsonify({"message": "Staff registered successfully"}), 201



@app.route("/staff/login", methods=["POST"])
def staff_login():
    data = request.json
    print("debug")
    print(data)

    staffname = data.get("staffname")
    password = data.get("password")

    staff = Staff.query.filter_by(staffname=staffname).first()

    if staff and bcrypt.check_password_hash(staff.password, password):
        session["staff_id"] = staff.id
        return staff.to_dict(), 200
    else:
        return {"error": "Invalid staffname or password"}, 401
    
@app.route("/check_staff_session", methods=["GET"])
def check_staff_session():
    staff = Staff.query.filter(Staff.id == session.get("staff_id")).first()
    if staff:
        return staff.to_dict(), 200
    else:
        return {"message": "No user logged in"}, 401


#@app.route("/staff/logout", methods=["DELETE"])
#def logout():
#     session.pop("staff_id")
#     return {"message": "Logged out"}, 200
    



# PLANT

@app.route("/plants", methods=["GET"])
def get_plants():
    plants = Plant.query.all()
    data = [plant.to_dict() for plant in plants]
    return make_response(jsonify(data), 200)

@app.route("/plants/<int:id>", methods=["GET"])
def get_plant_by_id(id: int):
    plant = Plant.query.filter(Plant.id == id).first()
    if not plant:
        return make_response(jsonify({"error": "Plant not found"}), 404)
    return make_response(jsonify(plant.to_dict()), 200)

@app.route("/plants", methods=["POST"])
def post_plants():
    data = request.json
    try:
        plant = Plant(name=data.get("name"), image=data.get("image"), price=data.get("price")) 
        db.session.add(plant)
        db.session.commit()
        return make_response(jsonify(plant.to_dict()), 201)
    except Exception as e:
        print(e)
        return make_response(jsonify({"error": "Invalid plant data: " + str(e)}), 405)
    

@app.patch("/plants/<int:id>")
def patch_plant(id: int):
    plant = Plant.query.filter(Plant.id == id).first()
    if not plant:
        return make_response(jsonify({"error": f"id {id} not found"}), 404)
    request_data = request.get_json()
    for key in request_data:
        setattr(plant, key, request_data[key])
    db.session.add(plant)
    db.session.commit()
    return make_response(jsonify(plant.to_dict()), 200)

@app.delete("/plants/<int:id>")
def delete_plant(id: int):
    plant = Plant.query.filter(Plant.id == id).first()
    if not plant:
        return make_response(jsonify({"error":f"id {id} not found"}), 404)
    db.session.delete(plant)
    db.session.commit()

    return make_response(jsonify({}), 200)





if __name__ == '__main__':
    app.run(port=5555, debug=True)
