import Gamesdata from "./Gamesdata";
import './style.css';
const Games = () => {

 

    return (
        <>
            

            {

                Gamesdata.map((elem) => {

                    const { id, imgsrc, cardtitle} = elem;

                    return (
                            <div className="cardcontainer">
                        <div  className="cardbox">
                <p>{id}</p>
                <img src={imgsrc} />
                <h2>{cardtitle}</h2>
                
            </div>
            </div>

                    )

                })


            }



        </>
    );
};

export default Games;