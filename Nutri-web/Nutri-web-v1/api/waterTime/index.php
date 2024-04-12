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
        $sql = "SELECT * FROM watertime";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $water = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($water);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO watertime(wTime_id, waterAmount, waterTime) VALUES(null, :waterAmount, :waterTime)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':waterAmount', $user->waterAmount);
        $stmt->bindParam(':waterTime', $user->waterTime);
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
            $sql = "UPDATE watertime SET wTime_id= :wTime_id, waterAmount= :waterAmount, waterTime= :waterTime WHERE wTime_id = :wTime_id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':wTime_id', $user->wTime_id);
            $stmt->bindParam(':waterAmount', $user->waterAmount);
            $stmt->bindParam(':waterTime', $user->$waterTime);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;
    
        case "DELETE":
            $sql = "DELETE FROM watertime WHERE wTime_id = :wTime_id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':wTime_id', $path[3]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
}
