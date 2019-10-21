<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO certifications
    (cName, cAgency, expPeriod)
  VALUES (?,?,?)'
);
$stmt->execute([
  $_POST['cName'],
  $_POST['cAgency'],
  $_POST['expPeriod']
]);

// TODO: Error checking?!

// Step 4: Output
// header('HTTP/1.1 303 See Other');
// header('Location: ../waiting/');
