function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();

  





  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " active";
  }







let cyber = document.querySelector(".cyber")
let bg = document.body
let game = document.querySelector(".game")
let assc = document.querySelector(".assc")
let halo = document.querySelector(".halo")
let rdr = document.querySelector(".rdr")
let wit = document.querySelector(".witcher")
let hit = document.querySelector(".hit")
let play = document.querySelector(".play")
let gm = document.querySelector(".game-name")
let gd = document.querySelector(".game-des")
let stab = document.querySelector(".store-tab")
let gtab = document.querySelector(".games-tab")
let mtab = document.querySelector(".media-tab")







mtab.addEventListener("click", function(_a) {
    
  bg.style.backgroundImage = "url('./images/media/mbg.jpg')"

  });
  
gtab.addEventListener("click", function(_a) {
    
  bg.style.backgroundImage = "url('./images/games/bg.jfif')"
  play.style.display = "none";

  });

  stab.addEventListener("click", function(_a) {
    
  bg.style.backgroundImage = "url('./images/games/storebg.jpg')"

  });



 


cyber.addEventListener("click", function(_a) {
    bg.style.backgroundImage = "url('./images/games/cbbg.jpg')";
    play.style.display = "inline-block";
    gm.innerHTML = "Cyberpunk";
    play.style.backgroundColor = "rgb(235, 231, 3)"
    

  });
  

assc.addEventListener("click", function(_a) {
    bg.style.backgroundImage = "url('./images/games/acbg.jpg')";
    play.style.display = "inline-block";
    gm.innerHTML = "Assassians Creed";
    play.style.backgroundColor = "rgb(255 186 107)";
    


  });

  
  halo.addEventListener("click", function(_a) {
    bg.style.backgroundImage = "url('./images/games/hlbg.jpg')";
    play.style.display = "inline-block";
    gm.innerHTML = "Halo Infinite";
    play.style.backgroundColor = "rgb(167 213 0)";
    


  });

  rdr.addEventListener("click", function(_a) {
    bg.style.backgroundImage = "url('./images/games/rbg.jpg')";
    play.style.display = "inline-block";
    gm.innerHTML = "Red Dead";
    play.style.backgroundColor = "rgb(244 143 41)";
    

  });
  
  wit.addEventListener("click", function(_a) {
    bg.style.backgroundImage = "url('./images/games/wbg.jpg')";
    play.style.display = "inline-block";
    gm.innerHTML = "Red Dead";
    play.style.backgroundColor = "rgb(227 227 227)";
    

  });

  hit.addEventListener("click", function(_a) {
    bg.style.backgroundImage = "url('./images/games/hbg.jpg')";
    play.style.display = "inline-block";
    gm.innerHTML = "Hitman III";
    play.style.backgroundColor = "rgb(255 38 51)";
    
    
    
    
    
  });
  
  
  
  

  
  
 
  // bg.addEventListener("click", function(_a) {
  //   bg.style.backgroundImage = "url('bg.jfif')";


  // });
  

