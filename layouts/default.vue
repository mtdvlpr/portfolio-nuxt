<template>
  <v-app dark>
    <flash />
    <modal />
    <confirm />
    <navigation :pages="pages" :links="links" />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute padless app>
      <v-row justify="center" no-gutters>
        <v-btn text rounded class="my-2" to="/">
          <v-icon left>mdi-home</v-icon>
          home
        </v-btn>
        <v-btn
          v-for="(link, i) in pages"
          :key="i"
          text
          rounded
          class="my-2"
          :to="link.to"
          exact
          nuxt
        >
          <v-icon left>{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>
        <v-col class="pt-4 text-center" cols="12">
          &copy; {{ new Date().getFullYear() }} —
          <strong>Manoah Tervoort</strong>
        </v-col>
        <v-col class="text-center" cols="12">
          <a href="/sitemap.xml" class="link" :style="'color: ' + color"
            >sitemap</a
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          icon: 'mdi-information',
          title: 'About me',
          to: '/#about',
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          to: '/#contact',
        },
        {
          icon: 'mdi-application-brackets',
          title: 'Projects',
          to: '/#projects',
        },
      ],
      links: [
        {
          icon: 'mdi-github',
          title: 'Discover my GitHub profile',
          to: 'https://github.com/mtdvlpr',
        },
        {
          icon: 'mdi-linkedin',
          title: 'Check me out on LinkedIn',
          to: 'https://www.linkedin.com/in/manoaht/',
        },
      ],
    }
  },
  computed: {
    color() {
      return this.$vuetify.theme.dark ? 'white' : 'black'
    },
  },
}
</script>
<style lang="scss" scoped>
.link {
  &:hover {
    text-decoration: none;
  }
}
</style>
