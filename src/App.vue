<template>
  <v-app>
    <AppBar></AppBar>
    <v-content>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import AppBar from '@/components/Home/AppBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),
});
</script>
