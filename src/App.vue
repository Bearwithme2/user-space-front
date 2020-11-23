<template>
  <div>
    <b-navbar variant="primary" type="light">
      <b-navbar-brand href="#">userspace</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/space">Space</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view class="mt-1" />
  </div>
</template>
