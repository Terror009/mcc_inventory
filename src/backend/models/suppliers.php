<?php
class Suppliers
{
    private $conn;
    private $table_name = "supplier_table";

    public $user_id;
    public $supplier_id;
    public $supplier_name;
    public $supplier_email;
    public $supplier_contact;
    public $supplier_address;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function findSupplierData()
    {
        $query = "SELECT * FROM $this->table_name WHERE user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
        /*         $stmt->bind_param("i", $this->user_id);
        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        } */
    }
    public function createSupplierData()
    {
        $query = "INSERT INTO $this->table_name(supplier_name,supplier_email,supplier_contact,supplier_address,user_id) VALUES(?,?,?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssisi", $this->supplier_name, $this->supplier_email, $this->supplier_contact, $this->supplier_address, $this->user_id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    public function deleteSupplierData()
    {
        $query = "DELETE FROM $this->table_name WHERE supplier_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->supplier_id);
        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function updateSupplierData()
    {
        $query = "UPDATE $this->table_name SET supplier_name=?, supplier_email=?,supplier_contact=?,supplier_address=? WHERE supplier_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssisi", $this->supplier_name, $this->supplier_email, $this->supplier_contact, $this->supplier_address, $this->supplier_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }

    public function DownloadSupplierData()
    {
        $query = "SELECT * FROM $this->table_name WHERE user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
}
