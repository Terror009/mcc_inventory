<?php
class Users
{
    private $conn;
    private $table_name = "users_table";

    public $user_id;
    public $firstname;
    public $lastname;
    public $email;
    public $password;
    public $session_key;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function findUserData()
    {
        $query = "SELECT * FROM $this->table_name WHERE session_key='$this->session_key'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function createUserData()
    {
        $query = "INSERT INTO $this->table_name(firstname,lastname,email,password,session_key) VALUES (?,?,?,?,?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sssss", $this->firstname, $this->lastname, $this->email, $this->password, $this->session_key);
        if ($stmt->execute()) {
            return $stmt->affected_rows;
        }
        return false;
    }
    public function validateUserData()
    {
        $query = "SELECT * FROM $this->table_name WHERE email = '$this->email' AND password = '$this->password'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function updateUserData()
    {
        $query = "UPDATE $this->table_name SET firstname=?,lastname=?,email=? WHERE user_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("sssi", $this->firstname, $this->lastname, $this->email, $this->user_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function updateUserPasswordData()
    {
        $query = "UPDATE $this->table_name SET password=? WHERE user_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("si", $this->password, $this->user_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
}
