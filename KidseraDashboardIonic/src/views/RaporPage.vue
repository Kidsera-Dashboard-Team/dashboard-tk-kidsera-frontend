<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-grid>
                <ion-row class="ion-justify-content-between">
                    <ion-col size="3" size-xl="6">
                        <ion-title class="d-none d-lg-inline-block" size="small"><span
                                style="opacity: 50%;">Pages</span> /
                            E - Rapor <br> <span style="font-size: 18px; letter-spacing: 2.5px;">E - Rapor</span>
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
                                style="text-decoration: none;">&nbsp;Add User</a>
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
                        style="box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05); border-radius: 15px;">
                        <ion-card-header class="ion-text-justify">
                            <ion-row class="ion-justify-content-between">
                                <ion-col size-xl="6" size-md="6" size-xs="12">
                                    <ion-card-title>
                                        <h4 class="text-dalem">Rombongan Belajar</h4>
                                    </ion-card-title>
                                </ion-col>
                                <ion-col size-xl="6" size-md="6" size-xs="auto">
                                    <a href="/pages/RombonganBelajar/TambahRombonganBelajar"
                                        class="btn btn-success float-end tambah">Tambah Ruang</a>
                                </ion-col>
                            </ion-row>
                        </ion-card-header>

                        <ion-card-content>
                            <ion-grid>
                                <div class="ion-justify-content-evenly container"
                                    style="flex-wrap: wrap; display: flex;">
                                    <div onclick="window.location='/pages/Rapor/TahunAjaranRapor';"
                                        class="card-content col" style="width: 30%; margin: 0;">
                                        <ion-card class="card-content-judul">
                                            <ion-card-header class="ion-margin text-center">
                                                <ion-card-title>
                                                    <p>Tahun Ajaran</p>
                                                    <p>2022/2023</p>
                                                </ion-card-title>
                                            </ion-card-header>
                                        </ion-card>
                                    </div>
                                    <div class="card-content col" style="width: 30%; margin: 0;">
                                        <ion-card class="card-content-judul">
                                            <ion-card-header class="ion-margin text-center">
                                                <a href="" class="text-decoration-none"><ion-card-title>
                                                        <p>Tahun Ajaran</p>
                                                        <p>2022/2023</p>
                                                    </ion-card-title></a>
                                            </ion-card-header>
                                        </ion-card>
                                    </div>
                                    <div class="card-content col" style="width: 30%; margin: 0;">
                                        <ion-card class="card-content-judul">
                                            <ion-card-header class="ion-margin text-center">
                                                <a href="" class="text-decoration-none"><ion-card-title>
                                                        <p>Tahun Ajaran</p>
                                                        <p>2022/2023</p>
                                                    </ion-card-title></a>
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
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';

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
        IonRow
    }
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
    color: #67748E;
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
    color: #67748E;
}

.input-search::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
}

.btn-search {
    color: #67748E;
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

.btn-search:focus~.input-search {
    width: 300px;
    border-radius: 10px;
    background-color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.input-search:focus {
    width: 300px;
    border-radius: 10px;
    background-color: #fff;
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
    background-color: #F4F0F0;
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
