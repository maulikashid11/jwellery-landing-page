import './App.css'
import BestSeller from './components/BestSeller'
import BestSellerCollections from './components/BestSellerCollections'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NewArrivals from './components/NewArrivals'
import TestimonialSlider from './components/TestimonialSlider'

function App() {

  return (
    <>
      <Navbar />
      <TestimonialSlider />
      <BestSellerCollections />
      <NewArrivals />
      <BestSeller />
      <Footer />
    </>
  )
}

export default App
