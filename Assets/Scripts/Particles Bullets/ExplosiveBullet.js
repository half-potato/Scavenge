#pragma strict

var lifeSpan:float = 3;
var explosion:GameObject;


function Start () {

}

function Update () {
	lifeSpan-=Time.deltaTime;
	if(lifeSpan<0){
		lifeSpan = 3;
		Explode();
	}
}

function OnCollisionEnter(col:Collision){
	if(col.gameObject.tag == "Turret"){
		Explode();
		col.gameObject.GetComponent(TurretController).life-=1;
	}
}

function Explode(){
	Destroy(gameObject);
	Instantiate(explosion, transform.position, transform.rotation);
}