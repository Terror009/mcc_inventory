<?php
class UserList
{

    private $conn;
    private $table_name = "users_list_table";

    public $user_list_id;
    public $user_list_name;
    public $user_list_email;
    public $user_list_contact;
    public $user_list_type;
    public $user_id;

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function findUserListData()
    {
        $query = "SELECT * FROM $this->table_name WHERE user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function createUserListData()
    {
        $query = "INSERT INTO $this->table_name(user_list_name, user_list_email, user_list_contact, user_list_type, user_id) VALUES(?,?,?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssisi", $this->user_list_name, $this->user_list_email, $this->user_list_contact, $this->user_list_type, $this->user_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function deleteUserListData()
    {
        $query = "DELETE FROM $this->table_name WHERE user_list_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->user_list_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function updateUserListData()
    {
        $query = "UPDATE $this->table_name SET user_list_name=?,user_list_email=?,user_list_contact=?,user_list_type=? WHERE user_list_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssisi", $this->user_list_name, $this->user_list_email, $this->user_list_contact, $this->user_list_type, $this->user_list_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
}
