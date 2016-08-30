### Riot Router with webpack and ampersand

#### Assuming you have a webpack project up and running:

```javascript
import riot from 'riot'
import router from './router'

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

```