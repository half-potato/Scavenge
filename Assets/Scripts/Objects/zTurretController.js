#pragma strict
var explosiveSpeed:int = 50;
var bullet:GameObject;

function Update () {
	var bullet:GameObject = Instantiate(bullet, cam.transform.position+cam.transform.forward*1.3, cam.transform.rotation);
	bullet.rigidbody.AddForce(cam.transform.forward * explosiveSpeed, ForceMode.Impulse);
}