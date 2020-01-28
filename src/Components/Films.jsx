import React, { useEffect } from 'react'
import axios from 'axios'


export const Films = () => {

    useEffect(() => {
        const getAllFilms = async () => {
            const apiUrl = `https://ghibliapi.herokuapp.com/films`

            try {
                const { data } = await axios.get(apiUrl)

                console.log(data);

            } catch (error) {
                window.alert('You took a wrong turn')
                console.log(error);
            }
        }

        getAllFilms()
    })

    return (
        <div>
            <h1>Films</h1>
            <p>Show List of Films</p>
        </div>
    )
}