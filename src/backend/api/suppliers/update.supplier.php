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

if (
    empty($suppliers_data->supplier_id) ||
    empty($suppliers_data->supplier_name) ||
    empty($suppliers_data->supplier_email) ||
    empty($suppliers_data->supplier_contact) ||
    empty($suppliers_data->supplier_address)
) {
    http_response_code(400);
    echo json_encode(array("message" => "Unabled to update, data is incomplete"));
    return;
}

$suppliers->supplier_id = $suppliers_data->supplier_id;
$suppliers->supplier_name = $suppliers_data->supplier_name;
$suppliers->supplier_email = $suppliers_data->supplier_email;
$suppliers->supplier_contact = $suppliers_data->supplier_contact;
$suppliers->supplier_address = $suppliers_data->supplier_address;

$isUpdated = $suppliers->updateSupplierData();

if ($isUpdated) {
    http_response_code(200);
    echo json_encode(array("message" => "Updated Successfully"));
} else {
    http_response_code(500);
    echo json_encode(array("message"  => "database error"));
}
