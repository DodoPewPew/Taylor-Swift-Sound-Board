var numberOfDrums = document.querySelectorAll(".drum").length;

for ( var i = 0; i<numberOfDrums; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       


        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("sounds/blank_space.mp3");
                tom1.play();
                break;

            
            case "a":
                var tom2 = new Audio("sounds/you_belong_with_me.mp3");
                tom2.play()
                break;

            case "s":
                var tom3 = new Audio("sounds/lover.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/lavender_haze.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/red.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("sounds/lwymmd.mp3");
                crash.play();
                break;

            case "l":
                var kick= new Audio("sounds/sparks_fly.mp3");
                kick.play();
                break;


        

            default: console.log(buttonInnerHTML);
                
        }
        
    });

    
    document.querySelectorAll(".drum")[i].addEventListener("mouseover", function(){
        console.log("test");
        
        this.style.color = "#ffffff";

    });

    document.querySelectorAll(".drum")[i].addEventListener("mouseout", function(){
        console.log("test");
        
        this.style.color = "#aec0fc";

    });
}





