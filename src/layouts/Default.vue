<template>
  <div class="flex justify-center">
      <div class="flex flex-col md:flex-row flex-shrink flex-wrap overflow-hidden md:p-4 md:m-2">
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
  components: {
    SideBar,
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

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-enter {
  transform: translateY(-10px);
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
  min-height: 300px;
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
