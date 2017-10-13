		/*for(var i = 0; i<4; i++){
			document.getElementsByTagName('p')[i].innerHTML = "";
			document.getElementsByTagName('p')[i].classList = "";
		}*/
		var nam = document.getElementById("name");
		var subject = document.getElementById("subject");
		var message = document.getElementById("message");
		var emai = document.getElementById("email");
		var nameerror = document.getElementById("nameerror");
		var messageerror = document.getElementById("messageerror");
		var subjecterror = document.getElementById("subjecterror");
		var success = document.getElementById("success");
		var email = document.getElementById("emailerror");
		nameerror.innerHTML = "";
		subjecterror.innerHTML = "";
		messageerror.innerHTML = "";
		emailerror.innerHTML = "";
		nameerror.classList = "";
		subjecterror.classList = "";
		messageerror.classList = "";
		emailerror.classList = "";
		success.classList ="";
		if(localStorage.name == "false"||localStorage.subject == "false"||localStorage.message == "false"||localStorage.email == "format"){
			if(localStorage.name == "false"){
				nameerror.innerHTML = "You should enter your name."
				nameerror.setAttribute("class", "showerror");
			}
			if(localStorage.message == "false"){
				messageerror.innerHTML = "You should enter your message.";
				messageerror.setAttribute("class", "showerror");
			}
			if(localStorage.subject == "false"){
				subjecterror.innerHTML = "You should enter your subject.";
				subjecterror.setAttribute("class", "showerror");
			}
			if(localStorage.email == "format"){
				emailerror.innerHTML = "You should check your email format."
				emailerror.setAttribute("class", "showerror");
			}
		}
		else if(localStorage.name == "true" && localStorage.subject == "true" && localStorage.message == "true" && localStorage.email == "true"){
			//success.innerHTML = "Hi, "+nam.value+"! Your message has been sent.";
			success.setAttribute("class", "showsuccess");
		}
		//alert(nam.value);
		//alert(subject.value);
		localStorage.name = "";
		localStorage.subject = "";
		localStorage.message = "";
		localStorage.email = "";
function setLocalStorage(){
			//alert(emai.value);
			//alert(nam.value);
			//alert(validateEmail(emai.value));
			if(nam.value!=""){
				localStorage.name = "true";
			}
			else{
				localStorage.name = "false";
			}
			if(!validateEmail(emai.value)){
				localStorage.email = "format";
			}
			else{
				localStorage.email = "true";
				emai.value +="o";
			}
			if(subject.value!=""){				
				localStorage.subject = "true";
			}
			else{
				localStorage.subject = "false";
			}
			if(message.value!=""){
				localStorage.message = "true";
			}
			else{
				localStorage.message = "false";
			}
			success.innerHTML ="";
			//alert(localStorage.message);
			//event.preventDefault();  
		//event.preventDefault();
		}
function validateEmail(email) {
	var re = /\S+@+\S+/;
  return re.test(email);
}
