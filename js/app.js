//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks

//we want to select element from various buttons using getElementById();
var taskInput = document.getElementById("new-task"); //new-task
//as first button does not have id, have to use this method, similar to array, accesses first index of button
var addButton = document.getElementByTagName("button")[0]; //first button for adding task
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //completed-tasks

//Add a new task
var addTask = function(){
 //When the button is pressed 
 //Create a new list item with the text from the #new-task:
 	//create input checkbox
 	//create a label
 	//create an input for the text when we edit a task
 	//create a button with a class of edit
 	//create a button with a class of delete
  	//each of these elements, will need to be modified, and appended
  	/*(meaning of modified - if I create an input I need to make it a checkbox,
  		a label needs text inside of it, the input for edit needs to be of text type
  		  the button needs the word edit in it and the class edit in it
  		  the delete button needs the word delete in it and the class delete in it
  	)*/
  	/*then after modification this li item needs to be appended document and these 
  	children need appending to the li item */
}

//Edit an exisitng task
var editTask = function(){
	//When edit button is pressed
	 //if the class of the edit button's parent (li item) has the class of .editMode
	 	//we want to switch from .editMode (switch back)
	 	//we also want to make the label text become input's value (text value from input)
	 //else (if we are switching into editMode)
	  //switch to editMode
	  //input value becomes the label's text

 //toggle .editMode on the parent
}

//Delete an existing task
var deleteTask =  function(){

  //When the delete button is pressed
  	//Remove the parent list item from the ul (remove parent from its parent)
}


//Mark a task a complete
var taskCompleted = function(){

	//when the checkbox is checked
	 //Append the task list item <li> to the #completed-tasks
}

//Mark a task as Incomplete
var taskIncomplete = function(){

	//when the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks
}