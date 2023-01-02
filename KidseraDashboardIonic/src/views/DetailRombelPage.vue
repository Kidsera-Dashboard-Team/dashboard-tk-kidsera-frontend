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
                                <ion-breadcrumb style="font-size: 1em;" href="/pages/RombonganBelajar">Rombongan
                                    Belajar</ion-breadcrumb>
                                <ion-breadcrumb style="font-size: 1em;" href="javascript:history.back()">Tahun
                                    Ajaran</ion-breadcrumb>
                                <ion-breadcrumb style="font-size: 1em;"
                                    href="/pages/RombonganBelajar/:tahun/A">Detail</ion-breadcrumb>
                            </ion-breadcrumbs>
                            <h5 style="margin-left: 11px;">Detail Rombongan Belajar</h5>
                        </ion-title>
                    </ion-col>
                    <ion-col size-sm="6" size="10">
                        <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2"
                            style="margin-right: 20px;">
                            <div class="btn-group dropstart mb-1 ms-2" style="content: inherit;">
                                <button class="btn dropdown-toggle text-info text-gradient" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="true"
                                    style="background-color: transparent;">
                                    Hi {{ username }}
                                </button>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="javascript: doSomethingLogout()" @click="del()">Logout</a></li>
                                </ul>
                            </div>
                            <div v-if="is_admin == 'true'" class="nav-icon">
                                <a href="/SignUp">
                                    <ion-icon class="iconButton text-info text-gradient"
                                        src="assets/icon/signup.svg"></ion-icon>
                                </a>
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
            <ion-row class="mt-3 mx-2"><!-- <div class="row mt-3 mx-2"> -->
                <ion-col>
                    <ion-card class="mb-4 border-0"><!-- <div class="card mb-4 border-0"> -->
                        <ion-row>
                            <ion-col>
                                <h3 class="px-3 py-3 title-table">Detail Rombongan Belajar</h3>
                                <ion-row>
                                    <ion-col size="4" class="ms-3">
                                        <ul>
                                            <li>Wali Kelas :</li>
                                            <li>Jumlah Anak :</li>
                                            <li>Ruang Kelas &nbsp;:</li>
                                        </ul>
                                    </ion-col>
                                    <ion-col size="3">
                                        <ul>
                                            <li>Jenny Doe</li>
                                            <li>18</li>
                                            <li>A0001</li>
                                        </ul>
                                    </ion-col>
                                </ion-row>
                            </ion-col>
                            <ion-col class="text-end my-auto me-5"><!-- <div class="col text-end my-auto me-5"> -->
                                <!-- <a href="/pages/TambahPesertaDidik" class="btn btn-success tambah"> Tambah Data</a> -->
                            </ion-col>
                        </ion-row>
                        <ion-card-content class="px-0 pt-0 pb-2"><!-- <div > -->
                            <div class="table-responsive p-0">
                                <table style="table-layout:fixed;"
                                    class="table table-hover align-items-center mb-0 display"
                                    id="table-rombongan-belajar">
                                    <thead>
                                        <tr>
                                            <th
                                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4">
                                                ID Siswa
                                            </th>
                                            <th
                                                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-4 text-center">
                                                Nama</th>
                                            <th
                                                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                                Jenis Kelamin</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr onclick="window.location='/pages/rombonganbelajar/detail';">
                                            <td class="align-middle">
                                                <div class="d-flex px-3 py-1">
                                                    <div>
                                                        <!-- <img src="../assets/img/team-2.jpg" class="avatar avatar-sm me-3" -->
                                                        <!-- alt="user1"> -->
                                                    </div>
                                                    <div class="justify-content-center">
                                                        <h6 class="mb-0 text-sm td-name">John Michael</h6>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="align-middle">
                                                <p class="text-xs font-weight-bold mb-0 text-center">Manager</p>
                                            </td>
                                            <td class="align-middle text-center text-sm">
                                                <span class="">1313621000</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';
import axios from "axios";

export default defineComponent({
    name: 'DetailRombonganBelajar',
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
    },
    props: ["kelas"],

    data() {
        return {
            username: localStorage.getItem('username'),
            is_admin: localStorage.getItem('is_admin')
        };
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
    width: 400px;
    border-radius: 10px;
    background-color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}

.input-search:focus {
    width: 400px;
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

li {
    list-style: none;
    font-size: 20px;
}

ul {
    padding: 0;
    margin: 0;
}

.table {
    border-collapse: inherit;
}

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
    background: linear-gradient(135deg, #6BFF25 0%, #42DD1C 100%);
    border-radius: 8px;
    border: none;
    height: 40px;
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
    td,
    .td-name {
        width: 160px;
    }

    .action-button {
        padding: 5px 12px;
        font-size: 12px;
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
    td,
    .td-name {
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
    td,
    .td-name {
        width: 150px;
    }

    .title-table {
        font-size: 12px;
        margin-top: 10px;
    }

    .tambah {
        padding: 10px;
        font-size: 10px;
        position: relative;
        left: 20px;
        height: 30px;
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
