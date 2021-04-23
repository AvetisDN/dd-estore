<script>
    import cart from "../store/cart";

    export let toggleOrder

    let showDetails = false

    const toggleShowDetails = () => {
        showDetails = !showDetails
    }

    const handleToggleOrder = (e) => {
        e.preventDefault()
        toggleShowDetails()
        toggleOrder()
    }
</script>

<div class="cart-informer">
    <div class="cart-informer__top" on:click={toggleShowDetails}>
        <i class="fas fa-shopping-cart"></i>
        <div class="badge">
            {cart.totalProducts($cart)}
        </div>
    </div>
    <div class="cart-informer__underlay {showDetails ? 'show' : ''}" on:click={toggleShowDetails}></div>
    <div class="cart-informer__bottom {showDetails ? 'show' : ''}">
        <div>
            <ul>
                {#each $cart as cartItem}
                    <li>
                        <span>
                            {cartItem.name}
                        </span>
                        <b>
                            {cartItem.quantity} &times; ${cartItem.price}
                        </b>
                    </li>
                    {:else }
                    <li>The Cart is empty</li>
                {/each}
            </ul>
        </div>
        <div>
            <h3>Summ: ${cart.totalSumm($cart)}</h3>
        </div>
        <a href="/" on:click={handleToggleOrder}>Go To Cart</a>
    </div>
</div>

<style lang="scss">
  @import "../sass/vars";

  .cart-informer {
    background-color: rgba(#163846, .2);
    border-radius: 1rem;
    position: relative;
    padding: .5rem;
    margin-right: .5rem;

    & &__top {
      padding: .75rem .75rem .5rem .5rem;
      position: relative;
      cursor: pointer;

      i {
        font-size: 2rem;
        text-shadow: 0 2px 3px rgba(#000, .3);
      }

      .badge {
        position: absolute;
        top: 0;
        right: 0;
        width: 1.5rem;
        height: 1.5rem;
        background-color: $accent;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-shadow: 0 2px 3px rgba(#000, .3);
      }
    }

    & &__underlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      z-index: 995;

      &.show {
        display: block;
      }
    }

    & &__bottom {
      //display: none;
      position: absolute;
      z-index: 999;
      background-color: rgba($secondary,.9);
      padding: 1rem;
      border-radius: .25rem;
      right: 0;
      top: calc(100% + .5rem);
      white-space: nowrap;
      transition: .5s cubic-bezier(.18, .73, .13, .99);
      transform: scaleY(0) translateY(-100px);
      transform-origin: 50% 0;
      opacity: 0;

      &.show {
        transform: scaleY(1) translateY(0);
        opacity: 1;
      }

      div {
        margin-bottom: .5rem;
      }

      ul {
        li {
          margin-bottom: .5rem;
          display: flex;
          justify-content: space-between;

          span {
            padding-right: 1rem;
          }
        }
      }

      h3 {
        font-size: 1.333rem;
        margin-top: 1.5rem;
      }

      a {
        color: #fff;
        display: block;
        margin-top: 1rem;
        font-weight: 600;
        text-decoration: none;
        background-color: $accent;
        padding: .5rem;
        border-radius: .25rem;
        transition: .3s ease;

        &:hover {
          opacity: .75;
        }
      }
    }
  }
</style>