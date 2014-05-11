#pragma strict
var player:GameObject;
public var extraRot:float;
function Start () {

}

function Update () {
	transform.LookAt(player.transform, Vector3.up);
	transform.rotation.z+=extraRot;
}