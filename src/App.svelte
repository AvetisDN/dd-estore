<script>
    import Header from "./Header.svelte";
    import ProductGrid from "./ProductGrid.svelte";
</script>

<main>
    <Header/>
    <ProductGrid/>
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
</style>