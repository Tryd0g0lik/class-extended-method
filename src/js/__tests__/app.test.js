/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import * as app from '../app.js';

describe('the La Croix cans on my desk', () => {
	const can1 = app.cortedHeroes(app.hero); // The Heroes has been sorted by the health
	const heroList = test.each([
		[can1[2], { name: 'мечник', health: 10 }],
		[can1[0], { name: 'маг', health: 100 }],
		[can1[1], { name: 'лучник', health: 80 }],
	]);

	heroList('have all the same properties name ', (b, expected) => {
		expect(b).toEqual(expected);
	});
});

describe('my beverage', () => {
	test('is delicious and not sour', () => {
		const hero = new app.Bowerman('выф');
		// const hero = new app.Bowerman('мечник');
		// const myBeverage = {
		// 	name: hero.name,
		// 	type: hero.type,
		// 	attack: hero.attack,
		// 	defence: hero.defence,
		// 	health: hero.health,
		// 	level: hero.level,
		// };
		expect(new app.Bowerman('dsasd')).toEqual({
			name: hero.name,
			type: hero.type,
			attack: hero.attack,
			defence: hero.defence,
			health: hero.health,
			level: hero.level,
		});
	});
});
