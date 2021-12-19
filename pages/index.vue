<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card id="about" class="mb-4">
        <v-card-title class="text-h4 justify-center"> About me </v-card-title>
        <v-card-text>
          <v-img
            src="@/assets/img/me.jpg"
            sizes="(max-width: 700px) 192px, (max-width: 1300px) 384px, 512px"
            srcset="/me_192.jpg 192w, /me_384.jpg 384w, /me_512.jpg 512w"
            contain
            width="50%"
            style="margin: 10px auto"
            alt="Picture of me"
          />
          <p>
            Hello, my name is Manoah. I am a web developer, currently a third
            year IT student at InHolland Haarlem. I enjoy programming, playing
            basketball and running.
          </p>
          <p>This purpose of this website is to show off my work and skills.</p>
        </v-card-text>
      </v-card>
      <v-card id="projects" class="mb-4">
        <v-card-title class="text-h4 justify-center"> Projects </v-card-title>
        <v-card-text>
          <projects-grid :cards="projects" :more-btn="true" />
        </v-card-text>
      </v-card>
      <v-card id="contact" class="mb-4">
        <v-card-title class="text-h4 justify-center"> Contact me </v-card-title>
        <v-card-text>
          <v-row>
            <v-col v-for="(link, i) in links" :key="i" cols="12" class="link">
              <v-icon left>{{ link.icon }}</v-icon>
              <a :href="link.to" :style="'color: ' + color">
                {{ link.title }}
              </a>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'
export default {
  data() {
    return {
      projects: [
        {
          title: 'Mag Ik Dit Delen?',
          subtitle: 'MongoDB, Express, React, Node',
          image: 'midd.png',
          to: 'https://magikditdelen.nl',
        },
        {
          title: 'Ai And You',
          subtitle: 'MySQL, PHP, JS, HTML5',
          image: 'aay.png',
          to: 'http://aiandyou.csgja.com',
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
        {
          icon: mdiEmail,
          title: 'Send me an email',
          to: 'mailto:149895ja@gmail.com',
        },
      ],
    }
  },
  head() {
    return { title: 'Home' }
  },
  computed: {
    color() {
      return this.$vuetify.theme.dark ? 'white' : 'black'
    },
  },
}
</script>
<style lang="scss" scoped>
.v-card p {
  font-size: 1.5em;
}

.link {
  padding-left: 30%;

  a {
    font-size: 1.5em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 1000px) {
  .link {
    padding-left: 10%;
  }
}
</style>
