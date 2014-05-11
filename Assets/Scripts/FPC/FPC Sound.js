#pragma strict
@script RequireComponent(AudioSource)
var cc:CharacterController;

function Start () {
	cc= GetComponent.<CharacterController>();
}
function Update () {
	if ( (Input.GetButtonDown( "Horizontal" ) || Input.GetButtonDown( "Vertical" ) ) && cc.isGrounded){
			audio.Play();
	} else if ( (!Input.GetButton( "Horizontal" ) && !Input.GetButton( "Vertical" ) || !cc.isGrounded) && audio.isPlaying ){
			audio.Pause(); // or Pause()
    }	
    
}