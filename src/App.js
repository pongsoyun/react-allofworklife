import React, { useState, useEffect, useCallback } from "react";
import FilterMenu from "./components/FilterMenu.jsx";
import Habit from "./components/Habit.jsx";
import Memo from "./components/Memo.jsx";
import Input from "./components/Input.jsx";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { createUUID } from "./utils/createUUID";
import {
  MEMOS_KEY,
  WORK_MENU,
  LIFE_MENU,
  HOBBY_MENU,
  WISH_MENU,
  HEALTH_MENU,
  HABIT_MENU,
  ALL_MENU,
} from "./constants/menus";
import "./App.css";

export default function App() {
  const [memos, setMemos] = useLocalStorage({
    key: MEMOS_KEY,
    defaultState: [],
  });
  const MENUS = [
    WORK_MENU,
    LIFE_MENU,
    HOBBY_MENU,
    WISH_MENU,
    HEALTH_MENU,
    HABIT_MENU,
  ];

  const getHabits = useCallback(
    () => memos.filter(({ menu }) => menu === HABIT_MENU),
    [memos]
  );

  const [filterMenu, setFilterMenu] = useState(ALL_MENU);

  // ! * componentDidMount
  useEffect(() => {
    // setMemos(JSON.parse(localStorage.getItem('memos')));
    // setHabits(memos.filter((memo) => memo.menu === 'habit'));
  }, []);

  // ! * Memo
  // * memos.length 바뀌면 달리 보여줘야됨
  // * 메모 추가되었을 경우
  useEffect(() => {}, [memos.length]);

  // * deleteMemo
  const deleteMemo = (deleteID) => {
    const newMemos = memos.filter((memo) => memo.id !== deleteID);
    setMemos(newMemos);
    // setTodos(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  // * editMemo
  const editMemo = (memo, menu) => {
    const text = memo.innerText;
    const id = memo.id;

    deleteMemo(id);
    setText(text);
    setMenu(menu);
    console.log(`${menu}     ${text}\t${id}`);
    // handleInputMenu(menu);
    // * radio checked 바꿔야함
  };

  // ! Input
  const [menu, setMenu] = useState(WORK_MENU);
  const [text, setText] = useState("");

  useEffect(() => {
    // * input form 에서도 변경되는 모습
  }, [text]);

  const handleInputMenu = (menuVal) => {
    if (menuVal !== undefined) {
      setMenu(menuVal);
    }
  };

  const changeInputText = (changeText) => {
    setText(changeText);
  };

  useEffect(() => {}, [menu]);

  const handleSubmit = () => {
    if (text !== "") {
      const id = createUUID();
      setText("");
      setMemos((prevMemos) => [...prevMemos, { menu, text, id }]);
      setMenu(menu);
      setFilterMenu(filterMenu);
    }
  };

  useEffect(() => {
    console.log(`filterMenu: ${filterMenu}`);
  }, [filterMenu]);

  const handleFilterMenu = (selectedMenu) => {
    setFilterMenu(selectedMenu);
  };

  return (
    <div className="App">
      <div className="page">
        <Habit habits={getHabits()} />
        <FilterMenu handleFilterMenu={handleFilterMenu} />
        <Memo
          filter={filterMenu}
          memos={memos}
          deleteMemo={deleteMemo}
          editMemo={editMemo}
        />
        <Input
          text={text}
          menu={menu}
          handleSubmit={handleSubmit}
          handleInputMenu={handleInputMenu}
          changeInputText={changeInputText}
        />
      </div>
    </div>
  );
}
