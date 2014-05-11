#pragma strict
var rotation = 0;
function FixedUpdate () {
	rotation+=3;
	transform.rotation = Quaternion.Euler(270, 0, rotation);
}