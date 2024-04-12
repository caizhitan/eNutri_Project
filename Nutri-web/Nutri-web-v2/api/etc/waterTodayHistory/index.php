<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
//header("Access-Control-Allow-Credentials: true");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "GET":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "SELECT * FROM etcwaterhistory WHERE dispense_date = :dateToday";
        $dateToday = date('Y-m-d');
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':dateToday', $dateToday);
        $stmt->execute();
        $waterTodayHistory = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($waterTodayHistory);
        break;

    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO etcwaterhistory(waterHistory_ID, amount, dispense_date, dispense_time) VALUES(null, :amount, :dispense_date, :dispense_time)";
        $stmt = $conn->prepare($sql);
        $dispense_date = date("Y-m-d");
        $dispense_time = date("H:i:s");
        $stmt->bindParam(':amount', $user->amount);
        $stmt->bindParam(':dispense_date', $dispense_date);
        $stmt->bindParam(':dispense_time', $dispense_time);
        if($stmt->execute()) {
            $responese = ['status' =>1, 'message' => 'Record created successfully'];
        }
            else {
                $responese = ['status' =>1, 'message' => 'Fail to create record'];
        }
        echo json_encode($responese);
        break;
}
