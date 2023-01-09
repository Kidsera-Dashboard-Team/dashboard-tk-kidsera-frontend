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
                <ion-breadcrumb style="font-size: 1em" href="/pages/Rapor">E - Rapor</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px">E - Rapor</h5>
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
                  <li><a class="dropdown-item" @click="del()">Logout</a></li>
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
      <ion-grid>
        <ion-row>
          <ion-card class="card-content w-100"
            style="box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05); border-radius: 15px">
            <ion-card-header class="ion-text-justify">
              <ion-row class="ion-justify-content-between">
                <ion-col size-xl="6" size-md="6" size-xs="12">
                  <ion-card-title>
                    <h4 class="text-dalem">E - Rapor by Rombongan Belajar</h4>
                  </ion-card-title>
                </ion-col>
              </ion-row>
            </ion-card-header>

            <ion-card-content>
              <ion-grid>
                <div class="ion-justify-content-evenly container" style="flex-wrap: wrap; display: flex">
                  <div @click="() => router.push('/pages/Rapor/' + year(result))" class="card-content"
                    style="width: 25%; padding: 0; flex-wrap: wrap; display: flex" v-for="result in results"
                    :key="result._id">
                    <ion-card class="card-content-judul">
                      <ion-card-header class="ion-margin text-center">
                        <ion-card-title>
                          <p>Tahun Ajaran</p>
                          <p>{{ result }}</p>
                        </ion-card-title>
                      </ion-card-header>
                    </ion-card>
                  </div>
                </div>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from "axios";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from "@ionic/vue";

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
      username: localStorage.getItem("username"),
      is_admin: localStorage.getItem("is_admin"),
      results: [],
    };
  },
  mounted: function () {
    let headers = {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    };

    axios
      .get("http://localhost:5000/API/rombel", { headers })
      .then((response) => {
        this.results = response.data;
        console.log(response.data);
      })
      .catch(function (error) {
        let status = error.response.data.msg;
        if (status == "Missing Authorization Header") {
          alert("Anda belum login");
          window.location.href = "/SignIn";
        } else if (status == "Token has expired") {
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

      axios
        .delete("http://localhost:5000/API/auth/logout", { headers })
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
    year(e) {
      return e.split("/").join("-");
    },
   
  },
});
</script>

<style scoped>
/* template style */
p {
  color: black;
}

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

.tables> :not(:last-child)> :last-child>* {
  border-bottom-color: black;
}

td {
  width: 100px;
}

.tambah {
  border-radius: 8px;
  border: none;
  font-weight: normal;
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

card-content {
  margin: 30px;
}

/* Laptop Large Above dimension */

@media only screen and (min-width: 1280px) {

  th,
  td {
    width: 160px;
  }

  .card-content {
    width: 30%;
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
  .card-content {
    width: 100%;
  }
}

/* small phone dimension */

@media only screen and (max-width: 376px) {}

@media only screen and (max-width: 320px) {}
</style>
