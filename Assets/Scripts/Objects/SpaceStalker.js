var Player : Transform;
var MoveSpeed = 4;
var AttackLength = 10;
var followLength = 1;
var life = 20;


function Update () {
	
	if (life<=0){
		this.rigidbody.useGravity = true;
		rigidbody.AddTorque (24, 10, 1);
		this.GetComponent(SpaceStalker).enabled=false;
	}
	
	if(Player){
	    transform.LookAt(Player);
	    if(Vector3.Distance(transform.position,Player.position) >= followLength){

			transform.position += transform.forward*MoveSpeed*Time.deltaTime;
			rigidbody.velocity = Vector3.zero;
			if(Vector3.Distance(transform.position,Player.position) <= AttackLength) {
			
		  	 } 
	     }
   }
   
}
