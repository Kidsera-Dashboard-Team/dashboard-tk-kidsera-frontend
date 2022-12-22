import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    redirect: "/pages/Dashboard",
  },
  {
    path: "/pages",
    redirect: "/pages/Dashboard",
  },
  {
    path: "/SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/SignIn",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/pages/Dashboard",
    component: () => import("../views/DashboardPage.vue"),
  },
  {
    path: "/pages/PesertaDidik",
    component: () => import("../views/PesertaDidikPage.vue"),
  },
  {
    path: "/pages/PesertaDidik/TambahPesertaDidik",
    component: () => import("../views/TambahPesertaDidikPage.vue"),
  },
  {
    props: true,
    name: "EditPesertaDidik",
    path: "/pages/PesertaDidik/EditPesertaDidik/:id",
    component: () => import("../views/EditPesertaDidikPage.vue"),
  },
  {
    props: true,
    name: "DetailPesertaDidik",
    path: "/pages/PesertaDidik/:id",
    component: () => import("../views/DetailPesertaDidikPage.vue"),
  },
  {
    path: "/pages/TenagaKependidikan",
    component: () => import("../views/TenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/TenagaKependidikan/DetailTenagaKependidikan",
    component: () => import("../views/DetailTenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/TenagaKependidikan/TambahTenagaKependidikan",
    component: () => import("../views/TambahTenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/TenagaKependidikan/EditTenagaKependidikan",
    component: () => import("../views/EditTenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/Sarpras",
    component: () => import("../views/SarprasPage.vue"),
  },
  {
    path: "/pages/Sarpras/DetailSarpras",
    component: () => import("../views/DetailSarprasPage.vue"),
  },
  {
    path: "/pages/Sarpras/DetailSarpras/TambahFasilitasSarpras",
    component: () => import("../views/TambahFasilitasSarprasPage.vue"),
  },
  {
    path: "/pages/Sarpras/DetailSarpras/EditSarpras",
    component: () => import("../views/EditSarprasPage.vue"),
  },
  {
    path: "/pages/RombonganBelajar",
    component: () => import("../views/RombonganBelajarPage.vue"),
  },
  {
    path: "/pages/RombonganBelajar/TambahRombonganBelajar",
    component: () => import("../views/TambahRombonganBelajarPage.vue"),
  },
  {
    props: true,
    name: "TahunAjaranRombonganBelajar",
    path: "/pages/RombonganBelajar/:tahun",
    component: () => import("../views/TahunAjaranRombonganBelajarPage.vue"),
  },
  {
    props: true,
    name: "DetailRombonganBelajar",
    path: "/pages/RombonganBelajar/:tahun/:kelas",
    component: () => import("../views/DetailRombelPage.vue"),
  },
  {
    path: "/pages/:id",
    component: () => import("../views/Pages.vue"),
  },
  {
    path: "/pages/Rapor",
    component: () => import("../views/RaporPage.vue"),
  },
  {
    path: "/pages/Rapor/TahunAjaranRapor",
    component: () => import("../views/TahunAjaranRaporPage.vue"),
  },
  {
    path: "/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor",
    component: () => import("../views/PesertaDidikRaporPage.vue"),
  },
  {
    path: "/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor/InputNilaiPesertaDidikRapor",
    component: () => import("../views/InputNilaiPesertaDidikRaporPage.vue"),
  },
  {
    path: "/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor/InputNilaiPesertaDidikRapor/InputRapor",
    component: () => import("../views/InputRaporPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
