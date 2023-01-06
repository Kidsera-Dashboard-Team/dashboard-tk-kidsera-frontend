<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-grid>
        <ion-row class="ion-justify-content-between ion-align-items-center">
          <ion-col size="4">
            <ion-title class="d-none d-lg-inline-block mt-1" size="small">
              <ion-breadcrumbs :max-items="4" :items-after-collapse="2" class="ion-no-padding">
                <ion-breadcrumb style="font-size: 1em" href="/Pages">Pages</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em" href="/Pages/Dashboard">Home</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px">Home</h5>
            </ion-title>
          </ion-col>
          <ion-col size-sm="8" size="10">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown" aria-expanded="true" style="background-color: transparent">Hi {{ username }}</button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" href="javascript: doSomethingLogout()" @click="del()">Logout</a></li>
                  <!-- <li><a class="dropdown-item" href="#">Another action</a></li> -->
                  <!-- <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                </ul>
              </div>
              <div v-if="is_admin == 'true'" class="d-flex">
                <div class="nav-icon">
                  <a href="/SignUp">
                    <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
                  </a>
                </div>
                <a href="/SignUp" class="d-none d-sm-inline-block mb-1 text-info text-gradient" style="text-decoration: none">&nbsp;Add User</a>
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
          <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size="12" size-sm="6" size-xl="3">
            <ion-card class="card-info">
              <ion-row class="ion-align-items-center m-0">
                <ion-col size="8">
                  <ion-card-header>
                    <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow"> Jumlah TK A</ion-card-subtitle>
                    <ion-card-title class="font-weight-bolder mb-0">30</ion-card-title>
                  </ion-card-header>
                </ion-col>
                <ion-col size="4" class="text-end text-sm-center">
                  <ion-icon src="assets/icon/gender-icon.svg" class="icon-tk" style="font-size: large; margin-right: 20px"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
          <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size="12" size-sm="6" size-xl="3">
            <ion-card class="card-info">
              <ion-row class="ion-align-items-center">
                <ion-col size="8">
                  <ion-card-header>
                    <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow">Jumlah TK B</ion-card-subtitle>
                    <ion-card-title>20</ion-card-title>
                  </ion-card-header>
                </ion-col>
                <ion-col size="4" class="text-end text-sm-center">
                  <ion-icon src="assets/icon/gender-icon.svg" width class="icon-tk" style="font-size: large; margin-right: 20px"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
          <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size="12" size-sm="6" size-xl="3">
            <ion-card class="card-info">
              <ion-row class="ion-align-items-center">
                <ion-col size="8">
                  <ion-card-header>
                    <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow">Jumlah Siswa Laki-laki</ion-card-subtitle>
                    <ion-card-title>20</ion-card-title>
                  </ion-card-header>
                </ion-col>
                <ion-col size="4" class="text-end text-sm-center">
                  <ion-icon src="assets/icon/laki-icon.svg" class="icon-gender" style="font-size: large; margin-right: 20px"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
          <ion-col class="col-xl-3 col-sm-6 mb-xl-0 mb-4 p-0" size="12" size-sm="6" size-xl="3">
            <ion-card class="card-info">
              <ion-row class="ion-align-items-center">
                <ion-col size="8">
                  <ion-card-header>
                    <ion-card-subtitle class="text-sm mb-0 text-capitalize font-weight-bold overflow-hidden text-overflow">Jumlah Siswa Perempuan</ion-card-subtitle>
                    <ion-card-title>30</ion-card-title>
                  </ion-card-header>
                </ion-col>
                <ion-col size="4" class="text-end text-sm-center">
                  <ion-icon src="assets/icon/perempuan-icon.svg" class="icon-gender" style="font-size: large; margin-right: 20px"></ion-icon>
                </ion-col>
              </ion-row>
            </ion-card>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-card class="w-100" style="box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05); border-radius: 12px">
            <ion-row class="ion-align-items-center">
              <ion-col>
                <ion-card-header>
                  <ion-grid>
                    <ion-row>
                      <h3 class="text-black">KIDSERA</h3>
                    </ion-row>
                    <ion-row class="mt-4">
                      <ion-col>
                        <ion-row>
                          <ion-col style="line-height: 2.5" class="text-dark form">
                            NPSN :
                            <br />
                            Bentuk Pendidikan :
                            <br />
                            Status :
                            <br />
                            Kecamatan :
                            <br />
                            Kabupaten :
                            <br />
                            Provinsi :
                            <br />
                            Kepala Sekolah :
                            <br />
                            Operator :
                            <br />
                            Username :
                            <br /><br />
                            Implementasi Kurikulum :
                            <br />
                            Bersedia menerima BOP :
                            <br />
                            Bendahara BOP :
                          </ion-col>
                          <ion-col style="line-height: 2.5" class="text-dark fw-bold form">
                            70011681
                            <br />
                            TK
                            <br />
                            Swasta
                            <br />
                            Kec. Pulo Gadung
                            <br />
                            Kota Jakarta Timur
                            <br />
                            Prov. D.K.I. Jakarta
                            <br />
                            NILA DWI OKVITA
                            <br />
                            Anugrah Amelia Maharani
                            <br />
                            kidsera.official@gmail.com
                            <br /><br />
                            2013
                            <br />
                            Ya
                            <br />
                            Sylvia Trywardani
                          </ion-col>
                        </ion-row>
                      </ion-col>
                      <ion-col class="d-none d-xl-block">
                        <ion-img src="assets/img/kidsera-img.svg"> </ion-img>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-card-header>
              </ion-col>
            </ion-row>
          </ion-card>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonBreadcrumb, IonBreadcrumbs } from "@ionic/vue";
import axios from "axios";

export default defineComponent({
  name: "DashboardPage",
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
    IonBreadcrumb,
    IonBreadcrumbs,
  },

  data() {
    return {
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin')
    };
  },

  mounted: function() {
    if(this.username == null) {
      window.location.href = "/SignIn";
    }
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
  },
});
</script>

<style scoped>
/* template and reset style */
ion-col {
  padding: 0;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
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

.btn-search:focus ~ .input-search {
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

.ion-no-padding {
  --padding-start: 0 !important;
  --padding-end: 0 !important;
  --padding-top: 0 !important;
  --padding-bottom: 0 !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
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

/* card style */
.text-overflow {
  white-space: nowrap;
}

.tab1 {
  tab-size: 1;
}

.card-info {
  max-height: 120px;
  border-radius: 20px;
  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
}

ion-icon {
  color: black;
}

ion-card-title,
ion-card-subtitle {
  color: black;
  font-size: 13px;
}

/* small laptop dimension */
@media only screen and (max-width: 1280px) {
  .btn-search:focus ~ .input-search {
    width: 250px;
  }

  .input-search:focus {
    width: 250px;
  }
}

/* tablet dimension */
@media only screen and (max-width: 990px) {
  .btn-search:focus ~ .input-search {
    width: 280px;
  }

  .input-search:focus {
    width: 280px;
  }
}

/* large phone dimension */
@media only screen and (max-width: 575px) {
  .goright {
    position: relative;
    left: 60px;
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

/* icon style */
.icon-tk,
.icon-gender {
  padding: 10px;
  background-color: black;
  background: linear-gradient(328.19deg, #1b76e1 -5.21%, #1be1c6 88.43%);
  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}
</style>
