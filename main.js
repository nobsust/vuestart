Vue.component('task-list', {

	template: '<div><task v-for="task in tasks">{{task.description}}</task></div>',

	data() {

		return {
			tasks: [
				{ description: 'Task One', completed: true },
				{ description: 'Task Two', completed: false },
				{ description: 'Task Three', completed: false },
				{ description: 'Task Four', completed: true },
				{ description: 'Task Five', completed: false }
			]
		}

	}

})

Vue.component('task', {

	template: '<li><slot></slot></li>'

})

new Vue({

	el: '#root'

})