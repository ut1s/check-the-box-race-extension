console.clear()
console.log("Let's clicking!");
console.log("If this doesn't work try refreshing the page or make an issue on the GitHub page! :)");
console.log("Check popup window for more information!");
console.log("Have fun!");


function check() {
  let inputs = document.getElementsByTagName("input")
  for(let i = 0; i < 100; i++){
    inputs[i].click()
  }
  console.log("Nice! (lmao)")
  console.log("If you want it again sometimes needs to refresh the page but it's just a Ctrl+R!")
};

var addEvent = document.addEventListener ? function(target,type,action){
  if(target){
    target.addEventListener(type,action,false);
  }
} : function(target,type,action){
  if(target){
    target.attachEvent('on' + type,action,false);
  }
}

addEvent(document,'keydown',function(e){
  /* space */
  e = e || window.event;
  var key = e.which || e.keyCode;
  if(key===32){
    check();
  }
});