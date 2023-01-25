const initialData ={
    list:[]
}

const todoReducers = (state=initialData,action) =>{

    switch (action.type) {
        case 'ADD_TODO':
            const {id,data} = action.payload;
            return{
                ...state,
                list:[
                    ...state.list,{
                        id:id,
                        data:data
                    }
                
            ]
            }
        
        case 'DELETE_TODO':
            const newList =state.list.filter((ele) => ele.id!==action.id)
            console.log('line form dt',newList)
            
            return{
                ...state,
                list:newList                
                }
                
        case 'SUBMIT_TODO':
            const {index,newTask} = action.payload;
            const tempNewList=state.list.filter((element)=>{
                if(element.id===index){
                    return element.data=newTask
                }return true
                
            })
            console.log('line is st',tempNewList)
            return{
                ...state,
                list:tempNewList
            }
                
    
        default:return state
            // break;
    }
}
export default todoReducers;