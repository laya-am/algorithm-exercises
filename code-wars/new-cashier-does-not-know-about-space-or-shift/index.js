function getOrder(input) {
    //iterate thru menuArray
    // for each item, check how many times it repeats in orders arrays -> num
    // loop num times and add the item to result
    const menuArray = ["Burger", "Fries", "Chicken", "Pizza", "Sandwich", "Onionrings", "Milkshake", "Coke"];
    let result = "";
    for (item of menuArray){
      const numOfOccurance= input.split(item.toLowerCase()).length -1;
      if(numOfOccurance !== 0){
        for (let i = 1; i <= numOfOccurance; i++){
        result = result.concat(" ", item);
        }
      }
    }
    
    return result.trim();
  }