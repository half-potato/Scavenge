#pragma strict
	 
var color : Color;
var trans:boolean =  true;

var run:boolean = true;

function Start(){
    color = Color.white;
    guiText.material.color.a = 0;
}


function Update(){
	if(run){
		if(trans == true){
	    	FadeIn();
	    } else {
	    	FadeOut();
	    }
	    
    if(guiText.material.color.a >= 1){
	    
	    	trans = false;
    
	    }
	    if(guiText.material.color.a <= 0){
	    
	    	trans = true;
	    
	    }
    }
}

function FadeIn(){
 
    while (guiText.material.color.a < 1){
 		guiText.material.color.a += 0.1 * Time.deltaTime * 0.05;
    yield;
    }
} 
 
function FadeOut(){
 
    while (guiText.material.color.a > 0){
       guiText.material.color.a -= 0.1 * Time.deltaTime * 0.05;
    yield;
    }
    if(guiText.material.color.a <=0 ){
    	run = false;
    }
    
}
