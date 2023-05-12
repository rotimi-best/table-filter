<script>
	import { TextInput } from "carbon-components-svelte";
	import tables from '$lib/utils/tables.json'

	let value = '';
	let filteredTable = tables;

	function handleChange(_value) {
		console.log('_value', _value);
		filteredTable = tables.filter(table => {
			const loweredguests = table.guests.map(g => g.toLowerCase());
			return loweredguests.some(g => g.includes(_value))
		})
	}

	$: handleChange(value);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Oribi/Francis Wedding Table App" />
</svelte:head>

<section class="root">
	<h1 class="header">Oribi/Francis Wedding Table App</h1>

	<form class="form-container">
		<TextInput
			size="xl"
			hideLabel
			bind:value
			labelText="User name"
			placeholder="Enter a name"
		/>
	</form>

	<div>
		{#each filteredTable as table}
			<div class="grid">
				<h2>{table.label}</h2>
				<ul>
					{#each table.guests as guest}
						<li class="name">{guest}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.root {
		width: 80%;
		margin: 0 auto;
	}

	.header {
		margin: 10px;
		text-align: center;
	}

	.form-container {
		display: flex;
		width: 80%;
		align-items: center;
		margin: 20px auto;
	}

	.grid {
		border: 1px solid gray;
		border-radius: 20px;
		padding: 10px;
		margin-bottom: 20px;
	}

	.grid h2 {
		margin-bottom: 10px;
	}

	.name {
		font-size: 15px;
		margin: 10px 0;
	}
</style>
