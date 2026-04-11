<?php

require '../includes/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $product_id = $_POST['item_id'];

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
        'product_image_horizontal' => $_FILES['product_image_horizontal'], 
        'product_pre_1' => $_FILES['product_pre_1'],
        'product_pre_2' => $_FILES['product_pre_2'],
        'product_pre_3' => $_FILES['product_pre_3'],
        'product_pre_4' => $_FILES['product_pre_4'],
    ];

    // Array to store generated filenames
    $uploadedFilenames = [];

    try {

        $pdo->beginTransaction(); // Start transaction

        // Fetch existing image data
        $sqlExisting = "SELECT * FROM product_images WHERE product_id = :product_id";
        $stmtExisting = $pdo->prepare($sqlExisting);
        $stmtExisting->execute([':product_id' => $product_id]);
        $existingImages = $stmtExisting->fetch(PDO::FETCH_ASSOC);

        // Update product_info table
        $sql = "UPDATE product_info SET
            product_name = :product_name,
            product_description = :product_description,
            product_ingredients = :product_ingredients,
            product_price = :product_price,
            product_sale_price = :product_sale_price,
            product_on_sale = :product_on_sale,
            product_stock = :product_stock
        WHERE id = :product_id";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':product_name' => $product_name,
            ':product_description' => $product_description,
            ':product_ingredients' => $product_ingredients,
            ':product_price' => $product_price,
            ':product_sale_price' => $product_sale_price,
            ':product_on_sale' => $product_on_sale,
            ':product_stock' => $product_stock,
            ':product_id' => $product_id
        ]);

        //Resizing Function by width to keep image ratio
        function resizeImageKeepRatio($sourcePath, $destinationPath, $newWidth) {
            list($width, $height, $type) = getimagesize($sourcePath);
            $ratio = $height / $width;
            $newHeight = $newWidth * $ratio;
            $newImage = imagecreatetruecolor($newWidth, $newHeight);

            switch ($type) {
                case IMAGETYPE_JPEG:
                    $source = imagecreatefromjpeg($sourcePath);
                    break;
                case IMAGETYPE_PNG:
                    $source = imagecreatefrompng($sourcePath);
                    imagealphablending($newImage, false);
                    imagesavealpha($newImage, true);
                    $transparent = imagecolorallocatealpha($newImage, 0, 0, 0, 127);
                    imagefill($newImage, 0, 0, $transparent);
                    break;
                default:
                    return false;
            }

            imagecopyresampled(
                $newImage, $source, 0, 0, 0, 0,
                $newWidth, $newHeight, $width, $height
            );

            switch ($type) {
                case IMAGETYPE_JPEG:
                    imagejpeg($newImage, $destinationPath, 90);
                    break;
                case IMAGETYPE_PNG:
                    imagepng($newImage, $destinationPath);
                    break;
            }

            imagedestroy($source);
            imagedestroy($newImage);

            return true;
        }

        //Resizing Function by height to keep image ratio
        function resizeImageKeepRatioByHeight($sourcePath, $destinationPath, $newHeight) {
            list($width, $height, $type) = getimagesize($sourcePath);
            $ratio = $width / $height;
            $newWidth = $newHeight * $ratio;
            $newImage = imagecreatetruecolor($newWidth, $newHeight);

            switch ($type) {
                case IMAGETYPE_JPEG:
                    $source = imagecreatefromjpeg($sourcePath);
                    break;
                case IMAGETYPE_PNG:
                    $source = imagecreatefrompng($sourcePath);
                    imagealphablending($newImage, false);
                    imagesavealpha($newImage, true);
                    $transparent = imagecolorallocatealpha($newImage, 0, 0, 0, 127);
                    imagefill($newImage, 0, 0, $transparent);
                    break;
                default:
                    return false;
            }

            imagecopyresampled(
                $newImage, $source, 0, 0, 0, 0,
                $newWidth, $newHeight, $width, $height
            );

            switch ($type) {
                case IMAGETYPE_JPEG:
                    imagejpeg($newImage, $destinationPath, 90);
                    break;
                case IMAGETYPE_PNG:
                    imagepng($newImage, $destinationPath);
                    break;
            }

            imagedestroy($source);
            imagedestroy($newImage);

            return true;
        }

        // Save/upload images if new ones are provided
        foreach ($images as $key => $image) {
            if ($image['error'] === 0) {
                // Get extension
                $extension = pathinfo($image['name'], PATHINFO_EXTENSION);

                // generate base name for database
                $baseName = uniqid() . '_' . $key;

                $uploadedFilenames[$key] = [
                    'baseName' => $baseName,
                    'extension' => $extension,
                    'originalPath' => $uploadDirectory . $baseName . '.' . $extension
                ];
                
                move_uploaded_file($image['tmp_name'], $uploadDirectory . $baseName . '.' . $extension);

            } else {
                // keep existing image if no new upload
                if (isset($existingImages[$key])) {
                    $uploadedFilenames[$key]['baseName'] = $existingImages[$key];
                }
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
            $originalPath = $uploadedFilenames['product_image']['originalPath'] ?? null;
            $baseName = $uploadedFilenames['product_image']['baseName'];
            $extension = $uploadedFilenames['product_image']['extension'] ?? null;

            if ($originalPath) {
                foreach ($mainImageSizes as $resizeRule) {
                    $resizedPath = $uploadDirectory . $baseName . '_' . $resizeRule['suffix'] . '.' . $extension;
                    resizeImageKeepRatio($originalPath, $resizedPath, $resizeRule['size']);
                }
            }
        }

        // Resize horizontal product image
        if (isset($uploadedFilenames['product_image_horizontal'])) {
            $originalPath = $uploadedFilenames['product_image_horizontal']['originalPath'] ?? null;
            $extension = $uploadedFilenames['product_image_horizontal']['extension'] ?? 'jpg';
            $verticalBaseName = $uploadedFilenames['product_image']['baseName'] ?? $existingImages['product_image'];

            if ($originalPath) {
                foreach ($horizontalImageSizes as $resizeRule) {
                    $resizedPath = $uploadDirectory . $verticalBaseName . '_' . $resizeRule['suffix'] . '.' . $extension;
                    resizeImageKeepRatio($originalPath, $resizedPath, $resizeRule['size']);
                }
            }
        }

        // Resize preview images
        $previewKeys = ['product_pre_1','product_pre_2','product_pre_3','product_pre_4'];

        foreach ($previewKeys as $key) {
            if (isset($uploadedFilenames[$key])) {
                $originalPath = $uploadedFilenames[$key]['originalPath'] ?? null;
                $baseName = $uploadedFilenames[$key]['baseName'];
                $extension = $uploadedFilenames[$key]['extension'] ?? 'jpg';

                if ($originalPath) {
                    foreach ($previewSizes as $resizeRule) {
                        $resizedPath = $uploadDirectory . $baseName . '_' . $resizeRule['suffix'] . '.' . $extension;
                        if ($resizeRule['type'] === 'width') {
                            resizeImageKeepRatio($originalPath, $resizedPath, $resizeRule['size']);
                        } else {
                            resizeImageKeepRatioByHeight($originalPath, $resizedPath, $resizeRule['size']);
                        }
                    }
                }
            }
        }

        // Update product_images table
        $sql2 = "UPDATE product_images SET
            product_image = :product_image,
            product_image_alt = :product_image_alt,
            product_pre_1 = :product_pre_1,
            product_pre_1_alt = :product_pre_1_alt,
            product_pre_2 = :product_pre_2,
            product_pre_2_alt = :product_pre_2_alt,
            product_pre_3 = :product_pre_3,
            product_pre_3_alt = :product_pre_3_alt,
            product_pre_4 = :product_pre_4,
            product_pre_4_alt = :product_pre_4_alt
        WHERE product_id = :product_id";

        $stmt2 = $pdo->prepare($sql2);
        $stmt2->execute([
            ':product_id' => $product_id,
            ':product_image' => $uploadedFilenames['product_image']['baseName'] ?? $existingImages['product_image'],
            ':product_image_alt' => $product_image_alt,
            ':product_pre_1' => $uploadedFilenames['product_pre_1']['baseName'] ?? $existingImages['product_pre_1'],
            ':product_pre_1_alt' => $product_pre_1_alt,
            ':product_pre_2' => $uploadedFilenames['product_pre_2']['baseName'] ?? $existingImages['product_pre_2'],
            ':product_pre_2_alt' => $product_pre_2_alt,
            ':product_pre_3' => $uploadedFilenames['product_pre_3']['baseName'] ?? $existingImages['product_pre_3'],
            ':product_pre_3_alt' => $product_pre_3_alt,
            ':product_pre_4' => $uploadedFilenames['product_pre_4']['baseName'] ?? $existingImages['product_pre_4'],
            ':product_pre_4_alt' => $product_pre_4_alt
        ]);

        $pdo->commit(); // Everything worked → save permanently

        // Delete originals if new ones were uploaded
        foreach ($uploadedFilenames as $fileInfo) {
            if (isset($fileInfo['originalPath']) && file_exists($fileInfo['originalPath'])) {
                unlink($fileInfo['originalPath']);
            }
        }

        header("Location: ../../admin-products.html?status=success");
        exit;

    } catch (PDOException $e) {
        $pdo->rollBack(); // Something failed → undo everything
        die("Connection Failed: " . $e->getMessage());
    }

} else {
    header("Location: ../../admin-products.html?status=invalid");
    exit;
}