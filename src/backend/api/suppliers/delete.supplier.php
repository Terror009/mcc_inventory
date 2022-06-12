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

echo ($suppliers_data->supplier_id);

$suppliers->supplier_id = $suppliers_data->supplier_id;

$result = $suppliers->deleteSupplierData();


if ($result > 0) {
    http_response_code(200);
    echo json_encode(array("message" =>  $result . "Delete Successfully"));
    return;
}

http_response_code(400);
echo json_encode(array("message" => "no record deleted"));
