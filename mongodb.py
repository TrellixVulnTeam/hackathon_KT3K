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

api = Flask(__name__)

@api.route('/workoutoptions', methods=['GET'])
def getWorkout():
  file = open('postWorkoutData.json')
  jsonObject = json.load(file)
  # print(jsonObject)
  # file.close()

  return json.dumps(jsonObject)

@api.route('/workoutoptions', methods=['POST'])
def postWorkout():
  # uri = "mongodb+srv://admin:admin@hackathon.uj373.mongodb.net/hackathon?retryWrites=true&w=majority"
  # client = MongoClient(uri)
  # hackathon = client.hackathon
  # workoutData = hackathon.workoutData
  # query= {}

  # _request = json.loads(request.data)

  # for key, value in _request.items():
  #   if value:
  #     query[key] = value
  #   print(query)

  # document = workoutData.find(query)
  # list_current = list(document)
  # d = dumps(list_current)
  
  # return d
  filterRequest = json.loads(request.data)
  print(filterRequest)

  file = open('postWorkoutData.json')
  workouts = json.load(file)
  file.close()
  filteredData = []
  for workout in workouts:
    if(str(workout["loanIdentifier"]) == filterRequest["loanIdentifier"]
      or str(workout["servicerAccountIdentifier"]) == filterRequest["servicerAccountIdentifier"]
      or str(workout["workoutSchema"]) == filterRequest["workoutSchema"]
      or str(workout["workoutProgramType"]) == filterRequest["workoutProgramType"]
      ):
      filteredData.insert(0, workout)

  return json.dumps(filteredData)

if __name__ == '__main__':
    ##cleanDB()
    ##insertListOfLoansIntoDB()
    ##insertWorkoutDataIntoDB()
    api.run() 