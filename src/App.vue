<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-about" to="/">About</router-link>
      <router-link class="nav-work" to="/work">Work</router-link>
      <router-link class="nav-private" to="/private">Private</router-link>
    </div>
    <transition mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import 'ress';

export default {
  name: 'App',
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    padding: 20px 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .nav-about {
    background: #ffd3b6;
    padding: 20px 30px;
  }
  .nav-work {
    background: #a8e6cf;
    padding: 20px 30px;
  }
  .nav-private {
    background: #fdffab;
    padding: 20px 30px;
  }
}
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all 0.5s 0s ease;
}
</style>
