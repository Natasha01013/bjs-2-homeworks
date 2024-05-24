class AlarmClock {
	constructor(alarmCollection, intervalId){
		this.alarmCollection = [];   //свойство для хранения коллекции звонков
		this.intervalId = null;      //свойство для хранения id таймера
	}

	//добавляет новый звонок в коллекцию существующих
	addClock(time, callback){
		if (time == undefined || callback == undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		} 

		const sameTime = this.alarmCollection.find(item => item.time === time); 
		if(sameTime) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true  //звонок может быть выполнен
		});
	}

	
	//удаляет звонки по определённому времени, которые повтояряются
	removeClock(time){
		this.alarmCollection = this.alarmCollection.filter(item => {
			return item.time !== time;
		});
	}

	
	//возвращает текущее время в строковом формате HH:MM
	getCurrentFormattedTime(){
		const currentTime = new Date();   
		let hours = currentTime.getHours(); 
		let minutes = currentTime.getMinutes();

		if(hours < 10) {
			hours = '0' + hours;
		}	
		if(minutes < 10) {
			minutes = '0' + minutes;
		}

		return hours + ':' + minutes;
	}

	//запускает будильник
	start(){
		if(this.intervalId != undefined) {
			return;
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((item) => {
					if ((this.getCurrentFormattedTime() == item.time) && item.canCall == true) {
						item.canCall = false;
						item.callback();
					} 
				});
			}, 1000);
		}
	}

	//останавливает выполнение интервала будильника
	stop(){
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	//сбрасывает возможность запуска всех звонков
	resetAllCalls(){
		this.alarmCollection.forEach(item => {
			item.canCall = true;
	});
	}

	//удаляет все звонки
	clearAlarms(){
		this.stop();
		this.alarmCollection = [];
	}
}



const alarmClockLullaby = new AlarmClock();

// функция callback
function ringBell(message) {
	console.log('Вставай, ' + message);
}

//добавление будильника на определенное время
alarmClockLullaby.addClock('06:30', () => ringBell('первый будильник'));
alarmClockLullaby.addClock('06:45', () => ringBell('второй будильник'));
alarmClockLullaby.addClock('07:00', () => ringBell('ну уже точно пора вставать'));

console.log('alarmClockLullaby', alarmClockLullaby);

//запуск всех звонков
alarmClockLullaby.start();

//остановка всех звонков
//alarmClockLullaby.stop();