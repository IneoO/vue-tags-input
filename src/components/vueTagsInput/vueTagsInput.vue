<template>
  <div class="vue-tags-input">
    <span :class="isTagHighlight(index)"
      v-for="(tag, index) in value"
      :key="index">
      <span v-if="!options.tagObject">
        {{tag}}
      </span>
      <span v-else>{{tag[labelName]}}</span>
    </span>
    <input type="text"
      @keyup.delete="focusLastTag"
      @keyup.enter="addTag"
      @focus="inputFocus = true"
      @blur="inputFocus = false"
      :placeholder="placeholder"
      v-model="newTag"
      :class="inputClass">
  </div>
</template>

<script src="./vueTagsInput.js"></script>
<style lang="scss" src="./vueTagsInput.scss"></style>
