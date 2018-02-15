<?php

if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
} 

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];


if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'secretariswg60plusbus@gmail.com';//<== update the email address
$email_subject = "Nieuw Formulier";
$email_body = "Afzender bericht : ". $name. "\rEmailadres : " .$visitor_email . "\r\rInhoud is :\r\r" . $message;


$to = "secretariswg60plusbus@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";


mail($to,$email_subject,$email_body,$headers);



// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
             '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
?>