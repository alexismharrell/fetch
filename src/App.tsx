import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Search from './components/search/search'

function App() {
  return (
    <>
      <Navbar />
      <div className='container mx-auto translate-y-100 px-5 flex flex-col justify-center items-center'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </div>
    </>
  )
}

export default App
