import React  from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (

    <div>
    {props.children}

    {/*


     <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Scotch Books</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/books">Book</Link></li>
              <li><Link to="/Planes">Planes</Link></li>


            </ul>
          </div>
        </div>
      </nav>

      {props.children}

    </div> */}
    <Link to="/Planes">Planes</Link>
    </div>
  );
};

export default App;

