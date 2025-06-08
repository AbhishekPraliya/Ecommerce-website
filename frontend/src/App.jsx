
// import { useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import ShopPage from './Components/ShopPage/ShopPage'
import HomePage from './Pages/HomePage/HomePage.jsx'

function App() {

  // useEffect(() => {
  //   const favicon = document.querySelector("link[rel~='icon']");
  //   if (favicon) {
  //     favicon.href = '/new-favicon.png'; // Your new favicon image
  //   } else {
  //     const newFavicon = document.createElement('link');
  //     newFavicon.rel = 'icon';
  //     newFavicon.href = '/new-favicon.png';
  //     document.head.appendChild(newFavicon);
  //   }
  // }, []);
  
  // TODO: Add dark mode toggle
  // console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  return (
    <>
      <Navbar />

      <div className="main">
        <HomePage/>

        {/* <ShopPage /> */}

      </div>
    </>
  )
}

export default App
