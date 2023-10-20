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
        </article>
    </div>
  )
}

export default Offre