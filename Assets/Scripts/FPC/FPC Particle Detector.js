#pragma strict

function Update(){
	this.collider.transform.localScale+=Vector3(35,35,35)*Time.deltaTime;
}

function OnTriggerEnter (other : Collider) {
		Destroy(other.gameObject);
}