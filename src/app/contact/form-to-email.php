<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
// $name = $_POST['name'];
// $visitor_email = $_POST['email'];
// $message = $_POST['message'];

$feedback = $_POST['feedback'];

//Validate first
if(empty($feedback)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'admin@admin.com';
$email_subject = "New Form submission";
$email_body = "Here is the message:\n $feedback";
    
$to = "rami@cellmedia.co.il";//<== update the email address

// $headers = "From: $email_from \r\n";
// $headers .= "Reply-To: $visitor_email \r\n";
//Send the email!

mail($to,$email_subject,$email_body);
//done. redirect to thank-you page.
// header('Location: http://www.google.com');


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
