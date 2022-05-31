<?php
    //Import PHPMailer classes into the global namespace
    //These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'vendor/autoload.php';

    //-----------------------------------------------
    //Message
    //-----------------------------------------------


    if(isset($_REQUEST['actionform'])){
        
        $email_subject = 'Message Altanna.fr';
        $email = new PHPMailer();
        $email->IsSMTP(); // active SMTP
        $email->SMTPDebug = 0;
        $email->SMTPAuth = true;
        $email->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $email->Host =      'ssl0.ovh.net';
        $email->Port       = 465;
        //$email->Port       = 993;

        $email->Username = 'contact@gest4u.fr';
        $email->Password = '6541**56qsdflqigsGGshRoisfj';
        //$email->Username = 'smtp@safigec.fr';
        //$email->Username = '651qsdf*g4**QSD';

        $email->CharSet = 'UTF-8';
        $email->Encoding = 'base64';

        if($_REQUEST['actionform'] == 'contact'){

            $email_to = 'sales@altanna.com';

            $email_message = "Message du site : .\n\n";
            $email_message .= "<ul> \n";
            $email_message .= " <li> Prénom : "    . ($_REQUEST['first-name']) . "</li> \n";
            $email_message .= " <li> Nom : "       . ($_REQUEST['last-name']) . "</li> \n";
            $email_message .= " <li> Email : "     . ($_REQUEST['email']) . "</li> \n";
            $email_message .= " <li> Téléphone : " . ($_REQUEST['phone']) . "</li> \n\n";
            $email_message .= "</ul> \n";

            $email_message .= "<ul> \n";
            $email_message .= " <li> Adresse : "   . ($_REQUEST['address']) . "</li> \n";
            $email_message .= " <li> Ville : "     . ($_REQUEST['city']) . "</li> \n";
            $email_message .= " <li> CP : "        . ($_REQUEST['postal-code']) . "</li> \n\n";
            $email_message .= "</ul> \n";

            $email_message .= "<ul> \n";
            $email_message .= " <li> Projet : "    . ($_REQUEST['contexte']) . "</li> \n";
            $email_message .= "</ul> \n";
        } else {

            $email_to = 'sberthillot@altanna.com';

            $email_message = "Nouveau candidat : .\n\n";
            $email_message .= "<ul> \n";
            $email_message .= " <li> Prénom : "    . ($_REQUEST['first-name']) . "</li> \n";
            $email_message .= " <li> Nom : "       . ($_REQUEST['last-name']) . "</li> \n";
            $email_message .= " <li> Email : "     . ($_REQUEST['email']) . "</li> \n";
            $email_message .= " <li> Téléphone : " . ($_REQUEST['phone']) . "</li> \n\n";
            $email_message .= "</ul> \n";

            $email_message .= "<ul> \n";
            $email_message .= " <li> Adresse : "   . ($_REQUEST['address']) . "</li> \n";
            $email_message .= " <li> Ville : "     . ($_REQUEST['city']) . "</li> \n";
            $email_message .= " <li> CP : "        . ($_REQUEST['postal-code']) . "</li> \n\n";
            $email_message .= "</ul> \n";

            $email_message .= "<ul> \n";
            $email_message .= " <li> Ambition : "   . ($_REQUEST['goals']) . "</li> \n";
            $email_message .= " <li> Zone de recherche : "     . ($_REQUEST['location']) . "</li> \n";
            $email_message .= " <li> J'accepte d'autres régions / Je suis mobile : "     . ($_REQUEST['comments']) . "</li> \n";
            $email_message .= " <li> Profil linkedIn,blog... : "        . ($_REQUEST['source']) . "</li> \n\n";
            $email_message .= "</ul> \n";

            if (isset($_FILES['file-upload']) &&
                $_FILES['file-upload']['error'] == UPLOAD_ERR_OK) {
                $email->AddAttachment($_FILES['file-upload']['tmp_name'], $_FILES['file-upload']['name']);
            }
        }

        $email->isHTML(true);
        $email->Subject   = $email_subject;
        $email->Body      = $email_message;
        $email->AltBody = $email_message;

        $email->SetFrom($email_to, $email_to); //Name is optional
        $email->AddAddress($email_to);


        //$file_to_attach = 'PATH_OF_YOUR_FILE_HERE';

        //$email->AddAttachment( $file_to_attach , 'NameOfFile.pdf' );

        $return = $email->Send();
        var_dump($return);
    }







    //$headers ='From: "'.$exp_name.'" <'.$exp_mail.'>'."\n";
    //$headers .='Reply-To: <'.$exp_mail.'>'."\n";
    //$headers .='Content-Type: text/html; charset="iso-8859-1"'."\n";



    //$email_message = utf8_decode($email_message);
/*
    // create email headers
    $headers = 'From: '.$_REQUEST['email']."\r\n".
        'Reply-To: '.$_REQUEST['email']."\r\n" .
        'Content-Type: text/html; charset="UTF-8"' ."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    try{
        mail($email_to, $email_subject, $email_message, $headers);
        echo 'Email envoyé';
    } catch (\Exception $e) {
        echo 'PB Email';
    }

*/

