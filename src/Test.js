import './App.css';
import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react';
import React from 'react'

const App = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts([...Array(1000)].map(() => {
            return {
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: Math.round(faker.finance.amount()),
                image: faker.image.image()
            }
        }))
    }, [])
    console.log(products)
    return (
        <div>
            {
                products.length > 0 ? <div>
                    {
                        products.map((item) => <img key={item.id} src={item.image} width="200px" height="200px" alt={item.name} />)
                    }
                </div>
                    : null
            }
        </div>
    )
}


export default App;
