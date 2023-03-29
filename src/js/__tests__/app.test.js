/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { hero, cortedHeroes } from '../app.js';

describe('the La Croix cans on my desk', () => {
	const can1 = cortedHeroes(hero); // The Heroes has been sorted by the health
	const heroList = test.each([
		[can1[2], { name: 'мечник', health: 10 }],
		[can1[0], { name: 'маг', health: 100 }],
		[can1[1], { name: 'лучник', health: 80 }],
	]);

	heroList('have all the same properties name ', (b, expected) => {
		expect(b).toEqual(expected);
	});
});
