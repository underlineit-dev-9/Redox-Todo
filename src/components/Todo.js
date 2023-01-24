import {useState} from "react";

import {  useDispatch } from "react-redux";

import { deleteTodo,submitTodo } from "../actions/index";

export default function Todo(ele) {
  const dispatch = useDispatch();
  // console.log('form tc:')
  const [canEdit,setCanEdit]=useState(false)
  const [editedTask,setEditedTask]=useState(ele.ele.data)

  return (
    <div>
      {canEdit ?
      (<div>
            <input
              type="text"
              placeholder="Enter your edited task "
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
            />{" "}
            <button
            onClick={()=>dispatch(submitTodo(ele.ele.id,editedTask))}
            >
              Submit
            </button>
            <button
              onClick={() =>setCanEdit(false) }
            >
              Cancel
            </button>
          </div>
        
        ):(
        <div>
        <h3>{ele.ele.data}</h3>
                <div>
                  {" "}
                  <button onClick={() => dispatch(deleteTodo(ele.ele.id))}>
                    Delete
                  </button>
                  <button onClick={() =>setCanEdit(true)}>
                    Edit
                  </button>
                </div>
              </div>
        )
      }
      
    </div>
  );
}
