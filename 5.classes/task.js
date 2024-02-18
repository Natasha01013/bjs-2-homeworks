//Задача 1 "Печатное издание"

class PrintEditionItem {

	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix(){
		this.state *= 1.5;
	}

	set state(state) {
		if(state < 0) {
			this._state = 0;
		} else if (state > 100) {
			this._state = 100;
		} else {
			this._state = state;
		}
	}

	get state() {
		return this._state;
	}
}


class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}	
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}	
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}	
}




const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100


const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15



//Задача 2. Библиотека 

class Library {
	constructor(name, books) {
		this.name = name;
		this.books = [];
	}

	findBookBy(type, value) {
		const searchBook = this.books.find(book => book[type] === value);
		
		if(searchBook === undefined) {
			return null;
		}

	  return searchBook;
	}

	giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
    }
    return book;
  	}
}

	Library.prototype.addBook = function(book) {
		if(book.state > 30) {
			this.books.push(book);
		}
	}


const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1919, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1919).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3



//Задача 3. Журнал успеваемости *

class Student {
	constructor(name) {
  	this.name = name;
  	this.marks = {};
}

	addMark(mark, subject) {
    if (mark > 5 || mark < 2) {
      return;
    } else {
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }
      return this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    } else {
      return (this.marks[subject].reduce((accumulator, item) => accumulator + item, 0) / this.marks[subject].length);
    }
  }

  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0;
    } else {
      let summMarks = 0;
      subjects.forEach((subject) => {
        summMarks += this.getAverageBySubject(subject);
      });
    return summMarks / subjects.length;
    }
  }
}


let student1 = new Student("Василиса");
let student2 = new Student("Артём");

student1.addMark(5, "химия");
student1.addMark(5, "химия");
student1.addMark(5, "физика");
student1.addMark(4, "физика");
student1.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student1.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student1.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student1.getAverage()); // Средний балл по всем предметам 4.75


student2.addMark(5, "химия");
student2.addMark(5, "химия");
student2.addMark(5, "физика");
student2.addMark(7, "физика"); // Оценка не добавится, так как больше 5
student2.getAverageBySubject("физика"); 
console.log(student2.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student2.getAverage()); 