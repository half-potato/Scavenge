#pragma strict
var explode:boolean = true;
var HugeExplosion:GameObject;
var firstCollision:boolean = false;
var audioClips : AudioClip;
function Start () {
	DestroyMe();
} 


function DestroyMe(){
	if(explode){
		yield WaitForSeconds(25);
		Instantiate(HugeExplosion, transform.position, Quaternion.identity);
		Destroy (this.gameObject);
	}
}

function OnCollisionEnter(){
	if(!firstCollision){
		audio.PlayOneShot(audioClips);
		
		firstCollision=true;
	}
}