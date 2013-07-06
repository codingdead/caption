// Validation of username and password
var usernameInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var submitButton = document.getElementById('submit');

var valid = {
	username: false,	
	password: false
};

var validate ={
	
	username: function(value){
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return pattern.test(value);
	},
	
	password: function(value){
		var pattern = /^.{4,8}$/;
		return pattern.test(value);
	}
};

usernameInput.onkeyup = usernameInput.onblur = function(){
	if(validate.username(usernameInput.value)){
		usernameInput.className = '';			
		valid.username = true;
	}else{
		usernameInput.className = 'error';			
		valid.username = false;
	}
};

passwordInput.onkeyup = passwordInput.onblur = function(){
	if(validate.password(passwordInput.value)){
		passwordInput.className = '';			
		valid.password = true;
	}else{
		passwordInput.className = 'error';			
		valid.password = false;
	}
};

// submit button functions
submitButton.onclick = function(){
	if(valid.username && valid.password){
		return true;		
	}else(alert("A required field is missing or some input is invalid"));{
		return false;
	}
};


