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
        $sql = "SELECT ifDispensed FROM etcpill";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $pill = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode($pill);
        break;
}