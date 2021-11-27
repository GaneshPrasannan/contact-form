
var webhookURL = "https://discord.com/api/webhooks/913772318713585714/lJsp4WyeMbZLlKFCUXdg5b8EQEmuiKGi2fGcMSCNbtdKWgKSYD1pjscYVPFB5Ki7nyH0"
var webhookUsername = "Contact Form Bot"
var webhookAvatar = "https://i.pinimg.com/originals/88/42/da/8842dabf70fd5dea2bc6c9673d74bc51.png"




$(function() {
    $('#submit').click(function(e) {
    var name = $("#name").val();
    var mail = $("#mail").val();
    var message = $("#message").val();
    $.post(webhookURL,
{"content": "> ==============================\n> Name: " + name + "\n> Email: " + mail + "\n> Message: " + message + "\n> ==============================\n_ _", "username": webhookUsername, "avatar_url": webhookAvatar})
    });
});

function submitted(){
    document.getElementById('status').style.display = "block"
}


