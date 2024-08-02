import { createSlice,nanoid} from "@reduxjs/toolkit";
const initialState={
    todos:[{id:'1ca',text:"hi",status:false}]
}
export const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
                status:false
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>(todo.id!==action.payload))
        },
        toggleTodo:(state, action)=>{
           state.todos=state.todos.map((todo)=>(todo.id===action.payload?{...todo,status:!todo.status}:todo))
            // const todo=state.todos.find((todo)=>todo.id===action.payload)
            // if(todo){
            //     todo.status=!todo.status
            // }
        },
        updateTodo:(state,action)=>{
            const {id, text}=action.payload
            state.todos=state.todos.map((todo)=>(todo.id===id)&(todo.status===false)?{...todo,text:text}:todo)
            
        }
    }
})

export const{addTodo,removeTodo,toggleTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer