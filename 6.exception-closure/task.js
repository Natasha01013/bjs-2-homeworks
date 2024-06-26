﻿// задача 1. Форматтер чисел

function parseCount(value) {
      if(isNaN(value)) {
        throw new Error("Невалидное значение");
      } else {
    return Number.parseFloat(value); 
	}
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

console.log(validateCount(55));
console.log(validateCount('dsdf'));


//Задача 2. Треугольник

class Triangle {
	constructor(a, b, c) {
		if((a + b) < c || (b + c) < a || (a + c) < b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}

		this.a = a;
		this.b = b;
		this.c = c;
	} 

	get perimeter() {
		return this.a + this.b + this.c;
	} 

	get area() {
		let p = 1 / 2 * this.perimeter;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
    	console.error(error);
        return {
        	get perimeter() {
				return "Ошибка! Треугольник не существует";
		},

			get area() {
				return "Ошибка! Треугольник не существует";
			}
        };
    }
} 


console.log(getTriangle(3, 2, 5));
