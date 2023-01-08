<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-grid>
        <ion-row class="ion-justify-content-between ion-align-items-center">
          <ion-col size="6">
            <ion-title class="d-none d-lg-inline-block mt-1" size="small">
              <ion-breadcrumbs :max-items="4" :items-after-collapse="2" class="p-0">
                <ion-breadcrumb style="font-size: 1em;" href="/Pages">Pages</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em;" href="/pages/PesertaDidik">Peserta Didik</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px;">Peserta Didik</h5>
            </ion-title>
          </ion-col>
          <ion-col size-sm="6" size="10">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown"
                  aria-expanded="true" style="background-color: transparent">
                  Hi {{ username }}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="javascript: doSomethingLogout()" @click="del()">Logout</a>
                  </li>
                </ul>
              </div>
              <div v-if="is_admin == 'true'" class="nav-icon">
                <a href="/SignUp">
                  <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
                </a>
                <a href="/SignUp" class="d-none d-sm-inline-block mb-1 text-info text-gradient"
                  style="text-decoration: none">&nbsp;Add User</a>
              </div>
              <div>&nbsp;</div>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-row class="mt-3 mx-2"><!-- <div class="row mt-3 mx-2"> -->
        <ion-col>
          <ion-card class="mb-4 border-0"><!-- <div class="card mb-4 border-0"> -->
            <ion-row>
              <ion-col>
                <h3 class="px-3 py-3 title-table text-black">Peserta Didik</h3>
              </ion-col>
              <ion-col class="text-end my-auto me-5"><!-- <div class="col text-end my-auto me-5"> -->
                <a href="/pages/PesertaDidik/TambahPesertaDidik" class="btn btn-success tambah">
                  Tambah Data</a>
              </ion-col>
            </ion-row>
            <ion-card-content class="px-0 pt-0 pb-2"><!-- <div > -->
              <div class="table-responsive p-0">
                <table style="table-layout: fixed" id="table-peserta-didik"
                  class="table table-hover align-items-center mb-0 display">
                  <thead>
                    <tr>
                      <th width="25%" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4">
                        Nama
                      </th>
                      <th width="20%" class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4">
                        Jenis Kelamin
                      </th>
                      <th width="15%"
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        NISN
                      </th>
                      <th width="20%"
                        class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                        Kelas
                      </th>
                      <th width="30%" class="text-secondary opacity-7 text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody v-for="result in results" :key="result._id">
                    <tr v-on:click="
                      router.push('/pages/PesertaDidik/' + result._id.$oid)
                    ">
                      <td class="align-middle">
                        <div class="d-flex px-3 py-1">
                          <div>
                            <!-- <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" -->
                            <!-- alt="user1"> -->
                          </div>
                          <div class="justify-content-center">
                            <h6 class="mb-0 text-sm td-name">
                              {{ result.nama }}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td class="align-middle">
                        <p class="text-xs font-weight-bold mb-0 ps-3">
                          {{ result.jenis_kelamin }}
                        </p>
                      </td>
                      <td class="align-middle text-center text-sm">
                        <span class="">{{ result.nisn }}</span>
                      </td>
                      <td class="align-middle text-center">
                        <span class="text-dark text-xs font-weight-bold">{{
                          result.tingkat_kelas
                        }}</span>
                      </td>
                      <td class="align-middle text-center justify-content-evenly">
                        <!-- <a href="javascript:;" class="text-secondary font-weight-bold text-xs"
                                                    data-toggle="tooltip" data-original-title="Edit user">
                                                    Edit
                                                </a> -->
                        <button type="button" class="btn btn-warning me-3 text-white action-button" @click="router.push('/pages/PesertaDidik/EditPesertaDidik/' + result._id.$oid)">
                          &nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;&nbsp;
                        </button>
                        <a href=""><button type="button" class="btn btn-danger text-white action-button" href="/pages">
                            Delete
                          </button></a>
                        <!-- <button type="button" class="btn btn-primary btn-sm text-uppercase text-white fw-bold p-2"
                          @click="router.push('/pages/TenagaKependidikan/DetailTenagaKependidikan/' + nonGuru._id.$oid)">View</button>
                        <button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2 ms-2"
                          @click="router.push('/pages/TenagaKependidikan/EditTenagaKependidikan/' + nonGuru._id.$oid)">Edit</button>
                        <button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2"
                          @click="delTendik(nonGuru._id.$oid)">Delete</button> -->
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from "axios";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import {
  IonButtons,
  IonContent,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";

export default defineComponent({
  name: "PesertaDidikPage",
  components: {
    IonButtons,
    IonContent,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow,
  },
  data() {
    return {
      results: [],
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin')
    };
  },
  mounted: function () {
    let headers = {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    };
    axios
      .get("http://localhost:5000/API/students", { headers })
      .then((response) => {
        this.results = response.data;
        console.log(response);
      })
      .catch((error) => {
        let status = error.response.data.msg;
        if (status == "Missing Authorization Header") {
          alert("Anda belum login");
          window.location.href = "/SignIn";
        }
        else if (status == "Token has expired") {
          alert("Sesi telah berakhir, silahkan login kembali");
          window.location.href = "/SignIn";
        }
      });
  },
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  methods: {
    del() {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios.delete("http://localhost:5000/API/auth/logout", { headers })
        .then((response) => {
          console.log(response);
          localStorage.clear()
        })
        .catch((error) => {
          let status = error.response.data.msg;
          if (status == "Missing Authorization Header") {
            alert("Anda belum login");
            window.location.href = "/SignIn";
          }
          else if (status == "Token has expired") {
            alert("Sesi telah berakhir, silahkan login kembali");
            window.location.href = "/SignIn";
          }
        });
    },
    delPesertaDidik(id) {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios
        .delete("http://localhost:5000/API/student/" + id, { headers })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          let status = error.response.data.msg;
          if (status == "Missing Authorization Header") {
            alert("Anda belum login");
            window.location.href = "/SignIn";
          }
          else if (status == "Token has expired") {
            alert("Sesi telah berakhir, silahkan login kembali");
            window.location.href = "/SignIn";
          }
        });
    }
  },
});
</script>

