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
                <ion-breadcrumb style="font-size: 1em;" href="/pages/Sarpras">Sarana & Prasarana</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px;">Sarana & Prasarana</h5>
            </ion-title>
          </ion-col>
          <ion-col size-sm="6" size="10">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px;">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit;">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown"
                  aria-expanded="true" style="background-color: transparent;">Hi {{ username }} </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="javascript: doSomethingLogout()" @click="del()">Logout</a></li>
                </ul>
              </div>
              <div v-if="is_admin == 'true'" class="d-flex">
                <div class="nav-icon">
                  <a href="/SignUp">
                    <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
                  </a>
                </div>
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
      <div id="carouselExampleDark" class="carousel carousel-dark slide slide-custom-body" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5"
            aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner slide-custom">
          <div class="carousel-item active" data-bs-interval="3000">
            <img src="../../public/assets/img/s1.jpeg" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="../../public/assets/img/s2.jpeg" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="../../public/assets/img/s3.jpeg" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="../../public/assets/img/s4.jpeg" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="../../public/assets/img/s5.jpeg" class="d-block w-100" alt="">
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <img src="../../public/assets/img/s6.jpeg" class="d-block w-100" alt="">
          </div>
        </div>
        <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                                <span class="visually-hidden">Previous</span>
                                                                            </button>
                                                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                                                <span class="visually-hidden">Next</span>
                                                                            </button> -->
      </div>
      <ion-card class="rounded card-container">
        <ion-card-header class="ion-text-justify">
          <ion-row class="ion-justify-content-between">
            <ion-col size-xl="6" size-md="6" size-xs="12">
              <ion-card-title>
                <h4 class="text-dark">Sarana & Prasarana</h4>
              </ion-card-title>
            </ion-col>
            <ion-col size-xl="6" size-md="6" size-xs="auto">
             <div v-if="is_admin == 'true'">
              <a class="btn btn-success float-end tambah" data-bs-toggle="collapse" href="#tambahRuangan" role="button"
                aria-expanded="false" aria-controls="tambahRuangan">Tambah Ruang</a>
             </div>
              <!-- href="/pages/Sarpras/TambahSarprasRuangan" -->
            </ion-col>
          </ion-row>
        </ion-card-header>

        <ion-card-content>
          <ion-grid>
            <div class="ion-justify-content-evenly container" style="flex-wrap: wrap; display: flex;">
              <div class="card-content" v-for="ruang in listRuang" :key="ruang._id">
                <ion-card class="card-content-judul">
                  <ion-card-header class="ion-margin text-center">
                    <a @click="router.push('/pages/Sarpras/DetailSarpras/' + ruang._id.$oid)" class="text-decoration-none">
                      <ion-card-title color="light">
                        Ruang {{ ruang.nama_ruangan }}
                      </ion-card-title>
                    </a>
                  </ion-card-header>
                </ion-card>
              </div>
            </div>
          </ion-grid>
        </ion-card-content>
      </ion-card>
      <div class="container mb-3 collapse position-absolute top-50 start-50 translate-middle fade" id="tambahRuangan">
        <h4 class="text-center">Tambah Ruangan</h4>
        <div class="form-floating mb-2">
          <input type="text" class="form-control" id="floatingInput" placeholder="Ruang ..." v-model="namaRuang">
          <label for="floatingInput">Nama Ruang</label>
        </div>
        <a class="btn btn-danger" href="/pages/Sarpras" role="button">Cancel</a>
        <a class="btn btn-primary ms-2" role="button" href="javascript: doSomethingForAddSarprasRuangan()" @click="tambahRuang()">Add
          Room</a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,

} from '@ionic/vue';
import axios from "axios";
import { useRouter } from "vue-router";

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
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },

  data() {
    return {
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin'),
      listRuang : [],
      namaRuang : ""
    };
  },

  setup() {
    const router = useRouter();
    return {
      router,
    }
  },

  mounted: function () {
    let headers = {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    };

    axios
      .get("http://localhost:5000/API/ruangan", { headers })
      .then((response) => {
        this.listRuang = response.data;
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
    tambahRuang() {
      const json = JSON.stringify({
        nama_ruangan: this.namaRuang
      });
      console.log(json);
      axios
        .post("http://localhost:5000/API/ruangan", json, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("access_token"),
          },
          withCredentials: true,
        })
        .then(response => {
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
    }
  },
});
</script>

<style scoped>
/* template style */

ion-col {
  padding: 0;
}

p {
  color: black;
}

/* Icon navbar style */

a .iconButton {
  color: #67748E;
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
  transition: all .5s ease-in-out;
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

.btn-search:focus~.input-search {
  width: 230px;
  border-radius: 10px;
  background-color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.input-search:focus {
  width: 230px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, .5);
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
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
  background-image: linear-gradient(310deg, #2152FF, #21D4FD);
}

.text-gradient.text-dark {
  background-image: linear-gradient(310deg, #141727, #3A416F);
}

/* content style */

[data-href] {
  cursor: pointer;
}

.tambah {
  /* background: linear-gradient(135deg, #3A416F 0%, #141727 100%); */
  border-radius: 8px;
  border: none;
  font-weight: bold;
}

#tambahRuangan {
  width: 400px;
  height: 200px;
  background-color: #D9D9D9;
  border-radius: 10px;
  z-index: inherit;
  padding: 30px;
  border: 1px solid black;
}

.slide-custom-body {
  margin-top: 20px;
  z-index: -1;
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

.card-container {
  margin: 30px 50px;
}

.card-content-judul {
  background-color: #F4F0F0;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
}

.card-content-judul:hover {
  background: #a39797;
  transition: 0.5s ease-in;
  cursor: pointer;
  color: white;
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

@media only screen and (min-width: 1280px) {
  .card-content {
    width: 30%;
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
    left: 60px
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
