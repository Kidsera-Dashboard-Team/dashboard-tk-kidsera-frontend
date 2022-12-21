<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-grid>
        <ion-row class="ion-justify-content-between">
          <ion-col size="3" size-xl="6">
            <ion-title class="d-none d-xl-inline-block" size="small"
              ><span style="opacity: 50%">Pages</span> / Tambah Peserta Didik
              <br />
              <span style="font-size: 18px; letter-spacing: 3.5px"
                >Tambah Peserta Didik</span
              >
            </ion-title>
          </ion-col>
          <ion-col size-sm="9" size="10" size-xl="6">
            <ion-row
              class="ion-align-items-center ion-justify-content-end goright mt-2"
              style="margin-right: 20px"
            >
              <div
                class="btn-group dropstart mb-1 ms-2"
                style="content: inherit"
              >
                <button
                  class="btn dropdown-toggle text-info text-gradient"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                  style="background-color: transparent"
                >
                  Hi User 13141
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li>
                    <a
                      class="dropdown-item"
                      href="javascript: doSomethingLogout()"
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
              <div class="nav-icon">
                <a href="/SignUp">
                  <ion-icon
                    class="iconButton text-info text-gradient"
                    src="assets/icon/signup.svg"
                  ></ion-icon>
                </a>
              </div>
              <a
                href="/SignUp"
                class="d-none d-sm-inline-block mb-1 text-info text-gradient"
                style="text-decoration: none"
                >&nbsp;Add User</a
              >
              <div>&nbsp;</div>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-toolbar>

    <ion-content :fullscreen="true">
      <ion-card class="mt-4 p-3 rounded text-center card-form">
        <ion-card-header>
          <ion-card-title>
            <h4>Tambah Peserta Didik</h4>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content class="d-grid gap-3">
          <ion-item fill="outline">
            <ion-label position="floating">Nama Peserta Didik</ion-label>
            <ion-input
              placeholder="Masukkan Nama Peserta Didik"
              v-model="nama"
              required
            ></ion-input>
          </ion-item>
          <ion-radio-group class="row justify-content-around" v-model="status">
            <ion-list-header class="col-12 col-sm-4">
              <ion-label class="h5">Status </ion-label>
            </ion-list-header>
            <ion-item class="col-12 col-sm-4">
              <ion-label>Siswa Aktif</ion-label>
              <ion-radio value="Siswa Aktif"></ion-radio>
            </ion-item>
            <ion-item class="col-12 col-sm-4">
              <ion-label>Alumni</ion-label>
              <ion-radio value="Alumni"></ion-radio>
            </ion-item>
          </ion-radio-group>
          <ion-radio-group
            class="row justify-content-around"
            v-model="jenis_kelamin"
          >
            <ion-list-header class="col-12 col-sm-4">
              <ion-label class="h5"> Jenis Kelamin </ion-label>
            </ion-list-header>
            <ion-item class="col-12 col-sm-4">
              <ion-label>Laki - Laki</ion-label>
              <ion-radio value="Laki - Laki"></ion-radio>
            </ion-item>
            <ion-item class="col-12 col-sm-4">
              <ion-label>Perempuan</ion-label>
              <ion-radio value="Perempuan"></ion-radio>
            </ion-item>
          </ion-radio-group>
          <ion-item fill="outline">
            <ion-label position="floating">Tahun Ajaran</ion-label>
            <ion-input
              placeholder="Masukkan Tahun Ajaran"
              v-model="tahun_ajaran"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">NISN</ion-label>
            <ion-input
              placeholder="Masukkan NISN"
              v-model="nisn"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">NIK</ion-label>
            <ion-input
              placeholder="Masukkan NIK"
              v-model="nik"
              required
            ></ion-input> </ion-item
          ><ion-item fill="outline">
            <ion-label position="floating">NO. KK</ion-label>
            <ion-input
              placeholder="Masukkan NO. KK"
              v-model="no_kk"
              required
            ></ion-input> </ion-item
          ><ion-item fill="outline">
            <ion-label position="floating">Tingkat Kelas</ion-label>
            <ion-input
              placeholder="Masukkan Tingkat Kelas"
              v-model="tingkat_kelas"
              required
            ></ion-input> </ion-item
          ><ion-item fill="outline">
            <ion-label position="floating">Tanggal Masuk</ion-label>
            <ion-input
              placeholder="Masukkan Tanggal Masuk"
              type="date"
              v-model="tanggal_masuk"
              required
            ></ion-input> </ion-item
          ><ion-item fill="outline">
            <ion-label position="floating">Tanggal Lulus</ion-label>
            <ion-input
              placeholder="Masukkan Tanggal Lulus"
              type="date"
              v-model="tanggal_lulus"
              required
            ></ion-input> </ion-item
          ><ion-item fill="outline">
            <ion-label position="floating">Nomor Induk (NIPD)</ion-label>
            <ion-input
              placeholder="Masukkan Nomor Induk (NIPD)"
              v-model="nomor_induk"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Tinggi Badan</ion-label>
            <ion-input
              placeholder="Masukkan Tinggi Badan"
              v-model="tinggi_badan"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Berat Badan</ion-label>
            <ion-input
              placeholder="Masukkan Berat Badan"
              v-model="berat_badan"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Lingkar Kepala</ion-label>
            <ion-input
              placeholder="Masukkan Lingkar Kepala"
              v-model="lingkar_kepala"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Alergi</ion-label>
            <ion-input
              placeholder="Masukkan Alergi"
              v-model="alergi"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nama Ayah</ion-label>
            <ion-input
              placeholder="Masukkan Nama Ayah"
              v-model="nama_ayah"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nomor Telepon Ayah</ion-label>
            <ion-input
              placeholder="Masukkan Nomor Telepon Ayah"
              v-model="no_telp_ayah"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nama Ibu</ion-label>
            <ion-input
              placeholder="Masukkan Nama Ibu"
              v-model="nama_ibu"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nomor Telepon Ibu</ion-label>
            <ion-input
              placeholder="Masukkan Nomor Telepon Ibu"
              v-model="no_telp_ibu"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Pekerjaan Ayah</ion-label>
            <ion-input
              placeholder="Masukkan Pekerjaan Ayah"
              v-model="pekerjaan_ayah"
              required
            ></ion-input>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Pekerjaan Ibu</ion-label>
            <ion-input
              placeholder="Masukkan Pekerjaan Ibu"
              v-model="pekerjaan_ibu"
              required
            ></ion-input>
          </ion-item>
          <div>
            <ion-row class="ion-justify-content-center row-button">
              <ion-col size="6" size-sm="2">
                <a
                  class="btn btn-danger"
                  href="/pages/PesertaDidik"
                  role="button"
                  >Batalkan</a
                >
              </ion-col>
              <ion-col size="6" size-sm="2">
                <a
                  class="btn btn-success"
                  role="button"
                  @click="submitForm()"
                  >Tambah</a
                >
              </ion-col>
            </ion-row>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
} from "@ionic/vue";
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
      nama: "",
      jenis_kelamin: "",
      nik: "",
      nisn: "",
      no_kk: "",
      tingkat_kelas: "",
      tahun_ajaran: "",
      tanggal_masuk: "",
      tanggal_lulus: "",
      nomor_induk: "",
      status: "",
      tinggi_badan: "",
      berat_badan: "",
      lingkar_kepala: "",
      alergi: "",
      nama_ayah : "",
      nama_ibu : "",
      pekerjaan_ayah : "",
      pekerjaan_ibu : "",
      no_telp_ayah : "",
      no_telp_ibu : "",
    };
  },
  methods: {
    submitForm() {
      const json = JSON.stringify({
        nama: this.nama,
        jenis_kelamin: this.jenis_kelamin,
        nik: this.nik,
        nisn: this.nisn,
        no_kk: this.no_kk,
        tingkat_kelas: this.tingkat_kelas,
        tahun_ajaran: this.tahun_ajaran,
        tanggal_masuk: this.tanggal_masuk,
        tanggal_lulus: this.tanggal_lulus,
        nomor_induk: this.nomor_induk,
        status: this.status,
        tinggi_badan: this.tinggi_badan,
        berat_badan: this.berat_badan,
        lingkar_kepala: this.lingkar_kepala,
        alergi: this.lingkar_kepala,
        nama_ayah : this.nama_ayah,
        nama_ibu : this.nama_ibu,
        pekerjaan_ayah : this.pekerjaan_ayah,
        pekerjaan_ibu : this.pekerjaan_ibu,
        no_telp_ayah : this.no_telp_ayah,
        no_telp_ibu : this.no_telp_ibu,
      });
      console.log(json);
      axios
        .post("http://localhost:5000/API/students", json, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true",
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then(response => {
          console.log(response);
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
  /* margin-left: 20px; */
  margin-right: -13px;
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
    left: 60px;
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

  .btn {
    width: 100px;
    margin: 0;
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

  .card-form {
    width: 90%;
    margin: auto;
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
