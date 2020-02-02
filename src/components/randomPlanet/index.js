import React, { Component } from 'react';

import SwapiService from '../../servises/swapi-servise';

import './style.css';

export default class RandomPlanet extends Component {



    render() {

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image"
                     src={`https://starwars-visualguide.com/assets/img/planets/2.jpg`} />
                <div>
                    <h4>Planet Name</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>1354</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>5</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>126</span>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}