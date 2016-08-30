<todos-list>
	<h1>todo list</h1>
	<todo todos={ todos }></todo>
	<todo-form store={ opts.store }></todo-form>
	
	<div id="todos-detail"></div>

	<script>
		var self = this
		this.on('mount',function(){
			opts.store.fetch({
				success: function(col,res,opt) {
					self.todos = col.models
					self.update()
				}
			})
		})

		opts.store.on('change',function(e) {
			self.update()
		})

		opts.store.on('add',function(e) {
		// 	self.todos = e.collection.models
		// 	self.update()
		})

		opts.store.on('destroy',function(e){
			
		})
	</script>
</todos-list>