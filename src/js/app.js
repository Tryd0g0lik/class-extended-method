export const hero = [
	{ name: 'мечник', health: 10 },
	{ name: 'маг', health: 100 },
	{ name: 'лучник', health: 80 },
];

export function cortedHeroes(h) {
	try {
		if (!!h.length > 0) {
			hero.sort((a, b) => {
				if (a.health > b.health) {
					return -1;
				}
				if (a.health < b.health) {
					return 1;
				}
				return 0;
			});

			return h;
		}
		return h;
	} catch (e) {
		console.log(e.message);
		return `${(e.message)}`;
	}
}

// HOMEWORKs
export class Character {
	constructor(name, type, attack, defence) {
		this.type = type;
		this.checks(name);
		this.health = 100;
		this.level = 1;
		this.attack = attack;
		this.defence = defence;
	}

	async checks(n) {
		await (() => {
			const re = /^\W*[^\d{1}\s{1}/\_=.]/i;
			if (typeof n === 'string' && n.length >= 2 && n.length <= 10
				&& re.test(n) === true) {
				this.name = n;
			} else {
				throw new Error(`Cо свойством {name: '${n}'} что-то не верно!`);
			}
		})();
	}

	levelUp() {
		if (this.health > 0) {
			const attacks = this.attack;
			const defences = this.defence;
			this.level += 1;
			this.attack = attacks + (attacks * 0.2);
			this.defence = defences + (defences * 0.2);
			this.health = 100;
		} else if (this.health <= 0) {
			throw new Error(`Error: Нельзя повысить level ${this.level}  умершего!`);
		}
	}

	damage(points) {
		if (this.health >= 0) {
			this.health -= points * (1 - this.defence / 100);
		} else if (this.health < 0) {
			throw new Error('Error: Упс! Что-то не так :( ');
		}
	}
}

export class Bowerman extends Character {
	constructor(name) {
		super(name);
		super.type = 'Bowman';
		super.attack = 25;
		super.defence = 25;
	}
}

// зАКОММЕНТИРОВАНЫ ОДНОТИПНЫЕ функции для проверки методов тестированием

// export class Swordsman extends Character {
// 	constructor(name) {
// 		super(name);
// 		super.type = 'Swordsman';
// 		super.attack = 40;
// 		super.defence = 10;
// 	}
// }
// export class Magician extends Character {
// 	constructor(name) {
// 		super(name);
// 		super.type = 'Magician';
// 		super.attack = 10;
// 		super.defence = 40;
// 	}
// }
// export class Daemon extends Character {
// 	constructor(name) {
// 		super(name);
// 		super.type = 'Daemon';
// 		super.attack = 10;
// 		super.defence = 40;
// 	}
// }
// export class Undead extends Character {
// 	constructor(name) {
// 		super(name);
// 		super.type = 'Undead';
// 		super.attack = 25;
// 		super.defence = 25;
// 	}
// }
// export class Zombie extends Character {
// 	constructor(name) {
// 		super(name);
// 		super.type = 'Zombie';
// 		super.attack = 40;
// 		super.defence = 10;
// 	}
// }

// // const heros = new Bowerman('Magus');
// // console.log(heros);
// // console.log(heros.name);

