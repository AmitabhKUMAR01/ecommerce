import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {
  function AddtoCartHandler() {

  }
  return (
    <div className='home'>
      <section></section>
      <h1>Latest Product
        <Link to={'/search'} className='findmore'>More</Link>
      </h1>
      <main>
        <ProductCard handler={AddtoCartHandler} name='mackbook' photo='https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' price={324} productId='fafdsfr432' stock={3} />
      </main>
    </div>
  )
}

export default Home