<app>
	<style type="text/css">
		ul#menu li{
			padding: 10px;
		}
	</style>
	<div class="container">
		<navigation router={ router }></navigation>
	
		<h1>app.tag</h1>
		
		<div id="pages"></div>
		
	</div>
	
	<script>

		var self = this	
		this.on('mount',function(){
			self.router = opts.routes
			self.update()
		})
	</script>

</app>