function name(){
function date(){
	var date1=new Date();
	var today=date1.getDate();
	
	var value=document.getElementById("date")
	value.innerText=today;
}
date()

function month(){
	var mon=new Date();
	var thismonth=mon.getMonth()+1;
	var months=document.getElementById("month")
	months.innerText=thismonth
}
month()

function year(){
	var varn= new Date();
	var thisyear=varn.getFullYear();
	var valueyear=document.getElementById("year");
	valueyear.innerText=thisyear
}
year()

}
name()

function myfunction(){
	function hour(){
		var hr=new Date();
		var hours= hr.getHours();
		var totalhour=document.getElementById("hour")
		totalhour.innerText=hours
	}
	hour()
	
	function min(){
		var now=new Date();
		var nowmin=now.getMinutes();
	
		var printmin=document.getElementById("minitue")
		printmin.innerHTML=nowmin
		
	}
	min()
	
	function second(){
		var se=new Date ();
		var thissec=se.getSeconds();
		totalsec=document.getElementById("seconts")
		totalsec.innerText=thissec
	}
	second()
	
	
}
setInterval(myfunction,1000)

function am(){
	var mornings=new Date();
	var times=mornings.getHours();
	
	var morning=document.getElementById("mor")
	var evening=document.getElementById("even")
	
	if(times<=12){
		morning.style.backgroundColor="red"
	}
	else{
		evening.style.backgroundColor="red"
	}
}
am()

function week(){
	var we=new Date();
	var sun=we.getDay();
	// console.log(sun)


if(sun==0){
		var weekday=document.getElementById("sun")
		weekday.style.backgroundColor="red"
	}
else if(sun==1){
		var weekday1=document.getElementById("mon")
		weekday1.style.backgroundColor="red"
	}
else if(sun==2){
		var weekday2=document.getElementById("tue")
		weekday2.style.backgroundColor="red"
	}
else if(sun==3){
		var weekday3=document.getElementById("wed")
		weekday3.style.backgroundColor="red"
	}
else if(sun==4){
		var weekday4=document.getElementById("thurs")
		weekday4.style.backgroundColor="red"
	}
else if(sun==5){
		var weekday5=document.getElementById("fri")
		weekday5.style.backgroundColor="red"
	}
else if(sun==6){
		var weekday6=document.getElementById("sat")
		weekday6.style.backgroundColor="red"
	}
}
week()