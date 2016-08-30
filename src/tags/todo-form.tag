<todo-form>
	 <form onsubmit={ addTodo }>
    <fieldset>
      <legend>Todo Form</legend>

      <div class='form-element'>
        <label for='comment'>Enter Todo</label>
        <input class='form-input' type='text' name='todoInput' placeholder='Enter Todo'>
      </div>

      <button type='submit' class='button button-primary'>Send</button>
    </fieldset>
  </form>
<script>
	var self = this 
	this.on('mount',function(){
		self.store = opts.store
	})

	addTodo(e) {
		e.preventDefault()
		var todo = self.store.add({name:'great man',description:self.todoInput.value})
		todo.save()
		self.resetForm()
	}

	resetForm() {
		this.todoInput.value = null
		this.todoInput.placeholder = 'Enter Task'
	}
</script>

</todo-form>