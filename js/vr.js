window.onload = function() {
    vrdisplay();
}

function vrdisplay() {
    var x = 0;
    var vrImg = document.querySelector("#img1");
    vrImg.onmousedown = function(ev) {
        var ev = ev || event;
        var disX = ev.clientX - x;
        vrImg.onmousemove = function(ev) {
            var ev = ev || event;
            x = ev.clientX - disX;
            var l = parseInt(-x/10);
            if(l > 0) {
                l = l%36+1
            } else {
                l = (l + -36*(Math.floor(l/36))) +1;
                }
            vrImg.src = "img/vr" + l + ".jpg";
            return false;
        }
                
            vrImg.onmouseup = function() {
                vrImg.onmouseup = null;
                document.onmousemove = null;
            }
            return false;
                
        }
  }     
              
    
       
       
    
    
