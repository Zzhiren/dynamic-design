<template>
  <n-scrollbar x-scrollable>
    <n-el class="tab-wrapper">
      <n-button
        @click="handleChoose(index)"
        secondary
        size="small"
        v-for="(tab, index) of panels"
        :key="tab.path"
        icon-placement="right"
        class="tab"
        :type="active === tab.path ? 'primary' : 'default'"
      >
        <template #icon>
          <n-icon class="tab-close" @click="handleClose(tab)">
            <close-outline />
          </n-icon>
        </template>
        {{ tab.title }}
      </n-button>
    </n-el>
  </n-scrollbar>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { NScrollbar, NButton, NEl, NIcon } from 'naive-ui';
import { CloseOutline } from '@vicons/ionicons5';
import { RouteRecordRaw } from 'vue-router';

export default defineComponent({
  name: 'TabBar',
  components: {
    NScrollbar,
    NButton,
    NEl,
    NIcon,
    CloseOutline,
  },
  setup() {
    const nameRef = ref('胜多负少');
    const activeRef = ref(0);
    // const panelsRef = ref([]);
    const handleClose = (tab: RouteRecordRaw) => {
      store.commit('updateTabs', {
        tab: tab,
        action: 'remove',
      });
    };

    const handleChoose = (tab: any) => {
      activeRef.value = tab.path;
    };

    return {
      panels: store.state.router.tabs,
      name: nameRef,
      active: activeRef,
      handleClose,
      handleChoose,
    };
  },
});
</script>

<style scoped lang="scss">
.tab-scrollbar {
}
.tab-wrapper {
  padding: 10px 6px;
  white-space: nowrap;
  background: var(--card-color);
  .tab {
    margin-right: 12px;
  }
  .tab-close {
    margin-left: 2px;
  }
}
</style>
