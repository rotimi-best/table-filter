<script>
  import { TextInput } from 'carbon-components-svelte';
  import tables from '$lib/utils/tables.json';

  let value = '';
  let filteredTable = tables;

  function handleChange(_value) {
    console.log('_value', _value);
    filteredTable = tables.filter((table) => {
      const loweredguests = table.guests.map((g) => g.toLowerCase());
      return loweredguests.some((g) => g.includes(_value.toLowerCase()));
    });
  }

  $: handleChange(value);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Oribi/Francis Wedding Table App" />
</svelte:head>

<section class="root">
  <h1 class="table-header">Oribi/Francis Wedding Table App</h1>

  <form class="form-container">
    <TextInput
      size="xl"
      hideLabel
      bind:value
      labelText="User name"
      placeholder="Enter a name"
    />
  </form>

  <div class="list-container">
    {#each filteredTable as table}
      <div class="grid">
        <div>
          <h2>{table.label}</h2>
          <p>Total: {table.guests.length}</p>
        </div>
        <ol>
          {#each table.guests as guest}
            <li class="name">{guest}</li>
          {/each}
        </ol>
      </div>
    {/each}
  </div>
</section>

<style>
  .root {
    width: 80%;
    margin: 0 auto;
  }

  .table-header {
    margin: 10px;
    text-align: center;
  }

  .form-container {
    display: flex;
    width: 80%;
    align-items: center;
    margin: 20px auto;
  }

  .list-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .grid {
    border-radius: 0.375rem;
    padding: 10px;
    margin-bottom: 20px;
    max-width: 250px;
    width: 100%;
    min-height: 370px;
    background-color: rgba(243, 244, 246, 1);
    margin-left: 5px;
    margin-right: 5px;
  }

  ol {
    list-style: auto;
    padding: 0px 15px;
  }

  .grid h2 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  .name {
    font-size: 15px;
    margin: 10px 0;
  }
</style>
