<?php

session_start();

if(isset($_SESSION['logged_in']) &&
		$_SESSION['logged_in'] == true){
	header('location: index.php');
	exit;
}

require_once('../app/classes/database.php');

if(isset($_POST['submit'])
	&& $_POST['username'] != ''
	&& $_POST['password'] != ''){

	$db = new Database();

	$db->select('user_id');
	$db->from('tb_users');
	$db->where(
		array(
			'username' => $_POST['username'],
			'password' => $db->hash($_POST['password'])
		)
	);

	$result = $db->get();
	
	# if there IS a result from that username and pw
	if(!empty($result)){
		$_SESSION['logged_in'] = true;
		header('location: index.php');		
	}else{header('location: login.php');}
}

require_once('../app/classes/form.php');

include('../app/includes/header.php');

include('../app/includes/footer_login.php');

