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

function generateName($length = 1){
    $names = array("Nazir Hoosein", "Jairaj Patel", "Rahul Gupta", "Shiv Sharma", "Madhav Varma", "Jagdish Singh","Hitesh Gill", "Yusuf Khan", "Babu Patil", "Nitish Thakur");
    $name = array_rand($names, 1);
    // echo $names[$name];
    return $names[$name];
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
$driver = generateName();

$conn = mysqli_connect("localhost","id18850211_commute_login","Khushboo(2004)","id18850211_login");

$to_email = $_COOKIE['email'];
$select1 = "select name from login where email='$to_email'";
$select2 = "select phone_number from login where email='$to_email'";
$run1 = mysqli_query($conn, $select1);
$run2 = mysqli_query($conn, $select2);
$username = mysqli_fetch_array($run1);
$mobno = mysqli_fetch_array($run2);
$name = $username['name'];
$user_phone = $mobno['phone_number'];

$subject="Your ride is booked!";

$body = "
<HTML>
    <head>
        <title>HTML email</title>
    </head>
    <body>
        <p>Hello $name, thank you for booking your ride with Commute Aggregator.</p>
        <p>Please find your ride details below:</p>
        <table>
            <tr>
                <td>Pickup Location: </td>
                <td>$from</td>
            </tr>
            <tr>
                <td>Drop Location: </td>
                <td>$to</td>
            </tr>
            <tr>
                <td>Vehicle Number: </td>
                <td>$carNumber</td>
            </tr>
            <tr>
                <td>Driver Name: </td>
                <td>$driver</td>
            </tr>
            <tr>
                <td>Driver Contact: </td>
                <td>$phone</td>
            </tr>
            <tr>
                <td>Arrival Time: </td>
                <td>$time Minutes</td>
            </tr>
            <tr>
                <td>OTP: </td>
                <td>$otp</td>
            </tr>
        </table>
        <br><br>
        <p>Incase if you wish to cancel the ride, please reply to this mail with 'CANCEL'. Feel free to reach out in case of any confusion.</p>
        <br>
        <p>Have a safe ride, thank you. Regards,<br>Commute Aggregator</p>
    </body>
</html>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: co2019.khushboo.rathod@ves.ac.in" . "\r\n";

mail($to_email, $subject, $body, $headers);

$query = "insert into booking_details(name, email, phone_number, from_location, to_location, vehicle_number) values ('$name', '$to_email', '$user_phone', '$from', '$to', '$carNumber')";
$run = mysqli_query($conn, $query);

?>