<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: https://rotulosalmazora.com');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Método no permitido'], JSON_UNESCAPED_UNICODE);
    exit;
}

$nombre   = trim($_POST['nombre'] ?? '');
$email    = trim($_POST['email'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$mensaje  = trim($_POST['mensaje'] ?? '');

if (empty($nombre) || empty($mensaje)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Por favor, completa al menos el nombre y el mensaje.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$to      = 'contacto@rotulosalmazora.com';
$subject = "Consulta web de $nombre - rotulosalmazora.com";

$body  = "Has recibido una nueva consulta desde tu web.\n\n";
$body .= "──────────────────────────────\n\n";
$body .= "Nombre:    $nombre\n";
$body .= "Email:     $email\n";
$body .= "Teléfono:  $telefono\n\n";
$body .= "Mensaje:\n$mensaje\n\n";
$body .= "──────────────────────────────\n";
$body .= "Responder directamente a: $email\n";

$headers  = "From: contacto@rotulosalmazora.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Initialize SMTP with authentication
ini_set('SMTP', 'mail.rotulosalmazora.com');
ini_set('smtp_port', '465');
ini_set('sendmail_from', 'contacto@rotulosalmazora.com');
ini_set('auth_username', 'contacto@rotulosalmazora.com');
ini_set('auth_password', '2)*yhHYjcL5ptK+H');

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['ok' => true, 'message' => 'Mensaje enviado. Te responderemos lo antes posible.'], JSON_UNESCAPED_UNICODE);
} else {
    // Fallback: mail() failed, log and return error
    error_log("sendmail.php: Error enviando correo a $to");
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'No se pudo enviar el mensaje. Contáctanos directamente por WhatsApp y te respondemos al momento.',
    ], JSON_UNESCAPED_UNICODE);
}
