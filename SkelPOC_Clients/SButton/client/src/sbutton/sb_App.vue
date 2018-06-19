<template>
	<div id="sButton_app" @click="my_alert('s Clicked')">
		Sb
	</div>
</template>

<script>

export default {
	name: 'sButton_app',
	methods: {
		my_alert (text) {
			alert(text);
		}
	}
};

</script>

<style lang="less">
	#sButton_app {
		width: 30px;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #a2e682;
		font-weight: bold;
		cursor: pointer;
	}
</style>
