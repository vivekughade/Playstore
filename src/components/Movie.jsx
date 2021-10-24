import React, { useState } from 'react';
import Moviesdata from "./Moviesdata";
import './style.css';
const Movie = () => {

    const [items, setItems] = useState(Moviesdata);

    const filterItem = (catItem) => {
        const updateItem = Moviesdata.filter((curElem) => {
            return curElem.category === catItem;
        });

        setItems(updateItem);

    }






    return (
        <>
            <br /><br />
            <button

                onClick={() => {
                    filterItem("2021")
                }}

            >2021</button>
            <button

                onClick={() => {
                    filterItem("2020")
                }}

            >2020</button>
            <button

                onClick={() => {
                    filterItem("2019")
                }}

            >2019</button>
            <button
                onClick={() => {
                    filterItem("old")
                }}

            >old</button>
            <button

                onClick={() => {
                    setItems(Moviesdata);
                }}

            >All</button>


            {

                items.map((elem) => {

                    const { id, imgsrc, cardtitle, category, btntext} = elem;

                    return (
                            <div className="cardcontainer">
                        <div  className="cardbox">
                <p>{id}</p>
                <img src={imgsrc} />
                <h2>{cardtitle}</h2>
                <p>{category}</p>
                <button className="btn">{btntext}</button>
            </div>
            </div>

                    )

                })


            }



        </>
    );
};

export default Movie;