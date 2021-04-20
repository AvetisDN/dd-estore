<script>
    import products from "./store/products";
    import ProductCard from "./component/ProductCard.svelte";
</script>

<div class="content">
    {#each $products as product}
        <ProductCard product={product}/>
    {/each}
</div>

<style lang="scss">
    .content {
      max-width: 1200px;
      margin: 1rem auto;
      padding: 1rem;
      display: flex;
      column-gap: 1rem;
      row-gap: 1rem;
      flex-wrap: wrap;
    }
</style>