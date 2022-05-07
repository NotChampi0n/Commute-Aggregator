<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name=$_POST["name"];
    $email=$_POST["email"];
    $phno=$_POST["phone"];
    $pwd=$_POST["password"];
    
    $con=mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

    if($stmt = $con->prepare("select * from login where email = ?")){
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        if ($stmt->num_rows > 0) {
            echo "<script>alert('You are already registered!! Please login directly')</script>";
        } 
        else {
            $sql="insert into login (name,email,phone_number,password) values (?,?,?,?)";
            $stmt=$con->prepare($sql);
            $stmt->bind_param("ssss",$name,$email,$phno,$pwd);
            $result=$stmt->execute();
            if($result){
                header("Location:https://commuteagg.000webhostapp.com/HTML/Login.html");
            }
            else{
                header("Location:https://commuteagg.000webhostapp.com/HTML/Signup.html");
            }
        }
    }
    mysqli_close($con);

    $to_email=$email;
    $subject="Welcome to Commute Family :)";
    $body="Hello $name, thank you for signing up with Commute Aggregator. We look forward to having you book rides with us. 
    
    Your credentials for login are as follows:
    Email ID: $email
    Password: $pwd
    
    Keep commuting safely :)";
    $from_email="From: co2019.khushboo.rathod@ves.ac.in";
    if(mail($to_email, $subject, $body, $from_email)){
    }
    else{
        echo "<script>alert('Sorry, failed while sending mail!!')</script>";
    }
}
?>