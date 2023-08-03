import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page you requested is not found!!</p>
            <Link to='/'>Back to home</Link>
        </div>
    );
}

export default NotFound;