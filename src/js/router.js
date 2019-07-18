import VueRouter from 'vue-router'

import index from '../components/index/index.vue'
import classify from '../components/index/classify.vue'
import activity from '../components/index/activity.vue'
import buyCar from '../components/index/buyCar.vue'
import my from '../components/index/my.vue'
import first from '../components/index/first.vue'
import details from '../components/index/details.vue'
import search from '../components/index/search.vue'
import login from '../components/login/login.vue'
import register from '../components/login/register.vue'

export default new VueRouter({
	routes:[
	    {
	    path:'/',
	    component:first,
	    redirect:'/index',
	    children:[
	    	{
				path:'/index',component:index
			},
			{
				path:'/classify',component:classify
			},
			{
				path:'/my',component:my
			}
	    ]
	    },
		{
			path:'/buyCar',component:buyCar
		},
	    {
			path:'/activity',component:activity
		},
		{
			path:'/details',component:details
		},
		{
			path:'/search',component:search
		},
	    {
			path:'/login',component:login
		},
		{
			path:'/register',component:register
		},
		{
			path:'/*',redirect:'/index'
		}	
	]
})