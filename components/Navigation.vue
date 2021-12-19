<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      class="hidden-md-and-up"
      disable-resize-watcher
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in pages"
          :key="i"
          :to="item.to"
          nuxt
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
      <nuxt-link exact aria-label="Go to home" to="/">
        <v-img
          class="mx-2"
          :src="$icon(64)"
          max-height="40"
          max-width="40"
          contain
          alt="Website Logo"
        />
      </nuxt-link>
      <v-toolbar-title @click="$router.push('/')">
        Manoah's Portfolio
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in pages" :key="item.title" :to="item.to" nuxt exact>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="link in links"
          :key="link.title"
          icon
          :aria-label="link.title"
          :href="link.to"
          target="_blank"
        >
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>
        <v-btn icon aria-label="Toggle dark mode" @click="toggleDarkMode">
          <v-icon>mdi-brightness-6</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: {
    pages: {
      type: Array,
      required: true,
    },
    links: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
<style lang="scss" scoped>
.v-toolbar__title {
  cursor: pointer;
}
</style>
