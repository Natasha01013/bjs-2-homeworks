class AlarmClock {
	constructor(alarmCollection, intervalId){
		this.alarmCollection = [];   //свойство для хранения коллекции звонков
		this.intervalId = null;      //свойство для хранения id таймера
	}

	//добавляет новый звонок в коллекцию существующих
	addClock(time, callback){
		if (time === undefined || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		} 

		const sameTime = this.alarmCollection.find(item => item.time === time);
		if(sameTime) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});
	}

	
	//удаляет звонки по определённому времени
	removeClock(time){
		this.alarmCollection = this.alarmCollection.filter(item => {
			return item.time !== time;
		});
	}

	
	//возвращает текущее время в строковом формате HH:MM
	getCurrentFormattedTime(){
		let currentTime = new Date();
		let hour = currentTime.getHours(); 
		let minute = currentTime.getMinutes();

		if(hour < 10) {
			hour = '0' + hour;
		}	
		if(minute < 10) {
			minute = '0' + minute;
		}

		return hour + minute;
	}

	//запускает будильник
	start(){
		if(this.intervalId !== undefined) {
			return
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach((item) => {
					if ((this.getCurrentFormattedTime() = item.time) && item.canCall) {
						item.canCall = false;
						item.callback();
					} 
				});
			}, 5000);
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
	console.log('Пора вставать')
}

//добавление будильника на определенное время
alarmClockLullaby.addClock('06:30', () => ringBell('первый будильник'));
alarmClockLullaby.addClock('06:45', () => ringBell('второй будильник'));
alarmClockLullaby.addClock('07:00', () => ringBell('теперь точно пора вставать'));

//запуск всех звонков
alarmClockLullaby.start();