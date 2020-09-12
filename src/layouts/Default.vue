<template>
  <div class="flex justify-center">
    <div class="flex flex-col md:flex-row flex-shrink flex-wrap md:p-4 md:m-2">
      <div class="flex flex-row flex-grow md:sidebar mx-2 mt-2 md:m-4">
        <nav
          class="flex-grow md:fixed md:sidebar border-solid border bg-white border-global-border"
        >
          <SideBar />
        </nav>
      </div>
      <div class="content m-2 md:m-4 bg-white border-solid border border-global-border">
        <slot />
      </div>
    </div>
    <transition name="fade">
      <button
        v-on:click="scrollToTop"
        v-if="showButton"
        class="flex flex-row fixed right-0 mr-2 mb-2 bottom-0 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center"
      >
        <svg class="fill-current top-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 35">
          <path d="M44.6 32.6L25 17.3 5.4 32.6.5 26.2 25 7.2l24.5 19z" />
        </svg>
      </button>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SideBar from "~/components/SideBar.vue";

export default {
  data() {
    return {
      showButton: false,
    };
  },
  components: {
    SideBar,
  },
  methods: {
    handleScroll: function() {
      this.showButton = window.scrollY > 300;
    },
    scrollToTop: function() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

:root {
  --link-color: #474747;
  --hover-color: #eeeeee;
  --background-color: #f4f4f4;
  --border-color: #d7d7d7;
}

body {
  font-family: "Open Sans", Arial, sans-serif;
  padding: 0;
  line-height: 1.5;
  min-height: 100vh;
  background: var(--background-color);
}

.top-icon {
  height: 26px;
  width: 49px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.logo {
  height: 100%;
  pointer-events: none;
}

.content {
  flex: 1 1 400px;
  max-width: 1000px;
  min-width: 300px;
}

@responsive {
  .sidebar {
    max-width: 250px;
    min-width: 200px;
  }
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}
</style>
