import Model from 'ampersand-model'
import TodoCollection from './todo-collection.js'

var TodoStore = Model.extend({
	props: {
		id: 'number',
		name: 'string',
		description: 'string'
	},

	session: {

	},

	conllections: {
		todos: TodoCollection
	}

})

export default TodoStore