import Collection from 'ampersand-collection'
import restMixin from 'ampersand-collection-rest-mixin'
import Todo from './todo.js'

export default Collection.extend(restMixin,{
	url: 'http://localhost:3000' + '/todos', 
	model: Todo
})