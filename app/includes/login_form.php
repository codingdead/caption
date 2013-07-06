<?php
	Form::open('');
	Form::submit('submit','Login');	
	Form::text_row('username', 'Username','','Your email address');
	Form::password_row('password', 'Password','4 to 8 characters');	
	Form::close();		


