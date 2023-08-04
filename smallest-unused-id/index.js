function nextId(ids){
    //this will be awesome!
    ids.sort();
    for (let i=0; i<ids.length; i++){
      if(!ids.includes(i) ){
        return i
      }
    }
    let max= Math.max(...ids)+1;
    return max;
  }