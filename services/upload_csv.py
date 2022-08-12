import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from openpyxl import load_workbook
import requests

# Use a service account
cred = credentials.Certificate('./key.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# 파일명 변경
load_wb = load_workbook('./220810_question.xlsx', data_only=True)

# sheet1 이름 확인 후 변경
load_ws = load_wb['Sheet1']

idx = 2
while(True):
    if (load_ws[f'A{idx}'].value == None):
        break


    data = {
        "reviewText": load_ws[f'A{idx}'].value,
        "task": load_ws[f'B{idx}'].value,
    }

    res = requests.post('https://api.onebob.co/questions/question', data=data).json()

    if (idx % 5000 == 1):
        print(f"{idx}까지 완료!")
        
    idx += 1

print("완료되었습니다.")
