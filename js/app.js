//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks

//we want to select element from various buttons using getElementById();
var taskInput = document.getElementById("new-task"); //new-task
//as first button does not have id, have to use this method, similar to array, accesses first index of button
var addButton = document.getElementsByTagName("button")[0]; //first button for adding task
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTaskHolder = document.getElementById("completed-tasks"); //completed-tasks

//new task list item
var createNewTaskElement = function(taskString){
	//create list item
	var listItem = document.createElement("li");
		
	//create input checkbox
	var checkBox = document.createElement("input");
	//create a label
	var label = document.createElement("label");
	//create an input for the text when we edit a task
	var editInput = document.createElement("input");
	//create a button with a class of edit
	var editButton = document.createElement("button");
	//create a button with a class of delete
	var deleteButton = document.createElement("button");
	//each of these elements, will need to be modified, and appended
	/*(meaning of modified - if I create an input I need to make it a checkbox,
		a label needs text inside of it, the input for edit needs to be of text type
		  the button needs the word edit in it and the class edit in it
		  the delete button needs the word delete in it and the class delete in it
	)*/
	/*then after modification this li item needs to be appended document and these 
	children need appending to the li item */

	//each element needs modifying
	//we can actually modify and update elements properties their attributes and their content
	//to do that we can use properties that been exposed on each element, 
	//for example - if I have got a link basically an anchor - I can modify it using dot notation
	//to modify the href attribute so in the case of our check box this is an input and an input
	//has a type property, so we can use dot notation, below will verify that this is a checkbox created
	checkBox.type = "checkbox";
	editInput.type = "text";

	//we can also modify their classes and text using some special methods
	//innerHTML allows special characters
	//innerTEXT encodes special characters
	editButton.innerText = "Edit"; 
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	label.innerHTML = taskString;
 

	//each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
	listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
      
	return listItem;
}

//Add a new task
var addTask = function (){
	console.log("Add-task..");
 
 //Create a new list item with the text from the #new-task: call function
 //we need to get the value of the input from taskInput var 
 //we can use the dot notation of an attribute to get the particular thing
 var listItem = createNewTaskElement(taskInput.value);

 //append listItem to incompleteTaskHolder
 incompleteTaskHolder.appendChild(listItem);
 //for future reference in the addtask  we want to bind the events to the list item as well
 //and we want the taskCompleted to be bound to it. 
 //So when we append it to the incomplete tasks when we check that checkbox it will be completed
 bindTaskEvents(listItem,taskCompleted);


 	
}

//Edit an exisitng task
var editTask = function(){
	console.log("edit-task..");

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
	console.log("delete-task..");
	
  	//get the parentNode
  	var listItem = this.parentNode;
  	//instead of the checkbox being the child this time, this is the button being the child
  	//and it just happens to be that the li item it still the parent item of the 
  	//both the checkbox and the delete button, the li item is the parent node
  	//and then we want to get the li item parent node which is the ul
  	//this is basically the grandparent of the button so we want to remove the child above(listItem)
  	//from this element below (ul)
  	var ul = listItem.parentNode;

  	//Remove the parent list item from the ul (remove parent from its parent)
  	ul.removeChild(listItem);





}


//Mark a task a complete
var taskCompleted = function(){
	console.log("completed...");
	//this.. element we are currently on is this checkbox, its parent will be the li item
	//it will have a parent node because it is a node in the DOM
	var listItem = this.parentNode;
	//Append the task list item <li> to the #completed-tasks
	completedTaskHolder.appendChild(listItem);
	//remember we have this bind events method below
	//so we could bind events, to the listItem, so that when the task is made complete
	//we are saying that we want to put it back int the completeTaskHolder
	//so that means that when we check on a check box now, we want the task to be completed   
	bindTaskEvents(listItem,taskIncomplete);
	 
}

//Mark a task as Incomplete
var taskIncomplete = function(){
	console.log("incomplete...");
	//this.. element we are currently on is this checkbox, it parent will be the li item
	//it will have a parent node because it is a node in the DOM
	var listItem = this.parentNode;
	//Append the task list item to the #incomplete-tasks
	incompleteTaskHolder.appendChild(listItem);
	//remember we have this bind events method below
	//so we could bind events, to the listItem, so that when the task is made incomplete
	//we are saying we want to put it back into the incompleteTaskHolder
	//so that means that when we check on a check box now, we want the task to be completed
	bindTaskEvents(listItem,taskCompleted);


}

//binds task events, takes two parameters, taskListItem which is the children of the uls
// and the checkBoxEventHandler
var bindTaskEvents = function(taskListItem,checkBoxEventHandler){
	console.log("Bind list item events");
	//select taskListItem's children
	var checkbox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");
	
	//bind editTask to edit button
	editButton.onclick = editTask;
	//bind deleteTask to the delete button
	deleteButton.onclick = deleteTask;
	//bind checkBoxEventHandler to checkbox
	checkbox.onchange = checkBoxEventHandler;
}

//set the click handler to the addTask method
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
for(var i=0; i<incompleteTaskHolder.children.length;i++){
	//bind events to list item's children (taskCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

//cycle over completedTasksHolder ul list items
for(var i=0; i<completedTaskHolder.children.length;i++){
		//bind event to list items's children (taskIncomplete)
	bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}