// Validation of username and password, 
// search a friend and message inputs
var usernameInput = document.getElementById('username');
var searchInput = document.getElementById('search');
var messageInput = document.getElementById('message');
var passwordInput = document.getElementById('password');
var errorMessageInput = document.getElementById('error_message');
var submitButton = document.getElementById('submit');
var searchIcon = document.getElementById('search_icon');
var messageButton = document.getElementById('message_button');
var messageButtonLogged = document.getElementById('message_button');

var valid = {
	username: false,
	search: false,
	message: false,	
	password: false
};

var validate ={
	
	username: function(value){
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return pattern.test(value);
	},

	search: function(value){
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return pattern.test(value);
	},

	message: function(value){
		var pattern = /^[\s\S]{0,40}$/;
		return pattern.test(value);
	},

	password: function(value){
		var pattern = /^.{4,8}$/;
		return pattern.test(value);
	}
};
if(usernameInput){
	usernameInput.onkeyup = usernameInput.onblur = function(){
		if(validate.username(usernameInput.value)){
			usernameInput.className = '';			
			valid.username = true;
		}else{
			usernameInput.className = 'error';			
			valid.username = false;
		}
	}
};

if(searchInput){
	searchInput.onkeyup = searchInput.onblur = function(){
		if(validate.search(searchInput.value)){
			searchInput.className = '';			
			valid.search = true;
		}else{
			searchInput.className = 'error';			
			valid.search = false;
		}
	}
};

messageInput.onkeyup = messageInput.onblur = function(){
	if(validate.message(messageInput.value)){
		messageInput.className = '';
		errorMessageInput.innerHTML = "";			
		valid.message = true;
	}else{
		messageInput.className = 'error_mess';
		errorMessageInput.innerHTML = "Must be 40 characters or less";			
		valid.message = false;
	}
};

if(passwordInput){
	passwordInput.onkeyup = passwordInput.onblur = function(){
		if(validate.password(passwordInput.value)){
			passwordInput.className = '';			
			valid.password = true;
		}else{
			passwordInput.className = 'error';			
			valid.password = false;
		}
	}
};

if(submitButton){
	submitButton.onclick = function(){
		if(valid.username && valid.password){
			return true;		
		}else(alert("not valid email address or password"));{
			return false;
		}
	}
};

searchIcon.onclick = function(){
	if(valid.search){
		return true;		
	}else(alert("not valid email address"));{
		return false;
	}
};

if(messageButton){
	messageButton.onclick = function(){
		return(alert("You must be logged in to play"));
	}
};

logout.onclick = function(){
	return(confirm("You are logging out thanks for playing"));
};

