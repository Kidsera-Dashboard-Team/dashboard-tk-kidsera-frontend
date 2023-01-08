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
    props: true,
    path: "/pages/TenagaKependidikan/DetailTenagaKependidikan/:id",
    component: () => import("../views/DetailTenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/TenagaKependidikan/TambahTenagaKependidikan",
    component: () => import("../views/TambahTenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/TenagaKependidikan/TambahTenagaKependidikanNonGuru",
    component: () => import("../views/TambahTenagaKependidikanPageNonGuru.vue"),
  },
  {
    props: true,
    path: "/pages/TenagaKependidikan/EditTenagaKependidikan/:id",
    component: () => import("../views/EditTenagaKependidikanPage.vue"),
  },
  {
    path: "/pages/Sarpras",
    component: () => import("../views/SarprasPage.vue"),
  },
  {
    props: true,
    path: "/pages/Sarpras/DetailSarpras/:id",
    component: () => import("../views/DetailSarprasPage.vue"),
  },
  {
    props: true,
    path: "/pages/Sarpras/DetailSarpras/TambahFasilitasSarpras/:id/:nama_ruang",
    component: () => import("../views/TambahFasilitasSarprasPage.vue"),
  },
  {
    props: true,
    path: "/pages/Sarpras/DetailSarpras/EditSarpras/:id/:id_ruang",
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
    props: true,
    name: "EditRombonganBelajar",
    path: "/pages/RombonganBelajar/:tahun/:kelas/edit",
    component: () => import("../views/EditRombonganBelajarPage.vue"),
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
    props:true,
    path: "/pages/Rapor/:tahun",
    component: () => import("../views/TahunAjaranRaporPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas",
    component: () => import("../views/PesertaDidikRaporPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas/:id_siswa",
    component: () => import("../views/InputNilaiPesertaDidikRaporPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas/:id_siswa/tengah_semester/:semester/add",
    component: () => import("../views/InputRaporTengahSemesterPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas/:id_siswa/tengah_semester/:semester/detail",
    component: () => import("../views/DetailRaporTengahSemesterPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas/:id_siswa/tengah_semester/:semester/edit",
    component: () => import("../views/EditRaporTengahSemesterPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas/:id_siswa/akhir_semester/:semester/add",
    component: () => import("../views/InputRaporAkhirSemesterPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas/:id_siswa/akhir_semester/:semester/detail",
    component: () => import("../views/DetailRaporAkhirSemesterPage.vue"),
  },
  {
    props:true,
    path: "/pages/Rapor/:tahun/:kelas/:id_siswa/akhir_semester/:semester/edit",
    component: () => import("../views/EditRaporAkhirSemesterPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
