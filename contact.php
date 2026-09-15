<?php
// Simple PHP contact handler for standard shared hosting.
// Replace this address with the real Bayvines mailbox before launch.
$to = 'info@bayvines.co.nz';
function clean($value) { return trim(str_replace(["\r", "\n"], ' ', (string)$value)); }
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { header('Location: contact.html'); exit; }
$name = clean($_POST['name'] ?? '');
$email = clean($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');
if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || $message === '') { header('Location: contact.html?error=1'); exit; }
$fields = ['Company / Orchard Name'=>$_POST['companyName']??'','Phone'=>$_POST['phone']??'','Location'=>$_POST['location']??'','Service Required'=>$_POST['serviceRequired']??'','Approximate Orchard Size'=>$_POST['orchardSize']??'','Preferred Start Date'=>$_POST['preferredStartDate']??'','Duration'=>$_POST['duration']??'','Workers Required'=>$_POST['workersRequired']??'','Preferred Contact Method'=>$_POST['preferredContact']??''];
$body = "New Bayvines website enquiry\n\nName: {$name}\nEmail: {$email}\n";
foreach ($fields as $label=>$value) { $body .= $label . ': ' . clean($value) . "\n"; }
$body .= "\nMessage:\n" . clean($message) . "\n";
$host = preg_replace('/[^a-zA-Z0-9.-]/', '', $_SERVER['HTTP_HOST'] ?? 'bayvines.co.nz');
$headers = "From: Bayvines Website <noreply@{$host}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
if (!@mail($to, 'Bayvines website enquiry', $body, $headers)) { header('Location: contact.html?error=1'); exit; }
header('Location: contact.html?sent=1'); exit;
?>
