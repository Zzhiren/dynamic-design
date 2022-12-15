import { RouteRecordRaw } from 'vue-router';
// const files: any = import.meta.glob(`/((?!index).)*ts$/`);
const files: any = import.meta.globEager(`./*.ts`);
const routes: RouteRecordRaw[] = [];
Object.keys(files).forEach((key: string) => {
  routes.push(...files[key].default);
});

export default routes;
