<!doctype html>
<html>
<head>
<title>Projekt</title>
<link rel="stylesheet" href="css.css">
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://fonts.googleapis.com/css?family=Quicksand:300,500" rel="stylesheet">
</head>

<body>
	<div id="id01" class="modal">
		<form class="modal-content animate" action="/main/main.php" method="post">
		<div class="imgcontainer">
		  <img src="/img/avatar.png" alt="Avatar" class="avatar">
		</div>

		<div class="container">
		  <label for="uname"><b>Uporabniško ime</b></label>
		  <input type="text" placeholder="Vnesi uporabniško ime" name="uname" required>

		  <label for="psw"><b>Geslo</b></label>
		  <input type="password" placeholder="Vnesi geslo" name="psw" required>

		  <button id="submit">Prijava</button>
		</div>
		</form>
	</div>
</body>
</html>
