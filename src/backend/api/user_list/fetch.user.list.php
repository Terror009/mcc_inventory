<?php
include("../../header.php");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(404);
    echo ("NOT FOUND");
    return;
}
include("../../db_config/database.php");
include("../../models/user.list.php");

$database = new Database();
$db = $database->getConnection();

$user_list = new UserList($db);
$user_list_data = json_decode(file_get_contents("php://input"));

$user_list->user_id = $user_list_data->user_id;

$results = $user_list->findUserListData();

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