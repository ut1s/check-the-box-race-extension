function check() {
  chrome.tabs.executeScript({
    code: 'for(let i = 1; i < 101; i++){$x(`/html/body/div[1]/input[${i}]`)[0].click()}'
  });
/*
  for(let i = 1; i < 101; i++){
    $x(`/html/body/div[1]/input[${i}]`)[0].click()
  }*/
};

function check2() {
  for(let i = 1; i < 101; i++){
    $x(`/html/body/div[1]/div[1]/div[3]/ul[1]/div[${i}]/input`)[0].click()
  }
};


function checking() {
  /*if(document.URL == "https://checkboxrace.com"){
    check()
  } else if(document.URL == "https://its-a-mia.github.io/SunsetSurfer"){
    check2()
  }*/
  check()
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
  e = e || window.event;
  var key = e.which || e.keyCode;
  if(key===32){
    checking();
  }
});