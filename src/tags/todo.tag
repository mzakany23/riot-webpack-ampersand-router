<todo>
	<h5 if={ !active }>There are no todos to display</h5>
	<table if={ active }>
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ todo,i in opts.todos }>
        <td></td>
        <td>{ todo.id }</td>
        <td><a href="#/todos-list/{ todo.id }">{ todo.description }</a></td>
        <td><a onclick={ deleteTodo }  class='button button-warn'>Delete</a></td>
      </tr>
    </tbody>
  </table>

	<script>
		var self = this 
		self.active = false 
		
		this.on('update',function(){
			self.checkActive()
		})

		checkActive(){
			opts.todos && opts.todos.length > 0 ?	self.active = true : self.active = false
		}

		deleteTodo(e) {
			e.item.todo.destroy()
			self.update()
		}
	</script>
</todo>