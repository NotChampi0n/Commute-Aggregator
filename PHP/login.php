<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $email=$_POST["email"];
    $password=$_POST["password"];

    $con=mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

    $sql="select * from login where email LIKE ? and password LIKE ?";
    $stmt=$con->prepare($sql);
    $stmt->bind_param("ss",$email,$password);
    $stmt->execute();
    $result=$stmt->get_result();
    if($result->num_rows==1){
        header("Location:https://commuteagg.000webhostapp.com/index.html");
    }
    else{
        header("Location:https://commuteagg.000webhostapp.com/HTML/Login.html");
    }
    mysqli_close($con);
}
?>