import Posts from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';
import './styles.css'

function App() {

  return (
    <PostsProvider>
      <div className="App">
        <Posts />
      </div>
    </PostsProvider>
  )
}

export default App;