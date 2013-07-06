<?php

require_once('../app/classes/active_record.php');

class User extends Active_Record{
	protected $table = 'tb_users';
	protected $primary_key = 'user_id';
	protected $singular = 'User';
}