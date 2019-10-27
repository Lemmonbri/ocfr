<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'SELECT pc.cID as cID, c.cName as cName, c.cAgency as cAgency, c.expPeriod as expPeriod
   FROM people as p, certifications as c, people_certifications as pc
   WHERE p.pID = pc.pID AND c.cID = pc.cID AND p.pID = ?'
);
$stmt->execute([
    $_GET['id']
  ]
);
$patients = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
