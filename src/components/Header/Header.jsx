import { Link } from 'react-router-dom';

function Header() {

    return (<>
        <div className="nav">
            <Link to="/home">
                <h2 className="nav-title"> back </h2>
            </Link>
        </div>
    </>
    )
}



export default Header;



