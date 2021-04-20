<script>
    import cart from "../store/cart";

    export let product

    const submitProduct = (product) => {
        cart.addToCart(product)
    }

</script>

<div class="product-card">
    <div class="product-card__img">
        <a href="/">
            <img src={product.image} alt={product.brand + ' ' + product.name}>
        </a>
    </div>
    <div class="product-card__info">
        <div class="product-card__info-txt">
            <a href="/">
                <h2>
                    {product.brand}
                </h2>
                <h3>
                    {product.name}
                </h3>
            </a>
            <div class="product-card__info-price">
                Price:
                <b>${product.price.toFixed(2)}</b>
            </div>
        </div>
        {#if !cart.isInCart(product.id, $cart)}
            <button class="add-to-cart"
                    on:click={() => {submitProduct(product)}}
            >
                <i class="fas fa-cart-plus"></i>
                <i class="fas fa-cart-arrow-down"></i>
            </button>
        {:else }
            <button class="add-to-cart"
                    disabled
            >
                <i class="fas fa-cart-plus"></i>
                <i class="fas fa-cart-arrow-down"></i>
            </button>
        {/if}
    </div>
</div>

<style lang="scss">
  @import "../sass/vars";

  .product-card {
    padding: 1rem;
    background-color: rgba(#fff, .7);
    border-radius: 1rem;
    flex-basis: 90%;
    flex-grow: 1;

    a {
      text-decoration: none;
      color: $primary;
    }

    & &__img {
      height: 300px;
      text-align: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .5rem;
      }
    }

    & &__info {
      padding: 1rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 1.25rem;
        margin-bottom: .5rem;
      }

      h3 {
        margin-bottom: 1rem;
      }

      .add-to-cart {
        border: none;
        outline: none;
        background-color: $accent;
        color: #ffffff;
        cursor: pointer;
        padding: 1rem;
        font-size: 1.25rem;
        border-radius: .5rem;
        transition: .3s ease;

        &:hover {
          background-color: darken($accent, 15%);
        }

        & > i:last-child {
          display: none;
        }

        &:disabled {
          opacity: .5;
          pointer-events: none;

          & > i:last-child {
            display: block;
          }

          & > i:first-child {
            display: none;
          }
        }
      }
    }
  }

  @media (min-width: 400px) {
    .product-card {
      & &__img {
        height: 90vw;
      }
    }
  }

  @media (min-width: 540px) {
    .product-card {
      flex-basis: 40%;

      & &__img {
        height: 40vw;
      }
    }
  }

  @media (min-width: 1000px) {
    .product-card {
      flex-basis: 20%;

      & &__img {
        height: 20vw;
      }
    }
  }

  @media (min-width: 1200px) {
    .product-card {
      flex-basis: 20%;

      & &__img {
        height: 250px;
      }
    }
  }
</style>