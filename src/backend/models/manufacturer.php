<?php
class Manufacturer
{

    private $conn;
    private $table_name = "manufacturer_table";

    public $user_id;
    public $manufacturer_id;
    public $manufacturer_name;
    public $manufacturer_email;
    public $manufacturer_contact;
    public $manufacturer_address;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function findManufactuerData()
    {
        $query = "SELECT * FROM $this->table_name WHERE user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function createManufacturerData()
    {
        $query = "INSERT INTO $this->table_name(manufacturer_name,manufacturer_email,manufacturer_contact,manufacturer_address,user_id) VALUES(?,?,?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssisi", $this->manufacturer_name, $this->manufacturer_email, $this->manufacturer_contact, $this->manufacturer_address,$this->user_id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function deleteManufacturerData()
    {
        $query = "DELETE FROM $this->table_name WHERE manufacturer_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->manufacturer_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function updateManufacturerData()
    {
        $query = "UPDATE $this->table_name SET manufacturer_name=?, manufacturer_email=?,manufacturer_contact=?,manufacturer_address=? WHERE manufacturer_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssisi", $this->manufacturer_name, $this->manufacturer_email, $this->manufacturer_contact, $this->manufacturer_address, $this->manufacturer_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
}
