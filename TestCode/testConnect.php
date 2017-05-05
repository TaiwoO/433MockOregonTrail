<?php
$serverName = "studentdb-maria.gl.umbc.edu";
$username	= "stepmas1@mysql-admin.umbc.edu";
$password	= "stepmas1";

//Connect to DB
$conn = mysqli_connect($serverName, $username, $password);

if(mysqli_connect_errno())
{
	 die("Connection failed whomp whomp: " . mysqli_connect_error(). "\n");
}

echo "Connected Successfully woooo\n";

?>