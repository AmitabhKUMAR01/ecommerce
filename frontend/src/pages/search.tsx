import React, { useState } from 'react'
import ProductCard from '../components/product-card'

const Search = () => {
  const [search, setSearch] = useState('')
  const [sort ,setSort] = useState('')
  const [maxPrice ,setMaxPrice] = useState(100000)
  const [categoy,setCategoy] = useState('')
  const [pages,setPages] = useState<number>(0)
  const AddtoCartHandler=()=>{}
  return (
    <div className='product-search-page'>
        <aside>
          <h2>filters</h2>
          <div>
            <h4>sort</h4>
            <select name="" id="">
              <option value="none">none</option>
              <option value="asc">low to High</option>
              <option value="dsc">high to low</option>
            </select>
          </div>
          <div>
            <h4>max Price:{maxPrice || ""}</h4>
            <input type="range" min={100} max={1000000} value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} /> 
          </div>
          <div>
            <h4>category</h4>
            <select name="" id="" onChange={(e)=>setCategoy(e.target.value)}>
              <option value="">all</option>
              <option value="">sample 1</option>
              <option value="">sample 2</option>
            </select>
          </div>
        </aside>
        <main>
          <h1>products</h1>
          <input type="text" placeholder='search by name...' value={search} onChange={(e)=>setSearch(e.target.value)} />
          <div className="search-product-list">
                  <ProductCard handler={AddtoCartHandler} name='mackbook' photo='https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' price={324} productId='fafdsfr432' stock={3} />

          </div>
          <article>
            <button onClick={()=>setPages((prev)=>prev-1)}>prev</button>
            <span>{pages} of {5}</span>
            <button onClick={()=>setPages((prev)=>prev +1)}>next</button>
          </article>
        </main>

    </div>
  )
}

export default Search