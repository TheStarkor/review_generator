# Review Generator

## Server 

`$ python3 app.py`

### API

1. quiz 불러오기  
  GET `/quiz`
  ```
  {
    reviewText: "Very loud and clear",
    star: 5
  }
  ```

2. quiz 제출  
  POST `/result`
  ```
  {
    userId: 123
    reviewId: "",
    consideration: "",
    purchase: "",
    shipping: "",
    using: "",
    cs: "",
    none: ""
  }
  ```
  
3. completion code  
  POST `/complete`
  ```
  {
    code: ""
  }
  ```


## Front

### getting started
`$ cd front`
`$ npm start`

### build
`$ npm run build`

빌드 이후 build 내 파일 templates로 복사