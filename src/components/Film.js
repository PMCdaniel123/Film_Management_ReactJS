import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmPresentation({ listFilms }) {

    return (
        <div>
            <div className="container margin-100">
                <div className="row row-content">
                    {listFilms.map((film) => (
                        <div className="col col-sm-4 col-md-4" key={film.id}>
                            <div className="card">
                                <img src={film.image} alt="" />
                                <h5 style={{ minHeight: '50px', fontWeight: '600' }}>{film.title}</h5>
                                <h6 className="title" style={{ minHeight: '20px' }}>{film.year}</h6>
                                <h6 className="title" style={{ minHeight: '20px' }}>{film.nation}</h6>
                                <Link to={`detail/${film.id}`}>
                                    <p style={{ display: 'block' }}>
                                        <button className="btn btn-dark btn-lg btn-block" style={{ margin: 'auto' }}>Detail</button>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}