<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('UPDATE people_certifications SET pID = ?, cID = ?, received = ? WHERE pcID = ?');

$stmt->execute([
    $_POST['pID'],
    $_POST['cID'],
    $_POST['received'],
    $_POST['pcID']
  ]
);
