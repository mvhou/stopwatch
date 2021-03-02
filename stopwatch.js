function milliToSeconds(time1, time2) {
	return ((time1.getTime() - time2.getTime()) / 1000);
}

function stopWatch() {
	let running = false;
	let startedAt;
	let stoppedAt;
	let saveTime = 0;

	this.start = function() {
		if (running) {
			throw new Error('Stopwatch is already running.');
		}
		else {
			running = true;
			startedAt = new Date();
		}
	}
	this.stop = function() {
		if (!running) {
			throw new Error('Stopwatch is not running.');
		}
		else {
			running = false;
			stoppedAt = new Date();
			saveTime = saveTime + milliToSeconds(stoppedAt, startedAt);
		}
	}
	this.reset = function() {
		startedAt = null;
		stoppedAt = null;
		running = false;
		saveTime = 0;
	}
	this.duration = function() {
		if (running) {
			let tempTime = new Date();
			console.log((saveTime + milliToSeconds(tempTime, startedAt)).toFixed(2));
		}
		else if (startedAt && stoppedAt) {
			console.log(saveTime.toFixed(2));
		}
		else {
			throw new Error('Stopwatch has not recorded a time.');
		}
	}
 }

 const sw = new stopWatch();