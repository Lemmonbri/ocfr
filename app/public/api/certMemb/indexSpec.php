<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'SELECT pc.pcID as pcID, pc.pID as pID, pc.cID as cID, pc.received as received, p.firstName as firstName, p.lastName as lastName, c.cName as cName
   FROM people as p, certifications as c, people_certifications as pc
   WHERE p.pID = pc.pID AND c.cID = pc.cID AND c.cID = ?'
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
