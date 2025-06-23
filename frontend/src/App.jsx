// import { useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage.jsx'
import { Route, Routes } from 'react-router-dom'
import CollectionPage from './Pages/CollectionPage/CollectionPage.jsx'
import ProductPage from './Pages/ProductPage/ProductPage.jsx'
import Footer from './Components/Footer/Footer.jsx'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop.jsx'
import MyAccount from './Pages/AccountPage/MyAccount.jsx'
import WishList from './Pages/WishList/WishList.jsx'
import CartPage from './Pages/CartPage/CartPage.jsx'

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
      // document.title = 'Welcome to the Vibe';
  // }, []);
  
  // TODO: Add dark mode toggle
  // console.log(window.matchMedia('(prefers-color-scheme: dark)'))
  return (
    <>

      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection/:collectionId" element={<CollectionPage />} />
          <Route path="/search" element={<CollectionPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<CartPage />} />
          
          
          {/* <Route path="*" element={
            <div className="not-found"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'full' }}>
              <h1>Page Not Found</h1>
            </div>
          } /> */}
        </Routes>
        <Footer/>
        <ScrollToTop/>
      </div>
    </>
  )
}

export default App
