import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { EditPost } from "../../components/EditPost"
import { DetailPost } from '../../components/DetailPost'




export  function DetailViewPage() {

    const { id } = useParams()
    const[post, setPost] = useState({post:'', created:'', content:''})
    const [edit, setEdit] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:7070/posts/${id}`)
        .then(res=>res.json())
        .then(data=> setPost(data))
    }, [id, edit])

    return (
        <>
        {edit? 
        <EditPost post={post.post} setEdit={setEdit}/> :
        <DetailPost post={post.post} setEdit={ setEdit }/>}
        </>
    )
}
