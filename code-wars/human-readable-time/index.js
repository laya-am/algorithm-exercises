function humanReadable (seconds) {
    //divide by 60 and figure out seconds and mins
    //divide the mins by 60 and figure out mins and hrs
    
    let sec = seconds % 60;
    sec <10 ? sec= `0${sec}` : sec= sec;
    
    let temp = Math.floor(seconds /60);
    let mins= temp % 60;
    mins <10 ? mins= `0${mins}` : mins= mins;
    
    let hrs= Math.floor(temp/60);
      hrs <10 ? hrs= `0${hrs}` : hrs= hrs;
    
    return`${hrs}:${mins}:${sec}`;
    
    }