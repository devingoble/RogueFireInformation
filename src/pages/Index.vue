<template>
  <Layout>
    <div class="px-2 md:px-4">
      <h1 class="text-4xl">Fire Information for the Rogue Valley</h1>

      <h2>About this page</h2>
      <p>I've been frustrated by how difficult it is to find updated information on the South Obenchain and Almeda fires since there are so many options, and the situation is still developing. This is my attempt to aggregate some sources that I've found helpful. This site isn't endorsed by any agency, or any of the organizations who are linked here. This is essentially a list of my own bookmarks that you may find useful.</p>
      <br />
      <p>If you see an issue, or want to suggest a resource, feel free to send an email to rfisuggestions@outlook.com or tweet @roguefireinfor1.</p>
      <br />
      <ClientOnly>
        <iframe
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.roguefireinformation.com&width=450&layout=standard&action=like&size=small&share=true&height=35&appId"
          width="100%"
          height="35"
          style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </ClientOnly>
      <a
        class="bg-blue-500 hover:bg-blue-700 text-white visited:text-white font-bold py-2 px-4 rounded"
        href="https://twitter.com/intent/tweet?text=Check+out+roguefireinformation.com+for+great+resources+for+information+about+the+%23AlmedaFire+and+%23ObenchainFire!"
      >Tweet</a>
      <br />
      <div
        class="mt-4 bg-blue-100 border-t-4 border-blue-600 rounded-b text-blue-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div class="flex">
          <div class="py-1">
            <svg
              class="fill-current h-6 w-6 text-blue-600 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
              />
            </svg>
          </div>
          <div>
            <p class="font-bold">What's New</p>
            <ul class="list-disc">
              <li>We've got search now! It's nothing super advanced, it just filters the links using a simple text match. Give it a try below.</li>
              <li>
                KTVL has a great page about where to get help and how to volunteer. It's found in the
                <a
                  href="#NewsStations"
                >News and Weather</a> section.
              </li>
              <li>
                I stumbled a cross a Facebook page for the Obenchain Fire. It's now linked in the
                <a
                  href="#CommunityResources"
                >Community Resources</a> section
              </li>
              <li>
                Added some Twitter hashtags to follow in the
                <a
                  href="#CommunityResources"
                >Community Resources</a> section
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h2>Search</h2>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="search"
          placeholder="Search"
          v-model="searchText"
        />
      </div>

      <Content />
    </div>
  </Layout>
</template>

<script>
import Content from "~/components/Content.vue";

const debounce = require("lodash/debounce");

export default {
  data: function () {
    return {
      searchText: "",
    };
  },
  metaInfo: {
    title: "Fire Information",
  },
  components: {
    Content
  },
  watch: {
    searchText: function (newSearch, oldSearch) {
      let divs = document.getElementsByClassName("link-card");

      for (var i = 0; i < divs.length; i++) {
        if (!divs[i].textContent.toLowerCase().includes(this.searchText.toLowerCase())) {
          divs[i].classList.add("hidden");
        }
        else {
          divs[i].classList.remove("hidden");
        }


      }

      this.filterLinks();
    },
  },
  methods: {
    filterLinks: debounce(function() {
      this.filterParents(".card-parent");
      this.filterParents(".category-parent");
    }, 100),
    filterParents: function(className) {
      let parents = document.querySelectorAll(className);

      for (const parent of parents) {
        const childCount = parent.querySelectorAll(className === ".card-parent" ? ".link-card" : ".card-parent").length;
        const hiddenCount = parent.querySelectorAll(className === ".card-parent" ? ".hidden" : ".card-parent.hidden").length;

        if(childCount === hiddenCount) {
          parent.classList.add("hidden");
        }
        else {
          console.log({childCount, hiddenCount});
          parent.classList.remove("hidden");
        }
      }
    }
  }
};
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.header {
  font-family: "Stylish";
  font-size: 35px;
  text-align: center;
  line-height: 20px;
  padding: 0.7em;
}

.header p {
  font-weight: 200;
}

h2 {
  @apply mt-4;
  @apply text-3xl;
}

h3 {
  @apply text-2xl;
  @apply my-2;
}

a {
  @apply text-blue-600;
}

a:visited {
  @apply text-purple-600;
}

.link-card {
  @apply my-1;
  @apply p-1;
  @apply border-solid;
  @apply rounded;
  @apply border;
  @apply shadow;
}
</style>
