import data from '../data.json';

class SuperHero {
    constructor(id) {
        // find the super hero in the list
        const heroData = data.superHeros.find(hero => hero.id === id);
        if (!heroData) {
            // if not found, error message
            throw new Error(`Superhero not found ${id}`);
        }
        // Set properties 
        this.id = heroData.id;
        this.name = heroData.nom;
        this.superpower = heroData.pouvoir;
        this.age = heroData.age;
        this.email = heroData.email;
    }

    // Getters and setters
    // id
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    // name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    // superpower
    get superpower() {
        return this._superpower;
    }
    set superpower(value) {
        this._superpower = value;
    }

    // Convert to JSON
    toJSON() {
        return {
            id: this.id,
            nom: this.name,
            pouvoir: this.superpower,
            age: this.age,
            email: this.email
        };
    }
}

export default SuperHero;
