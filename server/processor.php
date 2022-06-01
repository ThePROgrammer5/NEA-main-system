<?php

$var = $_POST['foo'];
file_put_contents('file_where_stored_value_is.php', $var);

?>