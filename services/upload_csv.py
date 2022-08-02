import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from openpyxl import load_workbook
import requests

# Use a service account
cred = credentials.Certificate('./key.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

load_wb = load_workbook('./questions.xlsx', data_only=True)

load_ws = load_wb['questions']

idx = 2
while(True):
    if (load_ws[f'A{idx}'].value == None):
        break


    data = {
        "reviewText": load_ws[f'A{idx}'].value,
        "task": load_ws[f'B{idx}'].value,
    }

    res = requests.post('https://api.onebob.co/questions/question', data=data).json()

    idx += 1

print("완료되었습니다.")
