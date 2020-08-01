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
-   [] 보여지게끔 구현
-   [] < > 버튼 작동
-   [] 일정 시간마다 다음습관 보여지게끔

# Input.jsx

-   UI : Memo 입력 -> 등록
-   data : Create
-   [] UI FORM
-   [] text 입력
-   [] menu 입력
-   [] UUID
-   [] localStorage 에 추가

# Memo.jsx

-   UI : localStorage에 있는 데이터 fetch -> Memo Component 동적으로 생성해 뿌려주기
-   data : Create(UI), Edit, Delete
-   [x] localStorage에서 데이터 가져오기
-   [] 데이터 갱신시 처리 (state)
-   [x] 동적으로 Memo Component UI 생성 -> append
-   [] UI - delete 시에도 정상작동하는지 확인
-   [] UI - edit 시에도 정상작동하는지 확인
-   [] text 수정
-   [] delete
-   [] 삭제시 localStorage
-   [] delete시 localStorage

# FilterMenu.jsx

-   [x] 메모 서비스의 Navigation Bar
-   [] menu별로 Filtering
