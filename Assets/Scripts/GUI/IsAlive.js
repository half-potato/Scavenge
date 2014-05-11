#pragma strict
var player:GameObject;

var hunger:int;



public var customSkin:GUISkin;
public var WinSkin:GUISkin;
private var deathNote:String;
var keys:int;

function Update(){
	if(player){
		hunger = player.GetComponent(PlayerStats).hungerNum;
		keys = player.GetComponent(PlayerStats).KeysCollected;
	}
}

function OnGUI()
{
	
	GUILayout.BeginArea (Rect (0,0,Screen.width,Screen.height)); 
	if(!player && hunger > 0 && keys < 5){
		deathNote = "Looks Like You Got Killed";
		BuildWinPrompt(customSkin);
	} else if(!player && hunger <= 0 && keys < 5){
		deathNote = "Hungry?";
		BuildWinPrompt(customSkin);
	} else if(!player){
		deathNote = "You Win!!!!!!!!!!!!!!!!";
		BuildWinPrompt(WinSkin);
	}
	
	GUILayout.EndArea();
	//print("building grid!");
}

function BuildWinPrompt(skin){
	GUI.skin=skin;
	Debug.Log(deathNote);
	Screen.lockCursor = false;
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