import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo } from "./actions";
import Todo from "./components/Todo";

export default function App() {

  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");

  const list = useSelector((state) => state.todoReducers.list);


  return (
    <div>
      <center>
        <div>
          <h1>Todo Management System</h1>
          <div>
            <input
              type="text"
              placeholder="Enter your text "
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />{" "}
            <button
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            >
              Add
            </button>
          </div>
        </div>
        {list.map((element) =>(
          <Todo ele={element} />
        ))}
      </center>
    </div>
  );
}
