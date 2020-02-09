import React,{Component} from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import ErrorIndicator from "../errorIndicator";
import PeoplePage from "../peoplePage";

import './style.css';


export default class App extends Component {
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
                    <PeoplePage/>
                </div>
            </div>
        );
    }
}