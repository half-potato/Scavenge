#pragma strict

var pushPower = 2.0;
var cc:CharacterController;
function Start () {
	cc= GetComponent.<CharacterController>();
}

function Update () {

}

function OnControllerColliderHit (hit : ControllerColliderHit) {
		var body : Rigidbody = hit.collider.attachedRigidbody;
		if (body == null || body.isKinematic)
			return;
			
		if (hit.moveDirection.y < -0.3) 
			return;
		

		var pushDir : Vector3 = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);
		
		// Apply the push
		body.velocity = pushDir * pushPower;
		
		if(hit.gameObject.tag == "KO"){
			
			this.gameObject.GetComponent(PlayerStats).playerLives-=1;
		}
		
		if(hit.gameObject.tag == "kamakazi"){
			
			this.gameObject.GetComponent(PlayerStats).playerLives-=1;
			this.gameObject.GetComponent(PlayerStats).hungerWait*=.3;
		}
	}