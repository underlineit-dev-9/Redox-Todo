import React from 'react'
import { useState } from 'react'

import {useSelector,useDispatch} from 'react-redux';

import {addTodo,deleteTodo} from '../actions/index';

export default function Todo() {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state)=>state.todoReducers.list)
  const dispatch = useDispatch()

  return (
    <div>
      <center>
        <h1>Todo Management System</h1>
        <div>
          <input type='text' placeholder='Enter your text '
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}

          />
          {' '}
          <button onClick={() =>dispatch(addTodo(inputData),setInputData(''))
          }>Add</button>
        </div>
        <div>
        {list.map((ele)=>{
          return(
          <div key={ele.id}>
              <h3>{ele.data}</h3>
             <div> <button onClick={()=>dispatch(deleteTodo(ele.id))}>Delete</button></div>
            </div>)

        })}
            

        </div>
      </center>
    </div>
  )
}
