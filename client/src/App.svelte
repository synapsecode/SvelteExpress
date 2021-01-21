<script>
</script>

<main>
	<h1>Svelte + <span class="exp">ExpressJS!</span></h1>
	<h2>Running on Port 80 using ExpressJS</h2>
	<div class="sasstitle">Oh, Scss too, because CSS is as old as your grand ma</div>
</main>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		display: grid;
		place-items: center;
		.sasstitle{
			color: bisque;
			background-color: black;
			padding: 1rem;
			width: fit-content;
			border-radius: 1rem;
		
		}
		
	}

	.exp{
		color: black;
		background-color: yellow;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>