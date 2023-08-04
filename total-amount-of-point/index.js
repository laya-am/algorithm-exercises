function points(games) {
    let points= 0;
    let newGames= games.map(game => game.split(":"));
    console.log(newGames);
    newGames.map(game => {
      if(game[0]>game[1]){
        return points+=3;
      }else if(game[0]<game[1]){
        return
      }else{
        return points++;
      }
    });
    return points;
  };