<?php

$host = "localhost";
$user = "root";
$password = "";

try {
    // Connect without selecting database first
    $pdo = new PDO("mysql:host=$host", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create database if not exists
    $pdo->exec("CREATE DATABASE IF NOT EXISTS  quattro_db");

    // Select database
    $pdo->exec("USE quattro_db");

    // Create table if not exists
    $sql1 = "
    CREATE TABLE IF NOT EXISTS contact_info (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sales_email VARCHAR(255) NOT NULL,
        marketing_email VARCHAR(255) NOT NULL,
        corporate_number VARCHAR(50) NOT NULL,
        street_addr VARCHAR(255) NOT NULL,
        city_addr VARCHAR(255) NOT NULL,
        country_addr VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    $sql2 = "
    CREATE TABLE IF NOT EXISTS product_info (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_name VARCHAR(255) NOT NULL,
        product_description VARCHAR(255) NOT NULL,
        product_ingredients VARCHAR(255) NOT NULL,
        product_price DECIMAL(10,2) NOT NULL,
        product_sale_price DECIMAL(10,2) NOT NULL,
        product_on_sale BOOLEAN NOT NULL,
        product_stock INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    $sql3 = "
    CREATE TABLE IF NOT EXISTS product_images (
        id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT NOT NULL,
        product_image VARCHAR(255) NOT NULL, 
        product_image_alt VARCHAR(255) NOT NULL, 
        product_pre_1 VARCHAR(255) NOT NULL,
        product_pre_1_alt VARCHAR(255) NOT NULL,
        product_pre_2 VARCHAR(255) NOT NULL,
        product_pre_2_alt VARCHAR(255) NOT NULL,
        product_pre_3 VARCHAR(255) NOT NULL,
        product_pre_3_alt VARCHAR(255) NOT NULL,
        product_pre_4 VARCHAR(255) NOT NULL,
        product_pre_4_alt VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        CONSTRAINT fk_product_images_product
            FOREIGN KEY (product_id)
            REFERENCES product_info(id)
            ON DELETE CASCADE
            ON UPDATE CASCADE
    ) ENGINE=InnoDB;
    ";

    $pdo->exec($sql1);
    $pdo->exec($sql2);
    $pdo->exec($sql3);

    // echo "Database and Tables Created Successfully.";


} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}