<style scoped>
/* template style */
ion-col {
  padding: 0;
}

/* Icon navbar style */
a .iconButton {
  color: #67748e;
  text-decoration: none;
  margin-left: 20px;
  font-size: 20px;
}

/* Searchbar Style */
.search-box {
  width: fit-content;
  height: fit-content;
  position: relative;
  color: #67748e;
}

.input-search {
  height: 40px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  background-color: transparent;
  padding-right: 40px;
  color: #67748e;
}

.input-search::placeholder {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}

.btn-search {
  color: #67748e;
  width: 40px;
  height: 40px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  background-color: transparent;
  pointer-events: painted;
  top: -3px;
}

.btn-search:focus~.input-search {
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}

.input-search:focus {
  width: 300px;
  border-radius: 10px;
  background-color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}

.text-info {
  color: #17c1e8 !important;
}

.text-gradient {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
}

.text-gradient.text-info {
  background-image: linear-gradient(310deg, #2152ff, #21d4fd);
}

.text-gradient.text-dark {
  background-image: linear-gradient(310deg, #141727, #3a416f);
}

/* content style */
[data-href] {
  cursor: pointer;
}

.table {
  border-collapse: inherit;
}

thead th {
  padding: 0.75rem 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid lighten(black, 35%);
}

th {
  font-weight: bold;
}

td,
th {
  white-space: nowrap;
}

.tables> :not(:last-child)> :last-child>* {
  border-bottom-color: black;
}

td {
  width: 100px;
}

.tambah {
  border-radius: 8px;
  border: none;
  height: 40px;
}

/* small laptop dimension */
@media only screen and (max-width: 1280px) {
  .btn-search:focus~.input-search {
    width: 250px;
  }

  .input-search:focus {
    width: 250px;
  }

  th,
  td,
  .td-name {
    width: 160px;
  }

  .action-button {
    padding: 5px 12px;
    font-size: 12px;
  }
}

/* tablet dimension */
@media only screen and (max-width: 990px) {
  .btn-search:focus~.input-search {
    width: 200px;
  }

  .input-search:focus {
    width: 200px;
  }

  th,
  td,
  .td-name {
    font-size: 12px;
  }
}

/* large phone dimension */
@media only screen and (max-width: 575px) {
  .goright {
    position: relative;
    left: 60px;
  }

  th,
  td,
  .td-name {
    width: 150px;
  }

  .title-table {
    font-size: 12px;
    margin-top: 10px;
  }

  .tambah {
    padding: 10px;
    font-size: 10px;
    position: relative;
    left: 20px;
    height: 30px;
  }
}

/* large phone dimension */
@media only screen and (max-width: 426px) {
  .form {
    font-size: 10px;
  }

  .search-box {
    position: absolute;
    right: 34%;
  }

  .btn-search:focus~.input-search {
    width: 200px;
  }

  .input-search:focus {
    width: 200px;
  }
}

/* small phone dimension */
@media only screen and (max-width: 376px) {
  .search-box {
    position: absolute;
    right: 41%;
  }

  .btn-search:focus~.input-search {
    width: 180px;
  }

  .input-search:focus {
    width: 180px;
  }
}

@media only screen and (max-width: 320px) {
  .search-box {
    position: absolute;
    right: 50%;
  }

  .btn-search:focus~.input-search {
    width: 150px;
  }

  .input-search:focus {
    width: 150px;
  }
}
</style>