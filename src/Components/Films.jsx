import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const Films = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const getAllFilms = async () => {
            const apiUrl = `https://ghibliapi.herokuapp.com/films`

            try {
                const { data } = await axios.get(apiUrl)

                setData(data)
            } catch (error) {
                window.alert('You took a wrong turn')
                console.log(error);
            }
        }

        getAllFilms()
    }, [])

    console.log(data);
    return (
        <div>
            <h1>Films</h1>
            <p>Show List of Films</p>
        </div>
    )
}