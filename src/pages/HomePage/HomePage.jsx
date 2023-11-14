import { useEffect, useState } from "react"
import { PostList } from "../../components/PostList"


export function HomePage() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
      fetch('http://localhost:7070/posts')
      .then(resp => resp.json())
      .then(data=> setPosts(data))
    }, [])

    return (
      <>
        <div className="post-container">
          <PostList list={posts}/>
        </div>
      </>
    )
}