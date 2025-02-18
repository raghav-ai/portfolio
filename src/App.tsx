import Navbar from './Components/Navbar/nav.tsx'
import Home from './Components/Pages/Home.tsx'
import Wordle from './Components/Pages/Garage/Wordle.tsx'
import './App.css'

function App() {
  return (
    <div className='bg-slate-950'>
      <Navbar/> 
      <Wordle/>
    </div>
  )
}

export default App
