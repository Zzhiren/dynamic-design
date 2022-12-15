<template>
  <div class="side-bar-wrapper">
    <Logo />
    <Menu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from './Logo.vue';
import Menu from './Menu.vue';

export default defineComponent({
  name: 'SideBar',
  components: {
    Logo,
    Menu,
  },
  setup() {},
});
</script>

<style scoped lang="scss">
.side-bar-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
