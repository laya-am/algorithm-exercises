function cakes(recipe, available) {
    let numOfcakesPerIngrArray=[];
    for(let ingr in recipe){
      for(let item in available){
        if(!available[ingr]){
          return 0
           }
        else if(ingr === item){
          const numOfcakesPerIngr= Math.floor(available[item]/recipe[ingr])
          numOfcakesPerIngrArray.push(numOfcakesPerIngr)
        }
      }
    }
    if (numOfcakesPerIngrArray.length ===0){
      return 0
    }
    let MinNumOfCakes = Math.min(...numOfcakesPerIngrArray)
    return MinNumOfCakes
  }