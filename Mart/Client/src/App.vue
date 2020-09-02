<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header.glossy(elevated="")
      q-toolbar
        q-btn(flat="" dense="" round="" @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu")
          q-toolbar-title
            | {{ home.name }}
          div Quasar v{{ $q.version }}
    q-drawer(v-model="leftDrawerOpen" show-if-above="" bordered="" content-class="bg-grey-2")
      q-list
        q-item-label(header="") Pages
        q-item(clickable="" tag="a"  href="/")
          q-item-section(avatar="")
            q-icon(name="school")
          q-item-section
            q-item-label Home
            q-item-label(caption="") home
        q-item(clickable="" tag="a"  href="/about")
          q-item-section(avatar="")
            q-icon(name="code")
          q-item-section
            q-item-label About
            q-item-label(caption="") about
    q-page-container
      router-view
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {

  data () {
    return {

    }
  },

  computed:{
    ...mapFields(["home"]),
  }
}
</script>

<style>
</style>
