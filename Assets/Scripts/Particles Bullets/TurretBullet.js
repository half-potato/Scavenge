#pragma strict

var lifeSpan:float = 3;
var player:GameObject;

function Start () {

}

function Update () {
	lifeSpan-=Time.deltaTime;
	if(lifeSpan<0){
		lifeSpan = 3;
	}
}

function OnCollisionEnter(col:Collision){
	if(col.gameObject.tag == "Player"){
		col.gameObject.GetComponent(PlayerStats).playerLives-=1;
		Destroy(gameObject);
	}
}
