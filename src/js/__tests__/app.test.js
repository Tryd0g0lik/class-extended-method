// => How write a test for a testing async method or function?

/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import * as app from '../app.js';

// cortedHeroes(h){...}
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


describe('Through a Bowerman method will been checking a "name" properte', () => {
	test('test 1', () => {
		// const hero = new app.Bowerman('выф');
		expect(() => {
			new app.Bowerman('выф');
		}).not.toThrow();
	});
});


// class Character.levelUp()
describe('Methods will been testing of the Character class', () => {
	test(' levelUp method and a health properte - With Errors Test № 1 ', () => {
		expect(() => {
			const obj = new app.Bowerman('Маг');
			obj.health = 0; // Переписываем св-во объекта
			obj.levelUp();
		}).toThrow();
	});

	test('levelUp mrthod and a health properte - With Errors Test №2', () => {
		expect(() => {
			const obj = new app.Bowerman('Маг');
			obj.health = 0; // Переписываем св-во объекта
			obj.levelUp();
		}).toThrow();
	});

	test('levelUp method and a health properte - With Errors Test №3', () => {
		expect(() => {
			const obj = new app.Bowerman('Маг');
			obj.health = -1; // Переписываем св-во объекта
			obj.levelUp();
		}).toThrow();
	});

	test('levelUp method and a health properte - Eithout Errors Test №3', () => {
		expect(() => {
			const obj = new app.Bowerman('Маг');
			obj.health = 1; // Переписываем св-во объекта
			obj.levelUp();
		}).not.toThrow();
	});

	test('levelUp method and a health properte - Eithout Errors Test №4', () => {
		expect(() => {
			const obj = new app.Bowerman('Маг');
			obj.health = 100; // Переписываем св-во объекта
			obj.levelUp();
		}).not.toThrow();
	});

	test('levelUp method and a health properte - Eithout Errors Test №5', () => {
		expect(() => {
			const obj = new app.Bowerman('Маг');
			obj.health = 1101; // Переписываем св-во объекта
			obj.levelUp();
		}).not.toThrow();
	});
});

describe('The damage method will been tasting for a class Character', () => {
	test('Testing', () => {
		expect(() => {
			const obj = new app.Bowerman('Magus');
			obj.damage(2);
		}).not.toThrow();
	});

	test('Testing 2', () => {
		expect(() => {
			const obj = new app.Bowerman('Magus');
			obj.health = -10;
			obj.damage(2);
		}).toThrow();
	});

	test('Test 3', () => {
		expect(() => {
			const obj = new app.Bowerman('Magus');
			obj.health = 0;
			obj.damage(2);
		}).not.toThrow();
	});

	test('Test 4 ', () => {
		expect(() => {
			const obj = new app.Bowerman('Magus');
			obj.health = 1000;
			obj.damage(2);
		}).not.toThrow();
	});
});
