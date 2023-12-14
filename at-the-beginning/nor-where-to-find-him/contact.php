<?php
 if($_POST) {
  $first_name = "";
  $last_name = "";
  $email = "";
  $phone_number = "";
  $phone_extension = "";
  $phone_mobile = "";
  $reason_to_contact = "";
  $message = "";

  $email_body = '<div style="background-color: #27a7ef; color: white; padding: 16px;"';

  if(isset($_POST['firstName'])) {
    $first_name = filter_var($_POST['firstName'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>First Name</strong><br/><span>'.$first_name.'</span>';
  }

  if(isset($_POST['lastName'])) {
    $last_name = filter_var($_POST['lastName'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>Last Name</strong><br/><span>'.$last_name.'</span>';
  }

  if(isset($_POST['email'])) {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>Email</strong><br/><span>'.$email.'</span>';
  }

  if(isset($_POST['phone'])) {
    $phone_number = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>Phone Number</strong><br/><span>'.$phone_number.'</span>';
  }

  if(isset($_POST['extension'])) {
    $phone_extension = filter_var($_POST['extension'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>Ext</strong><br/><span>'.$phone_extension.'</span>';
  }

  if(isset($_POST['mobile'])) {
    $phone_mobile = filter_var($_POST['mobile'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>Mobile</strong><br/><span>'.$phone_mobile.'</span>';
  }

  if(isset($_POST['reason'])) {
    $reason_to_contact = filter_var($_POST['reason'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>Reason</strong><br/><span>'.$reason_to_contact.'</span>';
  }

  if(isset($_POST['messageField'])) {
    $message = filter_var($_POST['messageField'], FILTER_SANITIZE_STRING);
    $email_body .= '<p><strong>Message</strong><br/><span>'.$message.'</span>';
  }

  $email_body .= '</div>';

  $recipient = 'victor.zamudio@outlook.com';

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  if(mail($recipient, $reason_to_contact, $email_body, $headers)) {
    echo "<p>Thank you for contacting me, $first_name $last_name you will get a reply with 24 hours.</p>";
  } else {
    echo '<p>We are sorry but the email did not go through.</p>';
  }
 } else {
   echo '<p>Something went wrong</p>';
 }
?>