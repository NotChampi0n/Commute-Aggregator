<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name=$_POST["name"];
    $email=$_POST["email"];
    $category=$_POST["category"];
    $explanation=$_POST["complaint"];
    
    $con=mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

    $sql="insert into complaint (name,email,category,explanation) values (?,?,?,?)";
    $stmt=$con->prepare($sql);
    $stmt->bind_param("ssss",$name,$email,$category,$explanation);
    $result=$stmt->execute();
    if($result)
    {
        header("Location:https://commuteagg.000webhostapp.com/index.html");
    }
    else
    {
        header("Location:https://commuteagg.000webhostapp.com/HTML/Complaint_Page.html");
    }
    mysqli_close($con);

    $to_email=$email;
    $subject="Thanks for reaching out :)";
    $body="Hello $name, thank you for reaching out to us. Our executive will look into it closely and get back to you as soon as possible. 

    
    Keep commuting safely :) 
    

    Thanks and Regards, 
    Commute Aggregator";
    $from_email="From: co2019.khushboo.rathod@ves.ac.in";
    if(mail($to_email, $subject, $body, $from_email)){
    }
    else{
        echo "<script>alert('Sorry, failed while sending mail!!')</script>";
    }
}
?>