<?php

function generateEstimatedTime($length = 1)
{
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $time = '';
    for ($i = 0; $i < $length; $i++) {
        $time .= $characters[rand(0, $charactersLength - 1)];
    }
    // echo "Time:$time<br>";
    return $time;
}

function generatePhoneNumber($length = 10)
{
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $phone = '';
    for ($i = 0; $i < $length; $i++) {
        $phone .= $characters[rand(0, $charactersLength - 1)];
    }
    // echo "Phone:$phone<br>";
    return $phone;
}

function generateOTP($length = 4)
{
    $characters = '0123456789';
    $charactersLength = strlen($characters);
    $otp = '';
    for ($i = 0; $i < $length; $i++) {
        $otp .= $characters[rand(0, $charactersLength - 1)];
    }
    // echo "<br>Otp:$otp<br>";
    return $otp;
}

function generateCarNumber()
{
    $characters = '0123456789';
    $secondPlace = '';
    for ($i = 0; $i < 2; $i++) {
        $secondPlace .= $characters[rand(0, 2)];
    }
    $thirdPlace = '';
    $charactersForThirdPlace = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charLen = strlen($charactersForThirdPlace);
    for ($i = 0; $i < 2; $i++) {
        $thirdPlace .= $charactersForThirdPlace[rand(0, $charLen-1)];
    }
    $fourthPlace = '';
    $charactersForFourthPlace = '0123456789';
    $charLength = strlen($charactersForFourthPlace);
    for ($i = 0; $i < 4; $i++) {
        $fourthPlace .= $charactersForFourthPlace[rand(0, $charLength - 1)];
    }
    // echo "<br>MH $secondPlace $thirdPlace $fourthPlace";
    return "MH $secondPlace $thirdPlace $fourthPlace";

}

$carNumber = generateCarNumber();
$otp = generateOTP();
$phone = generatePhoneNumber();
$time = generateEstimatedTime();
$from = $_POST['from'];
$to = $_POST['to'];

$conn = mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

$to_email = $_COOKIE['email'];
$select = "select name from login where email='$to_email'";
$run = mysqli_query($conn, $select);
$username = mysqli_fetch_array($run);
$name = $username['name'];

$subject="Your ride is booked!";
$body="Hello $name, thank you for booking your ride with Commute Aggregator.  
                
Please find your ride details below:
Pickup Location - $from
Drop Location - $to
Estimated cost - 
Vehicle - 
Vehicle Number - $carNumber
Driver Name - 
Drive Contact - $phone
Arrival Time - $time Minutes
OTP - $otp

Incase if you wish to cancel the ride, please reply to this mail with CANCEL. Feel free to reach out in case of any confusion. 

Have a safe ride, thank you. Regards, 
Commute Aggregator";
$from_email="From: co2019.khushboo.rathod@ves.ac.in";

(mail($to_email, $subject, $body, $from_email));

echo "<script>alert('A confirmation mail is sent to your registered email id, Thank you!')</script>";

$query = "update login set from_location='$from', to_location='$to' where email='$to_email'";
$run = mysqli_query($conn, $query);
?>