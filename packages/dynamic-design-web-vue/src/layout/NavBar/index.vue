<template>
  <n-card class="navbar">
  </n-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NCard } from 'naive-ui';

export default defineComponent({
  name: 'NavBar',
  components: {
    NCard,
  },
  setup() {},
});
</script>

<style scoped lang="scss">
@import 'src/styles/index.scss';
.navbar {
  height: $nav-bar-height;
}
</style>
