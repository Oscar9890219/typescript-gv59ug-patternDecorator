// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
``;

import BaseEnemy from './BaseEnemy';
import { HelmetDecorator } from './HelmetDecorator';
import { ArmourDecorator } from './ArmourDecorator';
// class enemy
let enemy = new BaseEnemy();
let computedDamaged1 = enemy.takeDamage();
console.log(computedDamaged1);

let enemyWithHelmet = new HelmetDecorator(enemy);
let computedDamaged2 = enemyWithHelmet.takeDamage();
console.log(computedDamaged2);

let enemyWithHelmetAndArmour = new ArmourDecorator(enemyWithHelmet);
let computedDamaged3 = enemyWithHelmetAndArmour.takeDamage();

console.log(computedDamaged3);
