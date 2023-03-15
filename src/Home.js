import BlogList from "./BlogList";
import useFetch from "./UseFetch";

const Home = () => {
    const title = 'All blogs'
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

   
    return ( 

        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
           {blogs !== null && <BlogList blogs={blogs} title={title}></BlogList>}
            {/* <BlogList blogs={blogs.filter(n=>n.author === 'manka')} title={'Manka\'s blogs'}></BlogList> */}
            {/* <button onClick={()=>setName('luiji')}>Change Name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;