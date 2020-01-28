import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { receiveFilms } from '../Store/actions/filmActions'


const Films = (props) => {

    useEffect(() => {
        const getAllFilms = async () => {
            const apiUrl = `https://ghibliapi.herokuapp.com/films`

            try {
                const { data } = await axios.get(apiUrl)

                props.receiveFilms(data)
            } catch (error) {
                window.alert('You took a wrong turn')
                console.log(error);
            }
        }

        getAllFilms()
    }, [])

    console.log(props);

    return (

        <div>
            <h1>Films</h1>
            <ul>
                {
                    props.filmState.films.map(film => {
                        return (
                            <li key={film.id}>
                                <Link to={`/films/${film.id}`}>{film.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        receiveFilms: data => dispatch(receiveFilms(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Films)