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
        $sql = "SELECT * FROM patients";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $patient = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($patient);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO patients(id, name, lastname, username, password, email, status, created_date) VALUES(null, :name, :lastname, :username, :password, :email, :status, :created_date)";
        $stmt = $conn->prepare($sql);
        $created_date = date("Y-m-d H:i:s");
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':lastname', $user->lastname);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':status', $user->status);
        $stmt->bindParam(':created_date', $created_date);

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
        $sql = "UPDATE patients SET id= :id, name= :name, username= :username, password= :password, email= :email, status= :status created_date= :created_date WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':lastname', $user->lastname);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':status', $user->status);
        $stmt->bindParam(':created_date', $user->created_date);
        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record updated successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to update record.'];
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "DELETE FROM patients WHERE id= :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to delete record.'];
        }
        echo json_encode($response);
        break;
}
