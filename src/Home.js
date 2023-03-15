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
        </div>
     );
}
 
export default Home;