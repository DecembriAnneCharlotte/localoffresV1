import React, { useEffect, useState } from 'react';
import './ListOffre.css';
import Offre from '../Offre/Offre';

const ListeOffre = () => {

    const [offres, setOffres] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3002/data/offres.json")
            .then((response) => response.json())
            .then(data => setOffres(data))
    }, []);



  return (

    <div className='containList'>
    {
        offres.map((offre) => {                             
            return (
                <Offre key={offre.id} location={offre.location} prix={offre.prix} surface={offre.surface} image={offre.image}/>
            );
        })
    }
    </div>

  )
}

export default ListeOffre