<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <n-layout class="layout" has-sider>
      <SideBar />
      <n-layout>
        <n-layout-header>
          <NavBar />
        </n-layout-header>
        <n-layout-content>
          <TabBar />
          <router-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { NLayout, NLayoutHeader, NLayoutContent, NConfigProvider, darkTheme, GlobalThemeOverrides } from 'naive-ui';
import { SideBar, NavBar, TabBar } from '@/layout';

export default defineComponent({
  name: 'App',
  components: {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NConfigProvider,
    SideBar,
    NavBar,
    TabBar,
  },

  setup() {
    const themeOverrides: GlobalThemeOverrides = {};
    return {
      darkTheme,
      themeOverrides,
    };
  },
});
</script>

<style lang="scss">
.layout {
  height: 100vh;
}
</style>
