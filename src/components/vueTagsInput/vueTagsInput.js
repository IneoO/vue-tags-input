// import { cloneArray } from './helpers/clone';

export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
      default: () => [],
      required: true,
    },
    options: {
      type: Object,
      default: () => ({
        defautObject: {},
        tagObject: false,
        labelName: 'name',
      }),
    },
    placeholder: {
      type: String,
      default: '',
    },
    tagHighlightClass: {
      type: String,
      default: 'vue-tags-input__tag-highlight',
    },
    tagClass: {
      type: Array,
      default: ['vue-tags-input__tag'],
    },
    inputClass: {
      type: String,
      default: 'vue-tags-input__input',
    },
  },
  data() {
    return {
      newTag: '',
      inputFocus: false,
      hightlightLastTag: false,
      model: [],
    };
  },
  methods: {
    init() {
    },
    initTags() {},
    isTagHighlight(index) {
      if (this.value.length === index + 1 &&
        this.hightlightLastTag &&
        !this.newTag.length) {
        return [this.tagHighlightClass, this.tagClass];
      }
      return this.tagClass[index % this.tagClass.length];
    },
    addTag() {
      if (this.newTag.trim()) {
        this.hightlightLastTag = false;
        const value = this.value.slice(0);
        if (this.options.tagObject) {
          const tag = Object.assign({}, this.options.defautObject);
          tag[this.options.labelName] = this.newTag;
          value.push(tag);
        } else {
          value.push(this.newTag);
        }
        this.$emit('input', value);
        this.newTag = '';
      }
    },
    focusLastTag() {
      if (this.newTag.length) {
        return;
      }
      if (this.hightlightLastTag) {
        this.removeTag(this.value.length - 1);
      } else {
        this.hightlightLastTag = true;
      }
    },
    removeTag(index) {
      this.value.splice(index, 1);
      this.hightlightLastTag = false;
    },
  },
  mounted() {
    this.init();
  },
  computed: {
  },
  watch: {
    tags: {
      handler() {
        this.initTags();
      },
      deep: true,
    },
  },
};
