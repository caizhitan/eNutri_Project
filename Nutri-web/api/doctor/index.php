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
        $sql = "SELECT * FROM doctors";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $doctor = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($doctor);
        break;
    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO doctors(id, name, lastname, username, password, email, status, created_date) VALUES(null, :name, :lastname, :username, :password, :email, :status, :created_date)";
        $stmt = $conn->prepare($sql);
        $created_date = date("Y-m-d H:i:s");
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':lastname', $user->lastname);
        $stmt->bindParam(':username', $username);
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
}