#pragma strict
var hungerNum:int = 100;
var player:GameObject;
var starve:boolean = true;
var playerLives:int = 30;
var KeysCollected:int;
var jumpheight:float = 2.7;

private var starveAmount:int = 1;

function Start() {
	 KeysCollected = 0;
}

function Update () {
	player.gameObject.GetComponent(CharacterMotor).jumping.baseHeight = jumpheight;
	if (starve && hungerNum>0) {
		Starving ();
	}
	
	if (hungerNum<=0){
		Destroy(this.gameObject);
	}
	
	if (playerLives<=0){
		Destroy(this.gameObject);
	}
	
	if ( KeysCollected>= 5) {
		Destroy(this.gameObject);
	}
	
	
} 

function Starving(){
	
	starve = false;
	
	yield WaitForSeconds (3);
	
	hungerNum-=1;
	
    yield WaitForSeconds (3);
    
    starve = true;
    
    Debug.Log(hungerNum);
}


