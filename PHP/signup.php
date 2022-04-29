<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name=$_POST["name"];
    $email=$_POST["email"];
    $phno=$_POST["phone"];
    $pwd=$_POST["password"];
    
    $con=mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

    $sql="insert into login (name,email,phone_number,password) values (?,?,?,?)";
    $stmt=$con->prepare($sql);
    $stmt->bind_param("ssss",$name,$email,$phno,$pwd);
    $result=$stmt->execute();
    if($result)
    {
        header("Location:https://commuteagg.000webhostapp.com/HTML/Login.html");
    }
    else
    {
        header("Location:https://commuteagg.000webhostapp.com/HTML/Signup.html");
    }
    mysqli_close($con);
}
?>