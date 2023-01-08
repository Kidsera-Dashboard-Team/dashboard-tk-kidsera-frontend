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
                <ion-breadcrumb style="font-size: 1em" href="/Pages">Pages</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em" href="/pages/TenagaKependidikan">Tenaga
                  Kependidikan</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px">Tenaga Kependidikan</h5>
            </ion-title>
          </ion-col>
          <ion-col size-sm="6" size="10">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown"
                  aria-expanded="true" style="background-color: transparent">Hi {{ username }}</button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" @click="del()">Logout</a></li>
                </ul>
              </div>
              <div v-if="is_admin == 'true'" class="d-flex">
                <div class="nav-icon">
                  <a href="/SignUp">
                    <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
                  </a>
                </div>
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
      <ion-card class="mt-4 mx-3 rounded">
        <ion-card-header class="ion-text-justify">
          <ion-row class="ion-justify-content-between">
            <ion-col size-xl="6" size-md="6" size-xs="12">
              <ion-card-title>
                <h4 class="text-dark">Daftar Guru</h4>
              </ion-card-title>
            </ion-col>
            <ion-col size-xl="6" size-md="6" size-xs="auto">
              <div v-if="is_admin == 'true'">
                <a href="/pages/TenagaKependidikan/TambahTenagaKependidikan" class="btn btn-success float-end">Tambah
                  Data</a>
              </div>
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <div class="table-responsive">
            <table class="table table-hover display" id="table-tenaga-kependidikan-1">
              <thead>
                <tr>
                  <th scope="col" class="text-secondary opacity-7">Nama</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Jenis Kelamin</th>
                  <th scope="col" class="text-center text-secondary opacity-7">No HP</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Email</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Aksi</th>
                </tr>
              </thead>
              <tbody v-for="guru in guruList" :key="guru._id">
                <tr>
                  <td class="w-25" scope="row">{{ guru.nama }}</td>
                  <td class="text-center">{{ guru.jenis_kelamin }}</td>
                  <td class="text-center">{{ guru.no_hp }}</td>
                  <td class="text-center">{{ guru.email }}</td>
                  <td class="text-center">
                    <div class="d-flex ms-5">
                      <button type="button" class="btn btn-primary btn-sm text-uppercase text-white fw-bold p-2"
                        @click="router.push('/pages/TenagaKependidikan/DetailTenagaKependidikan/' + guru._id.$oid)">View</button>
                      <div v-if="is_admin == 'true'">
                        <button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2 ms-2"
                          @click="router.push('/pages/TenagaKependidikan/EditTenagaKependidikan/' + guru._id.$oid)">Edit</button>
                        <button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2"
                          @click="delTendik(guru._id.$oid)">Delete</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ion-card-content>
      </ion-card>

      <ion-card class="mt-4 mx-3 rounded">
        <ion-card-header class="ion-text-justify">
          <ion-row class="ion-justify-content-between">
            <ion-col size-xl="6" size-md="6" size-xs="12">
              <ion-card-title>
                <h4 class="text-black">Daftar Tenaga Kependidikan Non-Guru</h4>
              </ion-card-title>
            </ion-col>
            <ion-col size-xl="6" size-md="6" size-xs="auto">
              <div v-if="is_admin == 'true'">
                <a href="/pages/TenagaKependidikan/TambahTenagaKependidikanNonGuru"
                  class="btn btn-success float-end">Tambah Data</a>
              </div>
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <div class="table-responsive">
            <table class="table table-hover display" id="table-tenaga-kependidikan-2">
              <thead>
                <tr>
                  <th scope="col" class="text-secondary opacity-7">Nama</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Jenis Kelamin</th>
                  <th scope="col" class="text-center text-secondary opacity-7">No HP</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Email</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Aksi</th>
                </tr>
              </thead>
              <tbody v-for="nonGuru in nonGuruList" :key="nonGuru._id">
                <tr>
                  <td class="w-25" scope="row">{{ nonGuru.nama }}</td>
                  <td class="text-center">{{ nonGuru.jenis_kelamin }}</td>
                  <td class="text-center">{{ nonGuru.no_hp }}</td>
                  <td class="text-center">{{ nonGuru.email }}</td>
                  <td class="text-center">
                    <div class="d-flex ms-4">
                      <button type="button" class="btn btn-primary btn-sm text-uppercase text-white fw-bold p-2"
                        @click="router.push('/pages/TenagaKependidikan/DetailTenagaKependidikan/' + nonGuru._id.$oid)">View</button>
                      <div v-if="is_admin == 'true'">
                        <button type="button" class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2 ms-2"
                          @click="router.push('/pages/TenagaKependidikan/EditTenagaKependidikan/' + nonGuru._id.$oid)">Edit</button>
                        <button type="button" class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2"
                          @click="delTendik(nonGuru._id.$oid)">Delete</button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from "@ionic/vue";
import axios from "axios";
import { useRouter } from "vue-router";

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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
  },

  data() {
    return {
      username: localStorage.getItem("username"),
      is_admin: localStorage.getItem("is_admin"),
      guruList: [],
      nonGuruList: [],
    };
  },

  setup() {
    const router = useRouter();
    return {
      router,
    }
  },

  mounted:
    function () {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios
        .get("http://31.187.72.73/API/tendik/guru", { headers })
        .then((response) => {
          this.guruList = response.data;
          console.log(response.data);
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

      axios
        .get("http://31.187.72.73/API/tendik/nonguru", { headers })
        .then((response) => {
          this.nonGuruList = response.data;
          console.log(response.data);
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
          // console.log(error.response.data);
          // console.log(error.response.data.msg);
          // window.location.href = "/SignIn";
        });
    },

  methods: {
    del() {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios
        .delete("http://31.187.72.73/API/auth/logout", { headers })
        .then((response) => {
          console.log(response);
          localStorage.clear();
          alert("Anda berhasil keluar");
          window.location.href = "/SignIn";
        })
        .catch((error) => {
          let status = error.response.data.msg;
          if (status == "Missing Authorization Header") {
            alert("Anda belum login");
          }
          else if (status == "Token has expired") {
            alert("Sesi telah berakhir, silahkan login kembali");
          }
          window.location.href = "/SignIn";
        });
    },
    delTendik(id) {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios
        .delete("http://31.187.72.73/API/tendik/" + id, { headers })
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
    },
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
  color: black;
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
  color: black;
}

.input-search::placeholder {
  color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
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

/* .table {
    border-collapse: inherit;
} */

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
  background: linear-gradient(135deg, #6bff25 0%, #42dd1c 100%);
  border-radius: 8px;
  border: none;
  font-weight: bold;
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
  td {
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
  td {
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
  td {
    width: 150px;
  }

  /* .title-table {
        font-size: 12px;
        margin-top: 10px;
    } */
  .tambah {
    padding: 10px;
    font-size: 10px;
    /* position: relative;
        left: 20px;
        height: 30px; */
  }
}

/* large phone dimension */

@media only screen and (max-width: 426px) {
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
