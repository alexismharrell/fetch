import { ChangeEvent, useEffect, useState } from 'react'
import { login } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { updateEmail, updateIsLoggedIn, updateName, UserState } from '../../state/userSlice'
import { RootState } from '../../state/store'
import { Navigate, useNavigate } from 'react-router'

const Home = () => {
  const userState: UserState = useSelector((state: RootState) => state.user)

  // Dont show this screen if user is logged in, take them to search
  if (userState.isLoggedIn) {
    return <Navigate to='/search'/>
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState(userState.email)
  const [name, setName] = useState(userState.name)
  const [disableButton, setDisableButton] = useState(false)
  const [isEmailError, setIsEmailError] = useState(false)
  const emailInputClasses = 'input input-xl mt-5 '.concat(
    isEmailError ? 'input-error' : 'input-primary'
  )
  
  useEffect(() => {
    let isEmailEmpty = email.trim() === ''
    let isNameEmpty = name.trim() === ''
    let isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)

    setDisableButton(isEmailEmpty || isNameEmpty || !isEmailValid)
    setIsEmailError(!isEmailEmpty && !isEmailValid)
  }, [name, email])

  const handleLoginAttempt = async () => {
    await login(name, email).then(() => {
      dispatch(updateEmail(email))
      dispatch(updateName(name))
      dispatch(updateIsLoggedIn(true))
      navigate('/search')
    })
  }

  const handleEmailUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleNameUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className='text-3xl'>Welcome! Please log in to find your pet!</div>
      <input
        type='text'
        placeholder='Name'
        className='input input-primary input-xl mt-5'
        onChange={handleNameUpdate}
      />
      <input
        type='email'
        placeholder='Email'
        className={emailInputClasses}
        onChange={handleEmailUpdate}
      />
      <button
        className='btn btn-primary btn-xl mt-5'
        onClick={handleLoginAttempt}
        disabled={disableButton}
      >
        Login
      </button>
    </>
  )
}

export default Home
