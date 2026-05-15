import Header from "./components/Header"
import ArticleList from "./components/ArticleList"
import About from "./components/About"
import blog from "./Blog"

function App () {
  return (
    <div className="app">
        <Header name={blog.name}/>

        <About 
            image={blog.image}
            about={blog.about}
        />

        <ArticleList posts = {blog.posts}/>
    </div>
  )
}

export default App;