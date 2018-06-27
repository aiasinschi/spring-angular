<html>
<head>
	<link href="https://fonts.googleapis.com/css?family=Encode+Sans+Condensed" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.15.4/css/ui.jqgrid.min.css">
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/excite-bike/jquery-ui.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/free-jqgrid/4.15.4/jquery.jqgrid.min.js"></script>
	<script	src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
			integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E="
			crossorigin="anonymous"></script>
	<link rel="stylesheet" href="resources/css/style.css" type="text/css">
	<script src="resources/js/main.js"></script>
</head>
<body>
<div id="app">
	<table id="cust-table">
	</table>
	<br/>
	<div id="refresh-btn" class="app-button">Refresh Data</div>
</div>
<div id="detail-dialog" style="display: none;">
	<div class="label-value-group"><div class="app-label">Name: </div> <div class="app-value" id="detail-name"></div></div>
	<div class="label-value-group"><div class="app-label">Amount: </div> <div class="app-value" id="detail-amount"></div></div>
	<div class="label-value-group"><div class="app-label">Tax: </div> <div class="app-value" id="detail-tax"></div></div>
	<div class="label-value-group"><div class="app-label">Total: </div> <div class="app-value" id="detail-total"></div></div>
	<div class="label-value-group"><div class="app-label">Shipped Via: </div> <div class="app-value" id="detail-shipped"></div></div>
	<div class="label-value-group"><div class="app-label">Invoice Date: </div> <div class="app-value" id="detail-date"></div></div>
	<div class="label-value-group"><div class="app-label">Close</div> <div class="app-value" id="detail-closed"></div></div>
</div>
</body>
</html>
