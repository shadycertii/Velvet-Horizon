<!-- <?php
// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = htmlspecialchars($_POST['name']);
//     $email = htmlspecialchars($_POST['email']);
//     $checkin = htmlspecialchars($_POST['check-in']);
//     $checkout = htmlspecialchars($_POST['check-out']);
    
//     $to = "your_email@example.com"; // Change this to your email
//     $subject = "New Booking Request";
//     $message = "Name: $name\nEmail: $email\nCheck-in: $checkin\nCheck-out: $checkout";
//     $headers = "From: $email";
    
//     if (mail($to, $subject, $message, $headers)) {
//         $response = "Booking request sent successfully. We will contact you soon.";
//     } else {
//         $response = "There was an error sending your request. Please try again later.";
//     }
// }

// // if (isset($response)) echo "<p>$response</p>"; 
// ?> -->


<?php
header("Content-Type: application/json");

$paystack_secret_key = "sk_test_778db42a5749364c556a3d6acd5950faf3dbe204"; // Replace with your real Paystack secret key
$rawPostData = file_get_contents("php://input");
$data = json_decode($rawPostData, true);
$reference = $data['reference'];

// Verify transaction with Paystack API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.paystack.co/transaction/verify/" . $reference);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Authorization: Bearer " . $paystack_secret_key,
    "Content-Type: application/json"
]);
$response = curl_exec($ch);
curl_close($ch);

$paymentDetails = json_decode($response, true);
if ($paymentDetails['status'] && $paymentDetails['data']['status'] == "success") {
    echo json_encode(["success" => true, "message" => "Payment confirmed!"]);
} else {
    echo json_encode(["error" => "Payment failed"]);
}




$servername = "localhost";
$username = "root";
$password = "";
$dbname = "payments_db";

// Connect to database
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

// Save transaction details
if ($paymentDetails['status'] && $paymentDetails['data']['status'] == "success") {
    $amount = $paymentDetails['data']['amount'] / 100; // Convert from kobo to naira
    $email = $paymentDetails['data']['customer']['email'];
    $transaction_ref = $paymentDetails['data']['reference'];

    $sql = "INSERT INTO transactions (email, amount, transaction_ref) VALUES ('$email', '$amount', '$transaction_ref')";
    $conn->query($sql);
    echo json_encode(["success" => true, "message" => "Payment confirmed & saved!"]);
} else {
    echo json_encode(["error" => "Payment failed"]);
}

$conn->close();






?>




