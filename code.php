<?php

if (isset($_POST['submit'])){
  $visitor_name = $_POST['username'];
  $visitor_email = $_POST['email'];
  $visitor_mobile = $_POST['mobile'];

  $to = "example@info.com";

  $subject = "Inquiry";

  $message = "Inquiry";

  $header = 'From:'.$visitor_name."rn"; 

  $header.= 'Reply to:'.$visitor_email."rn";

  mail($to, $subject,$message,$header);

 
}

?>