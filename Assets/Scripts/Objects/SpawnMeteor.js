#pragma strict
var meteor:GameObject;
var run:boolean = true;
public var lowerXRange:int;
public var upperXRange:int;
public var lowerZRange:int;
public var upperZRange:int;

function Update () {
	if (run) {
		spawnMeteor ();
	}
}

function spawnMeteor(){
	run = false;
	
	var position = new Vector3(Random.Range(lowerXRange, upperXRange), 500, Random.Range(lowerZRange, upperZRange));
	Instantiate(meteor, position, Quaternion.identity);
	
    yield WaitForSeconds (.5);
    run = true;
}
