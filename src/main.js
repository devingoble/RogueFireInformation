// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'description',
    content: 'A collection of links to various resources for the Almeda Fire and Obenchain Fire in the Rogue Valley, including Medford, Ashland, Talent, Phoenix, Eagle Point, White City, Shady Cove, and Butte Falls. This includes evacuation notices, public health links, relief efforts, news, and general information.'
  })
}
