<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO people
    (firstName, lastName, dob, gender, email, wPhone, mPhone, address, city, state, zip, startDate, jobTitle, radioNumber, stationNumber, isActive)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['dob'],
  $_POST['gender'],
  $_POST['email'],
  $_POST['wPhone'],
  $_POST['mPhone'],
  $_POST['address'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zip'],
  $_POST['startDate'],
  $_POST['jobTitle'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive']
]);

// Step 4: Output
// header('HTTP/1.1 303 See Other');
// header('Location: ../records/?guid='.$guid);
