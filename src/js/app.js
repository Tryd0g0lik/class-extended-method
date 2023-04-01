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
		this.checks(name, type);
		this.health = 100;
		this.level = 1;
		this.attack = attack;
		this.defence = defence;
	}

	async checks(n, t) {
		// console.log('t: ', t);
		await (() => {
			const re = /^\W*[^\d{1}\s{1}/\\_=.]/i;
			if (typeof n === 'string' && n.length >= 2 && n.length <= 10
				&& re.test(n) === true) {
				this.name = n;
			} else {
				throw new Error(`Cо свойством {name: '${n}'} что-то не верно!`);
			}
		})();
		await (() => {
			const typesList = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];
			for (let i = 0; i < typesList.length; i += 1) {
				if (t === typesList[i]) {
					this.type = t;
					return undefined;
				}
			}
			throw new Error(`Упс! Данный {type: '${t}'} не предусмотрен приложением!`);
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
	constructor(name, type = 'Bowman', attack = 25, defence = 25) {
		super(name, type, attack, defence);
		this.type = type; // 'Bowman';
		this.attack = attack;
		this.defence = defence;
	}
}


// зАКОММЕНТИРОВАть ОДНОТИПНЫЕ функции для работы с тестированием
export class Swordsman extends Character {
	constructor(name, type = 'Swordsman', attack = 40, defence = 10) {
		super(name, type, attack, defence);
		this.type = type; // 'Swordsman';
		this.attack = attack;
		this.defence = defence;
	}
}

export class Magician extends Character {
	constructor(name, type = 'Magician', attack = 10, defence = 40) {
		super(name, type, attack, defence);
		this.type = type; // 'Magician';
		this.attack = attack;
		this.defence = defence;
	}
}

export class Daemon extends Character {
	constructor(name, type = 'Daemon', attack = 10, defence = 40) {
		super(name, type, attack, defence);
		this.type = type; // 'Daemon';
		this.attack = attack;
		this.defence = defence;
	}
}

export class Undead extends Character {
	constructor(name, type = 'Undead', attack = 25, defence = 25) {
		super(name, type, attack, defence);
		this.type = type; // 'Undead';
		this.attack = attack;
		this.defence = defence;
	}
}

export class Zombie extends Character {
	constructor(name, type = 'Zombie', attack = 40, defence = 10) {
		super(name, type, attack, defence);
		this.type = type; // 'Zombie';
		this.attack = attack;
		this.defence = defence;
	}
}
