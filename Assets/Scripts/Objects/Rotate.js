#pragma strict
var rotation:float = 0;
var rotateAmount = 0.1;
function FixedUpdate () {
	rotation+=rotateAmount;
	transform.rotation = Quaternion.Euler(0, rotation, 0);
}