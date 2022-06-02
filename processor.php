<html>
<body>
<?php

if (isset( $_GET['submit'])) {
$name = $_GET['firstName'];
file_put_contents('name.php', $name, FILE_APPEND);


$mName = $_GET['middleName'];
file_put_contents('mName.php', $mName, FILE_APPEND);


$lName = $_GET['lastName'];
file_put_contents('lName.php', $lName, FILE_APPEND);
}

?>

<script>
    createAgentId();
    hide(signUp);
    show(agreementDiv);
</script>
</body>
</html>

