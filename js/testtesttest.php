<?php include 'header.php' ?>
<br />
<br />
<h4><?php
  require 'PHPMailer-master/PHPMailerAutoload.php';

  $name = $_REQUEST['name'] ;
  $email = $_REQUEST['email'] ;
  $message = $_REQUEST['textarea'] ;


$mail = new PHPMailer;
$mail->setFrom( $_POST['email'], $_POST['name']);
$mail->addAddress('colette@colettefleury.com');
$mail->Subject  = 'Form Input';
$mail->Body = $message; 
if(!$mail->send()) {
  echo 'Message was not sent.';
  echo 'Mailer error: ' . $mail->ErrorInfo;
} else {
  echo 'Thanks for getting in contact! Your message has been received.';
}
?></h4>
<?php include 'footer.php' ?>
