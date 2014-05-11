#pragma strict
var player:GameObject;

var life:String; 

function Update(){
	if(player){
		life = player.GetComponent(PlayerStats).playerLives.ToString();
	}
}

function OnGUI () {
	guiText.text = life;
}