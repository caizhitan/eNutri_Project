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
        $sql = "SELECT * FROM waterhistory";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $water = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($water);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO waterhistory(wHistory_id, waterAmount, waterTime) VALUES(null, :waterAmount, :waterTime)";
        $stmt = $conn->prepare($sql);
        $waterTime = date("Y-m-d H:i:s");
        $stmt->bindParam(':waterAmount', $user->waterAmount);
        $stmt->bindParam(':waterTime', $waterTime);
        if($stmt->execute()){
            $responese = ['status' =>1, 'message' => 'Record created successfully'];
        }
            else {
                $responese = ['status' =>1, 'message' => 'Fail to create record'];
        }
        echo json_encode($responese);
        break;
}
