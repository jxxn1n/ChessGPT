// ==========================================
// ChessGPT v0.1
// ia.js
// ==========================================

function responderIA(mensaje){

    // Convertimos el mensaje a minúsculas
    mensaje = mensaje.toLowerCase().trim();

    // Saludos
    if(
        mensaje.includes("hola") ||
        mensaje.includes("buenas")
    ){
        return "¡Hola! 👋 Soy ChessGPT.";
    }

    // Estado
    if(
        mensaje.includes("como estas") ||
        mensaje.includes("cómo estás")
    ){
        return "Estoy funcionando correctamente. 😄";
    }

    // Nombre
    if(
        mensaje.includes("quien eres") ||
        mensaje.includes("quién eres")
    ){
        return "Soy ChessGPT v0.1, una IA creada por Juan.";
    }

    // Ajedrez
    if(
        mensaje.includes("ajedrez")
    ){
        return "¡Me encanta el ajedrez! Muy pronto podré analizar partidas.";
    }

    // Ayuda
    if(
        mensaje.includes("ayuda")
    ){
        return "Puedes saludarme o preguntarme quién soy.";
    }

    // Despedida
    if(
        mensaje.includes("adios") ||
        mensaje.includes("adiós")
    ){
        return "¡Hasta luego! 👋";
    }

    // Respuesta por defecto
    return "Todavía no sé responder esa pregunta.";
}
