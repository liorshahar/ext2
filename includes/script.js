var globalCounter = 37; 

function square(){
    var newObj = document.createElement("article");
    var sectionObj = document.getElementById("mainSection");
    var clicked = false;
    var appendSquare = function(){
        newObj.addEventListener("click" , function(){
            var temp = this.style.backgroundImage;
            if(temp === 'url("images/white_plus.png")'){
                this.style.backgroundImage = "none";
                globalCounter++;
                squareManager();
            }
            else if(!clicked){
                this.style.backgroundImage = "url('images/white_star.png')";
                clicked = true;
            }
            else{
                this.style.backgroundImage = "none";
                clicked = false;
            }
        })
        sectionObj.appendChild(newObj);

    }
    appendSquare();


}

function addPlus(obj){
     obj.style.backgroundImage = "url('images/white_plus.png')";
}

function squareManager(){
    if(globalCounter == 37){
        for(var i = 0 ; i < globalCounter ; i++){
            var ob = new square(); 
        }
    }
    else{
        var ob = new square(); 
    }
    var lastObj = document.getElementsByTagName("article")[globalCounter - 1];
    addPlus(lastObj);
}


    function init(){
    squareManager()
}
 (function(){
        console.log("init function");
        init();
    })();


