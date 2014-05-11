#pragma strict
var rotation:float = 0;
function FixedUpdate () {
	rotation+=.1;
	transform.rotation = Quaternion.Euler(0, rotation, 0);
}