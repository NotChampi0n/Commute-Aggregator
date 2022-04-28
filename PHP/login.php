<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email=$_POST["email"];
    $password=$_POST["password"];
    // var_dump($email);
    // var_dump($password);
    // die;
    $con=mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

    $sql="select * from login where Email LIKE ? and Password LIKE ?";
    $stmt=$con->prepare($sql);
    $stmt->bind_param("ss",$email,$password);
    $stmt->execute();
    // die(var_dump($stmt));
    $result=$stmt->get_result();
    // die(var_dump($result));
    if($result->num_rows==1)
    {
        // header("Location:https://commuteagg.000webhostapp.com/HTML/Login.html");
        header("Location:https://commuteagg.000webhostapp.com/index.html");
    }
    else
    {
        // header("Location:https://commuteagg.000webhostapp.com/index.html");
        header("Location:https://commuteagg.000webhostapp.com/HTML/Login.html");
    }
    mysqli_close($con);
}
?>