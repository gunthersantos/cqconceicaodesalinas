<?php

    $hostname="localhost";
	$username="root";
	$password="";
	$dbname="cqconceicaosalinas";
		
	$con = mysqli_connect($hostname,$username, $password) or 
		die ("html>script language='JavaScript'>alert('Unable to connect to database! 
				Please try again later.'),history.go(-1)/script>/html>");
	

		// Check connection
		if (!$con) {
			die("Connection failed: " . mysqli_connect_error());
		}
		//echo "Connected successfully </br>";

?>