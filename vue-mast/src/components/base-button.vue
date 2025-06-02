<script>
export default {
  props: {
    left: Boolean,
  },
};
</script>

<template>
  <button>
    <slot v-if="left">
      submit
    </slot>
    <slot v-else>
      cancel
    </slot>
  </button>
</template>
