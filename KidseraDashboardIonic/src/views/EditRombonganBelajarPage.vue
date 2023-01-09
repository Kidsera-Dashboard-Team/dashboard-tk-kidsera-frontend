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
                <ion-breadcrumb style="font-size: 1em" href="/pages/RombonganBelajar">Rombongan Belajar</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em"
                  href="/pages/RombonganBelajar/TambahRombonganBelajar">Edit</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px">Edit Rombongan Belajar</h5>
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
                    <a class="dropdown-item" href="javascript: doSomethingLogout()">Logout</a>
                  </li>
                </ul>
              </div>
              <div class="nav-icon">
                <a href="/SignUp">
                  <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
                </a>
              </div>
              <a href="/SignUp" class="d-none d-sm-inline-block mb-1 text-info text-gradient"
                style="text-decoration: none">&nbsp;Add User</a>
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
            <h4>Edit Rombongan Belajar</h4>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content class="d-grid gap-3">
          <ion-item fill="outline">
            <ion-label position="floating">Tahun Ajaran</ion-label>
            <ion-input v-model="formData.tahun_ajaran" placeholder="Masukkan Tahun Ajaran" required></ion-input>
            <ion-note color="danger" v-for="error in v$.tahun_ajaran.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Ruang Kelas</ion-label>
            <ion-input v-model="formData.ruangan" placeholder="Masukkan Ruang Kelas" required></ion-input>
            <ion-note color="danger" v-for="error in v$.ruangan.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <ion-item fill="outline">
            <ion-label position="floating">Kelas</ion-label>
            <ion-input v-model="formData.kelas" placeholder="Masukkan Nama Rombongan Belajar" required></ion-input>
            <ion-note color="danger" v-for="error in v$.kelas.$errors" :key="error.$uid">
              {{ error.$message }}
            </ion-note>
          </ion-item>
          <div>
            <ion-row class="ion-justify-content-center row-button">
              <ion-col size="6" size-sm="2">
                <a class="btn btn-danger" href="/pages/RombonganBelajar" role="button">Batalkan</a>
              </ion-col>
              <ion-col size="6" size-sm="2">
                <a class="btn btn-success" role="button" @click="submitForm()">Tambah</a>
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
import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
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
  // IonDatetime, IonDatetimeButton, IonModal
} from "@ionic/vue";

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
    // IonDatetime, IonDatetimeButton, IonModal
  },
  setup() {
    const formData = reactive({
      tahun_ajaran: "",
      ruangan: "",
      kelas: "",
    });

    const rules = computed(() => {
      return {
        tahun_ajaran: {
          required,
        },
        ruangan: {
          required,
        },
        kelas: {
          required,
        },
      };
    });

    const v$ = useVuelidate(rules, formData);

    return { formData, v$ };
  },
  props: ["tahun", "kelas"],
  data() {
    return {
      results: [],
    };
  },
  mounted: function () {
    axios
      .get("http://localhost:5000/API/rombel/" + this.tahun + "/" + this.kelas)
      .then((response) => {
        this.formData.tahun_ajaran = response.data.rombel.tahun_ajaran;
        this.formData.ruangan = response.data.rombel.ruangan;
        this.formData.kelas = response.data.rombel.kelas;

        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  methods: {
    async submitForm() {
      const result = await this.v$.$validate();

      if (!result) {
        console.log(result);
        alert("failed");
      } else {
        const json = JSON.stringify({
          tahun_ajaran: this.formData.tahun_ajaran,
          ruangan: this.formData.ruangan,
          kelas: this.formData.kelas,
        });
        console.log(json);
        await axios
          .put("http://localhost:5000/API/rombel/" + this.tahun + "/" + this.kelas, json, {
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
            window.location.href = "/pages/RombonganBelajar/"+ this.tahun + "/" + this.kelas;
          })
          .catch((error) => {
            console.log(error.response);
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

.btn-search:focus~.input-search {
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
