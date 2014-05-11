#pragma strict
@script RequireComponent(CharacterController)
//variables to control player

//wasd movement speed
var moveSensitivity:float = 10;

//rotation with mous speed
var rotSensitivity:float = 2;

//clamping rotation at 60 degress
var rotRange:float = 60;

//this var saves current verticle rotation
var verticalRot:int = 0;

//allow gravity and jump
var velocityVertical:float = 0.0f;

var jumpVelocity:float;
var cc:CharacterController;

function Start () {
	//remove mouse!!
	Screen.lockCursor = true;
	cc= GetComponent.<CharacterController>();
}

function Update () {

	//getting input from  mouse and wasd
	var horizontalSpeed:float = Input.GetAxis("Horizontal")*moveSensitivity;
	var forwardSpeed:float = Input.GetAxis("Vertical")*moveSensitivity;
	
	var rotHorizontal:float = Input.GetAxis("Mouse X")*rotSensitivity;
	
	//changing current vertica lrot holding variable by the amount mouse y modes
	verticalRot -= Input.GetAxis("Mouse Y")*rotSensitivity;
	
	//restricting the amount of verticle rot allowed
	verticalRot = Mathf.Clamp(verticalRot, -rotRange, rotRange);
	
	//rotating the camera based on current rot variable vertically
	Camera.main.transform.localRotation = Quaternion.Euler(verticalRot,0,0);
	//rotating horizontally
	transform.Rotate(0,rotHorizontal,0);
	
	//Vertical Velocity for Gravity and Jump


	if(Input.GetButton("Jump") && cc.isGrounded){
		velocityVertical = jumpVelocity;
	} else if (!cc.isGrounded){
		velocityVertical += Physics.gravity.y*Time.deltaTime;
	} else if (cc.isGrounded && velocityVertical < -1){
		velocityVertical = -1;
	}

	//aldready a key for jump --> To see already set keys got t0 Edit --> Project Setttings --> Inputs
	
	/*
	//creating a speed variable with 3 vectors based on wasd movement and giving it a direction
	var speed:Vector3 = new Vector3(horizontalSpeed,velocityVertical,forwardSpeed);
	speed =  transform.rotation * speed;
	
	//moving character
	cc.Move(speed * Time.deltaTime);
	*/
	
}