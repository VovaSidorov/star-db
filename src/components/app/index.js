import React,{Component} from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import ErrorIndicator from "../errorIndicator";
import PeoplePage from "../peoplePage";

import './style.css';
import ErrorButton from "../errorButton";
import SwapiService from "../../servises/swapi-servise";


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError:false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    };

    componentDidCatch() {
        this.setState({hasError:true})
    }

    render() {

        if (this.state.hasError){
            return <ErrorIndicator/>
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <div>
                <Header />
                <div className="container">
                    { planet }
                    <button
                        className="toggle-planet btn btn-warning btn-lg mb-4"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton />
                    <PeoplePage/>

                    <div className="row mb2 mt-2">
                        <div className="col-md-6">
                            <ItemList onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}/>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId={this.state.selectedPerson} />
                        </div>
                    </div>

                    <div className="row mb2 mt-2">
                        <div className="col-md-6">
                            <ItemList onItemSelected={this.onPersonSelected}
                                      getData={this.swapiService.getAllStarships}/>
                        </div>
                        <div className="col-md-6">
                            <PersonDetails personId={this.state.selectedPerson} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}