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
        $sql = "SELECT * FROM pilltime";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $pill = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($pill);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO pilltime(pTime_id, pillName, pillAmount, pillTime) VALUES(null, :pillName, :pillAmount, :pillTime)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pillName', $user->pillName);
        $stmt->bindParam(':pillAmount', $user->pillAmount);
        $stmt->bindParam(':pillTime', $user->pillTime);
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
        $sql = "UPDATE pilltime SET pTime_id= :pTime_id, pillName= :pillName, pillAmount= :pillAmount, pillTime= :pillTime WHERE pTime_id = :pTime_id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pTime_id', $user->pTime_id);
        $stmt->bindParam(':pillName', $user->pillName);
        $stmt->bindParam(':pillAmount', $user->pillAmount);
        $stmt->bindParam(':pillTime', $user->$pillTime);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM pilltime WHERE pTime_id = :pTime_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':pTime_id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
