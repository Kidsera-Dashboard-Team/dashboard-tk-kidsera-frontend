<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-grid>
        <ion-row class="ion-justify-content-between">
          <ion-col size="3" size-xl="6">
            <ion-title class="d-none d-lg-inline-block" size="small"
              ><span style="opacity: 50%">Pages</span> / E - Rapor <br />
              <span style="font-size: 18px; letter-spacing: 2.5px">E - Rapor</span>
            </ion-title>
          </ion-col>
          <ion-col size-sm="9" size="10" size-xl="6">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown" aria-expanded="true" style="background-color: transparent">
                  Hi User 13141
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a class="dropdown-item" href="javascript: doSomethingLogout()">Logout</a>
                  </li>
                </ul>
              </div>
              <div class="nav-icon">
                <a href="/SignUp">
                  <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
                </a>
              </div>
              <a href="/SignUp" class="d-none d-sm-inline-block mb-1 text-info text-gradient" style="text-decoration: none">&nbsp;Add User</a>
              <div>&nbsp;</div>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-card class="rounded card-content mt-3 mx-4">
        <ion-card-header class="ion-text-justify">
          <ion-row class="ion-justify-content-between">
            <ion-col size-xl="6" size-md="6" size-xs="12">
              <ion-card-title>
                <h4 class="text-dalem">Input E-Rapor Peserta Didik ...</h4>
              </ion-card-title>
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <!-- <ion-searchbar show-cancel-button="focus" placeholder="Show on Focus"></ion-searchbar> -->
          <div class="table-responsive">
            <table class="table table-borderless table-hover display" id="table-rapor">
              <thead>
                <tr>
                  <th scope="col" class="text-center text-secondary opacity-7">Nama</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Jenis Kelamin</th>
                  <th scope="col" class="text-center text-secondary opacity-7">NISN</th>
                  <th scope="col" class="text-center text-secondary opacity-7">Aksi</th>
                </tr>
              </thead>
              <tbody v-for="result in results.list_siswa" :key="result._id">
                <tr>
                  <td class="text-center">{{ result.nama }}</td>
                  <td class="text-center">{{ result.jenis_kelamin }}</td>
                  <td class="text-center">{{ result.nisn }}</td>
                  <td class="text-center">
                    <button
                      type="button"
                      class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2"
                      v-on:click="router.push('/pages/Rapor/' + tahun + '/' + kelas + '/' + result._id.$oid)"
                    >
                      Input
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- <nav aria-label="Page navigation example">    
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="/pages/Sarpras/DetailSarpras">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav> -->
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import axios from "axios";
import { defineComponent } from "vue";
import {
    IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow,
    // IonSearchbar
} from '@ionic/vue';

export default defineComponent({
    name: 'PesertaDidikPage',
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
        // IonSearchbar
    },
     setup() {
    const router = useRouter();

    return {
      router,
    };
  },
    props: ["tahun", "kelas"],
    data() {
        return {
            username: localStorage.getItem('username'),
            is_admin: localStorage.getItem('is_admin')
        };
    },
     mounted: function () {
    axios
      .get("http://localhost:5000/API/rombel/" + this.tahun + "/" + this.kelas)
      .then((response) => {
        this.results = response.data;
        console.log(response);
      })
      .catch(function (error) {
        console.error(error.response.data);
      });
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
                .catch(error => {
                    console.log(error.response.data);
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

.btn-search {
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
  color: black;
  background-color: transparent;
  pointer-events: painted;
  top: -1.5px;
}

.btn-search:focus ~ .input-search {
  width: 230px;
  border-radius: 10px;
  background-color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}

.input-search:focus {
  width: 230px;
  border-radius: 0px;
  background-color: transparent;
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
.text-dalem {
  color: black;
}

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

.tables > :not(:last-child) > :last-child > * {
  border-bottom-color: black;
}

td {
  width: 100px;
}

.tambah {
  background: linear-gradient(135deg, #3a416f 0%, #141727 100%);
  border-radius: 8px;
  border: none;
  font-weight: bold;
}

.slide-custom-body {
  margin-top: 20px;
}

.slide-custom {
  width: 90%;
  margin: auto;
  border-radius: 18px;
}

.slide-custom img {
  width: 90%;
  max-height: 300px;
  object-fit: cover;
}

/* small laptop dimension */

@media only screen and (max-width: 1280px) {
  .btn-search:focus ~ .input-search {
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
  .btn-search:focus ~ .input-search {
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

  .btn-search:focus ~ .input-search {
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

  .btn-search:focus ~ .input-search {
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

  .btn-search:focus ~ .input-search {
    width: 150px;
  }

  .input-search:focus {
    width: 150px;
  }
}
</style>
