import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    // the object we will store the info that hte user enters
    const blog = {
        title,
        body,
        author
    }

    setIsPending(true)

    fetch(' http://localhost:8000/blogs', {
        method: 'POST',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(blog)
    }).then(()=>{
        console.log('new blog')
        setIsPending(false)
    })

  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        {/* adding a blog title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* adding a blog paragraph */}
        <textarea 
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        required></textarea>
        <label>Blog Author</label>

        {/* selecting the blog author */}
        <select
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>

        {/* adding a new blog */}
       {!isPending && <button>Add blog</button>}
       {isPending && <button disabled>Adding blog...</button>}
        <p>{body}</p>
      </form>
    </div>
  );
};

export default Create;
