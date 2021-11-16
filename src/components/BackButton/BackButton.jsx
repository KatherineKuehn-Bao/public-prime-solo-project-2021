import { Link } from 'react-router-dom';

//Back button will be changed to a pop up button that will display over each pages unique header 
function BackButton() {

    return (<>
        <div >
            <Link
                className="backBtn"
                to="/home">
                <h1> back </h1>

            </Link>
        </div>
    </>
    )
}



export default BackButton;
