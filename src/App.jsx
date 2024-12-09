import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Users from './pages/Users'
import UserView from './pages/UserView'
import Poll from './pages/Poll'
import PollView from './pages/PollView'
import PollEdit from './pages/PoolEdit'
import EditUser from './pages/EditUser'
import Settings from './pages/Settings'
import Notifications from './pages/Notifications'
import Reset from './pages/Reset'
import Forget from './pages/Forget'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='poll' element={<Poll />} />
          <Route path="poll/view" element={<PollView />} />
          <Route path="poll/edit" element={<PollEdit />} />
          <Route path='users' element={<Users />} />
          <Route path='users/view' element={<UserView />} />
          <Route path="users/edit" element={<EditUser />} />
          <Route path='settings' element={<Settings />} />
          <Route path='notifications' element={<Notifications />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/reset' element={<Reset />} />
      </Routes>
    </>
  )
}

export default App
