
export default class SwapiService{
    _apiBase = 'https://cors-anywhere.herokuapp.com/https://swapi.co/api';

    async getResourse (url){
        const res =await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    async getAllPeople(){
        const res = await this.getResourse(`/people/`);
        return res.results;
    }

    getPerson(id){
        return this.getResourse(`/people/${id}/`);
    }

    async getAllPlanets(){
        const res = await this.getResourse(`/planets/`);
        return res.results;
    }

    async getPlanet(id){
        return this.getResourse(`/planets/${id}/`);
    }

    async getAllStarships(id){
        const res = await this.getResourse(`/starships/`);
        return res.results;
    }

    async getStarhip(id){
        return this.getResourse(`/starhips/${id}/`);
    }
}