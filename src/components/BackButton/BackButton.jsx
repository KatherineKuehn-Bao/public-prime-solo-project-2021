import { Link } from 'react-router-dom';

//Back button will be changed to a pop up button that will display over each pages unique header 
function BackButton() {

    return (<>
        <div className="nav">
            <Link to="/home">
                <h2 className="nav-title"> back </h2>
                
            </Link>
        </div>
    </>
    )
}



export default BackButton;
