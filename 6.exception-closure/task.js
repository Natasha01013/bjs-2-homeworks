// задача 1. Форматтер чисел

function parseCount(value) {
      if(value === NaN) {
        throw new Error("Невалидное значение");
      }
    return Number.parseFloat(value); 
  }

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}



//Задача 2. Треугольник

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
	} 

	rulerTriangle() {
		if((a + b) < c || (b + c) < a || (a + c) < b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	} 

	get area() {
		let p = 1 / 2 * (this.a + this.b + this.c);
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
	}
}

function getTriangle(a, b, c) {
    try {
        return Triangle;
    } catch (error) {
        return error;
    }
} 

