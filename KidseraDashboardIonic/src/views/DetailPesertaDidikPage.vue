<template>
    <ion-page>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-menu-button color="primary"></ion-menu-button>
            </ion-buttons>
            <ion-grid>
                <ion-row class="ion-justify-content-between">
                    <ion-col size="3">
                        <ion-title class="d-none d-xl-inline-block" size="small"><span
                                style="opacity: 50%;">Pages</span> /
                            Detail Peserta Didik <br> <span style="font-size: 18px; letter-spacing: 2px;">Detail Peserta
                                Didik</span>
                        </ion-title>
                    </ion-col>
                    <ion-col size-sm="9" size="10">
                        <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2"
                            style="margin-right: 20px;">
                            <div class="search-box">
                                <button class="btn-search"><i class="fas fa-search"></i></button>
                                <input type="text" class="input-search" placeholder="Type to Search...">
                            </div>
                            <a href="/SignUp">
                                <ion-icon class="iconButton" src="assets/icon/home.svg"></ion-icon><span
                                    class="d-none d-sm-inline-block text-dark">&nbsp;Sign in</span>
                            </a>
                            <a href="">
                                <ion-icon class="iconButton" src="assets/icon/settings-sharp.svg"> </ion-icon>
                            </a>
                            <a href="">
                                <ion-icon class="iconButton" src="assets/icon/notifications.svg"> </ion-icon>
                            </a>
                        </ion-row>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-toolbar>

        <ion-content :fullscreen="true">
            
            <ion-row class="mt-3 mx-2">
                <ion-col>
                    <ion-card class="content-card mb-4 border-0">
                        <ion-row>
                            <ion-col>
                                <h3 class="px-3 py-3 title-table">Biodata Peserta Didik</h3>
                            </ion-col>
                        </ion-row>
                        <h2 class="text-center mt-1 mb-4">Nama Aku</h2>
                        <ion-row class="mx-auto form-container">
                            <ion-col size="4" style="line-height: 2.5;" class="text-dark text-center form1">
                                <ul>
                                    <li>Jenis Kelamin :</li>
                                    <li>NISN :</li>
                                    <li>NIK :</li>
                                    <li>NO.KK :</li>
                                    <li>Tingkat Kelas :</li>
                                    <li>Rombongan Belajar :</li>
                                    <li>Tanggal Masuk :</li>
                                    <li>Tanggal Keluar :</li>
                                    <li>NIPD :</li>
                                    <li>Status ;</li>
                                    <li>Tinggi Badan :</li>
                                    <li>Lingkar Kepala :</li>
                                    <li>Alergi :</li>
                                </ul>
                            </ion-col>
                            <ion-col size="4" style="line-height: 2.5;" class="text-dark fw-bold text-center form2">
                                <ul>
                                    <li>Jenis Kelamin :</li>
                                    <li>NISN :</li>
                                    <li>NIK :</li>
                                    <li>NO.KK :</li>
                                    <li>Tingkat Kelas :</li>
                                    <li>Rombongan Belajar :</li>
                                    <li>Tanggal Masuk :</li>
                                    <li>Tanggal Keluar :</li>
                                    <li>NIPD :</li>
                                    <li>Status ;</li>
                                    <li>Tinggi Badan :</li>
                                    <li>Lingkar Kepala :</li>
                                    <li>Alergi :</li>
                                </ul>
                            </ion-col>
                        </ion-row>
                        <ion-card-content class="px-0 pt-0 pb-2">
                            
                        </ion-card-content>
                    </ion-card>
                </ion-col>
            </ion-row>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';

export default defineComponent({
    name: 'PesertaDidikPage',
    components: {
        IonButtons,
        IonContent,
        // IonHeader,
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
ion-col {
    padding: 0;
}

/* Icon navbar style */
a .iconButton {
    color: black;
    text-decoration: none;
    margin-left: 20px;
    font-size: 18px;
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

/* content style */
ul{
    list-style: none;
    display: inline-block;
    text-align: left;
}

.content-card{
    height: 110%;
}

.form-container{
    justify-content: center;
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
        width: 180px;
    }

    .input-search:focus {
        width: 180px;
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

    .form-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .form1{
        font-size: 10px;
        margin: 0;
        padding: 0;
    }

    .form2{
        font-size: 10px;
        margin: 0;
        padding: 0;
    }


}
</style>
