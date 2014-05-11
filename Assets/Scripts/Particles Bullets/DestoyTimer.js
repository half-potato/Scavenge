#pragma strict
var explode:boolean = true;
var HugeExplosion:GameObject;
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