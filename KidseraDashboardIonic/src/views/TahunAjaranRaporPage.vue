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
                <ion-breadcrumb style="font-size: 1em;" href="/pages/Rapor">E - Rapor</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em;" href="/pages/Rapor/TahunAjaranRapor">Tahun
                  Ajaran</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px;">Tahun Ajaran E - Rapor</h5>
            </ion-title>
          </ion-col>
          <ion-col size-sm="6" size="10">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px;">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit;">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown"
                  aria-expanded="true" style="background-color: transparent;">
                  Hi {{ username }}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" @click="del()">Logout</a></li>
                </ul>
              </div>
              <div v-if="is_admin == 'true'" class="nav-icon">
                <a href="/SignUp">
                  <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
                </a>
                <a href="/SignUp" class="d-none d-sm-inline-block mb-1 text-info text-gradient"
                  style="text-decoration: none;">&nbsp;Add User</a>
              </div>
              <div>&nbsp;</div>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-card class="rounded card-content w-100">
        <ion-card-header class="ion-text-justify">
          <ion-row class="ion-justify-content-between">
            <ion-col size-xl="6" size-md="6" size-xs="12">
              <ion-card-title>
                <h4 class="text-dalem">Rombongan Belajar</h4>
                {{}}
              </ion-card-title>
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <ion-grid>
            <ion-grid>
              <div class="ion-justify-content-evenly container" style="flex-wrap: wrap; display: flex">
                <div onclick="window.location='/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor';" class="card-content">
                  <ion-card class="card-content-judul" @click="() => router.push('/pages/Rapor/' + tahun + '/A')">
                    <ion-card-content class="ion-margin text-center" style="margin: 70px">
                      <ion-card-title>
                        <p>TK A</p>
                      </ion-card-title>
                    </ion-card-content>
                  </ion-card>
                </div>
                <div class="card-content">
                  <ion-card class="card-content-judul" @click="() => router.push('/pages/Rapor/' + tahun + '/B')">
                    <ion-card-content class="ion-margin text-center" style="margin: 70px">
                      <a href="" class="text-decoration-none"><ion-card-title>
                          <p>TK B</p>
                        </ion-card-title></a>
                    </ion-card-content>
                  </ion-card>
                </div>
                <div class="card-content">
                  <ion-card class="card-content-judul">
                    <ion-card-content class="ion-margin text-center" style="margin: 70px">
                      <a href="" class="text-decoration-none"><ion-card-title>
                          <p>TK C</p>
                        </ion-card-title></a>
                    </ion-card-content>
                  </ion-card>
                </div>
              </div>
            </ion-grid>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from "@ionic/vue";
import axios from "axios";

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
  props: ["tahun"],
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },

  data() {
    return {
      username: localStorage.getItem("username"),
      is_admin: localStorage.getItem("is_admin"),
    };
  },
  methods: {
    del() {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios
        .delete("http://localhost:5000/API/auth/logout", { headers })
        .then((response) => {
          console.log(response);
          localStorage.clear();
          alert("Anda berhasil keluar");
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

.text-dalem {
  color: black;
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

.card-content-judul {
  background-color: #f4f0f0;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
  color: black;
}

.card-content-judul:hover {
  background: #a39797;
  transition: 0.5s ease-in;
  cursor: pointer;
  color: white;
}

ion-card-title {
  color: black;
}

/* small laptop dimension */

@media only screen and (max-width: 1280px) {}

/* Laptop Large Above dimension */

@media only screen and (min-width: 1280px) {
  .card-content {
    width: 50%;
  }
}

/* tablet dimension */

@media only screen and (min-width: 990px) {}

/* large phone dimension */

@media only screen and (max-width: 575px) {
  .goright {
    position: relative;
    left: 60px;
  }
}

/* large phone dimension */

@media only screen and (max-width: 426px) {
  .card-content {
    width: 100%;
  }
}

/* small phone dimension */

@media only screen and (max-width: 376px) {}

@media only screen and (max-width: 320px) {}
</style>
