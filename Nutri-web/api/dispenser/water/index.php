<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("allow_url_fopen = On");
//header("Access-Control-Allow-Credentials: true");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = file_get_contents('php://input');
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case "GET":
        $sql = "SELECT * FROM waterhistory LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $water = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($water);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO waterhistory(pHistory_id, waterAmount, waterTime, dispenseType, ifdispensed) VALUES(null, :waterAmount, :waterTime, :dispenseType, :ifdispensed)";
        $stmt = $conn->prepare($sql);
        $waterTime = date("Y-m-d H:i:s");
        $stmt->bindParam(':waterAmount', $user->waterAmount);
        $stmt->bindParam(':waterTime', $waterTime);
        $stmt->bindParam(':dispenseType', $user->dispenseType);
        $stmt->bindParam(':ifdispensed', $user->ifdispensed);
        if($stmt->execute()){
            $responese = ['status' =>1, 'message' => 'Record created successfully'];
        }
            else {
                $responese = ['status' =>1, 'message' => 'Fail to create record'];
        }
        echo json_encode($responese);
        break;

    case "PUT":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "UPDATE waterhistory SET wHistory_id= :wHistory_id, waterAmount= :waterAmount, waterTime= :waterTime, dispenseType= :dispenseType, ifdispensed= :ifdispensed WHERE wHistory_id = :wHistory_id";
        $stmt = $conn->prepare($sql);
        $waterTime = date("Y-m-d H:i:s");
        $stmt->bindParam(':wHistory_id', $user->wHistory_id);
        $stmt->bindParam(':waterAmount', $user->waterAmount);
        $stmt->bindParam(':waterTime', $waterTime);
        $stmt->bindParam(':dispenseType', $user->dispenseType);
        $stmt->bindParam(':ifdispensed', $user->ifdispensed);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM waterhistory WHERE wHistory_id = :wHistory_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':wHistory_id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}