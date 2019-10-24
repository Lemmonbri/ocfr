<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('UPDATE people SET firstName = ?, lastName = ?, dob = ?, gender = ?, email = ?, wPhone = ?, mPhone = ?, address = ?, city = ?, state = ?, zip = ?, startDate = ?, jobTitle = ?, radioNumber = ?, stationNumber = ?, isActive = ? WHERE pID = ?');
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
    $_POST['isActive'],
    $_POST['pID']
  ]
);
