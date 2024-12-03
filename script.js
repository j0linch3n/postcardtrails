function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function Hide(HideID) 
{
  HideID.style.display = "none"; 
}

jQuery(document).ready(function(){
  jQuery('#about').on('click', function(event) {        
      jQuery('#Card').toggle('show');
  });
});

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

jQuery(document).ready(function() {
  // Check the 'skipAbout' parameter
  if (getQueryParam('skipAbout') === 'true') {
      // Skip showing the aboutCard
      Hide(document.getElementById("Card"));
  } else if (!localStorage.getItem('hasVisited')) {
      // First visit: Show the aboutCard
      Show(document.getElementById("Card"));
      localStorage.setItem('hasVisited', 'true');
  } else {
      // Not the first visit: Hide the aboutCard
      Hide(document.getElementById("Card"));
  }
});

// //all button
// jQuery(document).ready(function(){
//   jQuery('#all').on('click', function(event) {        
//     document.getElementById("artifact").style.display = "block";
//     document.getElementById("anecdote").style.display = "block";
//     document.getElementById("videos").style.display = "block";
//     $(this).css("opacity", 1);
//     $('#anedotes').css("opacity", 0.5);
//     $('#rediscover').css("opacity", 0.5);
//     $('#artifacts').css("opacity", 0.5);
//   });
// });
// //artifact button
// jQuery(document).ready(function(){
//   jQuery('#artifacts').on('click', function(event) {        
//     document.getElementById("artifact").style.display = "block";
//     document.getElementById("anecdote").style.display = "none";
//     document.getElementById("videos").style.display = "none";
//       $(this).css("opacity", 1);
//       $('#anedotes').css("opacity", 0.5);
//       $('#rediscover').css("opacity", 0.5);
//       $('#all').css("opacity", 0.5);
//   });
// });
// //video button
// jQuery(document).ready(function(){
//   jQuery('#rediscover').on('click', function(event) {        
//     document.getElementById("artifact").style.display = "none";
//     document.getElementById("anecdote").style.display = "none";
//     document.getElementById("videos").style.display = "block";
//       $(this).css("opacity", 1);
//       $('#anedotes').css("opacity", 0.5);
//       $('#artifacts').css("opacity", 0.5);
//       $('#all').css("opacity", 0.5);
//   });
// });
// //anedote button
// jQuery(document).ready(function(){
//   jQuery('#anedotes').on('click', function(event) {        
//     document.getElementById("artifact").style.display = "none";
//     document.getElementById("anecdote").style.display = "block";
//     document.getElementById("videos").style.display = "none";
//       $(this).css("opacity", 1);
//       $('#rediscover').css("opacity", 0.5);
//       $('#artifacts').css("opacity", 0.5);
//       $('#all').css("opacity", 0.5);
//   });
// });

// let abc = document.getElementById("pan");
// function myFunction(e) {
//   let x = e.clientX;
//   let y = e.clientY;
//   let coor = "Coordinates: (" + x + "," + y + ")";
//   document.getElementById("demo").innerHTML = coor;
//   let xx = 0.6 - (x * ((1300/(200/6)*3)/250));
//   let yy = 0.6 - (y * ((2000/(200/6)*3)/250));
//   abc.style.transform ='translate(' + xx + 'px, ' + yy + 'px)';
// }




