from pymongo import MongoClient
from flask import Flask, json

def insertIntoDB(): 
    uri = "mongodb+srv://admin:admin@hackathon.uj373.mongodb.net/hackathon?retryWrites=true&w=majority"
    client = MongoClient(uri)
    hackathon = client.hackathon
    workoutData = hackathon.workoutData

    postWorkoutJSON = open('postWorkoutData.json')
    postWorkoutData = json.load(postWorkoutJSON)
    
    for i in postWorkoutData:
      workoutData.insert_one(i)

    postWorkoutJSON.close()

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
    ##insertIntoDB()
    api.run() 