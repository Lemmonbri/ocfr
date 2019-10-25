<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('DELETE FROM people_certifications WHERE pID = ? AND cID = ?');
$stmt->execute([
    $_POST['pID'],
    $_POST['cID']
  ]
);
