<template>
  <projects-grid :cards="projects" />
</template>
<script>
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
        {
          title: 'World Taekwondo Federation',
          subtitle: 'HTML5, CSS3',
          image: 'wtf.png',
          to: 'https://mtdvlpr.github.io/webmarkup-assessment/',
        },
        {
          title: 'Secondary School Portfolio',
          subtitle: 'MySQL, PHP, jQuery, HTML5',
          image: 'ssp.png',
          to: 'http://149895.csgja.com',
        },
        {
          title: 'C# Assignments',
          subtitle: 'C#',
          to: 'https://github.com/mtdvlpr/c-sharp-assignments',
        },
        {
          title: 'Java Assignments',
          subtitle: 'Java',
          to: 'https://github.com/mtdvlpr/java-assignments',
        },
        {
          title: 'Movie For You',
          subtitle: 'Express, Nuxt, TS, SCSS',
          image: 'mfy.png',
          to: 'https://github.com/mtdvlpr/first-nuxt-app',
        },
        /* {
          title: 'Movie For You',
          subtitle: 'Docker, MySQL, PHP, TS, SCSS',
          image: 'mfy.png',
          to: 'https://github.com/mtdvlpr/php2-assignment',
        }, */
      ],
    }
  },
  head() {
    return { title: 'Projects' }
  },
}
</script>
