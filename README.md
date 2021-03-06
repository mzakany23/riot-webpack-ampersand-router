### Riot Router with webpack and ampersand

#### Assuming you have a webpack project up and running:
Riot provides the grepping route api out of box, so just use it. The handling of mounting / unmounting tags is done with router.renderPage() function. 

#### router.js
I wanted a node like router that utilized riots core routing api. All riot is missing is the handling of mounting tags for you.

```javascript
//index.js (webpack main)

import riot from 'riot'
import router from './router'
import app from 'ampersand-app'
import TodoStore from './models/todo-collection'
import Todo from './models/todo.js'

require('./styles/main.styl')

window.app = app 

app.extend({
	init: function() {

		// default route
		riot.route('/',function(name) {
			router.renderPage({
				name: 'app',
				data: {},
				defaultRoute: true
			})
		})
		
		// route with no parent
		riot.route('/home',function(name) {
			router.renderPage({
				name: 'home',
				data: {}
			})
		})

		// route with no parent
		riot.route('/todos-list',function(name){
			router.renderPage({
				name: 'todos-list',
				data: {
					store: new TodoStore()
				}
			})
		})

		// route with parent (uncomment)
		riot.route('/todos-list/*',function(id){
			// do something with id then mount tag
			var store = router.getStore('todos-list')
			var todo = null

			if (store) {
				todo = store.get(id)
			} else {
				todo = new Todo({id: parseInt(id)}).fetch({
					url: 'http://localhost:3000' + '/todos/' + id, 
					success: (col,res,opt) => {
						return res
					}
				})
			}	

			router.renderPage({
				name: 'todos-detail',
				// parentTag: 'todos-list', uncomment to keep the parent
				data: {
					todo: todo
				}
			})
		})

		router.start('app')

	}
})

app.init()
```