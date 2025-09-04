<?php
$servername = "localhost";
$username = "root";
$password = "1871";
$dbname = "Myportfolio";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$sql = "INSERT INTO messages (name, email, subject, message) 
        VALUES ('$name', '$email', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "<script>
            alert('Message sent successfully!');
            window.location.href = 'form.html';
          </script>";
} else {
  die("Query Error: " . $conn->error);
}

$conn->close();
?>