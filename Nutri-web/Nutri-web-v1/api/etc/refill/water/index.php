<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("allow_url_fopen = On");
header("Access-Control-Allow-Credentials: true");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE etcwater SET water_ID= :water_ID, water_stock= :water_stock WHERE water_ID = :water_ID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':water_ID', $user->water_ID);
        $stmt->bindParam(':water_stock', $user->water_stock);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;
}