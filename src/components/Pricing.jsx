import React from 'react';

const Pricing = () => {
    return (
        <>
            <h1>Order your movie/games here</h1>
            <div className="pricing">
                <form>
                    <label>Enter Movie/Games Name</label>
                    <input type="text"/>
                    <button onClick={()=>{alert("Product ordered successfully")}}>Order now</button>
                </form>
            </div>
        </>
    );
};

export default Pricing;