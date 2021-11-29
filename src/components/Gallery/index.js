// Gallery

import Header from '../Header';
import { Link } from 'react-router-dom'
import { useParams } from "react-router";
import GalleryContainer from "./GalleryContainer";
import './styles.css';
import '../../Screens/styles.css'

function Gallery() {

  const params = useParams();
  const planetID = params.planetID;

    return (
        <>
            <Header />
            <section className="planetComponent">
                <div>
                    <div className="planetBox">
                    <h1>{planetID}</h1>
                    <Link to='/travel' className='closeButton'>X</Link>
                    </div>
                    <GalleryContainer />
                    <Link to={`/travel/${planetID}/dates`} className='default'>See Dates</Link>
                </div>
            </section>
        </>
    );
}

export default Gallery; 
