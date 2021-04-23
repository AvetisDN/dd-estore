<script>
    import Header from "./Header.svelte";
    import ProductGrid from "./ProductGrid.svelte";
    import Order from './Order.svelte';

    let showOrder = false

    const toggleOrder = () => {
        showOrder = !showOrder
    }
</script>

<main>
    <Header toggleOrder={toggleOrder}/>
    <ProductGrid/>

    {#if showOrder}
        <Order toggleOrder={toggleOrder}/>
    {/if}
</main>

<style global lang="scss">
  @import './sass/vars';

  :root {
    font-family: 'Rubik', sans-serif;
    font-size: 1rem;
    color: $text;
    background: $bg;
    background-size: cover;
  }
  * {
    box-sizing: border-box;
  }
  main {
    min-height: 100vh;
  }
</style>