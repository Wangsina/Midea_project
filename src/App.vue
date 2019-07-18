<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style>
	*{
		margin: 0px;
		padding: 0px;
		list-style: none;
	}
	body,html{
		width: 100%;
		/*max-width: 750px;*/
		margin: 0px auto;
		/*height: 100%;*/
		/*background-color: #eef3fa;*/
		/*border: 1px solid #eee;*/
		overflow-x: hidden;
	}
	body{
		/*border: 1px solid black;*/
	}
	a{
		text-decoration: none;
	}
</style>
