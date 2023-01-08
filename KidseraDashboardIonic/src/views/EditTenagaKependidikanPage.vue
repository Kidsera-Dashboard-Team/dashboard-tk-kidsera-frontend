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
                <ion-breadcrumb style="font-size: 1em;" href="/pages/TenagaKependidikan">Tenaga
                  Kependidikan</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em;"
                  href="/pages/TenagaKependidikan/EditTenagaKependidikan">Edit</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px;">Edit Tenaga Kependidikan</h5>
            </ion-title>
          </ion-col>
          <ion-col size-sm="6" size="10">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px;">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit;">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown"
                  aria-expanded="true" style="background-color: transparent;">Hi {{ username }} </button>
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
                  style="text-decoration: none;">&nbsp;Add User</a>
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
          <ion-col size-xl="12" size="12">
            <ion-card class="m-5 p-3 rounded text-center">
              <ion-card-header>
                <ion-card-title>
                  <h4>Edit Tenaga Kependidikan</h4>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content class="d-grid gap-3">
                <!-- <ion-item fill="outline" lines="none">
                                        <ion-label position="floating" :readonly="true" class="mb-5">Nama -> ...</ion-label>
                                        <ion-input placeholder="Masukkan Fasilitas" ></ion-input>
                                    </ion-item> -->
                <ion-item fill="outline">
                  <ion-label position="floating">Nama</ion-label>
                  <ion-input placeholder="Michael John" v-model="nama" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Jenis Kelamin</ion-label>
                  <ion-input placeholder="Laki - laki / Perempuan" v-model="jenis_kelamin" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Tempat dan Tanggal Lahir</ion-label>
                  <ion-input placeholder="Jakarta, 12 November 1987" v-model="ttl" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Alamat</ion-label>
                  <ion-input placeholder="Alamat" v-model="alamat" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">No. HP</ion-label>
                  <ion-input placeholder="085357889754" v-model="no_hp" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Email</ion-label>
                  <ion-input placeholder="example@gmail.com" v-model="email" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Pendidikan Terakhir</ion-label>
                  <ion-input placeholder="Pendidikan Terakhir" v-model="pendidikan_terakhir" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Tahun Ajaran</ion-label>
                  <ion-input placeholder="Tahun Ajaran" v-model="tahun_ajaran" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Kelas Mengajar</ion-label>
                  <ion-input placeholder="Kelas Mengajar" v-model="kelas_mengajar" required></ion-input>
                </ion-item>
                <!-- <ion-row class="checkbox-custom">
                  <ion-col size-xl="3" size-xs="12">
                    <ion-item lines="none">
                      <ion-checkbox slot="start" value="guru" v-model="status"></ion-checkbox>
                      <ion-label>Guru</ion-label>
                    </ion-item>
                  </ion-col>
                  <ion-col>
                    <ion-item lines="none">
                      <ion-checkbox slot="start" value="non-guru" v-model="status"></ion-checkbox>
                      <ion-label>Non Guru</ion-label>
                    </ion-item>
                  </ion-col>
                </ion-row> -->
                <ion-radio-group class="row justify-content-around" v-model="status">
                  <ion-item class="col-12 col-sm-4">
                    <ion-radio value="guru"></ion-radio>
                    <ion-label class="ms-4 fs-6">Guru</ion-label>
                  </ion-item>
                  <ion-item class="col-12 col-sm-4">
                    <ion-radio value="non-guru"></ion-radio>
                    <ion-label class="ms-4 fs-6">Non-Guru</ion-label>
                  </ion-item>
                </ion-radio-group>
                <div>
                  <a class="btn btn-danger" href="/pages/TenagaKependidikan" role="button">Batalkan</a>
                  <a class="btn btn-primary" href="/pages/TenagaKependidikan" role="button"
                    @click="submitForm()">Simpan</a>
                  <!-- href="javascript: doSomethingForEditSarprasFasilitas()" @click="submitForm()">Simpan</a> -->
                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
} from '@ionic/vue';
import axios from "axios";

export default defineComponent({
  name: 'DashboardPage',
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
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
    IonItem,
    IonLabel,
    IonRadio,
    IonRadioGroup,
  },

  data() {
    return {
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin'),
      auth: "Bearer " + localStorage.getItem('access_token'),
      nama: "",
      jenis_kelamin: "",
      ttl: "",
      alamat: "",
      no_hp: "",
      email: "",
      pendidikan_terakhir: "",
      tahun_ajaran: "",
      kelas_mengajar: "",
      status: "",
    };
  },

  mounted: function () {
    let headers = {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    };
    axios
      .get("http://31.187.72.73/API/tendik/" + this.id, { headers })
      .then((response) => {
        this.nama = response.data.nama;
        this.jenis_kelamin = response.data.jenis_kelamin;
        this.ttl = response.data.ttl;
        this.alamat = response.data.alamat;
        this.no_hp = response.data.no_hp;
        this.email = response.data.email;
        this.pendidikan_terakhir = response.data.pendidikan_terakhir;
        this.tahun_ajaran = response.data.tahun_ajaran;
        this.kelas_mengajar = response.data.kelas_mengajar;
        this.status = response.data.status;
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
  props: ["id"],
  methods: {
    del() {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios.delete("http://31.187.72.73/API/auth/logout", { headers })
        .then((response) => {
          console.log(response);
          localStorage.clear();
          alert("Anda berhasil keluar");
        })
        .catch(error => {
          console.log(error.response.data);
        });
    },

    submitForm() {
      const json = JSON.stringify({
        nama: this.nama,
        jenis_kelamin: this.jenis_kelamin,
        ttl: this.ttl,
        alamat: this.alamat,
        no_hp: this.no_hp,
        email: this.email,
        pendidikan_terakhir: this.pendidikan_terakhir,
        tahun_ajaran: this.tahun_ajaran,
        kelas_mengajar: this.kelas_mengajar,
        status: this.status,
      });
      console.log(json);
      axios
        .put("http://31.187.72.73/API/tendik/" + this.id, json, {
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
        .catch(error => {
          console.log(error.response.data);
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
  color: #67748E;
  text-decoration: none;
  /* margin-left: 20px; */
  margin-right: -13px;
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
  background-image: linear-gradient(310deg, #2152FF, #21D4FD);
}

.text-gradient.text-dark {
  background-image: linear-gradient(310deg, #141727, #3A416F);
}

/* small laptop dimension */

@media only screen and (max-width: 1280px) {
  .btn-search:focus~.input-search {
    width: 250px;
  }

  .input-search:focus {
    width: 250px;
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
}

/* large phone dimension */

@media only screen and (max-width: 575px) {
  .goright {
    position: relative;
    left: 60px
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

/* content card style */

ion-checkbox {
  --size: 32px;
  --background-checked: #6815ec;
}

ion-checkbox::part(container) {
  border-radius: 6px;
  border: 2px solid #6815ec;
}

ion-searchbar {
  --border-radius: 12px;
  width: 40%;
}

a {
  color: white;
  text-decoration: none;
  margin-left: 20px;
}

ion-icon {
  color: black;
}

ion-card-title,
ion-card-subtitle {
  color: black;
  font-size: 13px;
}

@media only screen and (max-width: 320px) {
  ion-checkbox {
    --size: 15px;
  }

  .checkbox-custom ion-item {
    font-size: 20px !important;
  }
}
</style>