# Review Generator

## Server 

`$ python3 app.py`

### API

1. GET `/start`: ID 받아오기 

2. GET `/quiz`: quiz 불러오기  
  ```
  [
    {
      reviewText: "Very loud and clear",
      star: 5
    }, 
    {
      reviewText: "okok",
      star: 3
    },
    ...
  ]
  ```
3. POST `/result`: quiz 제출
  ```
  body
  [
    {
      userId: 123
      reviewId: "",
      consideration: "",
      purchase: "",
      shipping: "",
      using: "",
      cs: "",
      none: ""
    },
    {
      ...
    },
    ...
  ]
  ```

4. POST `/complete` completion code  
  ```
  {
    code: ""
  }
  ```


## Front

### getting started
`$ cd front`
`$ npm install`
`$ npm start`

### build
`$ npm run build`

빌드 이후 build 내 파일 templates로 복사