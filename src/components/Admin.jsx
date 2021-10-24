import React from 'react';

const Admin = () => {
    return (
        <><div className="r">
          <div className="row b">
          <h3>Admin Page</h3>
              <div className="col-lg-6 a">
              <h3>Home</h3>
              <h3>Movies</h3>
              <h3>Games</h3>

              </div>
              <div className="col-lg-6 a">
              <form >
                  <input type="file" placeholder="upload image"/><br />
                  <input type="text" placeholder="Movie/Game Name"/><br/>
                  <button className="btn btn-success">Add</button>

              </form>

              </div>

          </div> 
          </div>
        </>
    );
};

export default Admin;