<?php

$name = $_POST['firstName'];
file_put_contents('name.php', $name, FILE_APPEND);

?>