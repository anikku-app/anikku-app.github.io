---
title: Aniyomi
titleTemplate: false
description: The original Aniyomi app, based of all anime forks.

layout: home
pageClass: page-aniyomi

hero:
  name: Aniyomi
  text: Anime-Manga
  tagline: The original Aniyomi app, based of all anime forks.
  image: /forks/logo-aniyomi.webp
  actions:
    - theme: brand
      text: Download
      link: https://github.com/aniyomiorg/aniyomi/releases/latest
    - theme: alt
      text: GitHub
      link: https://github.com/aniyomiorg/aniyomi

customMetaTitle: Aniyomi

theme: "#ec45fd"
image: /forks/logo-aniyomi.webp
imageSize: small
---

<br><VPTeamMembers size="small" :members="members" />

<script setup>
import "@theme/styles/forks/animiru.styl"
import { VPTeamMembers } from "vitepress/theme"

const members = [
  {
    avatar: "https://www.github.com/aniyomiorg.png",
    name: "Aniyomiorg",
    title: "Creator",
    links: [
      { icon: "github", link: "https://github.com/aniyomiorg" }
    ]
  }
]
</script>
