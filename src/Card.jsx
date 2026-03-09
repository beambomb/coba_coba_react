import Pic from './assets/images.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={Pic}/>
            <h2>Luke</h2>
            <p>I wrote one of the synoptic Gospel</p>
        </div>
    );
}

export default Card