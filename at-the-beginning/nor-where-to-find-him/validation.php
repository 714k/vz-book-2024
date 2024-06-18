<?php
	 
/**
 * This function validates and processes a contact form submission.
 *
 * @return bool|string Returns true if the form submission is successful, or an error message if validation fails.
 */
function processContactForm() {
  try {
    // firstName
    if (isset($_POST['firstName'])) {
        $firstName = trim($_POST['firstName']);

        if (empty($firstName)) {
            // $errors['firstName'] = 'Please enter a First Name';
            throw new Exception("First Name can't be empty");
        } else if (!preg_match('/^[a-zA-Z]+$/', $firstName)) {
            // $errors['firstName'] = 'First Name must contain only letters';
            throw new Exception("First Name must contain only letters");
        } else if (strlen($firstName) < 3 || strlen($firstName) > 30) {
            // $errors['firstName'] = 'First Name must be between 3 and 30 characters long';
            throw new Exception("First Name must be between 3 and 30 characters long");
        }
    }

    // lastName
    if (isset($_POST['lastName'])) {
        $lastName = trim($_POST['lastName']);

        if (empty($lastName)) {
            // $errors['firstName'] = 'Please enter a First Name';
            throw new Exception("Last Name can't be empty");
        } else if (!preg_match('/^[a-zA-Z]+$/', $lastName)) {
            // $errors['firstName'] = 'First Name must contain only letters';
            throw new Exception("Last Name must contain only letters");
        } else if (strlen($lastName) < 3 || strlen($lastName) > 30) {
            // $errors['firstName'] = 'First Name must be between 3 and 30 characters long';
            throw new Exception("Last Name must be between 3 and 30 characters long");
        }
    }

    // email
    if (isset($_POST['email'])) {
        $email = trim($_POST['email']);

        if (empty($email)) {
            // $errors['email'] = 'Please enter an email address';
            throw new Exception("Please enter an email address");
        } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // $errors['email'] = 'Please enter a valid email address';
            throw new Exception("Please enter a valid email address");
        }
    }

    // select
    if(isset($_POST['reason'])) {
        $reason = trim($_POST['reason']);

        if(empty($reason)) {
            throw new Exception("Please select a reason");
        }
    }

    // message
    if (isset($_POST['messageField'])) {
        $messageField = trim($_POST['messageField']);

        if (empty($messageField)) {
            // $errors['firstName'] = 'Please enter a First Name';
            throw new Exception("Message can't be empty");
        } else if (strlen($messageField) < 2 || strlen($messageField) > 4000) {
            // $errors['firstName'] = 'First Name must be between 2 and 4000 characters long';
            throw new Exception("Last Name must be between 2 and 4000 characters long");
        }
    }

    // Checkbox
    if(isset($_POST['policy']) && $_POST['policy'] === 0) {
        throw new Exception("Message field is required");
    }
    
    // Perform additional checks or processing here
    
    // If all validations pass, return true
    return true;
  }  catch (Exception $error) {
    // Log the error
    error_log("Error: " . $error->getMessage());
    
    // Return the error message
    return $error->getMessage();
  }
}

$result = processContactForm();

if ($result === true) {
  // echo "Form submitted successfully";
  // $firstName = $POST['firstName'];
  // header("Location: send-email.php");
  sendEmail();

  exit();
} else {
  echo "Error: " . $result;
  // header("Location: error.php");
  // build email 
  // exit();
}


function sendEmail() {
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
  } else {
    throw new Exception("First Name is required");
  }

  if(isset($_POST['lastName'])) {
      $last_name = filter_var($_POST['lastName'], FILTER_SANITIZE_STRING);
      $email_body .= '<p><strong>Last Name</strong><br/><span>'.$last_name.'</span>';
  } else {
    throw new Exception("Last Name is required");
  }

  if(isset($_POST['email'])) {
      $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
      $email_body .= '<p><strong>Email</strong><br/><span>'.$email.'</span>';
  } else {
    throw new Exception("Email is required");
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
  } else {
    throw new Exception("Reason is required");
  }

  if(isset($_POST['messageField'])) {
      $message = filter_var($_POST['messageField'], FILTER_SANITIZE_STRING);
      $email_body .= '<p><strong>Message</strong><br/><span>'.$message.'</span>';
  } else {
    throw new Exception("Message is required");
  }

  $email_body .= '</div>'; 

  // send email
  $recipient = 'victor.zamudio@outlook.com';

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

  if(mail($recipient, $reason_to_contact, $email_body, $headers)) {
    // echo "<p>Thank you for contacting me, $first_name $last_name you will get a reply with 24 hours.</p>";
    // include('form-contact-thanks.html');
    header("Location: form-contact-thanks.html");
    exit();
  } else {
    echo '<p>We are sorry but the email did not go through.</p>';
  }
}


?>   