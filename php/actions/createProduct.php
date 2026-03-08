<?php

    require '../includes/db.php';

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {

        $product_name = $_POST['product_name'];
        $product_description = $_POST['product_description'];
        $product_ingredients = $_POST['product_ingredients'];
        $product_price = $_POST['product_price'];
        $product_sale_price = $_POST['product_sale_price'];
        $product_on_sale = $_POST['product_on_sale'];
        $product_stock = $_POST['product_stock'];
        
        $product_image_alt = $_POST['product_image_alt'];
        $product_pre_1_alt = $_POST['product_pre_1_alt'];
        $product_pre_2_alt = $_POST['product_pre_2_alt'];
        $product_pre_3_alt = $_POST['product_pre_3_alt'];
        $product_pre_4_alt = $_POST['product_pre_4_alt'];

        // Upload directory
        $uploadDirectory = '../uploads/';

        // Array of images
        $images = [
            'product_image' => $_FILES['product_image'],
            'product_image_horizontal' => $_FILES['product_image_horizontal'], //have to add to the form
            'product_pre_1' => $_FILES['product_pre_1'],
            'product_pre_2' => $_FILES['product_pre_2'],
            'product_pre_3' => $_FILES['product_pre_3'],
            'product_pre_4' => $_FILES['product_pre_4'],
        ];

        // Array to store generated filenames
        $uploadedFilenames = [];


        try {

            $pdo->beginTransaction(); // Start transaction

            $sql = "INSERT INTO product_info (product_name, product_description, product_ingredients, product_price, product_sale_price, product_on_sale, product_stock)
            VALUES (:product_name, :product_description, :product_ingredients, :product_price, :product_sale_price, :product_on_sale, :product_stock);
            ";

            $stmt = $pdo->prepare($sql);
            $stmt->execute([
                ':product_name' => $product_name,
                ':product_description' => $product_description,
                ':product_ingredients' => $product_ingredients,
                ':product_price' => $product_price,
                ':product_sale_price' => $product_sale_price,
                ':product_on_sale' => $product_on_sale,
                ':product_stock' => $product_stock,
            ]);

            // Get the ID of the inserted product
            $product_id = $pdo->lastInsertId();


            //Resizing Function by width to keep image ratio
            function resizeImageKeepRatio($sourcePath, $destinationPath, $newWidth) {
                list($width, $height, $type) = getimagesize($sourcePath);

                // calculate proportional height
                $ratio = $height / $width;
                $newHeight = $newWidth * $ratio;

                $newImage = imagecreatetruecolor($newWidth, $newHeight);

                switch ($type) {
                    case IMAGETYPE_JPEG:
                        $source = imagecreatefromjpeg($sourcePath);
                        break;
                    case IMAGETYPE_PNG:
                        $source = imagecreatefrompng($sourcePath);

                        // preserve transparency
                        imagealphablending($newImage, false);
                        imagesavealpha($newImage, true);

                        // fill with transparent color
                        $transparent = imagecolorallocatealpha($newImage, 0, 0, 0, 127);
                        imagefill($newImage, 0, 0, $transparent);
                        break;
                    case IMAGETYPE_WEBP:
                        $source = imagecreatefromwebp($sourcePath);
                        break;
                    default:
                        return false; // unsupported type
                }

                // copy & resize the image
                imagecopyresampled(
                    $newImage,
                    $source,
                    0, 0, 0, 0,
                    $newWidth, $newHeight,
                    $width, $height
                );

                // save in same format as original
                switch ($type) {
                    case IMAGETYPE_JPEG:
                        imagejpeg($newImage, $destinationPath, 90);
                        break;
                    case IMAGETYPE_PNG:
                        imagepng($newImage, $destinationPath);
                        break;
                    case IMAGETYPE_WEBP:
                        imagewebp($newImage, $destinationPath);
                        break;
                }

                imagedestroy($source);
                imagedestroy($newImage);

                return true;
            }

            //Resizing Function by height to keep image ratio
            function resizeImageKeepRatioByHeight($sourcePath, $destinationPath, $newHeight) {
                list($width, $height, $type) = getimagesize($sourcePath);

                // calculate proportional width
                $ratio = $width / $height;
                $newWidth = $newHeight * $ratio;

                $newImage = imagecreatetruecolor($newWidth, $newHeight);

                switch ($type) {
                    case IMAGETYPE_JPEG:
                        $source = imagecreatefromjpeg($sourcePath);
                        break;
                    case IMAGETYPE_PNG:
                        $source = imagecreatefrompng($sourcePath);

                        // preserve transparency
                        imagealphablending($newImage, false);
                        imagesavealpha($newImage, true);

                        // fill with transparent color
                        $transparent = imagecolorallocatealpha($newImage, 0, 0, 0, 127);
                        imagefill($newImage, 0, 0, $transparent);
                        break;
                    case IMAGETYPE_WEBP:
                        $source = imagecreatefromwebp($sourcePath);
                        break;
                    default:
                        return false; // unsupported type
                }

                // copy & resize the image
                imagecopyresampled(
                    $newImage,
                    $source,
                    0, 0, 0, 0,
                    $newWidth, $newHeight,
                    $width, $height
                );

                // save in same format as original
                switch ($type) {
                    case IMAGETYPE_JPEG:
                        imagejpeg($newImage, $destinationPath, 90);
                        break;
                    case IMAGETYPE_PNG:
                        imagepng($newImage, $destinationPath);
                        break;
                    case IMAGETYPE_WEBP:
                        imagewebp($newImage, $destinationPath);
                        break;
                }

                imagedestroy($source);
                imagedestroy($newImage);

                return true;
            }

            //save original images in the uploads folder
            foreach ($images as $key => $image) {
                if ($image['error'] === 0) {
                    // Get extension
                    $extension = pathinfo($image['name'], PATHINFO_EXTENSION);

                    // generate a base name for the database
                    $baseName = uniqid() . '_' . $key;  // $key is 'product_image', 'product_pre_1', etc.

                    // store in an array for later DB use
                    $uploadedFilenames[$key] = [
                        'baseName' => $baseName,
                        'extension' => $extension,
                        'originalPath' => $uploadDirectory . $baseName . '.' . $extension
                    ];
                    
                    // Generate unique filename
                    $fileName = $baseName . '.' . $extension;
                    
                    // Destination path
                    $destination = $uploadDirectory . $fileName;
                    
                    // Move the uploaded file
                    move_uploaded_file($image['tmp_name'], $destination);
                    
                }
            }

            $mainImageSizes = [
                ['type' => 'width', 'size' => 400, 'suffix' => 'desktop']
            ];

            $horizontalImageSizes = [
                ['type' => 'width',  'size' => 412, 'suffix' => 'mobile'],
                ['type' => 'width',  'size' => 800, 'suffix' => 'tablet']
            ];

            $previewSizes = [
                ['type' => 'width',  'size' => 325, 'suffix' => 'medium'],
                ['type' => 'height', 'size' => 170, 'suffix' => 'small']
            ];

            //Resize main product image
            if (isset($uploadedFilenames['product_image'])) {
                $originalPath = $uploadedFilenames['product_image']['originalPath'];
                $baseName = $uploadedFilenames['product_image']['baseName'];
                $extension = $uploadedFilenames['product_image']['extension'];

                foreach ($mainImageSizes as $resizeRule) {
                    // Save resized image using the base name + width + extension
                    $resizedPath = $uploadDirectory . $baseName . '_' . $resizeRule['suffix'] . '.' . $extension;
                    resizeImageKeepRatio($originalPath, $resizedPath, $resizeRule['size']);

                }
            }

            //resize horizontal product image
            if (isset($uploadedFilenames['product_image_horizontal'])) {
                $originalPath = $uploadedFilenames['product_image_horizontal']['originalPath'];
                $extension = $uploadedFilenames['product_image_horizontal']['extension'];

                //vertical name reference so horiziontal and vertical images have same name
                $verticalBaseName = $uploadedFilenames['product_image']['baseName'];

                foreach ($horizontalImageSizes as $resizeRule) {
                    // Save resized image using the base name + width + extension
                    $resizedPath = $uploadDirectory . $verticalBaseName . '_' . $resizeRule['suffix'] . '.' . $extension;
                    resizeImageKeepRatio($originalPath, $resizedPath, $resizeRule['size']);

                }
            }

            //Resize preview images
            $previewKeys = ['product_pre_1','product_pre_2','product_pre_3','product_pre_4'];

            foreach ($previewKeys as $key) {
                if (isset($uploadedFilenames[$key])) {
                    $originalPath = $uploadedFilenames[$key]['originalPath'];
                    $baseName = $uploadedFilenames[$key]['baseName'];
                    $extension = $uploadedFilenames[$key]['extension'];

                    foreach ($previewSizes as $resizeRule) {
                        // Save resized preview using baseName + width + extension
                        $resizedPath = $uploadDirectory . $baseName . '_' . $resizeRule['suffix'] . '.' . $extension;
                        
                        if ($resizeRule['type'] === 'width') {
                            resizeImageKeepRatio($originalPath, $resizedPath, $resizeRule['size']);
                        } else {
                            resizeImageKeepRatioByHeight($originalPath, $resizedPath, $resizeRule['size']);
                        }
                    }
                }
            }

            //Query to insert images into product_images table
            $sql2 = 'INSERT INTO product_images (product_id, product_image, product_image_alt, product_pre_1, product_pre_1_alt, product_pre_2, product_pre_2_alt, product_pre_3, product_pre_3_alt, product_pre_4, product_pre_4_alt)
                VALUES (:product_id, :product_image, :product_image_alt, :product_pre_1, :product_pre_1_alt, :product_pre_2, :product_pre_2_alt, :product_pre_3, :product_pre_3_alt, :product_pre_4, :product_pre_4_alt);            
            ';

            $stmt2 = $pdo->prepare($sql2);
            $stmt2->execute([
                ':product_id' => $product_id,
                ':product_image' => $uploadedFilenames['product_image']['baseName'],
                ':product_image_alt' => $product_image_alt,
                ':product_pre_1' => $uploadedFilenames['product_pre_1']['baseName'],
                ':product_pre_1_alt' => $product_pre_1_alt,
                ':product_pre_2' => $uploadedFilenames['product_pre_2']['baseName'],
                ':product_pre_2_alt' => $product_pre_2_alt,
                ':product_pre_3' => $uploadedFilenames['product_pre_3']['baseName'],
                ':product_pre_3_alt' => $product_pre_3_alt,
                ':product_pre_4' => $uploadedFilenames['product_pre_4']['baseName'],
                ':product_pre_4_alt' => $product_pre_4_alt
            ]);            


            $pdo->commit(); // Everything worked → save permanently

            foreach ($uploadedFilenames as $fileInfo) {
                if (isset($fileInfo['originalPath']) && file_exists($fileInfo['originalPath'])) {
                    unlink($fileInfo['originalPath']); // delete the original file
                }
            }

            header("Location: ../../admin-products.html?status=success");
            exit;

        } catch (PDOException $e) {
            $pdo->rollBack(); // Something failed → undo everything
            die("Connection Faile: " . $e->getMessage());
        }


    } else {
        header("Location: ../../admin-products.html?status=invalid");
        exit;
    }