<template>
  <div id="app">
    <vueTagsInput
      :tags="tags"
      v-model="values"
      :placeholder="place"/>
    {{values}}
  </div>
</template>

<script>
import vueTagsInput from './components/vueTagsInput/vueTagsInput.vue';

export default {
  name: 'App',
  data() {
    return {
      place: 'test',
      values: ['toto', 'titi'],
      tags: [
        'toto', 'titi', 'tata', 'titie',
      ],
    };
  },
  components: {
    vueTagsInput,
  },
};
</script>

<style>
#app {
  width: 400px;
}
</style>
