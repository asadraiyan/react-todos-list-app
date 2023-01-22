import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoList";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const inputTextHandler = (e) => {
    setInputList(e.target.value);
  };

  const itemsHandler = (e) => {
    e.preventDefault();
    if(inputList.length > 0) {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
    }
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1>To-Do List</h1>

          <form>
            <input
              type="text"
              placeholder="Add your items"
              value={inputList}
              onChange={inputTextHandler}
            />
            <button onClick={itemsHandler} type= "submit"> + </button>
          </form>

          <ol className="list-container">
            {/* <li>{inputList}</li> */}
            {items.map((itemval, index) => {  
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
