#pragma strict
var player:GameObject;
var hitfo : RaycastHit;
//var proj : GameObject;

function Start () {

}

function Update () {

	if(player){
		var lookat = Vector3(player.transform.position.x, player.transform.position.y + 1, player.transform.position.z);
		transform.LookAt(lookat, Vector3.up);
		
		transform.rotation.z = Mathf.Clamp(transform.rotation.z, 0, 90);
		/*
		if (Physics.Raycast(transform.position, player.transform.position - transform.position, hitfo)) {
			Debug.Log(hitfo.collider.gameObject.tag);
			if (hitfo.collider.gameObject.CompareTag("Player")) {
				proj.rigidbody.AddForce(player.transform.position - transform.position);
				var bulletPos = Vector3(transform.position.x, transform.position.y + 2, transform.position.z);
				Instantiate(proj, bulletPos, Quaternion.identity);
			}

		}
		*/
	}
}