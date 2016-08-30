import riot from 'riot'
require('./config.js')

var App = null
var currentTag = null
var path = window.location.pathname
var lastRoute = null
var lastTag = null

String.prototype.toCamelCase = function(str) {
    return str.replace(/\W+(.)/g, function(match, chr){  
        return chr.toUpperCase();  
    });    
}

function setStore(tag) {
	router.stores[tag.name] = tag.data
}

function getStore(tagName) {
	if (router.stores[tagName]) {
		return router.stores[tagName].store
	} 

	return false
	
}

function mount(tag){
	currentTag && currentTag.unmount(true)
	if (!tag.defaultRoute) {
		if (tag.parentTag) {
			var store = getStore(tag.parentTag)

			if (store) {
				currentTag = riot.mount(`div#pages`,tag.parentTag,{store:store})[0]		
				riot.mount(`div#${tag.name}`,tag.name,tag.data)
			} else {
				currentTag = riot.mount(`div#pages`,tag.name,tag.data)[0]		
			}
			
		} else {
			tag.data ? setStore(tag) : null
			currentTag = riot.mount('div#pages',tag.name,tag.data)[0]	
		}
	}
}

function setApp(route,options) {
	document.addEventListener('DOMContentLoaded',() => {
		App = riot.mount(route.name,options)[0]
	})
}

function initPage(config){
	var getUrl = {getUrl:config.url.replace(':id','*')}
		Object.assign(config,getUrl)

		if (config.defaultRoute) {
			router.setDefaultTag(config)
		}else {
			router.routes[config.name.toCamelCase(config.name)] = config	
		}
}

var router = {
	stores: {},
	routes: {},
	renderPage(tag) {
		mount(tag)
	},
	redirectTo(url){
		window.location.replace(url)
	},
	getStore(tagName) {
		return getStore(tagName)
	},
	setDefaultTag(tag) {
		router.routes.defaultTag = tag
	},
	start(tagName){
		App = riot.mount(tagName)[0]
		riot.route.start(true)
	}
}

export default router


