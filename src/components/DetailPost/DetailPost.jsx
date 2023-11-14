import React from 'react'
import { Post } from '../Post'
import { useNavigate } from "react-router-dom"

export  function DetailPost({post, setEdit}) {
  const navigate = useNavigate()
  
  const handleEditButton = ()=> {
    setEdit(true)
  }

  const handleDelete =()=> {
    fetch(`http://localhost:7070/posts/${post.id}`, {
      method:'DELETE'
    })
    .then(resp=>{
      if(resp.ok){
        navigate('/', {replace: true})
      }
    })
  }

  return (
    <div>
        <Post post={post}/>
        <div className="butons-container">
            <button onClick={handleEditButton}>Изменить</button>
            <button onClick={handleDelete}>Удалить</button>
        </div>

    </div>
  )
}
