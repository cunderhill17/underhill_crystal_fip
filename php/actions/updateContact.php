<?php

    require '../includes/db.php';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        //First we need to get all of the variables set up 
        //Then we have to check the database to see if an entry already exists
        //If there is an entry, then update that one
        //If there isn't an entry, then create one

        $sales_email = $_POST['sales_email'];
        $marketing_email = $_POST['marketing_email'];
        $corporate_number = $_POST['corporate_number'];
        $street_addr = $_POST['street_addr'];
        $city_addr = $_POST['city_addr'];
        $country_addr = $_POST['country_addr'];

        try {

            $stmt = $pdo->query("SELECT id FROM contact_info ORDER BY id ASC LIMIT 1");
            $row = $stmt-> fetch(PDO::FETCH_ASSOC);

            if ($row) {
                $sql = "UPDATE contact_info SET
                sales_email = :sales_email,
                marketing_email = :marketing_email,
                corporate_number = :corporate_number,
                street_addr = :street_addr,
                city_addr = :city_addr,
                country_addr = :country_addr
                WHERE id = :id";

                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                    ':sales_email' => $sales_email,
                    ':marketing_email' => $marketing_email,
                    ':corporate_number' => $corporate_number,
                    ':street_addr' => $street_addr,
                    ':city_addr' => $city_addr,
                    ':country_addr' => $country_addr,
                    ':id' => $row['id']
                ]);
            } else {
                $sql = "INSERT INTO contact_info (sales_email, marketing_email, corporate_number, street_addr, city_addr, country_addr)
                VALUES (:sales_email, :marketing_email, :corporate_number, :street_addr, :city_addr, :country_addr);
                ";

                $stmt = $pdo->prepare($sql);
                $stmt->execute([
                    ':sales_email' => $sales_email,
                    ':marketing_email' => $marketing_email,
                    ':corporate_number' => $corporate_number,
                    ':street_addr' => $street_addr,
                    ':city_addr' => $city_addr,
                    ':country_addr' => $country_addr
                ]);
            }

            header("Location: ../../admin-contact.html?status=success");
            exit;

        } catch (PDOException $e) {
            die("Connection Failed: " . $e->getMessage());
        }

    } else {
        header("Location: ../../admin-contact.html?status=invalid");
        exit;
    }