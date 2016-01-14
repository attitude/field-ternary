<?php

if (!defined('COCOPI_FRONTEND')) {
    define('COCOPI_FRONTEND', false);
}

// Force name
if (basename(__DIR__) !== 'field-ternary') {
    rename(__DIR__, dirname(__DIR__).DIRECTORY_SEPARATOR.'field-ternary');

    throw new Exception('Addon directory. Renamed. Please reload.');
}

$app->on('app.layout.header', function() {
    echo $this->assets(['field-ternary:components.js'])."\n";
});
