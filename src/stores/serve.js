export default class CarService {

	getCarsSmall() {
		return fetch.get('demo/data/cars-small.json').then(res => res.json()).then(d => d.data);
	}

	getCarsMedium() {
		return fetch.get('demo/data/cars-medium.json').then(res => res.json()).then(d => d.data);
	}

	getCarsLarge() {
		return fetch.get('demo/data/cars-large.json').then(res => res.json()).then(d => d.data);
	}
}