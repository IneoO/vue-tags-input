<template>
  <div class="vue-tags-input">
    <div class="vue-tags-input__tags">
      <ul>
        <li class="vue-tags-input__tag"
          v-for="(tag, index) in value"
          :key="index">
          <span v-if="!options.tagObject">{{tag}}</span>
          <span v-else>{{tag[labelName]}}</span>
        </li>
        <li class="vue-tags-input__tags-new">
          <input type="text"
            @keyup.delete="focusLastTag"
            @keyup.delete.delete="removeLastTag"
            @keyup.enter="addTag"
            placeholder="Add Feature"
            v-model="newTag"
            class="vue-tags-input__tags-new">
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./vueTagsInput.js"></script>
<style lang="scss" src="./vueTagsInput.scss"></style>
