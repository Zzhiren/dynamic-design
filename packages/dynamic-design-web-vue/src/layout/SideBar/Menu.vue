<template>
  <n-layout-sider
    class="side-bar"
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :collapsed="collapsed"
    show-trigger
    @collapse="collapsed = true"
    @expand="collapsed = false"
  >
    <n-menu
      key-field="path"
      label-field="title"
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :render-icon="renderMenuIcon"
      :expand-icon="expandIcon"
      @update:value="handleClick"
    />
  </n-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref, h, reactive } from 'vue';
import { usePermissionStore } from '@/store/modules/permission';
import { useRouter, RouteRecordRaw } from 'vue-router';
import { NLayoutSider, NMenu, NIcon, MenuOption } from 'naive-ui';
import { BookmarkOutline, CaretDownOutline } from '@vicons/ionicons5';

type IMenu = MenuOption & { path: string };
type IMenus = IMenu[];

export default defineComponent({
  name: 'Menu',
  components: {
    NLayoutSider,
    NMenu,
  },
  setup() {
    const collapsed = ref(true);
    const router = useRouter();
    const store = usePermissionStore();
    const routes = router.options.routes;
    const menus = genMenuOptions(routes);
    const menuOptions = reactive<IMenus>(menus);

    function genMenuOptions(routes: RouteRecordRaw[], parentPath: string = ''): IMenus {
      const menus: IMenus = [];
      routes.forEach((route) => {
        const menu: IMenu = {
          title: route.meta?.title,
          path: parentPath ? `${parentPath}/${route.path}` : route.path,
          name: route.name,
        };
        if (route.children && route.children.length > 0) {
          menu.children = genMenuOptions(route.children, menu.path);
        }
        menus.push(menu);
      });
      return menus;
    }
    console.log('menus', menus);
    function handleClick(path: string, menu: RouteRecordRaw) {
      router.push({
        path,
      });
      store.commit('updateTabs', {
        tab: menu,
        action: 'push',
      });
    }

    return {
      collapsed,
      menuOptions,
      handleClick,
      expandIcon() {
        return h(NIcon, null, { default: () => h(CaretDownOutline) });
      },
      renderMenuIcon(option: any) {
        // 渲染图标占位符以保持缩进
        if (option.key === 'sheep-man') return true;
        // 返回 falsy 值，不再渲染图标及占位符
        if (option.key === 'food') return null;
        return h(NIcon, null, { default: () => h(BookmarkOutline) });
      },
    };
  },
});
</script>

<style scoped lang="scss">
@import 'src/styles/index.scss';
.side-bar {
  height: calc(100vh - #{$nav-bar-height});
}
</style>
