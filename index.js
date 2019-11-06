var dwarves =["Doc","Dopey","Bashful","Grumpy"]
function dwarfRollCall(dwarves) {
  var array=[]
  for(var i =0;i<(dwarves.length/2);i++){
  array.push(`${i+1}. ${dwarves[i]} `)
  }
  return array.join("")
  
}

var planeteerCalls =["earth","wind","fire","water","heart"]
function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map(x=>x.toUpperCase()+"!")
  }
  
  
  var words = ["earth","wind","heart","fire"]
  function longPlaneteerCalls(words){
    for(var i=0;i<words.length;i++){
    if (words[i].length > 4){
    return true;
    }
    }
    return false;
  }
  
function findTheCheese(foods) {
	var cheese = ["camembert", "cheddar", "gouda"];
	for(var i = 0; i < foods.length; i++) {
		var cheeseIdx = cheese.indexOf(foods[i]);
		if(cheeseIdx !== -1) {
			return foods[i];
		}
	}
	return "no cheese!";
}
function wordsWithB(words){
  var array =[]
  for(i=0;i<words.length; i++){
    if(words[i].startsWith("b"){
      array.push (words[i]){
      return array;
      }
    }
    }