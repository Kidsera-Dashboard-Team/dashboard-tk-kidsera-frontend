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
                                style="opacity: 50%;">Pages</span> / Guru & Tenaga Kependidikan <br> <span
                                style="font-size: 18px; letter-spacing: 3.5px;">Guru & Tenaga Kependidikan</span>
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
            <ion-card class="mt-4 mx-3 rounded">
                <ion-card-header class="ion-text-justify">
                    <ion-row class="ion-justify-content-between">
                        <ion-col size-xl="6" size-md="6" size-xs="12">
                            <ion-card-title>
                                <h4 class="text-dark">Daftar Guru</h4>
                            </ion-card-title>
                        </ion-col>
                        <ion-col size-xl="6" size-md="6" size-xs="auto">
                            <a href="/pages/TenagaKependidikan/TambahTenagaKependidikan"
                                class="btn btn-success float-end">Tambah Data</a>
                        </ion-col>
                    </ion-row>
                </ion-card-header>

                <ion-card-content>
                    <div class="table-responsive">
                        <table class="table table-hover display" id="table-tenaga-kependidikan-1">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-secondary opacity-7">Nama</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Jenis Kelamin</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">No HP</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Email</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onclick="window.location='/pages/TenagaKependidikan/DetailTenagaKependidikan';">
                                    <td scope="row">Michael John</td>
                                    <td class="text-center">Laki-laki</td>
                                    <td class="text-center">085357889754</td>
                                    <td class="text-center">john@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Putri Dina</td>
                                    <td class="text-center">Perempuan</td>
                                    <td class="text-center">085357889999</td>
                                    <td class="text-center">putrid@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Michael John</td>
                                    <td class="text-center">Laki-laki</td>
                                    <td class="text-center">085357889754</td>
                                    <td class="text-center">john@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Putri Dina</td>
                                    <td class="text-center">Perempuan</td>
                                    <td class="text-center">085357889999</td>
                                    <td class="text-center">putrid@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Michael John</td>
                                    <td class="text-center">Laki-laki</td>
                                    <td class="text-center">085357889754</td>
                                    <td class="text-center">john@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Putri Dina</td>
                                    <td class="text-center">Perempuan</td>
                                    <td class="text-center">085357889999</td>
                                    <td class="text-center">putrid@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ion-card-content>
            </ion-card>

            <ion-card class="mt-4 mx-3 rounded">
                <ion-card-header class="ion-text-justify">
                    <ion-row class="ion-justify-content-between">
                        <ion-col size-xl="6" size-md="6" size-xs="12">
                            <ion-card-title>
                                <h4 class="text-black">Daftar Tenaga Kependidikan Non-Guru</h4>
                            </ion-card-title>
                        </ion-col>
                        <ion-col size-xl="6" size-md="6" size-xs="auto">
                            <a href="/pages/TambahTenagaKependidikan" class="btn btn-success float-end">Tambah Data</a>
                        </ion-col>
                    </ion-row>
                </ion-card-header>

                <ion-card-content>
                    <div class="table-responsive">
                        <table class="table table-hover display" id="table-tenaga-kependidikan-2">
                            <thead>
                                <tr>
                                    <th scope="col" class="text-secondary opacity-7">Nama</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Jenis Kelamin</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">No HP</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Email</th>
                                    <th scope="col" class="text-center text-secondary opacity-7">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr onclick="window.location='/pages/TenagaKependidikan/DetailTenagaKependidikanPage';">
                                    <td scope="row">Michael John</td>
                                    <td class="text-center">Laki-laki</td>
                                    <td class="text-center">085357889754</td>
                                    <td class="text-center">john@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Putri Dina</td>
                                    <td class="text-center">Perempuan</td>
                                    <td class="text-center">085357889999</td>
                                    <td class="text-center">putrid@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Michael John</td>
                                    <td class="text-center">Laki-laki</td>
                                    <td class="text-center">085357889754</td>
                                    <td class="text-center">john@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Putri Dina</td>
                                    <td class="text-center">Perempuan</td>
                                    <td class="text-center">085357889999</td>
                                    <td class="text-center">putrid@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Michael John</td>
                                    <td class="text-center">Laki-laki</td>
                                    <td class="text-center">085357889754</td>
                                    <td class="text-center">john@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">Putri Dina</td>
                                    <td class="text-center">Perempuan</td>
                                    <td class="text-center">085357889999</td>
                                    <td class="text-center">putrid@mail.com</td>
                                    <td class="text-center"><a href="/pages/TenagaKependidikan/EditTenagaKependidikan"><button type="button"
                                                class="btn btn-warning btn-sm text-uppercase text-white fw-bold p-2">Edit</button></a>
                                        <a href=""><button type="button"
                                                class="btn btn-danger btn-sm text-uppercase text-white fw-bold p-2 ms-2">Delete</button></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { 
    IonButtons, IonContent, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
} from '@ionic/vue';

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
        IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon,
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
    background: linear-gradient(135deg, #6BFF25 0%, #42DD1C 100%);
    border-radius: 8px;
    border: none;
    font-weight: bold;
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
