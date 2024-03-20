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
    	console.log(error);
        return error;
    }
}

console.log(validateCount(55));



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
		let p = 1 / 2 * (this.a + this.b + this.c);
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
				return "Ошибка расчета периметра: треугольник не существует";
		},

			get area() {
				return "Ошибка расчета площади: треугольник не существует";
			}
        };
    }
} 


console.log(getTriangle(3, 2, 5));
