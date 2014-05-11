#pragma strict
var player:GameObject;
function Start () {

}

function Update () {
	if(player){
		transform.LookAt(player.transform, transform.up);
	}
}