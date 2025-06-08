import AdvertisementPanel from '../../Components/AdvertisementPanel/AdvertisementPanel.jsx'
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx'
import ProductSlider from '../../Components/ProductSlider/ProductSlider.jsx'
import TrendingCategories from '../../Components/TrendingCategories/TrendingCategories.jsx'
import WelcomeHeader from '../../Components/WelcomeHeader/WelcomeHeader.jsx'

const HomePage = () => {
    return (
        <>
            <WelcomeHeader/>
            <ImageSlider/>
            {/* <ProductCard /> */}
            <ProductSlider />
            <TrendingCategories />
            <AdvertisementPanel/>
        </>
    )
}

export default HomePage
