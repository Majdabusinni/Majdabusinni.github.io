<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="chat.css">
    <title>Document</title>
</head>
<body>
    <form id="usernameSection" action="">
        <input type="text" placeholder="User Name">
        <button id="usernameButton">Set Username</button>
    </form>
    <div class="chatSection" style="display: none;">
        <div class="headbar">
            <h1>Webchat</h1>
        </div>
        <div class="chatlogs">
             <!-- Messages will be appended here -->
        </div>
        <div class="footbar">
            <form id="chatinput" action="">
                <input type="text" id="message-input" name="">
             <button id="sendbutton">SEND</button>
            </form>
        </div>
    </div>
    <script src="chatapp.js"></script>
</body>
</html>
