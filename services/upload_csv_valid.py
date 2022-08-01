import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from openpyxl import load_workbook

# Use a service account
cred = credentials.Certificate('./key.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

load_wb = load_workbook('./valid.xlsx', data_only=True)

load_ws = load_wb['Sheet1']

idx = 2
while(True):
    if (load_ws[f'A{idx}'].value == None):
        break

    doc_ref = db.collection(u'valid').document(f'{str(idx-1).zfill(4)}')
    doc_ref.set({
        u'reviewText': load_ws[f'A{idx}'].value,
        u'consideration': load_ws[f'B{idx}'].value,
        u'purchase': load_ws[f'C{idx}'].value,
        u'shipping': load_ws[f'D{idx}'].value,
        u'using': load_ws[f'E{idx}'].value,
        u'cs': load_ws[f'F{idx}'].value,
    })

    print(f'{idx-1} 완료!')
    idx += 1

print("완료되었습니다.")
