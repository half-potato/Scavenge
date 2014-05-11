#pragma strict
var stalker:GameObject;
var flame:GameObject;
var stalkerIsAlmostDead:boolean = false;
function Start () {

}

function Update () {
	if(stalker.gameObject.GetComponent(SpaceStalker).life==1){
		var flameNow = Instantiate(flame, transform.position, Quaternion.identity);
		stalkerIsAlmostDead = true;
	}
	if(stalkerIsAlmostDead){
		flameNow.transform.position = this.transform.position;
	}
	
}