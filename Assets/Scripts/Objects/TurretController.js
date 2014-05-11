#pragma strict
var player:GameObject;
var hitfo : RaycastHit;
//var proj : GameObject;
var life:int = 10;
var explosion:GameObject;

function Start () {

}

function Update () {

	if(player){
		var lookat = Vector3(player.transform.localPosition.x, player.transform.localPosition.y + 1, player.transform.localPosition.z);
		transform.LookAt(lookat);
		
		transform.rotation.z = 0;
		transform.rotation.x = 0;
		
		/*if (Physics.Raycast(transform.position, player.transform.position - transform.position, hitfo)) {
			Debug.Log(hitfo.collider.gameObject.tag);
			//if (hitfo.collider.gameObject.CompareTag("Player")) {
				explosion.rigidbody.AddForce(player.transform.position - transform.position);
				var bulletPos = Vector3(transform.position.x, transform.position.y + 4, transform.position.z - 2);
				Instantiate(explosion, bulletPos, Quaternion.identity);
			//}

		}*/
		
	}
	
	if(life<=0){
		Destroy(gameObject);
		Instantiate(explosion, transform.position, transform.rotation);
	}
}