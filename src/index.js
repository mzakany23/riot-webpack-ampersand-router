import riot from 'riot'
import router from './router'
import app from 'ampersand-app'
import TodoStore from './models/todo-collection'
import Todo from './models/todo.js'

require('./styles/main.styl')

window.app = app 

app.extend({
	init: function() {
		riot.route('/',function(name) {
			router.renderPage({
				name: 'app',
				data: {},
				defaultRoute: true
			})
		})
		

		riot.route('/home',function(name) {
			router.renderPage({
				name: 'home',
				data: {}
			})
		})

		riot.route('/todos-list',function(name){
			router.renderPage({
				name: 'todos-list',
				data: {
					store: new TodoStore()
				}
			})
		})

		riot.route('/todos-list/*',function(id){
			// do something with id then mount tag
			var store = router.getStore('todos-list')
			var todo = null

			if (store) {
				todo = store.get(id)
			} else {
				new Todo({id: parseInt(id)}).fetch({
					url: 'http://localhost:3000' + '/todos/' + id, 
					success: (col,res,opt) => {
						todo = res
						router.renderPage({
							name: 'todos-detail',
							// parentTag: 'todos-list',
							data: {
								todo: todo
							}
						})
						
					}
				})
				
			}	

			router.renderPage({
				name: 'todos-detail',
				// parentTag: 'todos-list',
				data: {
					todo: todo
				}
			})
		})

		router.start('app')

	}
})

app.init()