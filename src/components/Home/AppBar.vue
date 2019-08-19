<template>
  <div class = "AppBar">
    <v-app-bar color = "red" dark app>
      <v-toolbar-title class = "white--text">Shop</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script lang = "ts">
import { Component, Prop, Vue, Emit, Provide } from 'vue-property-decorator';

@Component
export default class AppBar extends Vue {}
</script>

<style scoped lang = "scss">
</style>
