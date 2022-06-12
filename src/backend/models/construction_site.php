<?php
class ConstructionSite
{
    private $conn;
    private $table_name = "construction_site";

    public $user_id;
    public $construction_id;
    public $construction_site_name;
    public $construction_client_name;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function findConstructionData()
    {
        $query = "SELECT * FROM $this->table_name WHERE user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function createConstructionData()
    {
        $query = "INSERT INTO $this->table_name(construction_site_name, construction_client_name,user_id) VALUES(?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssi", $this->construction_site_name, $this->construction_client_name, $this->user_id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function deleteConstructionData()
    {
        $query = "DELETE FROM $this->table_name WHERE construction_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->construction_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function updateConstructionData()
    {
        $query = "UPDATE $this->table_name SET construction_site_name=?, construction_client_name=? WHERE construction_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssi", $this->construction_site_name, $this->construction_client_name, $this->construction_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
}
