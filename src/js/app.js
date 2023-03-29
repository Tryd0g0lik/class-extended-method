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

class Character {
	constructor(name, type, attack, defence, health = 100, level = 1) {
		this.name = (() => {
			if (name.length >= 2 && name.lrngth <= 10) {
				return name;
			}
			throw new Error("Количество символов должно быть'name' от 2 до 10");
		})();
		this.type = (() => {
			if (type in ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']) {
				return type;
			}
			throw new Error('Заявленный тип не соответствует ни одному из имеющихся: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
		})();
		this.health = health;
		this.level = level;
		this.attack = attack;
		this.defence = defence;
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

export class Swordsman extends Character {
	constructor(name) {
		super(name);
		super.type = 'Swordsman';
		super.attack = 40;
		super.defence = 10;
	}
}
export class Magician extends Character {
	constructor(name) {
		super(name);
		super.type = 'Magician';
		super.attack = 10;
		super.defence = 40;
	}
}
export class Daemon extends Character {
	constructor(name) {
		super(name);
		super.type = 'Daemon';
		super.attack = 10;
		super.defence = 40;
	}
}
export class Undead extends Character {
	constructor(name) {
		super(name);
		super.type = 'Undead';
		super.attack = 25;
		super.defence = 25;
	}
}
export class Zombie extends Character {
	constructor(name) {
		super(name);
		super.type = 'Zombie';
		super.attack = 40;
		super.defence = 10;
	}
}
