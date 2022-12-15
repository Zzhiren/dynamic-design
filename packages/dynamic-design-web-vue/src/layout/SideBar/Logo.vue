<template>
  <n-card class="logo">logo</n-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NCard } from 'naive-ui';

export default defineComponent({
  name: 'Logo',
  components: {
    NCard,
  },
  setup() {},
});
</script>

<style scoped lang="scss">
@import 'src/styles/index.scss';
.logo {
  //width: 100%;
  height: $nav-bar-height;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
