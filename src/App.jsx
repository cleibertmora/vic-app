import { Routes, Route, Navigate } from "react-router-dom"
import { useAuthContext } from './hooks/useAuthContext'
import Login from './pages/Login'
import Home from './pages/Home'
import Page404 from './pages/Page404'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div className="App">
        {authIsReady && (
          <Routes>
            <Route 
              path="/" 
              element={user ?
                <Home /> :
                <Navigate to="/login" /> 
              }/>
            <Route 
              path="/login"
              element={user ?
                <Navigate to="/" /> :
                <Login />
              }/>
            <Route
                path="*"
                element={<Page404 />} 
              />
          </Routes>
        )}
    </div>
  )
}

export default App