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

//all button
jQuery(document).ready(function(){
  jQuery('#all').on('click', function(event) {        
      jQuery('#board').toggle('show');
      $(this).css("opacity", 1);
  });
});

jQuery(document).ready(function(){
  jQuery('#artifacts').on('click', function(event) {        
      jQuery('#artifact').toggle('show');
      $(this).css("opacity", 1);
  });
});

jQuery(document).ready(function(){
  jQuery('#rediscover').on('click', function(event) {        
      jQuery('#videos').toggle('show');
      $(this).css("opacity", 1);
  });
});


const buttons = document.querySelectorAll('.nav');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;
        console.log('artifact:', category);
        


        // Perform actions based on the selected category
        // ...
      });
    });

let abc = document.getElementById("pan");
function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
  let xx = 0.6 - (x * ((1300/(200/6)*3)/250));
  let yy = 0.6 - (y * ((2000/(200/6)*3)/250));
  abc.style.transform ='translate(' + xx + 'px, ' + yy + 'px)';
}

