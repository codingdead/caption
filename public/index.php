<?php

session_start();

require_once('../app/models/user.php');

if(!isset($_SESSION['logged_in']) ||
		$_SESSION['logged_in'] == false){
	header('location: login.php');
	exit;
}
require_once('../app/classes/form.php');
include('../app/includes/header.php');
include('../app/includes/content.php');
include('../app/includes/message_input.php');
include('../app/includes/footer.php');