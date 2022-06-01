<?php

$name = $_POST['firstName'];
file_put_contents('name.php', $name, FILE_APPEND);


$mName = $_POST['middleName'];
file_put_contents('mName.php', $mName, FILE_APPEND);


$lName = $_POST['lastName'];
file_put_contents('lName.php', $lName, FILE_APPEND);



?>