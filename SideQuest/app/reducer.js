export const initalState = [
]

export const reducer = (state,action)=>{
   switch(action.type){
          case "ADD":
              return [...state,{id:Math.random(),title:`blog title${state.length+1}`,content:"test",priority:"1"}]
          case "ADD_POST":
              return [...state,{id:Math.random(),title:action.payload.title,content:action.payload.content,priority:action.payload.priority}]
          case "COMPLETE_POST":
              return [...state,{id:Math.random(),title:action.payload.title,content:action.payload.content,priority:action.payload.priority,type:"complete",reward:action.payload.reward}]
          case "ADD_REWARD":
              return [...state,{title:action.payload.title,priority:action.payload.priority,type:"reward"}]
          case "REMOVE":
              return state.filter((post)=> action.payload !== post.id)
         default:
            return state
   }

}