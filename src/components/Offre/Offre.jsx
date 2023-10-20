import React from 'react';
import './Offre.css';

const Offre = (props) => {
  return (
    <div className='containOffre'>
        <article>
            <h2>{props.location}</h2>
            <img src={props.image} alt='Photo des salles à louer'></img>
            <p>Prix : {props.prix} €</p>
            <p>Surface : {props.surface} m2</p>
            <input type='checkbox' className="heart" id='heart'/>
            <label for="heart">❤</label>    
        </article>
    </div>
  )
}

export default Offre