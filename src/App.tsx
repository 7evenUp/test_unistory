import { useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { BlogContext, initialState, reducer } from './context/createContext'
import Home from './pages/Home'
import PostPage from './pages/PostPage'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    // @ts-ignore
    <BlogContext.Provider value={{dispatch, state}}>
      <div className="App">
        <main className="container">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path=':postId' element={<PostPage />} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </BlogContext.Provider>
    
  )
}

export default App
