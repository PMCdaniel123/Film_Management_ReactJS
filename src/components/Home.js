import React, { Component } from 'react';
import { listFilms } from '../shared/ListFilms';
import FilmPresentation from './Film';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            films: listFilms
        }
    }

    render() {
        return <FilmPresentation listFilms={this.state.films} />
    }

}

export default Home