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
        $sql = "UPDATE etcpill SET pill_ID= :pill_ID, pill_name= :pill_name, pill_info= :pill_info, pill_stock= :pill_stock, ifDispensed= :ifDispensed, dispense_type= :dispense_type, dispense_amount= :dispense_amount WHERE pill_ID = :pill_ID";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pill_ID', $user->pill_ID);
        $stmt->bindParam(':pill_name', $user->pill_name);
        $stmt->bindParam(':pill_info', $user->pill_info);
        $stmt->bindParam(':pill_stock', $user->pill_stock);
        $stmt->bindParam(':ifDispensed', $user->ifDispensed);
        $stmt->bindParam(':dispense_type', $user->dispense_type);
        $stmt->bindParam(':dispense_amount', $user->dispense_amount);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;
}