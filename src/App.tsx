import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AppProvider } from './context/createContext'
import Home from './pages/Home'
import PostPage from './pages/PostPage'

function App() {
  return (
    <AppProvider>
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
    </AppProvider>
  )
}

export default App
