<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-toolbar color="transparent">
                <ion-grid>
                    <ion-row class="ion-justify-content-start">
                        <ion-col size="6">
                            <a href="#" style="text-decoration: none; color: white;"><ion-title class="title-dashboard">Kidsera Dashboard</ion-title></a>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-toolbar>


            <img src="assets/img/background-signup.svg" class="background" alt="">
            
            <div id="container">
                <ion-card class='card-middle' color="white" mode="md">
                    <ion-card-header>
                        <ion-card-title>Daftar</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <ion-grid>
                            <ion-row class="ion-justify-content-center">
                                <ion-col>
                                    <ion-item fill="outline">
                                        <ion-label position="floating">User Name</ion-label>
                                        <ion-input name="username" placeholder="User Name" required></ion-input>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-justify-content-center">
                                <ion-col>
                                    <ion-item fill="outline">
                                        <ion-label position="floating">First Name</ion-label>
                                        <ion-input name="fname" placeholder="First Name" required></ion-input>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-justify-content-center">
                                <ion-col>
                                    <ion-item fill="outline">
                                        <ion-label position="floating">Last Name</ion-label>
                                        <ion-input name="lname" placeholder="Last Name" required></ion-input>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-justify-content-start">
                                <ion-col>
                                    <ion-item fill="outline">
                                        <ion-label position="floating">Email</ion-label>
                                        <ion-input name="email" placeholder="Email"></ion-input>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-justify-content-start">
                                <ion-col>
                                    <ion-item fill="outline">
                                        <ion-label position="floating">Password</ion-label>
                                        <ion-input name="password" placeholder="Password" type="password"></ion-input>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-justify-content-start">
                                <ion-col>
                                    <ion-item fill="outline">
                                        <ion-label position="floating">Re-type Password</ion-label>
                                        <ion-input name="password" placeholder="Re-type Password" type="password"></ion-input>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-justify-content-start">
                                <ion-col>
                                    <ion-item>
                                        <ion-checkbox slot="start"></ion-checkbox>
                                        <ion-label class="ionlebel">
                                            <p>Saya setuju dengan <b>Syarat dan Ketentuan</b></p>
                                        </ion-label>
                                    </ion-item>
                                </ion-col>
                            </ion-row>
                            <ion-row class="ion-justify-content-start">
                                <ion-col>
                                    <div class="button-regis">
                                        <ion-button expand="block" color="="
                                            style=" background-image: linear-gradient(to right, #3A416F, #141727);">
                                            Registrasi
                                        </ion-button>
                                    </div>
                                </ion-col>
                            </ion-row>
                            <!-- <ion-row class="ion-justify-content-start">
                                <ion-col>
                                    <ion-label>
                                        <p>Sudah Mempunyai Akun? <a class="sabeb"
                                                href="../pages/SignIn"><b>Masuk</b></a> </p>
                                    </ion-label>
                                </ion-col>
                            </ion-row> -->
                        </ion-grid>
                    </ion-card-content>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonInput, IonItem, IonCheckbox, IonLabel, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'SignUp',
    components: {
        IonContent,
        IonPage,
        IonTitle,
        IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonRow, IonCol, IonInput, IonItem, IonCheckbox, IonLabel, IonButton
    }
});
</script>

<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

ion-toolbar {
    margin-top: 10px;
    --background: transparent;
    color: #fff;
}

ion-checkbox {
    --size: 20px;
    --background-checked: #2348f0;
}

ion-checkbox::part(container) {
    border-radius: 6px;
    border: 2px solid #2348f0;
}

.background{
    width: 99%;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 1%;
    left: 0;
    right: 0;
    text-align: center;
}

.card-middle {
    width: 30%;
    height: 125%;
    margin: auto;
    background-color: white;
    border-radius: 12px;
    margin-top: 250px;
}

.sabeb {
    text-decoration: none;
    color: linear-gradient(to right, #3A416F, #141727);
}

.card-inside {
    margin: 15px 30px 0;
    background-color: #857B7B;
    margin-top: 22px;
}

@media only screen and (max-width: 1025px) {
    .card-middle {
        width: 50%;
    }
}

@media only screen and (max-width: 769px) {

    .card-middle {
        width: 60%;
        font-size: 10px;
        margin-top: 300px;
    }

    .background{
        width: 100%;
        top: -1%;
        background-size: cover;
    }
}

@media only screen and (max-width: 426px) {
    .card-middle {
        width: 85%;
        font-size: 10px;
    }

    .ionlebel {
        font-size: 2px;
    }

    .card-inside {
        margin: 0px;
        border-radius: 0px;
    }

    .title-dashboard{
        font-size: 15px;
        position: relative;
        top: 25%;
    }
}
</style>