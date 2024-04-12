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
        $sql = "SELECT * FROM pillhistory";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $pill = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($pill);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO pillhistory(pHistory_id, pillName, pillAmount, pillTime, dispenseType,ifdispensed) VALUES(null, :pillName, :pillAmount, :pillTime, :dispenseType, :ifdispensed)";
        $stmt = $conn->prepare($sql);
        $pillTime = date("Y-m-d H:i:s");
        $stmt->bindParam(':pillName', $user->pillName);
        $stmt->bindParam(':pillAmount', $user->pillAmount);
        $stmt->bindParam(':pillTime', $pillTime);
        $stmt->bindParam(':dispenseType', $user->dispensedType);
        $stmt->bindParam(':ifdispensed', $user->ifdispensed);
        if($stmt->execute()){
            $responese = ['status' =>1, 'message' => 'Record created successfully'];
        }
            else {
                $responese = ['status' =>1, 'message' => 'Fail to create record'];
        }
        echo json_encode($responese);
        break;
}
