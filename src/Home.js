import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const title = 'All blogs'
    const [isPending, setIsPending] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then((data)=>{
                console.log(data)
                setBlogs(data)
                setIsPending(false)
            })
        
    },[])
    return ( 

        <div className="home">
            {isPending && <div>Loading...</div>}
           {blogs !== null && <BlogList blogs={blogs} title={title}></BlogList>}
            {/* <BlogList blogs={blogs.filter(n=>n.author === 'manka')} title={'Manka\'s blogs'}></BlogList> */}
            {/* <button onClick={()=>setName('luiji')}>Change Name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;