<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS');
header('Content-Type: application/json, text/csv; charset=UTF-8');
header('Content-Disposition: attachment; filename=data.csv');

