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
  },
  data() {
    return {
      newTag: '',
      model: [],
    };
  },
  methods: {
    init() {},
    initTags() {},
    addTag() {
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
    },
    focusLastTag() {
      console.log('focus');
    },
    removeLastTag() {
      console.log('remove');
    },
  },
  mounted() {
    this.init();
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
