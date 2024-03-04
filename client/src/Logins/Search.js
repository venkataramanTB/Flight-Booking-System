import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../element/Animation - 1704381986548.json'; // replace with the path to your animation data

const Search = () => {
    const [flights, setFlights] = useState([]);

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const BookFlight = async id => {
        try {
            await axios.delete(`https://flight-booking-system-9n4n.onrender.com/flights/${id}`);
            setFlights(flights.filter(flight => flight.id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getFlights = async () => {
        try {
            const response = await axios.get('https://flight-booking-system-9n4n.onrender.com/flights');
            setFlights(response.data.results || []);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getFlights();
    }, []);

    return (
        <Fragment>
            <Lottie options={defaultOptions} height={400} width={400} />
            <table className="table mt-5 text-center table-hover">
                <thead>
                    <tr>
                        <th>Source</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Book</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight, index) => (
                        <tr key={index}>
                            <td>{flight.source}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.date}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => BookFlight(flight.id)}
                                >
                                    Book
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default Search;
