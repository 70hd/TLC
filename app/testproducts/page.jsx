"use client"
import { useEffect, useState } from 'react'
import MiniProductComponent from '../components/menu-components/mini-product-component';

const ProductsPage = () => {
    const [menu,setMenu] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMenu = async () => {
            const response = await fetch("/api/menuCategories") // this runs app/api/menuCategory/route.js
            const data = await response.json() // convert api response to json format
            setMenu(data) // set state variable to json data
        }
        fetchMenu()
    }, [])

  return (
    <div className='text-black'>
        <h1>Menu Items</h1>
        {menu.map((category) => (
            <div className='text-black'>
                {category.items.map((item) => (
                    // <p>{item.title}</p>
                    <MiniProductComponent sides = {[{ 
                        title: item.title,
                        miniTitle: item.miniTitle,
                        image: item.image,
                        link: item.link}]} />
                ))}
                <h1 className='text-black'>hey</h1>
             </div>   
        ))}
    </div>
  )
}

export default ProductsPage