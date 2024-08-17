<template>
  <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" href="../index.html">
        <img
          src="https://github.com/Kifaa26/images-js/blob/main/allure-high-resolution-logo%20(1).png?raw=true"
          alt="logo"
          loading="lazy"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" href="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="./about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="./products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="./checkout">Checkout</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="./admin">Admin</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="./contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
img {
  width: 5rem;
}
</style>