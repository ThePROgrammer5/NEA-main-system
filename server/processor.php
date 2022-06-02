<html>
<body>
<?php

if (isset( $_POST['submit'])) {
$name = $_POST['firstName'];
file_put_contents('name.php', $name, FILE_APPEND);


$mName = $_POST['middleName'];
file_put_contents('mName.php', $mName, FILE_APPEND);


$lName = $_POST['lastName'];
file_put_contents('lName.php', $lName, FILE_APPEND);
}

// Enable FULL Error Reporting on the screen
// ONLY USE IN DEVELOPMENT
error_reporting(E_ALL);
ini_set('display_errors', 1);
?>

<script>
    createAgentId();
    hide(signUp);
    show(agreementDiv);
</script>
</body>
</html>

