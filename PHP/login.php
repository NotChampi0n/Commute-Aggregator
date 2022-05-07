<?php

$email=$_POST["email"];
$password=$_POST["password"];

if($_SERVER["REQUEST_METHOD"] == "POST"){

    $con=mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

    $sql="select * from login where email LIKE ? and password LIKE ?";
    $stmt=$con->prepare($sql);
    $stmt->bind_param("ss",$email,$password);
    $stmt->execute();
    $result=$stmt->get_result();
    if($result->num_rows==1){
        setcookie('email', $email, time() + (86400 * 30), "/");
        header("Location:https://commuteagg.000webhostapp.com/HTML/Homepage.html");
    }
    else{
        echo "<script>alert('Please enter correct details!')</script>";
    }
    mysqli_close($con);
}
?>