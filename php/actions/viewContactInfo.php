<?php

require '../includes/db.php';

header('Content-Type: application/json');

try {

    $stmt = $pdo->query("SELECT * FROM contact_info");

    $data = $stmt-> fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

} catch(PDOException $e) {
    echo json_encode([
        "error" => $e->getMessage()
    ]);
}