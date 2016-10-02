

var time = new Timers("session","break","display");
//time.startTimer();

function Timers(sid,bid,did){
	 session = 25;
	breakTime = 5;
	started = false;
	onBreak = false;
	myVar = null;
	sessDisplay = document.getElementById(sid);
	breakDisplay = document.getElementById(bid);
	display = document.getElementById(did);
	display.innerHTML = session;
	this.getSession = function(){
		return session;
	}
	this.getBreak = function(){
		return breakTime;
	}
	this.incrementSess = function(){
		if(!started){
		session++;
		sessDisplay.innerHTML = session;
		display.innerHTML = session;}
	}
	this.decSess = function(){
		if(!started){
		if( session > 1){
			session--;
			sessDisplay.innerHTML = session;
			display.innerHTML = session;
		}}
	}
	this.incrementBreak = function(){
		if(!started){
		breakTime++;
		breakDisplay.innerHTML = breakTime;
		}
	}
	this.decBreak = function(){
		if(!started){
		if( breakTime > 1){
			breakTime--;
			breakDisplay.innerHTML = breakTime;
		}}
	}
	this.startTimer = function(){
		if(started){
			started = false;
			clearInterval(myVar);
			session = 25;
			display.innerHTML = session;
			document.getElementById("displayHolder").style.background = "#0E0B16";
			sessDisplay.innerHTML = session;
		}
		else{
			started = true;
			
		var add = myTimer(session);
		 myVar = setInterval(add, 1000);
		 document.getElementById("displayHolder").style.background = "#4717F6";


		function myTimer(min) {
  			var m = min;
  			var s = 0;

		return function(){
			if( m <= 0 && s <= 0){
				clearInterval(myVar);
				if( !onBreak){
				add = myTimer(breakTime);
		 		myVar = setInterval(add, 1000);
				
				onBreak = true;
				document.getElementById("displayHolder").style.background = "#FF00FF";
				}
				else{
					add = myTimer(session);
		 		myVar = setInterval(add, 1000);
				document.getElementById("displayHolder").style.background = "#4717F6";
				onBreak = false;

				}
			}
			else if(s <= 0 ){
				s = 59;
				m -=1;
		}
		display.innerHTML = m + " : " + ((s < 10)? ('0' + s): s);
		s -= 1;}
			}
		}// end if
		}// end of startTimer function
		

		

		
}// end of Timer Constructor





	

