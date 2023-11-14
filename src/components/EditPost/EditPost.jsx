import  { useState } from 'react'

export  function EditPost({post, setEdit}) {

  const formInitState = {content: ''}
  const [form, setForm] = useState({content: post.content})

  const handleChange =({target})=> {
    setForm(prev=>({...prev, content:target.value}))
  }

  const handleCancel =()=>{
    setEdit(false)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = {content: e.target.content.value}
    console.log(data)
    fetch(`http://localhost:7070/posts/${post.id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp=>{
      if(resp.ok){
        setEdit(false)

      }
    })

  }

  return (
    <div className='new-post-container'>
          
          <form className='new-post-form' onSubmit={handleSubmit}>
          <div className="cl-btn-4" onClick={handleCancel}></div>
              <textarea  
              className='new-post-input' 
              name="content" 
              id="content" 
              cols="53" 
              rows="6"
              onChange={handleChange}
              value={form.content}>            
              </textarea>

              <button className='new-post-button'> Сохранить 
              </button>
          </form>
      </div>
  )
}
