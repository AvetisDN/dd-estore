<script>
    import cart from "./store/cart";

    export let  toggleOrder

    const handleDelete = (id) => {
        if(confirm('Are you sure you want to delete this?')) {
            cart.deleteFromCart(id)
        }
    }

    const handleIncrease = (id) => {
        cart.increaseQuantity(id)
    }
    const handleDecrease = (id) => {
        cart.decreaseQuantity(id)
    }

</script>

<div class="order">
    <div class="order-underlay" on:click={toggleOrder}></div>
    <div class="order-modal">

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {#each $cart as cartItem, index}
                    <tr>
                        <td>
                            {index + 1}
                        </td>
                        <td>
                            <div class="table-product">
                                <img src={cartItem.image} alt="">
                                <h3>
                                    <span>
                                        {cartItem.brand}
                                    </span>
                                    {cartItem.name}
                                    <p>
                                        {cartItem.quantity} &times; ${cartItem.price}
                                    </p>
                                </h3>
                            </div>
                        </td>
                        <td>
                            <div class="quantity">
                                <button class="minus" disabled={cartItem.quantity === 1} on:click={ () => {handleDecrease(cartItem.id)} }>
                                    <i class="fas fa-minus"></i>
                                </button>
                                <input type="text" readonly value={cartItem.quantity}>
                                <button class="plus" on:click={ () => {handleIncrease(cartItem.id)} }>
                                    <i class="fas fa-plus"></i>
                                </button>
                                <button class="trash" on:click={ () => {handleDelete(cartItem.id)} }>
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                    {:else }
                    <tr>
                        <td colspan="3">
                            <h3>CART IS EMPTY</h3>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
        <div class="total">
            <h2>Total: {cart.totalProducts($cart)} products at summ ${cart.totalSumm($cart)}</h2>
        </div>
    </div>
</div>

<style lang="scss">
  @import "./sass/vars";

  .order {
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(#000, .9);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;

    & &-underlay {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
    }

    & &-modal {
      position: relative;
      background-color: $bg;
      padding: 2rem;
      border-radius: 1rem;
      width: 100%;
      max-width: 1000px;
      table {
        td, th {
          padding: .75rem 1rem;
          vertical-align: middle;
          text-align: left;
        }
        thead {
          th:first-child {
            width: 30px;
          }
          th:nth-child(2) {
            width: 2000px;
          }
          th:last-child {
            width: 150px;
          }
        }
        .table-product {
          display: flex;
          align-items: center;
          img {
            width: 4rem;
            border-radius: 1rem;
            margin-right: 1rem;
          }
        }
        .quantity {
          display: flex;
          button {
            border: 1px solid $secondary;
            background-color: $secondary;
            color: $bg;
            cursor: pointer;
            &.minus {
              border-radius: .5rem  0 0 .5rem;
            }
            &.plus {
              border-radius: 0 .5rem .5rem 0;
            }
            &.trash {
              margin-left: 1rem;
              background-color: #cd1230;
              border: none;
              padding: 0 .75rem;
              border-radius: .5rem;
            }
            &:disabled {
              opacity: .5;
              pointer-events: none;
            }
          }
          input {
            width: 2rem;
            text-align: center;
            padding: .5rem;
            border: 1px solid $secondary;
            border-left: none;
            border-right: none;
          }
        }
      }
      .total {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid $secondary;

      }
    }
  }
</style>