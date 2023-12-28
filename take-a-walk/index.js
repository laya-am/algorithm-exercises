function isValidWalk(walk) {

    if(walk.length !== 10) return false;
    
    const direcN = walk.filter(direc => direc === "n");
    const direcS = walk.filter(direc => direc === "s");
    const direcE = walk.filter(direc => direc === "e");
    const direcW = walk.filter(direc => direc === "w");
    
    return direcN.length === direcS.length && direcE.length === direcW.length;
  }