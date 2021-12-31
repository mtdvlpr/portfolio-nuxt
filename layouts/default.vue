<template>
  <v-app dark>
    <navigation :pages="pages" :links="links" />
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute padless app>
      <v-row justify="center" no-gutters>
        <v-btn text rounded class="my-2 hidden-sm-and-down" to="/">
          <v-icon left>{{ mdiHome }}</v-icon>
          home
        </v-btn>
        <v-btn
          v-for="(link, i) in pages"
          :key="i"
          text
          rounded
          class="my-2 hidden-sm-and-down"
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
          <a href="/sitemap.html" class="link" :style="'color: ' + color"
            >sitemap</a
          >
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
<script>
import {
  mdiHome,
  mdiGithub,
  mdiLinkedin,
  mdiEmail,
  mdiInformation,
  mdiApplicationBrackets,
} from '@mdi/js'
export default {
  data() {
    return {
      mdiHome,
      pages: [
        {
          icon: mdiInformation,
          title: 'About me',
          to: '/#about',
        },
        {
          icon: mdiApplicationBrackets,
          title: 'Projects',
          to: '/#projects',
        },
        {
          icon: mdiEmail,
          title: 'Contact',
          to: '/#contact',
        },
      ],
      links: [
        {
          icon: mdiGithub,
          title: 'Discover my GitHub profile',
          to: 'https://github.com/mtdvlpr',
        },
        {
          icon: mdiLinkedin,
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
