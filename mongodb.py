from pymongo import MongoClient
from flask import Flask, json, request
from bson.json_util import dumps, loads

def insertWorkoutDataIntoDB(): 
    uri = "mongodb+srv://admin:admin@hackathon.uj373.mongodb.net/hackathon?retryWrites=true&w=majority"
    client = MongoClient(uri)
    hackathon = client.hackathon
    workoutData = hackathon.workoutData

    postWorkoutJSON = open('postWorkoutData.json')
    postWorkoutData = json.load(postWorkoutJSON)
    
    for i in postWorkoutData:
      workoutData.insert_one(i)

    postWorkoutJSON.close()
def insertListOfLoansIntoDB():
  uri = "mongodb+srv://admin:admin@hackathon.uj373.mongodb.net/hackathon?retryWrites=true&w=majority"
  client = MongoClient(uri)
  hackathon = client.hackathon
  listOfLoans = hackathon.loans

  loanJSON = open('listOfLoans.json')
  loans = json.load(loanJSON)
  
  for i in loans:
    listOfLoans.insert_one(i)

  loanJSON.close()

def cleanDB():
  uri = "mongodb+srv://admin:admin@hackathon.uj373.mongodb.net/hackathon?retryWrites=true&w=majority"
  client = MongoClient(uri)
  hackathon = client.hackathon

  hackathon.workoutData.drop()
  hackathon.loans.drop()

companies = [{"id": 1, "name": "Company One"}, {"id": 2, "name": "Company Two"}]
api = Flask(__name__)

@api.route('/test', methods=['GET'])
def get_companies():
  return json.dumps(companies)

@api.route('/workoutoptions', methods=['POST'])
def get_workout():
  uri = "mongodb+srv://admin:admin@hackathon.uj373.mongodb.net/hackathon?retryWrites=true&w=majority"
  client = MongoClient(uri)
  hackathon = client.hackathon
  workoutData = hackathon.workoutData

  _request = json.loads(request.data)

  query = {"workoutSchema" : _request['workoutSchema'],
    "workoutProgramType" : _request['workoutProgramType'],
    "loanIdentifier" : _request['loanIdentifier'],
    "servicerAccountIdentifier" : _request['servicerAccountIdentifier']
  }

  document = workoutData.find(query)
  
  list_current = list(document)
  d = dumps(list_current)

  return d

if __name__ == '__main__':
    ##cleanDB()
    ##insertListOfLoansIntoDB()
    ##insertWorkoutDataIntoDB()
    api.run() 