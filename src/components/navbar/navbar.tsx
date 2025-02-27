import { useDispatch, useSelector } from 'react-redux'
import { updateEmail, updateIsLoggedIn, updateName, UserState } from '../../state/userSlice'
import { RootState } from '../../state/store'
import { NavLink, useNavigate } from 'react-router'
import SearchBar from '../search/searchBar'
import { logout } from '../../api'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userState: UserState = useSelector((state: RootState) => state.user)

  const handleLogout = () => {
    logout()
    dispatch(updateEmail(''))
    dispatch(updateName(''))
    dispatch(updateIsLoggedIn(false))
    navigate('/')
  }

  const logoutSection = (
    <>
      <div className='mr-10'>Welcome, {userState.name}!</div>
      <button onClick={handleLogout} className='w-3/12 btn btn-secondary'>
        Log Out
      </button>
    </>
  )

  const logInButton = (
    <button className='w-3/12 btn btn-secondary'>
      <NavLink to='/'>Log In</NavLink>
    </button>
  )

  return (
    <div className='navbar bg-primary text-neutral text-2xl h-20 pr-10 pl-10'>
      <div className='navbar-start w-4/12'>
        <button className='btn btn-ghost btn-xl'>
          <NavLink to='/'>FETCH a DOG!</NavLink>
        </button>
      </div>
      <div className='navbar-center w-4/12'>
        <SearchBar />
      </div>
      <div className='navbar-end w-4/12'>
        {userState.isLoggedIn ? logoutSection : logInButton}
      </div>
    </div>
  )
}

export default Navbar
