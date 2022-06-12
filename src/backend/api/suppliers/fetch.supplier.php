<?php
include("../../header.php");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(404);
    echo ("NOT FOUND");
    return;
}

include("../../db_config/database.php");
include("../../models/suppliers.php");

$database = new Database();
$db = $database->getConnection();

$suppliers = new Suppliers($db);

$suppliers_data = json_decode(file_get_contents("php://input"));

$suppliers->user_id = $suppliers_data->user_id;



$results = $suppliers->findSupplierData();
if ($results) {

    $arr_row = array();

    while ($row = $results->fetch_assoc()) {

        array_push($arr_row, $row);
    }

    http_response_code(200);
    echo json_encode($arr_row);
} else {
    http_response_code(400);
    echo json_encode(array("message" => "no record"));
} 
