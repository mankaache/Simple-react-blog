const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a className="create" href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;