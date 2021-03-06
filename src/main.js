// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.meta.push({
    name: 'description',
    content: 'Almeda Fire and Obenchain Fire in the Rogue Valley, Medford, Ashland, Talent, Phoenix, Eagle Point, White City, Shady Cove, Butte Falls. Evacuation, public health, relief, news'
  })
}
