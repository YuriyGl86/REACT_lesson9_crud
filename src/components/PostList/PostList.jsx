import { Post } from "../Post"
import { NavLink } from "react-router-dom"

export  function PostList({ list }) {
  return (
    <>
        {list.map(post=>{
            return (
            <NavLink to={`/posts/${post.id}`}className='post-link' key={post.id}>
              <Post post={ post } />
            </NavLink>)
        })}
    </>
  )
}
