import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'

function Online() {

    const [data, setData] = useState([])
    const DataFromApi = async () => {
        const response = await fetch("http://localhost:5000/top-restaurant-chains")
        const apiData = await response.json()
        setData(apiData)

    }
    useEffect(() => {
        DataFromApi()
    }, [])
    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className="flex my-5 items-center justify-between">
                <div className="text-[25px] font-bold capitalize">
                    restaurant with online food delivery in karachi
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {data.length === 0 ? (
                    <p>No restaurants available</p>
                ) : (
                    data.map((d, id) => <Card {...d} key={id} />)
                )}
            </div>
        </div>
    )
}

export default Online