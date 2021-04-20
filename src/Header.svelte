<script>
    import CartInformer from "./component/CartInformer.svelte";
</script>

<header>
    <div class="container">
        <div class="logo">
            <a href="/">
                <i class="fas fa-shopping-bag"></i>
                eStore
            </a>
        </div>
        <CartInformer/>
    </div>
</header>

<style lang="scss">
  @import './sass/vars';
  header {
    background: $headerBg;
    backdrop-filter: blur(30px);
    padding: 1rem;
    color: $headerText;
    .container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        font-weight: 700;
        padding-left: 1rem;
        a {
          color: lighten($primary, 50%);
          font-size: 2rem;
          text-decoration: none;
          text-shadow: 0 2px 3px rgba(#000,.4);
        }
      }
    }
  }

</style>