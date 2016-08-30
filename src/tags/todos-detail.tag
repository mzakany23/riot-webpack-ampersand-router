<todos-detail>
	<h1>this is { todo.description } detail</h1>
	
<script>
	var self = this
	this.on('mount',function(){
		self.todo = opts.todo
		self.update()
	})
</script>

</todos-detail>