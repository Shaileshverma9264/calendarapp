function calender() {
	var day = ['रविवार','सोमवार','मंगलवार','बुधवार','बृहस्पतिवार','शुक्रवार','शनिवार'];
	var month = ["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितंबर","अक्टूबर","नवंबर","दिसंबर"];
	var d = new Date();
	var hours = d.getHours();
	var mins = d.getMinutes();
	var secs = d.getSeconds();
	if (hours<10){
		hours = '0'+hours;
	}
	if (mins<10){
		mins = '0'+mins;
	}
	if (secs<10){
		secs = '0'+secs;
	}

	setText('calender-day',day[d.getDay()]);
	setText('calender-date',d.getDate());
	setText('calender-month-year', month[d.getMonth()]+' '+(1900+d.getYear()));
	setText('time',hours+":"+mins+":"+secs);
};
setInterval(calender, 1000)

function setText(id, val) {
	if(val<10){
		val='0'+val;
	}
	document.getElementById(id).innerHTML=val;
};

window.onload=calender;
