//localStorage.clear();
var key = document.querySelector("h1").innerHTML;
//alert(key);
if(!localStorage[key]){
	if(!localStorage['num']){
		var getnumber = 0;
		var count = [];
		var storedNames = [];
		var storedMessages = [];
	}
	else{
		var getnumber = parseInt(localStorage.num);
		var count = JSON.parse(localStorage.count);
		var storedNames = JSON.parse(localStorage.names);
		var storedMessages = JSON.parse(localStorage.messages);
		getnumber +=1;
	}
	localStorage.setItem(key, getnumber);
	localStorage.setItem('num',getnumber);
}
else if(!localStorage['count']){
	var count = [];
	var storedNames = [];
	var storedMessages = [];
}
else{
	var getnumber = parseInt(localStorage.getItem(key));
	var count = JSON.parse(localStorage.count);
	var storedNames = JSON.parse(localStorage.names);
	var storedMessages = JSON.parse(localStorage.messages);
}
//alert(getnumber);
//alert(count[getnumber]);
if(count[getnumber] == undefined || count[getnumber] == null){
	 count[getnumber] = 0;
	 //alert(count[getnumber]);
	 storedNames[getnumber] = [];
	 storedMessages[getnumber] = [];
}
var place = document.getElementById('place');
for(var i = 0; i<count[getnumber]; i++){

	//var p1 = document.createElement("p");
	//p1.innerHTML = storedMessages[i];
	//p1.classList.add("messageplace");
	//p1.setAttribute("id", "message"+i);
	//p1.innerHTML = storedMessages[i];
	//alert(p1.innerHTML);
	var p2 = document.createElement("p");
	p2.innerHTML = storedNames[getnumber][i]+": "+storedMessages[getnumber][i];
	p2.classList.add("nameplace");
	p2.setAttribute("id", "name"+i);
	//place.appendChild(p1);
	place.appendChild(p2);
}
function setMessage(){
	var message = document.getElementById("message").value;
	var name = document.getElementById("name").value;
	//alert(name);
	if(name==""||message==""){
		if(name==""){
			alert("You should enter your name.");
		}
		if(message==""){
			alert("You should enter your message.");
		}
	}
	else{
		storedNames[getnumber][count[getnumber]] = name;
		localStorage.names= JSON.stringify(storedNames);
		//alert(localStorage.name[count]);
		storedMessages[getnumber][count[getnumber]] = message;
		localStorage.messages= JSON.stringify(storedMessages);
		count[getnumber]+=1;
		//alert(count[getnumber]);
		localStorage.count = JSON.stringify(count);
	}
}