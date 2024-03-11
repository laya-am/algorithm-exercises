function infected(s) {
    let total = 0;
    let infected = 0;
    const continents= s.split("X");
    for (i=0 ; i < continents.length ; i++){
      if(continents[i].includes(1)){
        infected += continents[i].length
      }
        total += continents[i].length
    }
    const percentage= (total === 0 ? 0 : (infected/total)*100)
    return percentage;
  }