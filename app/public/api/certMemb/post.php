<?php

// 0. Validate my data

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('DELETE FROM people_certifications WHERE pID = ? AND cID = ?');
$stmt->execute([
    $_POST['pID'],
    $_POST['cID']
  ]
);

// Step 3: Create & run the query
$stmt = $db->prepare('INSERT INTO people_certifications (pID, cID, received) VALUES (?,?,?)');
$stmt->execute([
  $_POST['pID'],
  $_POST['cID'],
  $_POST['received']
]);
