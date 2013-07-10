// logout message function
var logout = document.getElementById('logout');

logout.onclick = function(){
	return(confirm("You are logging out thanks for playing"));
};
// validation for search on logged in pages
var searchInput = document.getElementById('search');

var valid = {
	search: false
};

var validate ={	
	
	search: function(value){
		var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return pattern.test(value);
	},
};

searchInput.onkeyup = searchInput.onblur = function(){
	if(validate.search(searchInput.value)){
		searchInput.className = '';			
		valid.search = true;
	}else{
		searchInput.className = 'error';			
		valid.search = false;
	}
};

search_icon.onclick = function(){
	if(valid.search){
		return true;		
	}else(alert("not valid email address"));{
		return false;
	}
};

