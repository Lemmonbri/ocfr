<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('UPDATE certifications SET cName = ?, cAgency = ?, expPeriod = ? WHERE cID = ?');
$stmt->execute([
    $_POST['cName'],
    $_POST['cAgency'],
    $_POST['expPeriod'],
    $_POST['cID']
  ]
);
