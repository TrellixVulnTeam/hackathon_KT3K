from pymongo import MongoClient
from flask import Flask, json

def insertIntoDB(): 
    uri = "mongodb+srv://admin:admin@hackathon.uj373.mongodb.net/hackathon?retryWrites=true&w=majority"
    client = MongoClient(uri)
    hackathon = client.hackathon
    workoutData = hackathon.workoutData

    emp_rec1 = {
            "name":"Mr.Geek",
            "eid":25,
            "location":"delhi"
            }
    workoutData.insert_one(emp_rec1)


companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"},
              {"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
api = Flask(__name__)

@api.route('/workoutoptions', methods=['GET'])
def get_companies():
  return json.dumps(companies)

if __name__ == '__main__':
    api.run() 