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
          image: 'midd.webp',
          to: 'https://magikditdelen.nl',
        },
        {
          title: 'Ai And You',
          subtitle: 'MySQL, PHP, JS, HTML5',
          image: 'aay.webp',
          to: 'http://aiandyou.csgja.com',
        },
        {
          title: 'World Taekwondo Federation',
          subtitle: 'HTML5, CSS3',
          image: 'wtf.webp',
          to: 'https://mtdvlpr.github.io/webmarkup-assessment/',
        },
        {
          title: 'Secondary School Portfolio',
          subtitle: 'MySQL, PHP, jQuery, HTML5',
          image: 'ssp.webp',
          to: 'http://149895.csgja.com',
        },
        {
          title: 'Movie For You',
          subtitle: 'Express, Nuxt, TS, SCSS',
          image: 'mfy.webp',
          to: 'https://github.com/mtdvlpr/first-nuxt-app',
        },
        {
          title: 'Movie For You',
          subtitle: 'MySQL, PHP, TS, SCSS',
          image: 'mfy.webp',
          to: 'https://php2-assignment.herokuapp.com/',
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
      ],
    }
  },
  head() {
    return {
      title: 'Projects',
      link: [
        { rel: 'canonical', href: 'https://www.manoahtervoort.tk/projects' },
      ],
    }
  },
}
</script>
