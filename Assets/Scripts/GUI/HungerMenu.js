#pragma strict
var player:GameObject;

var hunger:String;

function Update(){
	if(player){
		hunger = player.GetComponent(PlayerStats).hungerNum.ToString();
	}
}

function OnGUI () {
	guiText.text = hunger;
}