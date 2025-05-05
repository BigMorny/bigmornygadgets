<?php
$servername = "localhost";
$username = "root"; // Default MySQL username in WAMP
$password = ""; // Default MySQL password is empty
$dbname = "big_morny_gadgets"; // Change to your actual database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
