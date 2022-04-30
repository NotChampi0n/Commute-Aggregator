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
}
?>