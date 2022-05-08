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
                header("Location:https://commuteagg.000webhostapp.com/index.html");
                $to_email=$email;
                $subject="Welcome to Commute Family :)";
                
                $body = "
                <HTML>
                    <head>
                        <title>HTML email</title>
                    </head>
                    <body>
                        <p>Hello $name, thank you for signing up with Commute Aggregator. We look forward to having you book rides with us.</p>
                        <p>Your credentials for login are as follows:</p>
                        <table>
                            <tr>
                                <td>Email ID: </td>
                                <td>$email</td>
                            </tr>
                            <tr>
                                <td>Password: </td>
                                <td>$pwd</td>
                            </tr>
                        </table>
                        <br><br>
                        <p>Keep commuting safely :)</p>
                    </body>
                </html>";

                $headers = "MIME-Version: 1.0" . "\r\n";
                $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
                $headers .= "From: co2019.khushboo.rathod@ves.ac.in" . "\r\n";

                if(mail($to_email, $subject, $body, $headers)){
                }
                else{
                    echo "<script>alert('Sorry, failed while sending mail!!')</script>";
                }
            }
            else{
                header("Location:https://commuteagg.000webhostapp.com/HTML/Signup.html");
            }
        }
    }
}
?>