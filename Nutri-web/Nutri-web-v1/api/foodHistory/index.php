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
        $sql = "SELECT * FROM foodhistory";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $food = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($food);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO foodhistory(fHistory_id, foodName, foodAmount, foodTime, calories, sodium, potassium, sugar) VALUES(null, :foodName, :foodAmount, :foodTime, :calories, :sodium, :potassium, :sugar)";
        $stmt = $conn->prepare($sql);
        $foodTime = date("Y-m-d H:i:s");
        $stmt->bindParam(':foodName', $user->foodName);
        $stmt->bindParam(':foodAmount', $user->foodAmount);
        $stmt->bindParam(':foodTime', $foodTime);
        $stmt->bindParam(':calories', $user->calories);
        $stmt->bindParam(':sodium', $user->sodium);
        $stmt->bindParam(':potassium', $user->potassium);
        $stmt->bindParam(':sugar', $user->sugar);
        if($stmt->execute()){
            $responese = ['status' =>1, 'message' => 'Record created successfully'];
        }
            else {
                $responese = ['status' =>1, 'message' => 'Fail to create record'];
        }
        echo json_encode($responese);
        break;
}
