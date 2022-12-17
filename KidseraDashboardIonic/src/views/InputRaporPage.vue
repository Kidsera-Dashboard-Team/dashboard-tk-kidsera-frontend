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
                    <ion-card-title class="text-dark">FISIK MOTORIK</ion-card-title>
                    <ol class="list-group list-group-numbered">
                        <li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">Motorik kasar</div>
                                <ol class="list-group list-group-numbered">
                                    <li class="list-group-item">
                                        Melakukan berbagai gerakan terkoordinasi untuk melatih kelenturan, kelincahan dan keseimbangan <br>
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
                                        Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan tarian <br>
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
                                        Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan tarian <br>
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
                                                id="flexRadioDefault78">
                                            <label class="form-check-label" for="flexRadioDefault78">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault20"
                                                id="flexRadioDefault79" checked>
                                            <label class="form-check-label" for="flexRadioDefault79">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault20"
                                                id="flexRadioDefault80" checked>
                                            <label class="form-check-label" for="flexRadioDefault80">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault20"
                                                id="flexRadioDefault81" checked>
                                            <label class="form-check-label" for="flexRadioDefault81">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Memebersihkan dan membereskan tempat bermain <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault82">
                                            <label class="form-check-label" for="flexRadioDefault82">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault83" checked>
                                            <label class="form-check-label" for="flexRadioDefault83">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault84" checked>
                                            <label class="form-check-label" for="flexRadioDefault84">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault21"
                                                id="flexRadioDefault85" checked>
                                            <label class="form-check-label" for="flexRadioDefault85">
                                                BSB
                                            </label>
                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        Menutup hidung dan mulut ketika bersin <br>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault86">
                                            <label class="form-check-label" for="flexRadioDefault86">
                                                BB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault87" checked>
                                            <label class="form-check-label" for="flexRadioDefault87">
                                                MB
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault88" checked>
                                            <label class="form-check-label" for="flexRadioDefault88">
                                                BSH
                                            </label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="flexRadioDefault22"
                                                id="flexRadioDefault89" checked>
                                            <label class="form-check-label" for="flexRadioDefault89">
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