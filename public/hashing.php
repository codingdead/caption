<?php

include('../app/classes/database.php');

$db = new Database();

echo $db->hash('pass');