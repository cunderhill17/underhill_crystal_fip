<?php

require '../includes/db.php';

header('Content-Type: application/json');

try {

    $stmt = $pdo->query("SELECT product_info.*, product_images.*
    FROM product_info
    LEFT JOIN product_images
    ON product_info.id = product_images.product_id");

    $data = $stmt-> fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($data);

} catch(PDOException $e) {
    echo json_encode([
        "error" => $e->getMessage()
    ]);
}