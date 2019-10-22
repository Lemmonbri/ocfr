<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('UPDATE people SET firstName = ? WHERE pID = ?');
$stmt->execute([
    $_POST['firstName'],
    $_POST['pID']
  ]
);
