
class SwapiService{
    _apiBase = 'https://swapi.co/api';

    async getResourse (url){
        const res =await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`+`, received ${res.status}`)
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

    async getPlanet(){
        return this.getResourse(`/planets/${id}/`);
    }

    async getAllStarships(){
        const res = await this.getResourse(`/starships/`);
        return res.results;
    }

    async getStarhip(){
        return this.getResourse(`/starhips/${id}/`);
    }
}

const swapi = new SwapiService();
swapi.getAllPeople().then((body)=>{
    console.log(body);
});