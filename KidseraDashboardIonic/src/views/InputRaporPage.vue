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
                                <ion-breadcrumb style="font-size: 1em;" href="/pages/Rapor">E - Rapor</ion-breadcrumb>
                                <ion-breadcrumb style="font-size: 1em;" href="/pages/Rapor/TahunAjaranRapor">Tahun
                                    Ajaran</ion-breadcrumb>
                                <ion-breadcrumb style="font-size: 1em;"
                                    href="/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor">Peserta
                                    Didik</ion-breadcrumb>
                                <ion-breadcrumb style="font-size: 1em;"
                                    href="/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor/InputNilaiPesertaDidikRapor">Detail</ion-breadcrumb>
                                <ion-breadcrumb style="font-size: 1em;"
                                    href="/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor/InputNilaiPesertaDidikRapor/InputRapor">Input</ion-breadcrumb>
                            </ion-breadcrumbs>

                            <h5 style="margin-left: 11px;">Input E - Rapor</h5>
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
                                    <li><a class="dropdown-item" href="javascript: doSomethingLogout()"
                                            @click="del()">Logout</a></li>
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
            <ion-card>
                <ion-card-content>
                    <div class="text-dark noted">
                        <ul>
                            <li><strong>BB</strong> : Belum Berkembang</li>
                            <li><strong>MB</strong> : Mulai Berkembang</li>
                            <li><strong>BSH</strong> : Berkembang Sesuai Harapan</li>
                            <li><strong>BSB</strong> : Berkembang Sangat Baik</li>
                        </ul>
                    </div>
                    <!-- nilai agama dan moral -->
                    <ion-card-title class="text-dark">NILAI AGAMA DAN MORAL</ion-card-title>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Nilai Agama</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Mengenal agama yang dianut <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault1">
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault2" checked>
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault3" checked>
                                            <label class="form-check-label" for="flexRadioDefault3">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                id="flexRadioDefault4" checked>
                                            <label class="form-check-label" for="flexRadioDefault4">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengerjakan Ibadah <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                                id="flexRadioDefault5">
                                            <label class="form-check-label" for="flexRadioDefault5">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                                id="flexRadioDefault6" checked>
                                            <label class="form-check-label" for="flexRadioDefault6">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                                id="flexRadioDefault7" checked>
                                            <label class="form-check-label" for="flexRadioDefault7">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault2"
                                                id="flexRadioDefault8" checked>
                                            <label class="form-check-label" for="flexRadioDefault8">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Terbiasa rasa syukur terhadap ciptaan Allah <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                                id="flexRadioDefault9">
                                            <label class="form-check-label" for="flexRadioDefault9">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                                id="flexRadioDefault10" checked>
                                            <label class="form-check-label" for="flexRadioDefault10">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                                id="flexRadioDefault11" checked>
                                            <label class="form-check-label" for="flexRadioDefault11">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault3"
                                                id="flexRadioDefault12" checked>
                                            <label class="form-check-label" for="flexRadioDefault12">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengucapkan doa-doa pendek dan ibadah harian <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                                id="flexRadioDefault13">
                                            <label class="form-check-label" for="flexRadioDefault13">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                                id="flexRadioDefault14" checked>
                                            <label class="form-check-label" for="flexRadioDefault14">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                                id="flexRadioDefault15" checked>
                                            <label class="form-check-label" for="flexRadioDefault15">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault4"
                                                id="flexRadioDefault16" checked>
                                            <label class="form-check-label" for="flexRadioDefault16">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menyebutkan hari - hari besar agama <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault5"
                                                id="flexRadioDefault17">
                                            <label class="form-check-label" for="flexRadioDefault17">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault5"
                                                id="flexRadioDefault18" checked>
                                            <label class="form-check-label" for="flexRadioDefault18">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault5"
                                                id="flexRadioDefault19" checked>
                                            <label class="form-check-label" for="flexRadioDefault19">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault5"
                                                id="flexRadioDefault20" checked>
                                            <label class="form-check-label" for="flexRadioDefault20">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Nilai Moral</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Menghormati agama orang lain (toleransi) <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault6"
                                                id="flexRadioDefault21">
                                            <label class="form-check-label" for="flexRadioDefault21">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault6"
                                                id="flexRadioDefault22" checked>
                                            <label class="form-check-label" for="flexRadioDefault22">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault6"
                                                id="flexRadioDefault23" checked>
                                            <label class="form-check-label" for="flexRadioDefault23">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault6"
                                                id="flexRadioDefault24" checked>
                                            <label class="form-check-label" for="flexRadioDefault24">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Terbiasa menjaga kebersihan diri dan lingkungan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault7"
                                                id="flexRadioDefault25">
                                            <label class="form-check-label" for="flexRadioDefault25">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault7"
                                                id="flexRadioDefault26" checked>
                                            <label class="form-check-label" for="flexRadioDefault26">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault7"
                                                id="flexRadioDefault27" checked>
                                            <label class="form-check-label" for="flexRadioDefault27">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault7"
                                                id="flexRadioDefault28" checked>
                                            <label class="form-check-label" for="flexRadioDefault28">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Terbiasa menjaga kebersihan diri dan lingkungan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault8"
                                                id="flexRadioDefault29">
                                            <label class="form-check-label" for="flexRadioDefault29">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault8"
                                                id="flexRadioDefault30" checked>
                                            <label class="form-check-label" for="flexRadioDefault30">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault8"
                                                id="flexRadioDefault31" checked>
                                            <label class="form-check-label" for="flexRadioDefault31">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault8"
                                                id="flexRadioDefault32" checked>
                                            <label class="form-check-label" for="flexRadioDefault32">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <!-- <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">Subheading</div>
                                    Content for list item
                                </div>
                            </li> -->
                    </ol>

                    <!-- fisik motorik -->
                    <ion-card-title class="text-dark mt-3">FISIK MOTORIK</ion-card-title>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Motorik kasar</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Melakukan berbagai gerakan terkoordinasi untuk melatih kelenturan, kelincahan
                                        dan keseimbangan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault9"
                                                id="flexRadioDefault33">
                                            <label class="form-check-label" for="flexRadioDefault33">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault9"
                                                id="flexRadioDefault34" checked>
                                            <label class="form-check-label" for="flexRadioDefault34">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault9"
                                                id="flexRadioDefault35" checked>
                                            <label class="form-check-label" for="flexRadioDefault35">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault9"
                                                id="flexRadioDefault36" checked>
                                            <label class="form-check-label" for="flexRadioDefault36">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan
                                        tarian <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault10"
                                                id="flexRadioDefault37">
                                            <label class="form-check-label" for="flexRadioDefault37">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault10"
                                                id="flexRadioDefault38" checked>
                                            <label class="form-check-label" for="flexRadioDefault38">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault10"
                                                id="flexRadioDefault39" checked>
                                            <label class="form-check-label" for="flexRadioDefault39">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault10"
                                                id="flexRadioDefault40" checked>
                                            <label class="form-check-label" for="flexRadioDefault40">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Melakukan permainan fisik dengan aturan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault11"
                                                id="flexRadioDefault41">
                                            <label class="form-check-label" for="flexRadioDefault41">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault11"
                                                id="flexRadioDefault42" checked>
                                            <label class="form-check-label" for="flexRadioDefault42">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault11"
                                                id="flexRadioDefault43" checked>
                                            <label class="form-check-label" for="flexRadioDefault43">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault11"
                                                id="flexRadioDefault44" checked>
                                            <label class="form-check-label" for="flexRadioDefault44">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Melakukan kegiatan kebersihan diri <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault12"
                                                id="flexRadioDefault45">
                                            <label class="form-check-label" for="flexRadioDefault45">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault12"
                                                id="flexRadioDefault46" checked>
                                            <label class="form-check-label" for="flexRadioDefault46">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault12"
                                                id="flexRadioDefault47" checked>
                                            <label class="form-check-label" for="flexRadioDefault47">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault12"
                                                id="flexRadioDefault48" checked>
                                            <label class="form-check-label" for="flexRadioDefault48">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Motorik Halus</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Menggambarkan sesuai gagasannya <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault13"
                                                id="flexRadioDefault49">
                                            <label class="form-check-label" for="flexRadioDefault49">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault13"
                                                id="flexRadioDefault50" checked>
                                            <label class="form-check-label" for="flexRadioDefault50">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault13"
                                                id="flexRadioDefault51" checked>
                                            <label class="form-check-label" for="flexRadioDefault51">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault13"
                                                id="flexRadioDefault52" checked>
                                            <label class="form-check-label" for="flexRadioDefault52">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan
                                        tarian <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault14"
                                                id="flexRadioDefault53">
                                            <label class="form-check-label" for="flexRadioDefault53">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault14"
                                                id="flexRadioDefault54" checked>
                                            <label class="form-check-label" for="flexRadioDefault54">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault14"
                                                id="flexRadioDefault55" checked>
                                            <label class="form-check-label" for="flexRadioDefault55">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault14"
                                                id="flexRadioDefault56" checked>
                                            <label class="form-check-label" for="flexRadioDefault56">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Melakukan eksplorasi dengan berbagai media dan kegiatan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault15"
                                                id="flexRadioDefault57">
                                            <label class="form-check-label" for="flexRadioDefault57">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault15"
                                                id="flexRadioDefault58" checked>
                                            <label class="form-check-label" for="flexRadioDefault58">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault15"
                                                id="flexRadioDefault59" checked>
                                            <label class="form-check-label" for="flexRadioDefault59">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault15"
                                                id="flexRadioDefault60" checked>
                                            <label class="form-check-label" for="flexRadioDefault60">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menggunakan alat tulis dan alat makan dengan benar <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault16"
                                                id="flexRadioDefault61">
                                            <label class="form-check-label" for="flexRadioDefault61">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault16"
                                                id="flexRadioDefault62" checked>
                                            <label class="form-check-label" for="flexRadioDefault62">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault16"
                                                id="flexRadioDefault63" checked>
                                            <label class="form-check-label" for="flexRadioDefault63">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault16"
                                                id="flexRadioDefault64" checked>
                                            <label class="form-check-label" for="flexRadioDefault64">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menggunting sesuai dengan pola <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault17"
                                                id="flexRadioDefault65">
                                            <label class="form-check-label" for="flexRadioDefault65">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault17"
                                                id="flexRadioDefault66" checked>
                                            <label class="form-check-label" for="flexRadioDefault66">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault17"
                                                id="flexRadioDefault67" checked>
                                            <label class="form-check-label" for="flexRadioDefault67">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault17"
                                                id="flexRadioDefault68" checked>
                                            <label class="form-check-label" for="flexRadioDefault68">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Terampil menggunakan tangan kanan dan kiri <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault18"
                                                id="flexRadioDefault69">
                                            <label class="form-check-label" for="flexRadioDefault69">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault18"
                                                id="flexRadioDefault70" checked>
                                            <label class="form-check-label" for="flexRadioDefault70">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault18"
                                                id="flexRadioDefault71" checked>
                                            <label class="form-check-label" for="flexRadioDefault71">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault18"
                                                id="flexRadioDefault72" checked>
                                            <label class="form-check-label" for="flexRadioDefault72">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menempel gambar dengan tepat <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault19"
                                                id="flexRadioDefault73">
                                            <label class="form-check-label" for="flexRadioDefault73">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault19"
                                                id="flexRadioDefault74" checked>
                                            <label class="form-check-label" for="flexRadioDefault74">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault19"
                                                id="flexRadioDefault75" checked>
                                            <label class="form-check-label" for="flexRadioDefault75">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault19"
                                                id="flexRadioDefault76" checked>
                                            <label class="form-check-label" for="flexRadioDefault76">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Kesehatan Dan Perilaku Keselamatan</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Mampu mengetahui situasi yang membahayakan diri <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault20"
                                                id="flexRadioDefault77">
                                            <label class="form-check-label" for="flexRadioDefault77">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault20"
                                                id="flexRadioDefault78" checked>
                                            <label class="form-check-label" for="flexRadioDefault78">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault20"
                                                id="flexRadioDefault79" checked>
                                            <label class="form-check-label" for="flexRadioDefault79">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault20"
                                                id="flexRadioDefault80" checked>
                                            <label class="form-check-label" for="flexRadioDefault80">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memebersihkan dan membereskan tempat bermain <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault81">
                                            <label class="form-check-label" for="flexRadioDefault81">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault82" checked>
                                            <label class="form-check-label" for="flexRadioDefault82">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault83" checked>
                                            <label class="form-check-label" for="flexRadioDefault83">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault84" checked>
                                            <label class="form-check-label" for="flexRadioDefault84">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menutup hidung dan mulut ketika bersin <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault85">
                                            <label class="form-check-label" for="flexRadioDefault85">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault86" checked>
                                            <label class="form-check-label" for="flexRadioDefault86">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault87" checked>
                                            <label class="form-check-label" for="flexRadioDefault87">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault88" checked>
                                            <label class="form-check-label" for="flexRadioDefault88">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                    </ol>

                    <!-- bahasa -->
                    <ion-card-title class="text-dark mt-3">BAHASA</ion-card-title>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Reseptif</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Mengerti beberapa perintah secara bersamaan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault23"
                                                id="flexRadioDefault89">
                                            <label class="form-check-label" for="flexRadioDefault89">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault23"
                                                id="flexRadioDefault90" checked>
                                            <label class="form-check-label" for="flexRadioDefault90">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault23"
                                                id="flexRadioDefault91" checked>
                                            <label class="form-check-label" for="flexRadioDefault91">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault23"
                                                id="flexRadioDefault92" checked>
                                            <label class="form-check-label" for="flexRadioDefault92">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengulang kalimat yang lebih kompleks <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault24"
                                                id="flexRadioDefault93">
                                            <label class="form-check-label" for="flexRadioDefault93">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault24"
                                                id="flexRadioDefault94" checked>
                                            <label class="form-check-label" for="flexRadioDefault94">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault24"
                                                id="flexRadioDefault95" checked>
                                            <label class="form-check-label" for="flexRadioDefault95">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault24"
                                                id="flexRadioDefault96" checked>
                                            <label class="form-check-label" for="flexRadioDefault96">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memahami aturang dalam suatu perintah <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault25"
                                                id="flexRadioDefault97">
                                            <label class="form-check-label" for="flexRadioDefault97">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault25"
                                                id="flexRadioDefault98" checked>
                                            <label class="form-check-label" for="flexRadioDefault98">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault25"
                                                id="flexRadioDefault99" checked>
                                            <label class="form-check-label" for="flexRadioDefault99">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault25"
                                                id="flexRadioDefault100" checked>
                                            <label class="form-check-label" for="flexRadioDefault100">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Senang dan menghargai bacaan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault26"
                                                id="flexRadioDefault101">
                                            <label class="form-check-label" for="flexRadioDefault101">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault26"
                                                id="flexRadioDefault102" checked>
                                            <label class="form-check-label" for="flexRadioDefault102">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault26"
                                                id="flexRadioDefault103" checked>
                                            <label class="form-check-label" for="flexRadioDefault103">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault26"
                                                id="flexRadioDefault48104" checked>
                                            <label class="form-check-label" for="flexRadioDefault48104">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Ekspresif</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Menjawab pertanyaan yang lebih kompleks <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault27"
                                                id="flexRadioDefault105">
                                            <label class="form-check-label" for="flexRadioDefault105">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault27"
                                                id="flexRadioDefault106" checked>
                                            <label class="form-check-label" for="flexRadioDefault106">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault27"
                                                id="flexRadioDefault107" checked>
                                            <label class="form-check-label" for="flexRadioDefault107">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault27"
                                                id="flexRadioDefault108" checked>
                                            <label class="form-check-label" for="flexRadioDefault108">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menyebutkan kelompok gambar yang memiliki bunyi yang sama <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault28"
                                                id="flexRadioDefault109">
                                            <label class="form-check-label" for="flexRadioDefault109">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault28"
                                                id="flexRadioDefault110" checked>
                                            <label class="form-check-label" for="flexRadioDefault110">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault28"
                                                id="flexRadioDefault111" checked>
                                            <label class="form-check-label" for="flexRadioDefault111">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault28"
                                                id="flexRadioDefault112" checked>
                                            <label class="form-check-label" for="flexRadioDefault112">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memiliki lebih banyak kata-kata untuk mengekspresikan ide <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault29"
                                                id="flexRadioDefault113">
                                            <label class="form-check-label" for="flexRadioDefault113">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault29"
                                                id="flexRadioDefault114" checked>
                                            <label class="form-check-label" for="flexRadioDefault114">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault29"
                                                id="flexRadioDefault115" checked>
                                            <label class="form-check-label" for="flexRadioDefault115">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault29"
                                                id="flexRadioDefault116" checked>
                                            <label class="form-check-label" for="flexRadioDefault116">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menyebutkan kalimat sederhana dalam struktur lengkap (pokok kalimat - predikat -
                                        keterangan) <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault30"
                                                id="flexRadioDefault117">
                                            <label class="form-check-label" for="flexRadioDefault117">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault30"
                                                id="flexRadioDefault118" checked>
                                            <label class="form-check-label" for="flexRadioDefault118">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault30"
                                                id="flexRadioDefault119" checked>
                                            <label class="form-check-label" for="flexRadioDefault119">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault30"
                                                id="flexRadioDefaul120" checked>
                                            <label class="form-check-label" for="flexRadioDefaul120">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mampu mengungkapkan pendapat <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault31"
                                                id="flexRadioDefault121">
                                            <label class="form-check-label" for="flexRadioDefault121">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault31"
                                                id="flexRadioDefault122" checked>
                                            <label class="form-check-label" for="flexRadioDefault122">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault31"
                                                id="flexRadioDefault123" checked>
                                            <label class="form-check-label" for="flexRadioDefault123">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault31"
                                                id="flexRadioDefault124" checked>
                                            <label class="form-check-label" for="flexRadioDefault124">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memiliki banyak perbendaharaan kata untuk mengekspresikan ide <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault32"
                                                id="flexRadioDefault125">
                                            <label class="form-check-label" for="flexRadioDefault125">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault32"
                                                id="flexRadioDefault126" checked>
                                            <label class="form-check-label" for="flexRadioDefault126">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault32"
                                                id="flexRadioDefault127" checked>
                                            <label class="form-check-label" for="flexRadioDefault127">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault32"
                                                id="flexRadioDefault128" checked>
                                            <label class="form-check-label" for="flexRadioDefault128">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Melanjutkan sebagian cerita yang telah diperdengarkan<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault33"
                                                id="flexRadioDefault129">
                                            <label class="form-check-label" for="flexRadioDefault129">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault33"
                                                id="flexRadioDefault130" checked>
                                            <label class="form-check-label" for="flexRadioDefault130">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault33"
                                                id="flexRadioDefault131" checked>
                                            <label class="form-check-label" for="flexRadioDefault131">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault33"
                                                id="flexRadioDefault132" checked>
                                            <label class="form-check-label" for="flexRadioDefault132">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Literasi</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Menyebutkan simbol-simbol huruf yang dikenal<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault34"
                                                id="flexRadioDefault133">
                                            <label class="form-check-label" for="flexRadioDefault133">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault34"
                                                id="flexRadioDefault134" checked>
                                            <label class="form-check-label" for="flexRadioDefault134">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault34"
                                                id="flexRadioDefault135" checked>
                                            <label class="form-check-label" for="flexRadioDefault135">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault34"
                                                id="flexRadioDefault136" checked>
                                            <label class="form-check-label" for="flexRadioDefault136">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengenal suara huruf awal dari nama benda-benda yang ada disekitarnya<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault35"
                                                id="flexRadioDefault137">
                                            <label class="form-check-label" for="flexRadioDefault137">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault35"
                                                id="flexRadioDefault138" checked>
                                            <label class="form-check-label" for="flexRadioDefault138">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault35"
                                                id="flexRadioDefault139" checked>
                                            <label class="form-check-label" for="flexRadioDefault139">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault35"
                                                id="flexRadioDefault140" checked>
                                            <label class="form-check-label" for="flexRadioDefault140">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menyebutkan kelompok gambar yang memiliki bunyi / huruf awal yang sama<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault36"
                                                id="flexRadioDefault141">
                                            <label class="form-check-label" for="flexRadioDefault141">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault36"
                                                id="flexRadioDefault142" checked>
                                            <label class="form-check-label" for="flexRadioDefault142">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault36"
                                                id="flexRadioDefault143" checked>
                                            <label class="form-check-label" for="flexRadioDefault143">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault36"
                                                id="flexRadioDefault144" checked>
                                            <label class="form-check-label" for="flexRadioDefault144">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memahami hubungan antara bunyi dan bentuk huruf <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault37"
                                                id="flexRadioDefault145">
                                            <label class="form-check-label" for="flexRadioDefault145">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault37"
                                                id="flexRadioDefault146" checked>
                                            <label class="form-check-label" for="flexRadioDefault146">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault37"
                                                id="flexRadioDefault147" checked>
                                            <label class="form-check-label" for="flexRadioDefault147">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault37"
                                                id="flexRadioDefault148" checked>
                                            <label class="form-check-label" for="flexRadioDefault148">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menuliskan dan membaca nama diri sendiri <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault38"
                                                id="flexRadioDefault149">
                                            <label class="form-check-label" for="flexRadioDefault149">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault38"
                                                id="flexRadioDefault150" checked>
                                            <label class="form-check-label" for="flexRadioDefault150">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault38"
                                                id="flexRadioDefault151" checked>
                                            <label class="form-check-label" for="flexRadioDefault151">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault38"
                                                id="flexRadioDefault152" checked>
                                            <label class="form-check-label" for="flexRadioDefault152">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memahami arti kata <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault39"
                                                id="flexRadioDefault153">
                                            <label class="form-check-label" for="flexRadioDefault153">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault39"
                                                id="flexRadioDefault154" checked>
                                            <label class="form-check-label" for="flexRadioDefault154">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault39"
                                                id="flexRadioDefault155" checked>
                                            <label class="form-check-label" for="flexRadioDefault155">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault39"
                                                id="flexRadioDefault156" checked>
                                            <label class="form-check-label" for="flexRadioDefault156">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                    </ol>

                    <!-- kognitif -->
                    <ion-card-title class="text-dark mt-3">KOGNITIF</ion-card-title>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Belajar dan Pemecahan Masalah</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Menunjukan aktifitas yang bersifat eksploratif dan menyelidik <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault40"
                                                id="flexRadioDefault157">
                                            <label class="form-check-label" for="flexRadioDefault157">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault40"
                                                id="flexRadioDefault158" checked>
                                            <label class="form-check-label" for="flexRadioDefault158">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault40"
                                                id="flexRadioDefault159" checked>
                                            <label class="form-check-label" for="flexRadioDefault159">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault40"
                                                id="flexRadioDefault160" checked>
                                            <label class="form-check-label" for="flexRadioDefault160">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Kreatif dalam menyelesaikan masalah <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault41"
                                                id="flexRadioDefault161">
                                            <label class="form-check-label" for="flexRadioDefault161">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault41"
                                                id="flexRadioDefault162" checked>
                                            <label class="form-check-label" for="flexRadioDefault162">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault41"
                                                id="flexRadioDefault163" checked>
                                            <label class="form-check-label" for="flexRadioDefault163">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault41"
                                                id="flexRadioDefault164" checked>
                                            <label class="form-check-label" for="flexRadioDefault164">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memecahkan sendiri masalah sederhana dalam kehidupan sehari-hari <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault42"
                                                id="flexRadioDefault165">
                                            <label class="form-check-label" for="flexRadioDefault165">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault42"
                                                id="flexRadioDefault166" checked>
                                            <label class="form-check-label" for="flexRadioDefault166">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault42"
                                                id="flexRadioDefault167" checked>
                                            <label class="form-check-label" for="flexRadioDefault167">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault42"
                                                id="flexRadioDefault168" checked>
                                            <label class="form-check-label" for="flexRadioDefault168">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Berpikir Logis</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Mengenal perbedaan berdasarkan ukuran "lebih dari" ; "kurang dari" ; dan
                                        "paling/ter" <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault43"
                                                id="flexRadioDefault169">
                                            <label class="form-check-label" for="flexRadioDefault169">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault43"
                                                id="flexRadioDefault170" checked>
                                            <label class="form-check-label" for="flexRadioDefault170">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault43"
                                                id="flexRadioDefault171" checked>
                                            <label class="form-check-label" for="flexRadioDefault171">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault43"
                                                id="flexRadioDefault172" checked>
                                            <label class="form-check-label" for="flexRadioDefault172">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menyusun perencanaan kegiatan yang akan dilakukan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault44"
                                                id="flexRadioDefault173">
                                            <label class="form-check-label" for="flexRadioDefault173">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault44"
                                                id="flexRadioDefault174" checked>
                                            <label class="form-check-label" for="flexRadioDefault174">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault44"
                                                id="flexRadioDefault175" checked>
                                            <label class="form-check-label" for="flexRadioDefault175">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault44"
                                                id="flexRadioDefault176" checked>
                                            <label class="form-check-label" for="flexRadioDefault176">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengenal sebab - akibat tentang lingkungannya <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault45"
                                                id="flexRadioDefault177">
                                            <label class="form-check-label" for="flexRadioDefault177">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault45"
                                                id="flexRadioDefault178" checked>
                                            <label class="form-check-label" for="flexRadioDefault178">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault45"
                                                id="flexRadioDefault179" checked>
                                            <label class="form-check-label" for="flexRadioDefault179">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault45"
                                                id="flexRadioDefault180" checked>
                                            <label class="form-check-label" for="flexRadioDefault180">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengklasifikasikan benda berdasarkan warna, bentuk, dan ukuran <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault46"
                                                id="flexRadioDefault181">
                                            <label class="form-check-label" for="flexRadioDefault181">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault46"
                                                id="flexRadioDefaul182" checked>
                                            <label class="form-check-label" for="flexRadioDefaul182">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault46"
                                                id="flexRadioDefault183" checked>
                                            <label class="form-check-label" for="flexRadioDefault183">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault46"
                                                id="flexRadioDefault184" checked>
                                            <label class="form-check-label" for="flexRadioDefault184">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengenal pola ABCD-ABCD <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault47"
                                                id="flexRadioDefault185">
                                            <label class="form-check-label" for="flexRadioDefault185">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault47"
                                                id="flexRadioDefault186" checked>
                                            <label class="form-check-label" for="flexRadioDefault186">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault47"
                                                id="flexRadioDefault187" checked>
                                            <label class="form-check-label" for="flexRadioDefault187">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault47"
                                                id="flexRadioDefault188" checked>
                                            <label class="form-check-label" for="flexRadioDefault188">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengurutkan benda berdasarkan ukuran dari paling kecil kepaling besar atau
                                        sebaliknya <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault48"
                                                id="flexRadioDefault189">
                                            <label class="form-check-label" for="flexRadioDefault189">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault48"
                                                id="flexRadioDefault190" checked>
                                            <label class="form-check-label" for="flexRadioDefault190">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault48"
                                                id="flexRadioDefault191" checked>
                                            <label class="form-check-label" for="flexRadioDefault191">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault48"
                                                id="flexRadioDefault192" checked>
                                            <label class="form-check-label" for="flexRadioDefault192">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Berfikir Simbolik (Matematika Sederhana)</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Menggunakan lambang bilangan untuk menghitung<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault49"
                                                id="flexRadioDefault193">
                                            <label class="form-check-label" for="flexRadioDefault193">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault49"
                                                id="flexRadioDefault194" checked>
                                            <label class="form-check-label" for="flexRadioDefault194">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault49"
                                                id="flexRadioDefault195" checked>
                                            <label class="form-check-label" for="flexRadioDefault195">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault49"
                                                id="flexRadioDefault196" checked>
                                            <label class="form-check-label" for="flexRadioDefault196">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menyebutkan lambang bilangan untuk menghitung<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault50"
                                                id="flexRadioDefault197">
                                            <label class="form-check-label" for="flexRadioDefault197">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault50"
                                                id="flexRadioDefault198" checked>
                                            <label class="form-check-label" for="flexRadioDefault198">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault50"
                                                id="flexRadioDefault199" checked>
                                            <label class="form-check-label" for="flexRadioDefault199">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault50"
                                                id="flexRadioDefault200" checked>
                                            <label class="form-check-label" for="flexRadioDefault200">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mencocokan lambang bilangan dengan bilangan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault51"
                                                id="flexRadioDefault201">
                                            <label class="form-check-label" for="flexRadioDefault201">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault51"
                                                id="flexRadioDefault202" checked>
                                            <label class="form-check-label" for="flexRadioDefault202">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault51"
                                                id="flexRadioDefault203" checked>
                                            <label class="form-check-label" for="flexRadioDefault203">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault51"
                                                id="flexRadioDefault204" checked>
                                            <label class="form-check-label" for="flexRadioDefault204">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Membedakan dan mengelompokan benda yang jumlahnya sama, tidak sama, lebih
                                        banyak, <br>lebih sedikit
                                        dari 2 kumpulan benda termasuk penjumlahan dan pengurangan <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault52"
                                                id="flexRadioDefault205">
                                            <label class="form-check-label" for="flexRadioDefault205">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault52"
                                                id="flexRadioDefault206" checked>
                                            <label class="form-check-label" for="flexRadioDefault206">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault52"
                                                id="flexRadioDefault207" checked>
                                            <label class="form-check-label" for="flexRadioDefault207">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault52"
                                                id="flexRadioDefault208" checked>
                                            <label class="form-check-label" for="flexRadioDefault208">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                    </ol>

                    <!-- sosial emosional -->
                    <ion-card-title class="text-dark mt-3">SOSIAL EMOSIONAL</ion-card-title>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Kesadaran Diri</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Memperlihatkan kemampuan diri untuk menyesuaikan dengan situasi <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault53"
                                                id="flexRadioDefault209">
                                            <label class="form-check-label" for="flexRadioDefault209">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault53"
                                                id="flexRadioDefault210" checked>
                                            <label class="form-check-label" for="flexRadioDefault210">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault53"
                                                id="flexRadioDefault211" checked>
                                            <label class="form-check-label" for="flexRadioDefault211">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault53"
                                                id="flexRadioDefault212" checked>
                                            <label class="form-check-label" for="flexRadioDefault212">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memperhatikan kehati-hatian kepada orang yang belum dikenal <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault54"
                                                id="flexRadioDefault213">
                                            <label class="form-check-label" for="flexRadioDefault213">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault54"
                                                id="flexRadioDefault214" checked>
                                            <label class="form-check-label" for="flexRadioDefault214">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault54"
                                                id="flexRadioDefault215" checked>
                                            <label class="form-check-label" for="flexRadioDefault215">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault54"
                                                id="flexRadioDefault216" checked>
                                            <label class="form-check-label" for="flexRadioDefault216">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Rasa Tanggung Jawab Atas Perilakunya Untuk Kebaikan Diri Sendiri
                                </div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Bertanggung jawab atas perilakunya untuk kebaikan diri sendiri <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault55"
                                                id="flexRadioDefault217">
                                            <label class="form-check-label" for="flexRadioDefault217">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault55"
                                                id="flexRadioDefault218" checked>
                                            <label class="form-check-label" for="flexRadioDefault218">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault55"
                                                id="flexRadioDefault219" checked>
                                            <label class="form-check-label" for="flexRadioDefault219">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault55"
                                                id="flexRadioDefault220" checked>
                                            <label class="form-check-label" for="flexRadioDefault220">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Tahu akan Haknya <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault56"
                                                id="flexRadioDefault221">
                                            <label class="form-check-label" for="flexRadioDefault221">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault56"
                                                id="flexRadioDefault222" checked>
                                            <label class="form-check-label" for="flexRadioDefault222">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault56"
                                                id="flexRadioDefault223" checked>
                                            <label class="form-check-label" for="flexRadioDefault223">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault56"
                                                id="flexRadioDefault224" checked>
                                            <label class="form-check-label" for="flexRadioDefault224">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mentaati aturan kelas (Kegiatan, Aturan) <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault57"
                                                id="flexRadioDefault225">
                                            <label class="form-check-label" for="flexRadioDefault225">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault57"
                                                id="flexRadioDefault226" checked>
                                            <label class="form-check-label" for="flexRadioDefault226">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault57"
                                                id="flexRadioDefault227" checked>
                                            <label class="form-check-label" for="flexRadioDefault227">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault57"
                                                id="flexRadioDefault228" checked>
                                            <label class="form-check-label" for="flexRadioDefault228">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengatur diri sendiri <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault58"
                                                id="flexRadioDefault229">
                                            <label class="form-check-label" for="flexRadioDefault229">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault58"
                                                id="flexRadioDefault230" checked>
                                            <label class="form-check-label" for="flexRadioDefault230">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault58"
                                                id="flexRadioDefault231" checked>
                                            <label class="form-check-label" for="flexRadioDefault231">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault58"
                                                id="flexRadioDefault232" checked>
                                            <label class="form-check-label" for="flexRadioDefault232">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Perilaku Prososial</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Bermain dengan teman sebaya<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault59"
                                                id="flexRadioDefault233">
                                            <label class="form-check-label" for="flexRadioDefault233">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault59"
                                                id="flexRadioDefault234" checked>
                                            <label class="form-check-label" for="flexRadioDefault234">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault59"
                                                id="flexRadioDefault235" checked>
                                            <label class="form-check-label" for="flexRadioDefault235">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault59"
                                                id="flexRadioDefault236" checked>
                                            <label class="form-check-label" for="flexRadioDefault236">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengetahui perasaan temannya dan merespon secara wajar<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault60"
                                                id="flexRadioDefault237">
                                            <label class="form-check-label" for="flexRadioDefault237">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault60"
                                                id="flexRadioDefault238" checked>
                                            <label class="form-check-label" for="flexRadioDefault238">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault60"
                                                id="flexRadioDefault239" checked>
                                            <label class="form-check-label" for="flexRadioDefault239">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault60"
                                                id="flexRadioDefault240" checked>
                                            <label class="form-check-label" for="flexRadioDefault240">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Berbagi dengan orang lain <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault61"
                                                id="flexRadioDefault241">
                                            <label class="form-check-label" for="flexRadioDefault241">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault61"
                                                id="flexRadioDefault242" checked>
                                            <label class="form-check-label" for="flexRadioDefault242">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault61"
                                                id="flexRadioDefault243" checked>
                                            <label class="form-check-label" for="flexRadioDefault243">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault61"
                                                id="flexRadioDefault244" checked>
                                            <label class="form-check-label" for="flexRadioDefault244">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menghargai hak/pendapat/karya orang lain<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault62"
                                                id="flexRadioDefault245">
                                            <label class="form-check-label" for="flexRadioDefault245">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault62"
                                                id="flexRadioDefault246" checked>
                                            <label class="form-check-label" for="flexRadioDefault246">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault62"
                                                id="flexRadioDefault247" checked>
                                            <label class="form-check-label" for="flexRadioDefault247">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault62"
                                                id="flexRadioDefault248" checked>
                                            <label class="form-check-label" for="flexRadioDefault248">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menggunakan cara yang diterima secara sosial dalam menyelesaikan <br>
                                        masalah (menggunakan pikiran untuk menyelesaikan masalah)<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault63"
                                                id="flexRadioDefault249">
                                            <label class="form-check-label" for="flexRadioDefault249">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault63"
                                                id="flexRadioDefault250" checked>
                                            <label class="form-check-label" for="flexRadioDefault250">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault63"
                                                id="flexRadioDefault251" checked>
                                            <label class="form-check-label" for="flexRadioDefault251">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault63"
                                                id="flexRadioDefault252" checked>
                                            <label class="form-check-label" for="flexRadioDefault252">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Bersikap kooperatif dengan teman<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault64"
                                                id="flexRadioDefault253">
                                            <label class="form-check-label" for="flexRadioDefault253">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault64"
                                                id="flexRadioDefault254" checked>
                                            <label class="form-check-label" for="flexRadioDefault254">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault64"
                                                id="flexRadioDefault255" checked>
                                            <label class="form-check-label" for="flexRadioDefault255">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault64"
                                                id="flexRadioDefault256" checked>
                                            <label class="form-check-label" for="flexRadioDefault256">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menunjukan sikap toleran<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault65"
                                                id="flexRadioDefault257">
                                            <label class="form-check-label" for="flexRadioDefault257">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault65"
                                                id="flexRadioDefault258" checked>
                                            <label class="form-check-label" for="flexRadioDefault258">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault65"
                                                id="flexRadioDefault259" checked>
                                            <label class="form-check-label" for="flexRadioDefault259">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault65"
                                                id="flexRadioDefault260" checked>
                                            <label class="form-check-label" for="flexRadioDefault260">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengekspresikan emosi yang sesuai dengan kondisi yang ada (senang-sedih-antusias
                                        dsb)<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault66"
                                                id="flexRadioDefault261">
                                            <label class="form-check-label" for="flexRadioDefault261">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault66"
                                                id="flexRadioDefault262" checked>
                                            <label class="form-check-label" for="flexRadioDefault262">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault66"
                                                id="flexRadioDefault263" checked>
                                            <label class="form-check-label" for="flexRadioDefault263">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault66"
                                                id="flexRadioDefault264" checked>
                                            <label class="form-check-label" for="flexRadioDefault264">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Mengenal tata krama dan sopan santun dengan nilai sosial budaya setempa<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault67"
                                                id="flexRadioDefault265">
                                            <label class="form-check-label" for="flexRadioDefault265">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault67"
                                                id="flexRadioDefault266" checked>
                                            <label class="form-check-label" for="flexRadioDefault266">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault67"
                                                id="flexRadioDefault267" checked>
                                            <label class="form-check-label" for="flexRadioDefault267">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault67"
                                                id="flexRadioDefault268" checked>
                                            <label class="form-check-label" for="flexRadioDefault268">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                    </ol>

                    <!-- seni -->
                    <ion-card-title class="text-dark mt-3">SENI</ion-card-title>
                    <ol class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <!-- <div class="fw-bold">Kesadaran Diri</div> -->
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Menghargai keindahan diri sendiri, karya sendiri atau orang lain, alam dan
                                        lingkungan sekitar<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault68"
                                                id="flexRadioDefault269">
                                            <label class="form-check-label" for="flexRadioDefault269">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault68"
                                                id="flexRadioDefault270" checked>
                                            <label class="form-check-label" for="flexRadioDefault270">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault68"
                                                id="flexRadioDefault271" checked>
                                            <label class="form-check-label" for="flexRadioDefault271">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault68"
                                                id="flexRadioDefault272" checked>
                                            <label class="form-check-label" for="flexRadioDefault272">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Bermain drama sederhana<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault69"
                                                id="flexRadioDefault273">
                                            <label class="form-check-label" for="flexRadioDefault273">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault69"
                                                id="flexRadioDefault274" checked>
                                            <label class="form-check-label" for="flexRadioDefault274">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault69"
                                                id="flexRadioDefault275" checked>
                                            <label class="form-check-label" for="flexRadioDefault275">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault69"
                                                id="flexRadioDefault276" checked>
                                            <label class="form-check-label" for="flexRadioDefault276">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menggambar berbagai macam bentuk yang beragam<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault70"
                                                id="flexRadioDefault277">
                                            <label class="form-check-label" for="flexRadioDefault277">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault70"
                                                id="flexRadioDefault278" checked>
                                            <label class="form-check-label" for="flexRadioDefault278">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault70"
                                                id="flexRadioDefault279" checked>
                                            <label class="form-check-label" for="flexRadioDefault279">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault70"
                                                id="flexRadioDefault280" checked>
                                            <label class="form-check-label" for="flexRadioDefault280">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Melukis dengan berbagai cara dan objek<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault71"
                                                id="flexRadioDefault281">
                                            <label class="form-check-label" for="flexRadioDefault281">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault71"
                                                id="flexRadioDefault282" checked>
                                            <label class="form-check-label" for="flexRadioDefault282">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault71"
                                                id="flexRadioDefault283" checked>
                                            <label class="form-check-label" for="flexRadioDefault283">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault71"
                                                id="flexRadioDefault284" checked>
                                            <label class="form-check-label" for="flexRadioDefault284">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Anak bersenandung atau bernyanyi sambil mengerjakan sesuatu<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault72"
                                                id="flexRadioDefault285">
                                            <label class="form-check-label" for="flexRadioDefault285">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault72"
                                                id="flexRadioDefault286" checked>
                                            <label class="form-check-label" for="flexRadioDefault286">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault72"
                                                id="flexRadioDefault287" checked>
                                            <label class="form-check-label" for="flexRadioDefault287">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault72"
                                                id="flexRadioDefault288" checked>
                                            <label class="form-check-label" for="flexRadioDefault288">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memainkan alat musik/instrumen/benda bersama teman<br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault73"
                                                id="flexRadioDefault289">
                                            <label class="form-check-label" for="flexRadioDefault289">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault73"
                                                id="flexRadioDefault290" checked>
                                            <label class="form-check-label" for="flexRadioDefault290">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault73"
                                                id="flexRadioDefault291" checked>
                                            <label class="form-check-label" for="flexRadioDefault291">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault73"
                                                id="flexRadioDefault292" checked>
                                            <label class="form-check-label" for="flexRadioDefault292">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                            <!-- <span class="badge bg-primary rounded-pill">14</span> -->
                        </li>
                    </ol>

                    <div>
                        <ion-row class="ion-justify-content-center row-button mt-4 mb-3">
                            <ion-col size="6" size-sm="2">
                                <a class="btn btn-danger"
                                    href="/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor/InputNilaiPesertaDidikRapor"
                                    role="button">Batalkan</a>
                            </ion-col>
                            <ion-col size="6" size-sm="2">
                                <a class="btn btn-primary" role="button"
                                    href="javascript: doSomethingForSaveInputRapor()">Simpan</a>
                            </ion-col>
                        </ion-row>
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
    IonCard, IonCardContent, IonCardTitle
    // IonSearchbar 
} from '@ionic/vue';
import axios from "axios";

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
        IonCard, IonCardContent, IonCardTitle
        // IonSearchbar
    },
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

.noted {
    font-size: 12px;
}

.noted ul li {
    list-style-type: none;
    list-style: none;
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