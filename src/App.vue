<template>
  <div id="app">
    <vueTagsInput :tags="tags" v-model="values"/>
    {{values}}
  </div>
</template>

<script>
import vueTagsInput from './components/vueTagsInput/vueTagsInput.vue';

export default {
  name: 'App',
  data() {
    return {
      values: ['toto','titi'],
      tags: [
        'toto', 'titi', 'tata', 'titie',
      ]
    };
  },
  components: {
    vueTagsInput,
  },
};
</script>

<style>
</style>
