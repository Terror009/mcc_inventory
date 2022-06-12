<?php

class Project
{

    private $conn;
    private $table_name = "project_table";

    public $project_id;
    public $project_name;
    public $site_location;
    public $budget;
    public $client_name;
    public $status;
    public $project_time;
    public $user_id;


    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function findProjectData()
    {
        $query = "SELECT * FROM $this->table_name WHERE user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function createProjectData()
    {
        $query = "INSERT INTO $this->table_name(project_name,
        site_location,
        budget,
        client_name,
        status,
        project_time,
        user_id) 
        VALUES(?,?,?,?,?,?,?
        )";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssssssi", $this->project_name, $this->site_location, $this->budget, $this->client_name, $this->status, $this->project_time, $this->user_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function deleteProjectData()
    {
        $query = "DELETE FROM $this->table_name WHERE project_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("i", $this->project_id);
        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function updateProjectData()
    {
        $query = "UPDATE $this->table_name SET project_name=?,site_location=?,budget=?,client_name=?,status=?,project_time=? WHERE project_id=?";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("ssssssi", $this->project_name, $this->site_location, $this->budget, $this->client_name, $this->status, $this->project_time, $this->project_id);

        if ($stmt->execute()) {
            return $stmt->affected_rows;
        } else {
            return false;
        }
    }
    public function pendingProjectData()
    {
        $query = "SELECT * FROM $this->table_name WHERE status='Ongoing' AND user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function activeProjectData()
    {
        $query = "SELECT * FROM $this->table_name WHERE status='Completed' AND user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
    public function canceledProjectData()
    {
        $query = "SELECT * FROM $this->table_name WHERE status='Canceled' AND user_id='$this->user_id'";
        $stmt = $this->conn->query($query);
        return $stmt;
    }
}
