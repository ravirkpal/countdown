
	const newYear = "1 jan 2022";


    const updateCountdown =()=>{
    
    const counter = new Date(newYear);
    const currentyear = new Date();
    
     const seconds = (counter - currentyear) / 1000;
    
    
     const days = Math.floor(seconds / 3600 / 24) ;
    
     const hours = Math.floor(seconds / 3600 ) % 24 ;
    
     const minu = Math.floor(seconds / 60 ) % 60 ;
    
     const sec = Math.floor(seconds  % 60);
    
    
    
     document.getElementById("Days").innerHTML= days;
      document.getElementById("hours").innerHTML=hello(hours);
       document.getElementById("minutes").innerHTML=hello(minu);
        document.getElementById("second").innerHTML=hello(sec);
    
     
    function hello(time){
        return (time < 10) ? `0${time}` : time;
    }
    
     }
    
    
    
    
    updateCountdown();
    
    
    setInterval(updateCountdown,1000);