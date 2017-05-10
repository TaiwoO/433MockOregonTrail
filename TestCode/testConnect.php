<?php
//http://www.umbc.edu:80/oit/noc/vpnaccess.cgi

$serverName = "studentdb-maria.gl.umbc.edu";
$username	= "stepmas1";
$password	= "stepmas1";
$dbname		= "stepmas1";

//Connect to DB
$conn = mysqli_connect($serverName, $username, $password, $dbname);

if(mysqli_connect_errno())
{
	 die("Connection failed whomp whomp: " . mysqli_connect_error(). "\n");
}

echo "Connected Successfully woooo\n";
if($result = mysqli_query($conn, "SELECT * FROM PlayerData"))
{
	printf("Result returned %d rows.\n", mysqli_num_rows($result));
	mysqli_free_result($result);	
}
else
{
	echo "Query Failed....\n";
}

mysqli_close($conn);
?>