<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-grid>
                <ion-row class="ion-justify-content-between">
                    <ion-col size="3" size-xl="6">
                        <ion-title class="d-none d-xl-inline-block" size="small"><span
                                style="opacity: 50%;">Pages</span> / Tambah Guru & Tenaga Kependidikan <br> <span
                                style="font-size: 18px; letter-spacing: 2.5px;">Tambah Guru & Tenaga Kependidikan</span>
                        </ion-title>
                    </ion-col>
                    <ion-col size-sm="9" size="10" size-xl="6">
                        <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2"
                            style="margin-right: 20px;">
                            <div class="btn-group dropstart mb-1 ms-2" style="content: inherit;">
                                <button class="btn dropdown-toggle text-info text-gradient" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="true"
                                    style="background-color: transparent;">
                                    Hi User 13141
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="javascript: doSomethingLogout()">Logout</a></li>
                                </ul>
                            </div>
                            <div class="nav-icon">
                                <a href="/SignUp">
                                    <ion-icon class="iconButton text-info text-gradient"
                                        src="assets/icon/signup.svg"></ion-icon>
                                </a>
                            </div>
                            <a href="/SignUp" class="d-none d-sm-inline-block mb-1 text-info text-gradient"
                                style="text-decoration: none;">Add User</a>
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
                                    <h4>Tambah Data Tenaga Kependidikan</h4>
                                </ion-card-title>
                            </ion-card-header>
                            <ion-card-content class="d-grid gap-3">
                                <ion-item fill="outline">
                                    <ion-label position="floating">Nama</ion-label>
                                    <ion-input placeholder="Masukkan Nama" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">Jenis Kelamin</ion-label>
                                    <ion-input placeholder="Masukkan Jenis Kelamin" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">No. HP</ion-label>
                                    <ion-input placeholder="Masukkan No. HP" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">Email</ion-label>
                                    <ion-input placeholder="Masukkan Email" required></ion-input>
                                </ion-item>
                                <ion-item fill="outline">
                                    <ion-label position="floating">Tempat, Tanggal Lahir</ion-label>
                                    <ion-input placeholder="Masukkan Tempat, Tanggal Lahir" required></ion-input>
                                </ion-item>
                                <ion-row class="checkbox-custom">
                                    <ion-col size-xl="3" size-xs="12">
                                        <ion-item lines="none">
                                            <ion-checkbox slot="start"></ion-checkbox>
                                            <ion-label>Guru</ion-label>
                                        </ion-item>
                                    </ion-col>
                                    <ion-col>
                                        <ion-item lines="none">
                                            <ion-checkbox slot="start"></ion-checkbox>
                                            <ion-label>Non Guru</ion-label>
                                        </ion-item>
                                    </ion-col>
                                </ion-row>
                                <div>
                                    <ion-row class="ion-justify-content-center row-button">
                                        <ion-col size="6" size-sm="2">
                                            <a class="btn btn-danger" href="/pages/TenagaKependidikan"
                                                role="button">Batalkan</a>
                                        </ion-col>
                                        <ion-col size="6" size-sm="2">
                                            <a class="btn btn-success" role="button"
                                                href="javascript: doSomethingForAddSarprasFasilitas()">Tambah</a>
                                        </ion-col>
                                    </ion-row>
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
    }
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