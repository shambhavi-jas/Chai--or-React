
import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  

  return (
   <UserContextProvider>
   <h1>React 7.5 project 8</h1>
   <Login/>
   <Profile/>
   </UserContextProvider>
  )
}

export default App
