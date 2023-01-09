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
                <ion-breadcrumb href="/Pages">Pages</ion-breadcrumb>
                <ion-breadcrumb href="/pages/PesertaDidik">Peserta Didik</ion-breadcrumb>
                <ion-breadcrumb href="/pages/PesertaDidik/EditPesertaDidik/">Edit</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px">Edit Peserta Didik</h5>
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
                    <a class="dropdown-item" @click="del()">Logout</a>
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
      <ion-card class="mt-4 p-3 rounded text-center card-form">
        <ion-card-header>
          <ion-card-title>
            <h4>Edit Peserta Didik</h4>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content class="d-grid gap-3">
          <ion-item fill="outline">
            <ion-label position="floating">Nama Peserta Didik</ion-label>
            <ion-input placeholder="Masukkan Nama Peserta Didik" v-model="formData.nama" required></ion-input>
            <ion-note color="danger" v-for="error in v$.nama.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-radio-group class="row justify-content-around" v-model="formData.status">
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
            <ion-note color="danger" v-for="error in v$.status.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-radio-group>
          <ion-radio-group class="row justify-content-around" v-model="formData.jenis_kelamin">
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
            <ion-note color="danger" v-for="error in v$.jenis_kelamin.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-radio-group>
          <ion-item fill="outline">
            <ion-label position="floating">Tahun Ajaran</ion-label>
            <ion-input placeholder="Masukkan Tahun Ajaran" v-model="formData.tahun_ajaran" required></ion-input>
            <ion-note color="danger" v-for="error in v$.tahun_ajaran.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">NISN</ion-label>
            <ion-input placeholder="Masukkan NISN" v-model="formData.nisn" required></ion-input>
            <ion-note color="danger" v-for="error in v$.nisn.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">NIK</ion-label>
            <ion-input placeholder="Masukkan NIK" v-model="formData.nik" required></ion-input>
            <ion-note color="danger" v-for="error in v$.nik.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note> </ion-item><ion-item fill="outline">
            <ion-label position="floating">NO. KK</ion-label>
            <ion-input placeholder="Masukkan NO. KK" v-model="formData.no_kk" required></ion-input>
            <ion-note color="danger" v-for="error in v$.no_kk.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Tingkat Kelas</ion-label>
            <ion-input placeholder="Masukkan Tingkat Kelas" v-model="formData.tingkat_kelas" required></ion-input>
            <ion-note color="danger" v-for="error in v$.tingkat_kelas.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Tanggal Masuk</ion-label>
            <ion-input placeholder="Masukkan Tanggal Masuk" type="date" v-model="formData.tanggal_masuk"
              required></ion-input>
            <ion-note color="danger" v-for="error in v$.tanggal_masuk.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Tanggal Lulus</ion-label>
            <ion-input placeholder="Masukkan Tanggal Lulus" type="date" v-model="formData.tanggal_lulus"
              required></ion-input>
            <ion-note color="danger" v-for="error in v$.tanggal_lulus.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nomor Induk (NIK)</ion-label>
            <ion-input placeholder="Masukkan Nomor Induk (NIK)" v-model="formData.nomor_induk" required></ion-input>
            <ion-note color="danger" v-for="error in v$.nomor_induk.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Tinggi Badan</ion-label>
            <ion-input placeholder="Masukkan Tinggi Badan" v-model="formData.tinggi_badan" required></ion-input>
            <ion-note color="danger" v-for="error in v$.tinggi_badan.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Berat Badan</ion-label>
            <ion-input placeholder="Masukkan Berat Badan" v-model="formData.berat_badan" required></ion-input>
            <ion-note color="danger" v-for="error in v$.berat_badan.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Lingkar Kepala</ion-label>
            <ion-input placeholder="Masukkan Lingkar Kepala" v-model="formData.lingkar_kepala" required></ion-input>
            <ion-note color="danger" v-for="error in v$.lingkar_kepala.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Alergi</ion-label>
            <ion-input placeholder="Masukkan Alergi" v-model="formData.alergi" required></ion-input>
            <ion-note color="danger" v-for="error in v$.alergi.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nama Ayah</ion-label>
            <ion-input placeholder="Masukkan Nama Ayah" v-model="formData.nama_ayah" required></ion-input>
            <ion-note color="danger" v-for="error in v$.nama_ayah.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nomor Telepon Ayah</ion-label>
            <ion-input placeholder="Masukkan Nomor Telepon Ayah" v-model="formData.no_telp_ayah" required></ion-input>
            <ion-note color="danger" v-for="error in v$.no_telp_ayah.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nama Ibu</ion-label>
            <ion-input placeholder="Masukkan Nama Ibu" v-model="formData.nama_ibu" required></ion-input>
            <ion-note color="danger" v-for="error in v$.nama_ibu.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Nomor Telepon Ibu</ion-label>
            <ion-input placeholder="Masukkan Nomor Telepon Ibu" v-model="formData.no_telp_ibu" required></ion-input>
            <ion-note color="danger" v-for="error in v$.no_telp_ibu.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Pekerjaan Ayah</ion-label>
            <ion-input placeholder="Masukkan Pekerjaan Ayah" v-model="formData.pekerjaan_ayah" required></ion-input>
            <ion-note color="danger" v-for="error in v$.pekerjaan_ayah.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Pekerjaan Ibu</ion-label>
            <ion-input placeholder="Masukkan Pekerjaan Ibu" v-model="formData.pekerjaan_ibu" required></ion-input>
            <ion-note color="danger" v-for="error in v$.pekerjaan_ibu.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>

          <div>
            <ion-row class="ion-justify-content-center row-button">
              <ion-col size="6" size-sm="2">
                <a class="btn btn-danger" href="/pages/PesertaDidik" role="button">Batalkan</a>
              </ion-col>
              <ion-col size="6" size-sm="2">
                <a class="btn btn-success" role="button" @click="submitForm()">Edit</a>
              </ion-col>
            </ion-row>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, integer } from "@vuelidate/validators";
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
  setup() {
    const formData = reactive({
      nama: "",
      status: "",
      jenis_kelamin: "",
      tahun_ajaran: "",
      nik: "",
      nisn: "",
      no_kk: "",
      tingkat_kelas: "",
      tanggal_masuk: "",
      tanggal_lulus: "",
      nomor_induk: "",
      tinggi_badan: "",
      berat_badan: "",
      lingkar_kepala: "",
      alergi: "",
      nama_ayah: "",
      nama_ibu: "",
      pekerjaan_ayah: "",
      pekerjaan_ibu: "",
      no_telp_ayah: "",
      no_telp_ibu: "",
    });

    const rules = computed(() => {
      return {
        nama: {
          required,
        },
        status: {
          required,
        },
        jenis_kelamin: {
          required,
        },
        nik: {
          required,
          integer,
        },
        nisn: {
          required,
          integer,
        },
        no_kk: {
          required,
          integer,
        },
        tingkat_kelas: {
          required,
        },
        tahun_ajaran: {
          required,
        },
        tanggal_masuk: {
          required,
        },
        tanggal_lulus: {
          required,
        },
        nomor_induk: {
          required,
          integer,
        },
        tinggi_badan: {
          required,
          integer,
        },
        berat_badan: {
          required,
          integer,
        },
        lingkar_kepala: {
          required,
          integer,
        },
        alergi: {
          required,
        },
        nama_ayah: {
          required,
        },
        nama_ibu: {
          required,
        },
        pekerjaan_ayah: {
          required,
        },
        pekerjaan_ibu: {
          required,
        },
        no_telp_ayah: {
          required,
          integer,
        },
        no_telp_ibu: {
          required,
          integer,
        },
      };
    });

    const v$ = useVuelidate(rules, formData);

    return { formData, v$ };
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
      nama_ayah: "",
      nama_ibu: "",
      pekerjaan_ayah: "",
      pekerjaan_ibu: "",
      no_telp_ayah: "",
      no_telp_ibu: "",
      username: localStorage.getItem("username"),
      is_admin: localStorage.getItem("is_admin"),
    };
  },
  props: ["id"],
  mounted: function () {
    let headers = {
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    };

    axios
      .get("http://localhost:5000/API/students/" + this.id, { headers })
      .then((response) => {
        this.formData.nama = response.data.nama;
        this.formData.jenis_kelamin = response.data.jenis_kelamin;
        this.formData.nik = response.data.nik;
        this.formData.nisn = response.data.nisn;
        this.formData.no_kk = response.data.no_kk;
        this.formData.tingkat_kelas = response.data.tingkat_kelas;
        this.formData.tahun_ajaran = response.data.tahun_ajaran;
        this.formData.tanggal_masuk = response.data.tanggal_masuk;
        this.formData.tanggal_lulus = response.data.tanggal_lulus;
        this.formData.nomor_induk = response.data.nomor_induk;
        this.formData.status = response.data.status;
        this.formData.tinggi_badan = response.data.tinggi_badan;
        this.formData.berat_badan = response.data.berat_badan;
        this.formData.lingkar_kepala = response.data.lingkar_kepala;
        this.formData.alergi = response.data.alergi;
        this.formData.nama_ayah = response.data.nama_ayah;
        this.formData.nama_ibu = response.data.nama_ibu;
        this.formData.pekerjaan_ayah = response.data.pekerjaan_ayah;
        this.formData.pekerjaan_ibu = response.data.pekerjaan_ibu;
        this.formData.no_telp_ayah = response.data.no_telp_ayah;
        this.formData.no_telp_ibu = response.data.no_telp_ibu;

        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
    async submitForm() {
      const result = await this.v$.$validate();

      if (!result) {
        console.log(result);
        alert("failed");
      } else {
        const json = JSON.stringify({
          nama: this.formData.nama,
          status: this.formData.status,
          jenis_kelamin: this.formData.jenis_kelamin,
          tahun_ajaran: this.formData.tahun_ajaran,
          nik: this.formData.nik,
          nisn: this.formData.nisn,
          no_kk: this.formData.no_kk,
          tingkat_kelas: this.formData.tingkat_kelas,
          tanggal_masuk: this.formData.tanggal_masuk,
          tanggal_lulus: this.formData.tanggal_lulus,
          nomor_induk: this.formData.nomor_induk,
          tinggi_badan: this.formData.tinggi_badan,
          berat_badan: this.formData.berat_badan,
          lingkar_kepala: this.formData.lingkar_kepala,
          alergi: this.formData.lingkar_kepala,
          nama_ayah: this.formData.nama_ayah,
          nama_ibu: this.formData.nama_ibu,
          pekerjaan_ayah: this.formData.pekerjaan_ayah,
          pekerjaan_ibu: this.formData.pekerjaan_ibu,
          no_telp_ayah: this.formData.no_telp_ayah,
          no_telp_ibu: this.formData.no_telp_ibu,
        });
        console.log(json);
        await axios
          .put("http://localhost:5000/API/students/" + this.id , json, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
            alert("Success");
            window.location.href = "/pages/PesertaDidik";
          })
          .catch((error) => {
            let status = error.response.data.msg;
            if (status == "Missing Authorization Header") {
              alert("Anda belum login");
              window.location.href = "/SignIn";
            } else if (status == "Token has expired") {
              alert("Sesi telah berakhir, silahkan login kembali");
              window.location.href = "/SignIn";
            }
          });
      }
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
    left: 60px;
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

  .btn-search:focus~.input-search {
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
