<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$sql = 'SELECT p.firstName as firstName, p.lastName as lastName, c.cName as cName, DATE_ADD(pc.received, INTERVAL c.expPeriod year) as dateExpired FROM ocfr.people as p, ocfr.certifications as c, ocfr.people_certifications as pc WHERE p.pID = pc.pID AND c.cID = pc.cID AND DATE_ADD(pc.received, INTERVAL c.expPeriod year) < CURDATE()';

// Step 2: Create & run the query
$stmt = $db->prepare($sql);
$stmt->execute();
$expired = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($expired, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
