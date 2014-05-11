#pragma strict
var player:GameObject;
function Start () {

}

function Update () {
<<<<<<< HEAD
	var lookat = Vector3(player.transform.position.x, player.transform.position.y + 1, player.transform.position.z);
	transform.LookAt(lookat, Vector3.up);
=======
	if(player){
		transform.LookAt(player.transform, transform.up);
	}
>>>>>>> FETCH_HEAD
}