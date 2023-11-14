import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

export  function NewPage() {
  const formInitState = {content: ''}
  const [form, setForm] = useState(formInitState)

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {content: e.target.content.value}
    console.log(data)
    fetch('http://localhost:7070/posts',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(resp=>{
      if(resp.ok){
        setForm(formInitState)
        navigate('/', {replace: true})

      }
    })

    
  }


  const handleChange =({target})=> {
    setForm(prev=>({...prev, content:target.value}))
  }

  const handleGoHome =()=>{
    navigate('/', {replace: true})
  }


    return (
      <div className='new-post-container'>
          
          <form className='new-post-form' onSubmit={handleSubmit}>
          <div className="cl-btn-4" onClick={handleGoHome}></div>
              <textarea  
              className='new-post-input' 
              name="content" 
              id="content" 
              cols="53" 
              rows="6"
              onChange={handleChange}
              value={form.content}>            
              </textarea>

              <button className='new-post-button'> Опубликовать 
              </button>
          </form>
      </div>
    )
}
