#pragma strict
var audioClips : AudioClip;

function Start () {
		audio.PlayOneShot(audioClips);
}


function LateUpdate ()
{
	if (!particleSystem.IsAlive())
	{
		Destroy (this.gameObject);
	}	
}