#pragma strict

//explosion prefab
var explosion:GameObject;
var sparks:GameObject;
var player:GameObject;
var sparkels:GameObject;
var description:GameObject;
//aiming
var shootPos:Vector3;
var cam:Camera;

//speed of explosive weapon
var explosiveSpeed:int = 50;

//machinegun props
var cooldown:float = 0.2f;
var cooldownRemaining:float=0.0f;
var range:float = 100;
//scrolling
var Weapons : GameObject[];
var WeaponNumber = 0;


//number of weapons that are not prefabs (raycasted)
private var nonPrefabWeapons:int = 0;



function Start () {
	Screen.lockCursor = true;
 	cam = Camera.main;

}

function Update () {
	//scroll to cahnge weapons
	if(Input.GetAxis("Mouse ScrollWheel")){
	    if(Input.GetAxis("Mouse ScrollWheel") > 0 && WeaponNumber < (Weapons.length+nonPrefabWeapons-1)){
	        WeaponNumber += 1;
	    }
	    if(Input.GetAxis("Mouse ScrollWheel") < 0 && WeaponNumber > 0){
	        WeaponNumber -=1;
	    }   
	}
	
	//instantaneous weapons
	if(Input.GetButtonDown("Fire1")){
		cam = Camera.main;
		
		//initiate prefabs
		if(WeaponNumber<Weapons.length){
			var theExplosive:GameObject = Instantiate(Weapons[WeaponNumber], cam.transform.position+cam.transform.forward*2, cam.transform.rotation);
			theExplosive.rigidbody.AddForce(cam.transform.forward * explosiveSpeed, ForceMode.Impulse);
		}
		

	}
	
	//continuous weapons
	if(Input.GetButton("Fire1")){	
		//machineGun
		if(WeaponNumber == Weapons.length && cooldownRemaining <=0){
			var ray:Ray = new Ray(Camera.main.transform.position+cam.transform.forward, Camera.main.transform.forward*2);
			var hitInfo:RaycastHit;
			
			if( Physics.Raycast(ray,hitInfo, range)){
				var hitPoint:Vector3 = hitInfo.point;
				var go:GameObject = hitInfo.collider.gameObject;
				//Debug.Log("Hit object" + go.name);
				//Debug.Log("Hit point" + hitPoint);
				if(sparks!=null){
					Instantiate(sparks, hitPoint, Quaternion.identity);
				}
			}
		}
		
		//grap things

	}
	if(Input.GetButton("Fire2")){
		var grab:Ray = new Ray(Camera.main.transform.position+cam.transform.forward*.5, Camera.main.transform.forward);
		var grabInfo:RaycastHit;
		
		if( Physics.Raycast(grab,grabInfo, 2)){
			var grabPoint:Vector3 = grabInfo.point;
			var whatsGrabbed:GameObject = grabInfo.collider.gameObject;
			if(whatsGrabbed.tag == "Food"){
				Debug.Log("food!!");
				Destroy(whatsGrabbed);
				player.GetComponent(PlayerStats).hungerNum+=10;
				description.gameObject.GetComponent(Fade).trans = true;
				description.gameObject.GetComponent(Fade).run = true;
				description.guiText.material.color.a = 0;
				description.guiText.text = "Fed Well";
			}
			if(whatsGrabbed.tag == "Key"){
				Debug.Log("Key!!!");
				Destroy(whatsGrabbed);
				player.GetComponent(PlayerStats).KeysCollected+=1;
				Instantiate(sparkels, grabPoint, Quaternion.identity);
				description.gameObject.GetComponent(Fade).trans = true;
				description.gameObject.GetComponent(Fade).run = true;
				description.guiText.material.color.a = 0;
				description.guiText.text = "Key Gained";
			}
			if(whatsGrabbed.tag == "Jump"){
				Debug.Log("JumpBoost!!!");
				Destroy(whatsGrabbed);
				player.GetComponent(PlayerStats).jumpheight+=1;
				Instantiate(sparkels, grabPoint, Quaternion.identity);
				description.gameObject.GetComponent(Fade).trans = true;
				description.gameObject.GetComponent(Fade).run = true;
				description.guiText.material.color.a = 0;
				description.guiText.text = "Jump Increase";
			}
			if(whatsGrabbed.tag == "Health"){
				Debug.Log("Health!!!");
				Destroy(whatsGrabbed);
				player.GetComponent(PlayerStats).playerLives+=1;
				Instantiate(sparkels, grabPoint, Quaternion.identity);
				description.gameObject.GetComponent(Fade).trans = true;
				description.guiText.material.color.a = 0;
				description.gameObject.GetComponent(Fade).run = true;
				description.guiText.text = "Gain Health";
				
			}
			//Debug.Log("Hit object" + whatsGrabbed.tag);
			//Debug.Log("Hit point" + hitPoint);
			Instantiate(sparks, grabPoint, Quaternion.identity);
		}
	}
		
}

