//import React from 'react'
import axios from 'axios';
import React ,{useEffect, useState} from 'react'

const Todos = () => {
  const[page,setPage]=useState(1);
  const[todos,setTodos]=useState([])
  const[totalCount,setTotalCount]=useState(0)
  const[limit,setLimit]=useState(5)
  useEffect(()=>{
   
    axios
    .get(`https://m6g3bt.sse.codesandbox.io/todos?_page=${page}&_limit=${limit}`)
    .then((r)=>{
      setTodos(r.data);
      setTotalCount(Number(r.headers["x-total-count"]))
    })
   
  },[page,limit])
  return (
    <div className="App">
      <button disabled={page<=1} onClick={()=>setPage(page-1)}>{`<`}</button>
      <select onChange={(e)=>setLimit(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>
      <button 
      disabled={totalCount < page * 5}
      onClick={()=>setPage(page + 1)}>
        {">"}
      </button>
      {
        todos.map((todo)=>(
          <div key={todo.id}>
            {todo.id}
          {`:`}{todo.value}</div>
        ))
      }
      </div>
  )
}

export default Todos