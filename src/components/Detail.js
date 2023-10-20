import React from 'react';
import { useParams } from 'react-router-dom';
import { listFilms } from '../shared/ListFilms';

export default function Detail() {

    const filmClicked = useParams();

    const film = listFilms.find(obj => {
        return obj.id === filmClicked.id;
    });


    return (
        <div className="container margin-100">
            <div className="row film-detail">
                <a className="close" href="/" style={{ fontSize: '24px', backgroundColor: 'red', color: 'white', width: '36px', height: '36px', margin: 'auto', padding: '0', alignContent: 'center' }}>&times;</a>

                <div className='badge'>{film.title}</div>
                <div className='product-tumb'>
                    <img src={`../${film.image}`} alt='' />
                </div>

                <div className='product-details'>
                    <h5 style={{ minHeight: '50px', fontWeight: '600' }}>{film.title}</h5>
                    <h6>{film.year}</h6>
                    <h6>{film.nation}</h6>
                    <p>{film.info}</p>
                    <div className='product-bottom-details'></div>
                </div>
            </div>
        </div>
    )
}