<template>
  <div class = "AppBar">
    <v-card>
      <v-app-bar color = "red" dark app extended>
        <v-toolbar-title class = "white--text">Shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class = "hidden-sm-and-down">
          <v-btn text>登入</v-btn>
        </v-toolbar-items>
        <v-toolbar-items class = "hidden-md-and-up">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-toolbar-items>
        <template v-slot:extension>
          <v-layout>
            <v-flex md4 offset-md4>
              <v-text-field label = "Search"></v-text-field>
            </v-flex>
          </v-layout>
        </template>
      </v-app-bar>
    </v-card>
  </div>
</template>

<script lang = "ts">
import { Component, Prop, Vue, Emit, Provide } from 'vue-property-decorator';

@Component
export default class AppBar extends Vue {}
</script>

<style scoped lang = "scss">
</style>
