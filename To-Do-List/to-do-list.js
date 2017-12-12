var taskArray = JSON.parse(localStorage.getItem('data')) || [];
var obj ={};
window.onload = function(){
	var taskValue = document.getElementById('task');
	var addBtn = document.getElementById('add');
	var list = document.getElementById('list');
	display();
	
	addBtn.onclick = function(){
		var today = new Date();
		var currentdate = new Date(); 
		var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
		var task = {
			'taskValue': taskValue.value,
			'date_time': datetime,
			'done':false,
			'present':true
		}
		if(task.taskValue!=""){
			taskArray.push(task);
			localStorage.setItem('data',JSON.stringify(taskArray));
		}
		display();
		document.getElementById('task').value="";
	}
	
	function display(){
		var data="";
		list.innerHTML="";
		for(var i=taskArray.length - 1; i>=0; i--){
			if(taskArray[i].present===true){
				if(taskArray[i].done===true){
					data += '<div class="container teal accent-3" style="display:flex; width:100%; margin:2px; border: 1px solid #1de9b6; border-left:7px solid #00bfa5;"><li class="collection-item teal accent-1" style="width: 90%; overflow-x: hidden; overflow-y: hidden;"> <p style="margin:auto;"> <input type="checkbox" class="filled-in" id='+ i +
					' onclick="taskToggle(this)" checked="checked"/> <label class="txt" style="color:#00695c;" for=' + i + ' >' + taskArray[i].taskValue +
					' </label> <span class="badge">' + taskArray[i].date_time +
					' </span> </p> </li> <a class="btn-floating btn-small red lighten-1" style="margin: auto;"><i class="material-icons" id=a' + i +
					' onclick="removeTask(this)">delete</i></a> </div>';
				}
				else{
					data += '<div class="container teal accent-3" style="display:flex; width:100%; margin:2px; border: 1px solid #1de9b6; border-left:7px solid #00bfa5;"><li class="collection-item teal accent-2" style="width: 90%; overflow-x: hidden; overflow-y: hidden;"> <p style="margin:auto;"> <input type="checkbox" class="filled-in" id='+ i +
					' onclick="taskToggle(this)"/> <label class="txt" style="color:#00695c;" for=' + i + ' >' + taskArray[i].taskValue +
					' </label> <span class="badge">' + taskArray[i].date_time +
					' </span> </p> </li> <a class="btn-floating btn-small red lighten-1" style="margin: auto;"><i class="material-icons" id=a' + i +
					' onclick="removeTask(this)">delete</i></a> </div>';
				}
			}
		}
		list.innerHTML=data;
	}
	obj.dis=display;
}

function taskToggle(el){
	var x=parseInt(el.id);
	taskArray[x].done = !taskArray[x].done;
	localStorage.setItem('data',JSON.stringify(taskArray));
	obj.dis();
}

function removeTask(el){
	if(window.confirm("Delete task?")){
		var x=el.id;
		var y=parseInt(x.substr(1,1));
		taskArray[y].present = !taskArray[y].present;
		localStorage.setItem('data',JSON.stringify(taskArray));
		obj.dis();
	}
}