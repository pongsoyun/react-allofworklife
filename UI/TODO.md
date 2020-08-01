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
-   [] 일정 시간마다 다음습관 보여지게끔 -> setInterval render 쌓여서 생기는 문제

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

<header class="habit">
				<div class="habit__div">
					<!-- 습관 부분  -->
					<span class="habbit__text"></span>
				</div>
				<div class="habit__btn__container">
					<button class="habit__prev__btn">
						<i class="fa fa-chevron-left" aria-hidden="true"></i>
					</button>
					<button class="habit__next__btn">
						<i class="fa fa-chevron-right" aria-hidden="true"></i>
					</button>
				</div>
			</header>
