.
├── App.css
├── App.js
├── components
│   ├── [Habit.jsx](#habit.jsx)
│   ├── [Input.jsx](#input.jsx)
│   ├── [Memo.jsx](#memo.jsx)
│   ├── [Navigation](#navigation.jsx)
│   └── [FilterMenu.jsx](#filtermenu.jsx)
├── index.css
├── index.js
├── routes
│   ├── About.js
│   ├── Home.js
│   └── MemoDetail.js
├── serviceWorker.js
└── setupTests.js

# Habit.jsx

-   UI : menu : Habit 영역 (상단)
-   data : Read
-   [x] 보여지게끔 구현
-   [x] < > 버튼 작동
-   [x] 일정 시간마다 다음습관 보여지게끔 -> setInterval render 쌓여서 생기는 문제

# Input.jsx

-   UI : Memo 입력 -> 등록
-   data : Create
-   [x] UI FORM
-   [x] text 입력
-   [x] menu 입력
-   [x] UUID
-   [x] localStorage 에 추가

# Memo.jsx

-   UI : localStorage에 있는 데이터 fetch -> Memo Component 동적으로 생성해 뿌려주기
-   data : Create(UI), Edit, Delete
-   [x] localStorage에서 데이터 가져오기
-   [x] 데이터 갱신시 처리 (state)
-   [x] 동적으로 Memo Component UI 생성 -> append
-   [x] UI - delete 시에도 정상작동하는지 확인
-   [x] UI - edit 시에도 정상작동하는지 확인
-   [x] text 수정
-   [x] delete
-   [x] delete시 localStorage

# FilterMenu.jsx

-   [x] 메모 서비스의 Navigation Bar
-   [x] menu별로 Filtering
-   [] li 태그 여러번 쓰는 대신, for문으로 메뉴 이름 뽑아내기
-   [] 해당 className의 첫글자만 대문자로 뽑는 함수 `toPascal()` utils로 만들어서 가져오기

*   [] localStorage : 시작할때 get, 변경될때 set

-   리터럴 상수화
