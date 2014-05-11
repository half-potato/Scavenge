#pragma strict
public var customSkin:GUISkin;
function OnGUI(){
	
	GUILayout.BeginArea (Rect (0,0,Screen.width,Screen.height)); 
		BuildWinPrompt();
	GUILayout.EndArea();
	//print("building grid!");
}

function BuildWinPrompt(){
	GUI.skin=customSkin;
	Screen.lockCursor = false;
	var winPromptW:int = Screen.width/2.5;
	var winPromptH:int = Screen.height/1.2;
	
	var halfScreenW:float = Screen.width/2;
	var halfScreenH:float = Screen.height/2;
	
	var halfPromptW:int = winPromptW/2;
	var halfPromptH:int = winPromptH/2;

	GUI.BeginGroup(Rect(halfScreenW-halfPromptW, halfScreenH-halfPromptH, winPromptW, winPromptH));
	GUI.Box (Rect (0,0,winPromptW,winPromptH), "Fruits refill hunger, candy gives you a jump boost, find all 5 keys and you win the game.  Left click to throw bombs, right to pick up items. Most importantly survive!!");
	
	var buttonW:int = 150;
	var buttonH:int = 50;
	
	if(GUI.Button(Rect(halfPromptW-(buttonW)-10,winPromptH-(buttonW),buttonW,buttonH),"Play")){
		Application.LoadLevel("Play");
	}
		if(GUI.Button(Rect(halfPromptW+10,winPromptH-(buttonW),buttonW,buttonH),"Instructions")){
		Application.LoadLevel("Instructions");
	}
	GUI.EndGroup();
}