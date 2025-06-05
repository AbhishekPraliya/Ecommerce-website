
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import ShopPage from './Components/ShopPage/ShopPage'
import HomePage from './Pages/HomePage/HomePage.jsx'

function App() {
  
  // TODO: Add dark mode toggle
  // console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  return (
    <>
      <Navbar />

      <div className="main">
        <HomePage/>

        <ShopPage />

      </div>
    </>
  )
}

export default App
