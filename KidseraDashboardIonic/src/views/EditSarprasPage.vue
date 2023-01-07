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
                <ion-breadcrumb style="font-size: 1em;" @click="router.push('/pages/Sarpras/DetailSarpras/' + this.id_ruang)">Detail</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em;"
                  href="/pages/Sarpras/DetailSarpras/EditSarpras">Edit</ion-breadcrumb>
              </ion-breadcrumbs>
              <h5 style="margin-left: 11px;">Edit Fasilitas Sarana & Prasarana</h5>
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
      <ion-grid>
        <ion-row>
          <ion-col size-xl="12" size="12">
            <ion-card class="mt-3 mx-3 p-lg-3 rounded text-center">
              <ion-card-header>
                <ion-card-title>
                  <h4>Edit Fasilitas Ruang</h4>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content class="d-grid gap-3">
                <ion-item fill="outline" lines="none">
                  <ion-label position="floating" :readonly="true" class="mb-5">Nama Fasilitas -> Fasilitas {{ nama }}</ion-label>
                  <!-- <ion-input placeholder="Masukkan Fasilitas" ></ion-input> -->
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Jenis</ion-label>
                  <ion-input placeholder="Masukkan Jenis" v-model="jenis" required></ion-input>
                </ion-item>
                <ion-item fill="outline">
                  <ion-label position="floating">Jumlah</ion-label>
                  <ion-input placeholder="Masukkan Jumlah" v-model="jumlah" required></ion-input>
                </ion-item>
                <div>
                  <a class="btn btn-danger" role="button" @click="router.push('/pages/Sarpras/DetailSarpras/' + this.id_ruang)">Batalkan</a>
                  <a class="btn btn-primary" role="button" @click="editSarpras()">Simpan</a>
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
  IonLabel
} from '@ionic/vue';
import axios from "axios";
import { useRouter } from "vue-router";

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
    IonLabel
  },

  data() {
    return {
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin'),
      nama: "",
      jenis: "",
      jumlah: "",
    };
  },

  setup() {
    const router = useRouter();
    return {
      router,
    }
  },

  props: ["id", "id_ruang"],
  
  mounted: function () {
    axios
      .get("http://localhost:5000/API/sarpras_detail/" + this.id)
      .then((response) => {
        console.log(response.data);
        this.nama = response.data.nama;
        this.jenis = response.data.jenis;
        this.jumlah = response.data.jumlah; 
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

    editSarpras() {
      const json = JSON.stringify({
        nama: this.nama,
        jenis: this.jenis,
        jumlah: this.jumlah,
      });
      console.log(json);
      axios
        .put("http://localhost:5000/API/sarpras_detail/" + this.id, json, {
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
          window.location.href = "/pages/Sarpras/DetailSarpras/" + this.id_ruang
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