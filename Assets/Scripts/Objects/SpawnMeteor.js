#pragma strict
var meteor:GameObject;
var run:boolean = true;
var player:GameObject;
var playerPosition:Vector3;
function Update () {
	playerPosition=player.transform.position;
	
	if (run) {
		spawnMeteor ();
	}
}

function spawnMeteor(){
	run = false;
	
	var position = new Vector3(Random.Range(playerPosition.x-100, playerPosition.x+100), 500, Random.Range(playerPosition.z-100, playerPosition.z+100));
	Instantiate(meteor, position, Quaternion.identity);
	
    yield WaitForSeconds (1);
    run = true;
}
