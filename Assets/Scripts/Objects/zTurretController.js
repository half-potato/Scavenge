#pragma strict
var explosiveSpeed:int = 50;
var bullet:GameObject;
var cam:GameObject;
var run:boolean = true;
var turretClose:boolean=false;
var audioClips : AudioClip;

function Update () {
	if (run && turretClose) {
		ShootBullet();
	}
}

function ShootBullet(){
	audio.PlayOneShot(audioClips);
	run = false;
	var bullet:GameObject = Instantiate(bullet, cam.transform.position+cam.transform.forward*1.3, cam.transform.rotation);
	bullet.rigidbody.AddForce(cam.transform.forward * explosiveSpeed, ForceMode.Impulse);
	
    yield WaitForSeconds (1);
    run = true;
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag=="Player"){
		turretClose=true;
	}
}

function OnTriggerExit (other : Collider) {
	if(other.gameObject.tag=="Player"){
		turretClose=false;
	}
}