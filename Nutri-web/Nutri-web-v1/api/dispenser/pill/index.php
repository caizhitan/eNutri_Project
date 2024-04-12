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
    case "GET":
        $sql = "SELECT * FROM pillhistory ORDER BY pHistory_id DESC LIMIT 1";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $pill = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($pill);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO pillhistory(pHistory_id, pillName, pillAmount, pillTime, ifdispensed,dispenseType, pillType_id) VALUES(null, :pillName, :pillAmount, :pillTime, :ifdispensed, :dispenseType, :pillType_id)";
        $stmt = $conn->prepare($sql);
        $pillTime = date("Y-m-d H:i:s");
        $stmt->bindParam(':pillName', $user->pillName);
        $stmt->bindParam(':pillAmount', $user->pillAmount);
        $stmt->bindParam(':pillTime', $pillTime);
        $stmt->bindParam(':ifdispensed', $user->ifdispensed);
        $stmt->bindParam(':dispenseType', $user->dispenseType);
        $stmt->bindParam(':pillType_id', $user->pillType_id);
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
        $sql = "UPDATE pillhistory SET pHistory_id= :pHistory_id, pillName= :pillName, pillAmount= :pillAmount, pillTime= :pillTime, dispenseType= :dispenseType, ifdispensed= :ifdispensed WHERE pHistory_id = :pHistory_id";
        $stmt = $conn->prepare($sql);
        $pillTime = date("Y-m-d H:i:s");
        $stmt->bindParam(':pHistory_id', $user->pHistory_id);
        $stmt->bindParam(':pillName', $user->pillName);
        $stmt->bindParam(':pillAmount', $user->pillAmount);
        $stmt->bindParam(':pillTime', $pillTime);
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
        $sql = "DELETE FROM pillhistory WHERE pHistory_id = :pHistory_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pHistory_id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}