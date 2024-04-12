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
        $sql = "SELECT * FROM etcpillhistory WHERE pill_ID = :pill_ID AND dispense_date = :dateToday";
        $dateToday = date('Y-m-d');
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pill_ID', $_GET['pill_ID']);
        $stmt->bindParam(':dateToday', $dateToday);
        $stmt->execute();
        $pillTodayHistory = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($pillTodayHistory);
        break;

    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO etcpillHistory(pillHistory_ID, pill_ID, amount, dispense_date) VALUES(null, :pill_ID, :amount, :dispense_date)";
        $stmt = $conn->prepare($sql);
        $dispense_date = date("Y-m-d");
        $stmt->bindParam(':pill_ID', $user->pill_ID);
        $stmt->bindParam(':amount', $user->amount);
        $stmt->bindParam(':dispense_date', $dispense_date);
        if($stmt->execute()) {
            $responese = ['status' =>1, 'message' => 'Record created successfully'];
        }
            else {
                $responese = ['status' =>1, 'message' => 'Fail to create record'];
        }
        echo json_encode($responese);
        break;
}
