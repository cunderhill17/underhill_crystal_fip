<?php

    require '../includes/db.php';

        try {

            $sql1 = "INSERT INTO product_info (product_name, product_description, product_ingredients, product_price, product_sale_price, product_on_sale, product_stock)
                VALUES ('Bergamot', 'A luminous, citrus-kissed bergamot liqueur with fragrant floral notes and a refined balance of bright zest and delicate sweetness.', 'Water, Alcohol, Sugar, Bergamot Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)', 50.00, 45.98, 1, 12);
                ";

            $pdo->exec($sql1);

            // Get the ID of the inserted product
            $product_id = $pdo->lastInsertId();

            $sql2 = "INSERT INTO product_images (product_id, product_image, product_image_alt, product_pre_1, product_pre_1_alt, product_pre_2, product_pre_2_alt, product_pre_3,   
            product_pre_3_alt, product_pre_4, product_pre_4_alt)
            VALUES (" . $product_id . ", 'full-size-bergamot', 'Bergamot Liqueur', 'preview-bergamot-label-bottle', 'Front of Liqueur Bottle', 'preview-bergamot-back-label-bottle', 'Back of Liqueur Bottle', 'preview-bergamot-back-label-img', 'Full Bergamot Back Label', 'preview-bergamot-label-closeup', 'Close up of Bergamot Front Label');            
            ";

            $pdo->exec($sql2);

            $sql3 = "INSERT INTO product_info (product_name, product_description, product_ingredients, product_price, product_sale_price, product_on_sale, product_stock)
                VALUES ('Blood Orange', 'A radiant, sunset-hued blood orange liqueur alive with juicy citrus intensity, gently tempered by soft sweetness and a whisper of bittersweet zest.', 'Water, Alcohol, Sugar, Blood Orange Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)', 50.00, 45.98, 1, 12);
                ";

            $pdo->exec($sql3);

            // Get the ID of the inserted product
            $product_id = $pdo->lastInsertId();

            $sql4 = "INSERT INTO product_images (product_id, product_image, product_image_alt, product_pre_1, product_pre_1_alt, product_pre_2, product_pre_2_alt, product_pre_3,   
            product_pre_3_alt, product_pre_4, product_pre_4_alt)
            VALUES (" . $product_id . ", 'full-size-blood-orange', 'Blood Orange Liqueur', 'preview-blood-orange-label-bottle', 'Front of Liqueur Bottle', 'preview-blood-orange-back-label-bottle', 'Back of Liqueur Bottle', 'preview-blood-orange-back-label-img', 'Full Blood Orange Back Label', 'preview-blood-orange-label-closeup', 'Close up of Blood Orange Front Label');            
            ";

            $pdo->exec($sql4);

            $sql5 = "INSERT INTO product_info (product_name, product_description, product_ingredients, product_price, product_sale_price, product_on_sale, product_stock)
                VALUES ('Dark Cherry', 'A deep garnet dark cherry liqueur layered with ripe, velvety fruit flavors and a subtle sweetness that lingers with a hint of warmth.', 'Water, Alcohol, Sugar, Dark Cherry Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)', 50.00, 45.98, 1, 12);
                ";

            $pdo->exec($sql5);

            // Get the ID of the inserted product
            $product_id = $pdo->lastInsertId();

            $sql6 = "INSERT INTO product_images (product_id, product_image, product_image_alt, product_pre_1, product_pre_1_alt, product_pre_2, product_pre_2_alt, product_pre_3,   
            product_pre_3_alt, product_pre_4, product_pre_4_alt)
            VALUES (" . $product_id . ", 'full-size-dark-cherry', 'Dark Cherry Liqueur', 'preview-dark-cherry-label-bottle', 'Front of Liqueur Bottle', 'preview-dark-cherry-back-label-bottle', 'Back of Liqueur Bottle', 'preview-dark-cherry-back-label-img', 'Full Dark Cherry Back Label', 'preview-dark-cherry-label-closeup', 'Close up of Dark Cherry Front Label');            
            ";

            $pdo->exec($sql6);
            

            $sql7 = "INSERT INTO product_info (product_name, product_description, product_ingredients, product_price, product_sale_price, product_on_sale, product_stock)
                VALUES ('Pomegranate', 'A vibrant, jewel-toned pomegranate liqueur bursting with tangy-sweet arils and a crisp, refreshing finish.', 'Water, Alcohol, Sugar, Pomegranate Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)', 50.00, 45.98, 1, 12);
                ";

            $pdo->exec($sql7);

            // Get the ID of the inserted product
            $product_id = $pdo->lastInsertId();

            $sql8 = "INSERT INTO product_images (product_id, product_image, product_image_alt, product_pre_1, product_pre_1_alt, product_pre_2, product_pre_2_alt, product_pre_3,   
            product_pre_3_alt, product_pre_4, product_pre_4_alt)
            VALUES (" . $product_id . ", 'full-size-pomegranate', 'Pomegranate Liqueur', 'preview-pomegranate-label-bottle', 'Front of Liqueur Bottle', 'preview-pomegranate-back-label-bottle', 'Back of Liqueur Bottle', 'preview-pomegranate-back-label-img', 'Full Pomegranate Back Label', 'preview-pomegranate-label-closeup', 'Close up of Pomegranate Front Label');            
            ";

            $pdo->exec($sql8);

            $sql9 = "INSERT INTO product_info (product_name, product_description, product_ingredients, product_price, product_sale_price, product_on_sale, product_stock)
                VALUES ('Red Currant', 'A bright, ruby-hued red currant aperitif with lively tart berry flavors balanced by gentle sweetness.', 'Water, Alcohol, Sugar, Red Currant Juice / Extract, Natural flavours, herbal extracts, Citric Acid, Anthocyanics (E16)', 50.00, 45.98, 1, 12);
                ";

            $pdo->exec($sql9);

            // Get the ID of the inserted product
            $product_id = $pdo->lastInsertId();

            $sql10 = "INSERT INTO product_images (product_id, product_image, product_image_alt, product_pre_1, product_pre_1_alt, product_pre_2, product_pre_2_alt, product_pre_3,   
            product_pre_3_alt, product_pre_4, product_pre_4_alt)
            VALUES (" . $product_id . ", 'full-size-red-currant', 'Red Currant Liqueur', 'preview-red-currant-label-bottle', 'Front of Liqueur Bottle', 'preview-red-currant-back-label-bottle', 'Back of Liqueur Bottle', 'preview-red-currant-back-label-img', 'Full Red Currant Back Label', 'preview-red-currant-label-closeup', 'Close up of Red Currant Front Label');            
            ";

            $pdo->exec($sql10);

            $sql11 = "INSERT INTO contact_info (sales_email, marketing_email, corporate_number, street_addr, city_addr, country_addr)
                VALUES ('sales@quattro.ca', 'marketing@quattro.ca', '899-777-9087', '76 Billowing Dr', 'Toronto ON', 'N8Y U7L Canada');
                ";

            $pdo->exec($sql11);


        } catch (PDOException $e) {
            die("Error: " . $e->getMessage());
        }

        