export const addTodo =(data)=>{
    return {
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo =(id)=>{
    return {
        type:"DELETE_TODO",
        // id:payload.id
        id:id
    }
}
export const submitTodo=(id,newtask) =>{
    return{
        type:"SUBMIT_TODO",
        id:id,
        data:newtask
    }
}