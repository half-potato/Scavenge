#pragma strict
var player:GameObject;

var hunger:int;



public var customSkin:GUISkin;
private var deathNote:String;

function Update(){
	if(player){
		hunger = player.GetComponent(PlayerStats).hungerNum;
	}
}

function OnGUI()
{
	GUI.skin=customSkin;
	GUILayout.BeginArea (Rect (0,0,Screen.width,Screen.height)); 
	if(!player && hunger > 0){
		deathNote = "Looks Like You Got Killed";
		BuildWinPrompt();
	}
	
	if(!player && hunger <= 0){
		deathNote = "Hungry?";
		BuildWinPrompt();
	}
	GUILayout.EndArea();
	//print("building grid!");
}

function BuildWinPrompt(){
	Screen.lockCursor = true;
	var winPromptW:int = Screen.width/2;
	var winPromptH:int = Screen.height/1.4;
	
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;
	
	var halfPromptW:int = winPromptW/2;
	var halfPromptH:int = winPromptH/2;

	GUI.BeginGroup(Rect(halfScreenW-halfPromptW, halfScreenH-halfPromptH, winPromptW, winPromptH));
	GUI.Box (Rect (0,0,winPromptW,winPromptH), deathNote);
	
	var buttonW:int = 150;
	var buttonH:int = 50;
	
	//if(GUI.Button(Rect(halfPromptW-(buttonW/2),winPromptH-(buttonW/2),buttonW,buttonH),"Play Again")){
		//Application.LoadLevel("Main");
	//}
	GUI.EndGroup();
}