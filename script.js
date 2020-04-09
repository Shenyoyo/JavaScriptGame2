var boll_x =0;
    var boll_y =0;
    var mouse_x =0;
    var mouse_y =0;
    var vel_x=0;
    var vel_y=0;

    const docStyle = document.documentElement.style;
    const strength = 0.15; //球體移動為滑鼠的15%
    const drag =0.15 ;



    document.addEventListener("mousemove",(event)=>{
        mouse_x=event.clientX;
        mouse_y=event.clientY;

    });

    function delayMotion(){

        var distance_x = mouse_x - boll_x  ;

        distance_x *= strength;
        vel_x *= drag;
        vel_x +=distance_x;

        boll_x +=vel_x;
        var distance_y = mouse_y - boll_y  ;

        distance_y *=strength;
        vel_y *= drag;
        vel_y +=distance_y;
        
        boll_y +=vel_y;

        // console.log(boll_x);
        // console.log(boll_y);

        docStyle.setProperty("--mouse-x",boll_x);
        docStyle.setProperty("--mouse-y",boll_y);
        docStyle.setProperty("--sacle",(vel_x + vel_y) * strength);
        
        requestAnimationFrame(delayMotion);

        
    }

    delayMotion();