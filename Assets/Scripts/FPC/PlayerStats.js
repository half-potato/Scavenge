#pragma strict
var hungerNum:int = 100;
var player:GameObject;
var starve:boolean = true;
private var starveAmount:int = 1;

function Update () {
	if (starve && hungerNum>0) {
		spawnMeteor ();
	}
	
	if (hungerNum<=0){
		Destroy(this.gameObject);
	}
}

function spawnMeteor(){
	
	starve = false;
	
	yield WaitForSeconds (3);
	
	hungerNum-=1;
	
    yield WaitForSeconds (3);
    
    starve = true;
    
    Debug.Log(hungerNum);
}


