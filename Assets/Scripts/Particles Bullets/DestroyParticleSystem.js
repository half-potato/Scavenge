#pragma strict


function LateUpdate ()
{
	if (!particleSystem.IsAlive())
	{
		Destroy (this.gameObject);
	}	
}