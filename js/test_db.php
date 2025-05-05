<?php
include 'db.php'; // Ensure db.php is in the same folder

if ($conn) {
    echo "Database connection successful!";
} else {
    echo "Database connection failed!";
}
?>