var dueDate = 'Juny 1 2016 00:00:00 UTC-03:00';
var days_wrapper = $('.days > div');		
var hours_wrapper = $('.hours > div');
var minutes_wrapper = $('.minutes > div');		
var seconds_wrapper = $('.seconds > div');

function getRemainingTime (endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());	
	var seconds = Math.floor( (t / 1000) % 60 );
	var minutes = Math.floor( (t / 1000 / 60) % 60 );
	var hours = Math.floor( (t / (1000 * 60 * 60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {
		'total': t,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	};
}

function initilizeClock(dueDate){	
	var scheduleFunction = setInterval(function (){
		var date = getRemainingTime(dueDate);
		days_wrapper.removeClass().addClass('c100 small p'+parseInt((date.days*100)/30)).find('span').empty().append(date.days);		
		hours_wrapper.removeClass().addClass('c100 small p'+parseInt((date.hours*100)/24)).find('span').empty().append(date.hours);
		minutes_wrapper.removeClass().addClass('c100 small p'+parseInt((date.minutes*100)/60)).find('span').empty().append(date.minutes);		
		seconds_wrapper.removeClass().addClass('c100 small p'+parseInt((date.seconds*100)/60)).find('span').empty().append(date.seconds);

		if (date.total <= 0){
			clearInterval(scheduleFunction);
		}
	}, 1000);
}

initilizeClock(dueDate);