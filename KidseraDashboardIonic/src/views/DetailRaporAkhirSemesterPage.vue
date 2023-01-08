<template>
  <ion-page>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-grid>
        <ion-row class="ion-justify-content-between">
          <ion-col size="3" size-xl="6">
            <ion-title class="d-none d-lg-inline-block" size="small"
              ><span style="opacity: 50%">Pages</span> / E - Rapor <br />
              <span style="font-size: 18px; letter-spacing: 2.5px">E - Rapor</span>
            </ion-title>
          </ion-col>
          <ion-col size-sm="9" size="10" size-xl="6">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown" aria-expanded="true" style="background-color: transparent">
                  Hi User 13141
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
              <a href="/SignUp" class="d-none d-sm-inline-block mb-1 text-info text-gradient" style="text-decoration: none">&nbsp;Add User</a>
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
                    Mengenal agama yang dianut <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault" id="flexRadioDefault1" v-model="aaa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault1"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault" id="flexRadioDefault2" v-model="aaa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault2"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault" id="flexRadioDefault3" v-model="aaa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault3"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault" id="flexRadioDefault4" v-model="aaa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault4"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengerjakan Ibadah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault2" id="flexRadioDefault5" v-model="aab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault5"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault2" id="flexRadioDefault6" v-model="aab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault6"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault2" id="flexRadioDefault7" v-model="aab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault7"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault2" id="flexRadioDefault8" v-model="aab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault8"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Terbiasa rasa syukur terhadap ciptaan Allah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault3" id="flexRadioDefault9" v-model="aac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault9"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault3" id="flexRadioDefault10" v-model="aac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault10"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault3" id="flexRadioDefault11" v-model="aac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault11"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault3" id="flexRadioDefault12" v-model="aac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault12"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengucapkan doa-doa pendek dan ibadah harian <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault4" id="flexRadioDefault13" v-model="aad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault13"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault4" id="flexRadioDefault14" v-model="aad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault14"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault4" id="flexRadioDefault15" v-model="aad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault15"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault4" id="flexRadioDefault16" v-model="aad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault16"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan hari - hari besar agama <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault5" id="flexRadioDefault17" v-model="aae" value="1" />
                      <label class="form-check-label" for="flexRadioDefault17"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault5" id="flexRadioDefault18" v-model="aae" value="2" />
                      <label class="form-check-label" for="flexRadioDefault18"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault5" id="flexRadioDefault19" v-model="aae" value="3" />
                      <label class="form-check-label" for="flexRadioDefault19"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault5" id="flexRadioDefault20" v-model="aae" value="4" />
                      <label class="form-check-label" for="flexRadioDefault20"> BSB </label>
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
                    Menghormati agama orang lain (toleransi) <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault6" id="flexRadioDefault21" v-model="aba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault21"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault6" id="flexRadioDefault22" v-model="aba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault22"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault6" id="flexRadioDefault23" v-model="aba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault23"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault6" id="flexRadioDefault24" v-model="aba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault24"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Terbiasa menjaga kebersihan diri dan lingkungan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault7" id="flexRadioDefault25" v-model="abb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault25"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault7" id="flexRadioDefault26" v-model="abb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault26"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault7" id="flexRadioDefault27" v-model="abb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault27"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault7" id="flexRadioDefault28" v-model="abb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault28"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Terbiasa menjaga kebersihan diri dan lingkungan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault8" id="flexRadioDefault29" v-model="abc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault29"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault8" id="flexRadioDefault30" v-model="abc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault30"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault8" id="flexRadioDefault31" v-model="abc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault31"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault8" id="flexRadioDefault32" v-model="abc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault32"> BSB </label>
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
                    Melakukan berbagai gerakan terkoordinasi untuk melatih kelenturan, kelincahan dan keseimbangan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault9" id="flexRadioDefault33" v-model="baa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault33"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault9" id="flexRadioDefault34" v-model="baa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault34"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault9" id="flexRadioDefault35" v-model="baa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault35"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault9" id="flexRadioDefault36" v-model="baa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault36"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan tarian <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault10" id="flexRadioDefault37" v-model="bab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault37"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault10" id="flexRadioDefault38" v-model="bab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault38"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault10" id="flexRadioDefault39" v-model="bab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault39"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault10" id="flexRadioDefault40" v-model="bab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault40"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Melakukan permainan fisik dengan aturan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault11" id="flexRadioDefault41" v-model="bac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault41"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault11" id="flexRadioDefault42" v-model="bac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault42"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault11" id="flexRadioDefault43" v-model="bac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault43"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault11" id="flexRadioDefault44" v-model="bac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault44"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Melakukan kegiatan kebersihan diri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault12" id="flexRadioDefault45" v-model="bad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault45"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault12" id="flexRadioDefault46" v-model="bad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault46"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault12" id="flexRadioDefault47" v-model="bad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault47"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault12" id="flexRadioDefault48" v-model="bad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault48"> BSB </label>
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
                    Menggambarkan sesuai gagasannya <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault13" id="flexRadioDefault49" v-model="bba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault49"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault13" id="flexRadioDefault50" v-model="bba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault50"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault13" id="flexRadioDefault51" v-model="bba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault51"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault13" id="flexRadioDefault52" v-model="bba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault52"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan tarian <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault14" id="flexRadioDefault53" v-model="bbb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault53"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault14" id="flexRadioDefault54" v-model="bbb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault54"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault14" id="flexRadioDefault55" v-model="bbb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault55"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault14" id="flexRadioDefault56" v-model="bbb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault56"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Melakukan eksplorasi dengan berbagai media dan kegiatan
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault15" id="flexRadioDefault57" v-model="bbc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault57"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault15" id="flexRadioDefault58" v-model="bbc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault58"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault15" id="flexRadioDefault59" v-model="bbc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault59"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault15" id="flexRadioDefault60" v-model="bbc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault60"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menggunakan alat tulis dan alat makan dengan benar <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault16" id="flexRadioDefault61" v-model="bbd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault61"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault16" id="flexRadioDefault62" v-model="bbd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault62"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault16" id="flexRadioDefault63" v-model="bbd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault63"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault16" id="flexRadioDefault64" v-model="bbd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault64"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menggunting sesuai dengan pola <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault17" id="flexRadioDefault65" v-model="bbe" value="1" />
                      <label class="form-check-label" for="flexRadioDefault65"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault17" id="flexRadioDefault66" v-model="bbe" value="2" />
                      <label class="form-check-label" for="flexRadioDefault66"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault17" id="flexRadioDefault67" v-model="bbe" value="3" />
                      <label class="form-check-label" for="flexRadioDefault67"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault17" id="flexRadioDefault68" v-model="bbe" value="4" />
                      <label class="form-check-label" for="flexRadioDefault68"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Terampil menggunakan tangan kanan dan kiri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault18" id="flexRadioDefault69" v-model="bbf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault69"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault18" id="flexRadioDefault70" v-model="bbf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault70"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault18" id="flexRadioDefault71" v-model="bbf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault71"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault18" id="flexRadioDefault72" v-model="bbf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault72"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menempel gambar dengan tepat <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault19" id="flexRadioDefault73" v-model="bbg" value="1" />
                      <label class="form-check-label" for="flexRadioDefault73"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault19" id="flexRadioDefault74" v-model="bbg" value="2" />
                      <label class="form-check-label" for="flexRadioDefault74"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault19" id="flexRadioDefault75" v-model="bbg" value="3" />
                      <label class="form-check-label" for="flexRadioDefault75"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault19" id="flexRadioDefault76" v-model="bbg" value="4" />
                      <label class="form-check-label" for="flexRadioDefault76"> BSB </label>
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
                    Mampu mengetahui situasi yang membahayakan diri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault20" id="flexRadioDefault77" v-model="bca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault77"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault20" id="flexRadioDefault78" v-model="bca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault78"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault20" id="flexRadioDefault79" v-model="bca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault79"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault20" id="flexRadioDefault80" v-model="bca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault80"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memebersihkan dan membereskan tempat bermain <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault21" id="flexRadioDefault81" v-model="bcb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault81"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault21" id="flexRadioDefault82" v-model="bcb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault82"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault21" id="flexRadioDefault83" v-model="bcb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault83"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault21" id="flexRadioDefault84" v-model="bcb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault84"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menutup hidung dan mulut ketika bersin <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault22" id="flexRadioDefault85" v-model="bcc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault85"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault22" id="flexRadioDefault86" v-model="bcc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault86"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault22" id="flexRadioDefault87" v-model="bcc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault87"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault22" id="flexRadioDefault88" v-model="bcc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault88"> BSB </label>
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
                    Mengerti beberapa perintah secara bersamaan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault23" id="flexRadioDefault89" v-model="caa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault89"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault23" id="flexRadioDefault90" v-model="caa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault90"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault23" id="flexRadioDefault91" v-model="caa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault91"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault23" id="flexRadioDefault92" v-model="caa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault92"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengulang kalimat yang lebih kompleks <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault24" id="flexRadioDefault93" v-model="cab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault93"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault24" id="flexRadioDefault94" v-model="cab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault94"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault24" id="flexRadioDefault95" v-model="cab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault95"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault24" id="flexRadioDefault96" v-model="cab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault96"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memahami aturang dalam suatu perintah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault25" id="flexRadioDefault97" v-model="cac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault97"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault25" id="flexRadioDefault98" v-model="cac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault98"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault25" id="flexRadioDefault99" v-model="cac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault99"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault25" id="flexRadioDefault100" v-model="cac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault100"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Senang dan menghargai bacaan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault26" id="flexRadioDefault101" v-model="cad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault101"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault26" id="flexRadioDefault102" v-model="cad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault102"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault26" id="flexRadioDefault103" v-model="cad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault103"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault26" id="flexRadioDefault48104" v-model="cad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault48104"> BSB </label>
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
                    Menjawab pertanyaan yang lebih kompleks <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault27" id="flexRadioDefault105" v-model="cba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault105"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault27" id="flexRadioDefault106" v-model="cba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault106"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault27" id="flexRadioDefault107" v-model="cba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault107"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault27" id="flexRadioDefault108" v-model="cba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault108"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan kelompok gambar yang memiliki bunyi yang sama
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault28" id="flexRadioDefault109" v-model="cbb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault109"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault28" id="flexRadioDefault110" v-model="cbb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault110"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault28" id="flexRadioDefault111" v-model="cbb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault111"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault28" id="flexRadioDefault112" v-model="cbb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault112"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memiliki lebih banyak kata-kata untuk mengekspresikan ide
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault29" id="flexRadioDefault113" v-model="cbc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault113"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault29" id="flexRadioDefault114" v-model="cbc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault114"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault29" id="flexRadioDefault115" v-model="cbc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault115"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault29" id="flexRadioDefault116" v-model="cbc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault116"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan kalimat sederhana dalam struktur lengkap (pokok kalimat - predikat - keterangan) <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault30" id="flexRadioDefault117" v-model="cbd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault117"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault30" id="flexRadioDefault118" v-model="cbd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault118"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault30" id="flexRadioDefault119" v-model="cbd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault119"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault30" id="flexRadioDefaul120" v-model="cbd" value="4" />
                      <label class="form-check-label" for="flexRadioDefaul120"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mampu mengungkapkan pendapat <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault31" id="flexRadioDefault121" v-model="cbe" value="1" />
                      <label class="form-check-label" for="flexRadioDefault121"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault31" id="flexRadioDefault122" v-model="cbe" value="2" />
                      <label class="form-check-label" for="flexRadioDefault122"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault31" id="flexRadioDefault123" v-model="cbe" value="3" />
                      <label class="form-check-label" for="flexRadioDefault123"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault31" id="flexRadioDefault124" v-model="cbe" value="4" />
                      <label class="form-check-label" for="flexRadioDefault124"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memiliki banyak perbendaharaan kata untuk mengekspresikan ide <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault32" id="flexRadioDefault125" v-model="cbf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault125"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault32" id="flexRadioDefault126" v-model="cbf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault126"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault32" id="flexRadioDefault127" v-model="cbf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault127"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault32" id="flexRadioDefault128" v-model="cbf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault128"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Melanjutkan sebagian cerita yang telah diperdengarkan<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault33" id="flexRadioDefault129" v-model="cbg" value="1" />
                      <label class="form-check-label" for="flexRadioDefault129"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault33" id="flexRadioDefault130" v-model="cbg" value="2" />
                      <label class="form-check-label" for="flexRadioDefault130"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault33" id="flexRadioDefault131" v-model="cbg" value="3" />
                      <label class="form-check-label" for="flexRadioDefault131"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault33" id="flexRadioDefault132" v-model="cbg" value="4" />
                      <label class="form-check-label" for="flexRadioDefault132"> BSB </label>
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
                    Menyebutkan simbol-simbol huruf yang dikenal<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault34" id="flexRadioDefault133" v-model="cca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault133"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault34" id="flexRadioDefault134" v-model="cca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault134"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault34" id="flexRadioDefault135" v-model="cca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault135"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault34" id="flexRadioDefault136" v-model="cca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault136"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengenal suara huruf awal dari nama benda-benda yang ada disekitarnya<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault35" id="flexRadioDefault137" v-model="ccb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault137"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault35" id="flexRadioDefault138" v-model="ccb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault138"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault35" id="flexRadioDefault139" v-model="ccb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault139"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault35" id="flexRadioDefault140" v-model="ccb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault140"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan kelompok gambar yang memiliki bunyi / huruf awal yang sama<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault36" id="flexRadioDefault141" v-model="ccc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault141"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault36" id="flexRadioDefault142" v-model="ccc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault142"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault36" id="flexRadioDefault143" v-model="ccc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault143"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault36" id="flexRadioDefault144" v-model="ccc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault144"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memahami hubungan antara bunyi dan bentuk huruf <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault37" id="flexRadioDefault145" v-model="ccd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault145"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault37" id="flexRadioDefault146" v-model="ccd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault146"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault37" id="flexRadioDefault147" v-model="ccd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault147"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault37" id="flexRadioDefault148" v-model="ccd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault148"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menuliskan dan membaca nama diri sendiri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault38" id="flexRadioDefault149" v-model="cce" value="1" />
                      <label class="form-check-label" for="flexRadioDefault149"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault38" id="flexRadioDefault150" v-model="cce" value="2" />
                      <label class="form-check-label" for="flexRadioDefault150"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault38" id="flexRadioDefault151" v-model="cce" value="3" />
                      <label class="form-check-label" for="flexRadioDefault151"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault38" id="flexRadioDefault152" v-model="cce" value="4" />
                      <label class="form-check-label" for="flexRadioDefault152"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memahami arti kata <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault39" id="flexRadioDefault153" v-model="ccf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault153"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault39" id="flexRadioDefault154" v-model="ccf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault154"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault39" id="flexRadioDefault155" v-model="ccf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault155"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault39" id="flexRadioDefault156" v-model="ccf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault156"> BSB </label>
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
                    Menunjukan aktifitas yang bersifat eksploratif dan menyelidik <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault40" id="flexRadioDefault157" v-model="daa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault157"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault40" id="flexRadioDefault158" v-model="daa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault158"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault40" id="flexRadioDefault159" v-model="daa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault159"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault40" id="flexRadioDefault160" v-model="daa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault160"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Kreatif dalam menyelesaikan masalah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault41" id="flexRadioDefault161" v-model="dab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault161"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault41" id="flexRadioDefault162" v-model="dab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault162"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault41" id="flexRadioDefault163" v-model="dab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault163"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault41" id="flexRadioDefault164" v-model="dab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault164"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memecahkan sendiri masalah sederhana dalam kehidupan sehari-hari <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault42" id="flexRadioDefault165" v-model="dac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault165"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault42" id="flexRadioDefault166" v-model="dac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault166"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault42" id="flexRadioDefault167" v-model="dac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault167"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault42" id="flexRadioDefault168" v-model="dac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault168"> BSB </label>
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
                    Mengenal perbedaan berdasarkan ukuran "lebih dari" ; "kurang dari" ; dan "paling/ter" <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault43" id="flexRadioDefault169" v-model="dba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault169"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault43" id="flexRadioDefault170" v-model="dba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault170"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault43" id="flexRadioDefault171" v-model="dba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault171"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault43" id="flexRadioDefault172" v-model="dba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault172"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menyusun perencanaan kegiatan yang akan dilakukan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault44" id="flexRadioDefault173" v-model="dbb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault173"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault44" id="flexRadioDefault174" v-model="dbb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault174"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault44" id="flexRadioDefault175" v-model="dbb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault175"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault44" id="flexRadioDefault176" v-model="dbb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault176"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengenal sebab - akibat tentang lingkungannya <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault45" id="flexRadioDefault177" v-model="dbc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault177"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault45" id="flexRadioDefault178" v-model="dbc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault178"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault45" id="flexRadioDefault179" v-model="dbc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault179"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault45" id="flexRadioDefault180" v-model="dbc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault180"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengklasifikasikan benda berdasarkan warna, bentuk, dan ukuran <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault46" id="flexRadioDefault181" v-model="dbd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault181"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault46" id="flexRadioDefaul182" v-model="dbd" value="2" />
                      <label class="form-check-label" for="flexRadioDefaul182"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault46" id="flexRadioDefault183" v-model="dbd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault183"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault46" id="flexRadioDefault184" v-model="dbd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault184"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengenal pola ABCD-ABCD <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault47" id="flexRadioDefault185" v-model="dbe" value="1" />
                      <label class="form-check-label" for="flexRadioDefault185"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault47" id="flexRadioDefault186" v-model="dbe" value="2" />
                      <label class="form-check-label" for="flexRadioDefault186"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault47" id="flexRadioDefault187" v-model="dbe" value="3" />
                      <label class="form-check-label" for="flexRadioDefault187"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault47" id="flexRadioDefault188" v-model="dbe" value="4" />
                      <label class="form-check-label" for="flexRadioDefault188"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengurutkan benda berdasarkan ukuran dari paling kecil kepaling besar atau sebaliknya <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault48" id="flexRadioDefault189" v-model="dbf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault189"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault48" id="flexRadioDefault190" v-model="dbf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault190"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault48" id="flexRadioDefault191" v-model="dbf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault191"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault48" id="flexRadioDefault192" v-model="dbf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault192"> BSB </label>
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
                    Menggunakan lambang bilangan untuk menghitung<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault49" id="flexRadioDefault193" v-model="dca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault193"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault49" id="flexRadioDefault194" v-model="dca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault194"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault49" id="flexRadioDefault195" v-model="dca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault195"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault49" id="flexRadioDefault196" v-model="dca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault196"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan lambang bilangan untuk menghitung<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault50" id="flexRadioDefault197" v-model="dcb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault197"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault50" id="flexRadioDefault198" v-model="dcb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault198"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault50" id="flexRadioDefault199" v-model="dcb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault199"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault50" id="flexRadioDefault200" v-model="dcb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault200"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mencocokan lambang bilangan dengan bilangan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault51" id="flexRadioDefault201" v-model="dcc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault201"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault51" id="flexRadioDefault202" v-model="dcc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault202"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault51" id="flexRadioDefault203" v-model="dcc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault203"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault51" id="flexRadioDefault204" v-model="dcc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault204"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Membedakan dan mengelompokan benda yang jumlahnya sama, tidak sama, lebih banyak, <br />lebih sedikit dari 2 kumpulan benda termasuk penjumlahan dan pengurangan
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault52" id="flexRadioDefault205" v-model="dcd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault205"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault52" id="flexRadioDefault206" v-model="dcd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault206"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault52" id="flexRadioDefault207" v-model="dcd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault207"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault52" id="flexRadioDefault208" v-model="dcd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault208"> BSB </label>
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
                    Memperlihatkan kemampuan diri untuk menyesuaikan dengan situasi <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault53" id="flexRadioDefault209" v-model="eaa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault209"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault53" id="flexRadioDefault210" v-model="eaa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault210"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault53" id="flexRadioDefault211" v-model="eaa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault211"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault53" id="flexRadioDefault212" v-model="eaa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault212"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memperhatikan kehati-hatian kepada orang yang belum dikenal
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault54" id="flexRadioDefault213" v-model="eab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault213"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault54" id="flexRadioDefault214" v-model="eab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault214"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault54" id="flexRadioDefault215" v-model="eab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault215"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault54" id="flexRadioDefault216" v-model="eab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault216"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengenal emosi diri dan mengelolanya secara wajar (mengendalikan emosi)
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault74" id="flexRadioDefault269" v-model="eac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault269"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault74" id="flexRadioDefault270" v-model="eac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault270"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault74" id="flexRadioDefault271" v-model="eac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault271"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault74" id="flexRadioDefault272" v-model="eac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault272"> BSB </label>
                    </div>
                  </li>
                </ol>
              </div>
              <!-- <span class="badge bg-primary rounded-pill">14</span> -->
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Rasa Tanggung Jawab Atas Perilakunya Untuk Kebaikan Diri Sendiri</div>
                <ol class="list-group list-group-numbered">
                  <li class="list-group-item">
                    Bertanggung jawab atas perilakunya untuk kebaikan diri sendiri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault55" id="flexRadioDefault217" v-model="eba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault217"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault55" id="flexRadioDefault218" v-model="eba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault218"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault55" id="flexRadioDefault219" v-model="eba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault219"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault55" id="flexRadioDefault220" v-model="eba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault220"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Tahu akan Haknya <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault56" id="flexRadioDefault221" v-model="ebb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault221"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault56" id="flexRadioDefault222" v-model="ebb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault222"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault56" id="flexRadioDefault223" v-model="ebb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault223"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault56" id="flexRadioDefault224" v-model="ebb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault224"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mentaati aturan kelas (Kegiatan, Aturan) <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault57" id="flexRadioDefault225" v-model="ebc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault225"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault57" id="flexRadioDefault226" v-model="ebc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault226"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault57" id="flexRadioDefault227" v-model="ebc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault227"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault57" id="flexRadioDefault228" v-model="ebc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault228"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengatur diri sendiri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault58" id="flexRadioDefault229" v-model="ebd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault229"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault58" id="flexRadioDefault230" v-model="ebd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault230"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault58" id="flexRadioDefault231" v-model="ebd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault231"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault58" id="flexRadioDefault232" v-model="ebd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault232"> BSB </label>
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
                    Bermain dengan teman sebaya<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault59" id="flexRadioDefault233" v-model="eca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault233"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault59" id="flexRadioDefault234" v-model="eca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault234"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault59" id="flexRadioDefault235" v-model="eca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault235"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault59" id="flexRadioDefault236" v-model="eca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault236"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengetahui perasaan temannya dan merespon secara wajar<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault60" id="flexRadioDefault237" v-model="ecb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault237"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault60" id="flexRadioDefault238" v-model="ecb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault238"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault60" id="flexRadioDefault239" v-model="ecb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault239"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault60" id="flexRadioDefault240" v-model="ecb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault240"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Berbagi dengan orang lain <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault61" id="flexRadioDefault241" v-model="ecc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault241"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault61" id="flexRadioDefault242" v-model="ecc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault242"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault61" id="flexRadioDefault243" v-model="ecc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault243"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault61" id="flexRadioDefault244" v-model="ecc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault244"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menghargai hak/pendapat/karya orang lain<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault62" id="flexRadioDefault245" v-model="ecd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault245"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault62" id="flexRadioDefault246" v-model="ecd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault246"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault62" id="flexRadioDefault247" v-model="ecd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault247"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault62" id="flexRadioDefault248" v-model="ecd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault248"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menggunakan cara yang diterima secara sosial dalam menyelesaikan <br />
                    masalah (menggunakan pikiran untuk menyelesaikan masalah)<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault63" id="flexRadioDefault249" v-model="ece" value="1" />
                      <label class="form-check-label" for="flexRadioDefault249"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault63" id="flexRadioDefault250" v-model="ece" value="2" />
                      <label class="form-check-label" for="flexRadioDefault250"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault63" id="flexRadioDefault251" v-model="ece" value="3" />
                      <label class="form-check-label" for="flexRadioDefault251"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault63" id="flexRadioDefault252" v-model="ece" value="4" />
                      <label class="form-check-label" for="flexRadioDefault252"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Bersikap kooperatif dengan teman<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault64" id="flexRadioDefault253" v-model="ecf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault253"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault64" id="flexRadioDefault254" v-model="ecf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault254"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault64" id="flexRadioDefault255" v-model="ecf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault255"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault64" id="flexRadioDefault256" v-model="ecf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault256"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menunjukan sikap toleran<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault65" id="flexRadioDefault257" v-model="ecg" value="1" />
                      <label class="form-check-label" for="flexRadioDefault257"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault65" id="flexRadioDefault258" v-model="ecg" value="2" />
                      <label class="form-check-label" for="flexRadioDefault258"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault65" id="flexRadioDefault259" v-model="ecg" value="3" />
                      <label class="form-check-label" for="flexRadioDefault259"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault65" id="flexRadioDefault260" v-model="ecg" value="4" />
                      <label class="form-check-label" for="flexRadioDefault260"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengekspresikan emosi yang sesuai dengan kondisi yang ada (senang-sedih-antusias dsb)<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault66" id="flexRadioDefault261" v-model="ech" value="1" />
                      <label class="form-check-label" for="flexRadioDefault261"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault66" id="flexRadioDefault262" v-model="ech" value="2" />
                      <label class="form-check-label" for="flexRadioDefault262"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault66" id="flexRadioDefault263" v-model="ech" value="3" />
                      <label class="form-check-label" for="flexRadioDefault263"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault66" id="flexRadioDefault264" v-model="ech" value="4" />
                      <label class="form-check-label" for="flexRadioDefault264"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Mengenal tata krama dan sopan santun dengan nilai sosial budaya setempa<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault67" id="flexRadioDefault265" v-model="eci" value="1" />
                      <label class="form-check-label" for="flexRadioDefault265"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault67" id="flexRadioDefault266" v-model="eci" value="2" />
                      <label class="form-check-label" for="flexRadioDefault266"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault67" id="flexRadioDefault267" v-model="eci" value="3" />
                      <label class="form-check-label" for="flexRadioDefault267"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault67" id="flexRadioDefault268" v-model="eci" value="4" />
                      <label class="form-check-label" for="flexRadioDefault268"> BSB </label>
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
                    Menghargai keindahan diri sendiri, karya sendiri atau orang lain, alam dan lingkungan sekitar<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault68" id="flexRadioDefault269" v-model="faa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault269"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault68" id="flexRadioDefault270" v-model="faa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault270"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault68" id="flexRadioDefault271" v-model="faa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault271"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault68" id="flexRadioDefault272" v-model="faa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault272"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Bermain drama sederhana<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault69" id="flexRadioDefault273" v-model="fab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault273"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault69" id="flexRadioDefault274" v-model="fab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault274"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault69" id="flexRadioDefault275" v-model="fab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault275"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault69" id="flexRadioDefault276" v-model="fab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault276"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Menggambar berbagai macam bentuk yang beragam<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault70" id="flexRadioDefault277" v-model="fac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault277"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault70" id="flexRadioDefault278" v-model="fac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault278"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault70" id="flexRadioDefault279" v-model="fac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault279"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault70" id="flexRadioDefault280" v-model="fac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault280"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Melukis dengan berbagai cara dan objek<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault71" id="flexRadioDefault281" v-model="fad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault281"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault71" id="flexRadioDefault282" v-model="fad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault282"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault71" id="flexRadioDefault283" v-model="fad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault283"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault71" id="flexRadioDefault284" v-model="fad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault284"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Anak bersenandung atau bernyanyi sambil mengerjakan sesuatu<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault72" id="flexRadioDefault285" v-model="fae" value="1" />
                      <label class="form-check-label" for="flexRadioDefault285"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault72" id="flexRadioDefault286" v-model="fae" value="2" />
                      <label class="form-check-label" for="flexRadioDefault286"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault72" id="flexRadioDefault287" v-model="fae" value="3" />
                      <label class="form-check-label" for="flexRadioDefault287"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault72" id="flexRadioDefault288" v-model="fae" value="4" />
                      <label class="form-check-label" for="flexRadioDefault288"> BSB </label>
                    </div>
                  </li>
                  <li class="list-group-item">
                    Memainkan alat musik/instrumen/benda bersama teman<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault73" id="flexRadioDefault289" v-model="faf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault289"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault73" id="flexRadioDefault290" v-model="faf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault290"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault73" id="flexRadioDefault291" v-model="faf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault291"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" disabled name="flexRadioDefault73" id="flexRadioDefault292" v-model="faf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault292"> BSB </label>
                    </div>
                  </li>
                </ol>
              </div>
              <!-- <span class="badge bg-primary rounded-pill">14</span> -->
            </li>
          </ol>

          <!-- Aspek Perkembangan dan Pencapaiannya -->
          <ion-card-title class="text-dark mt-3">Aspek Perkembangan dan Pencapaiannya</ion-card-title>
          <ol class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <ol class="list-group">
                  <li class="list-group-item">
                    Moral dan nilai-nilai Agama<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here" v-model="text1" disabled></ion-textarea>
                  </li>
                  <li class="list-group-item">
                    Motorik Kasar dan Motorik Halus<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here" v-model="text2" disabled></ion-textarea>
                  </li>
                  <li class="list-group-item">
                    Bahasa<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here" v-model="text3" disabled></ion-textarea>
                  </li>
                  <li class="list-group-item">
                    Kognitif<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here" v-model="text4" disabled></ion-textarea>
                  </li>
                  <li class="list-group-item">
                    Sosial-emosional<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here" v-model="text5" disabled></ion-textarea>
                  </li>
                  <li class="list-group-item">
                    Seni<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here" v-model="text6" disabled></ion-textarea>
                  </li>
                </ol>
              </div>
              <!-- <span class="badge bg-primary rounded-pill">14</span> -->
            </li>
          </ol>

        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import { required, integer } from "@vuelidate/validators";
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
  IonCardTitle,
  IonTextarea,
  // IonSearchbar
} from "@ionic/vue";

export default defineComponent({
  name: "PesertaDidikPage",
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
    IonCardTitle,
    IonTextarea,
    // IonSearchbar
  },
  props: ["tahun", "kelas", "id_siswa", "semester"],
  data() {
    return {
      results: [],
      aaa: "",
      aab: "",
      aac: "",
      aad: "",
      aae: "",
      aba: "",
      abb: "",
      abc: "",
      baa: "",
      bab: "",
      bac: "",
      bad: "",
      bba: "",
      bbb: "",
      bbc: "",
      bbd: "",
      bbe: "",
      bbf: "",
      bbg: "",
      bca: "",
      bcb: "",
      bcc: "",
      caa: "",
      cab: "",
      cac: "",
      cad: "",
      cba: "",
      cbb: "",
      cbc: "",
      cbd: "",
      cbe: "",
      cbf: "",
      cbg: "",
      cca: "",
      ccb: "",
      ccc: "",
      ccd: "",
      cce: "",
      ccf: "",
      daa: "",
      dab: "",
      dac: "",
      dba: "",
      dbb: "",
      dbc: "",
      dbd: "",
      dbe: "",
      dbf: "",
      dca: "",
      dcb: "",
      dcc: "",
      dcd: "",
      eaa: "",
      eab: "",
      eac: "",
      eba: "",
      ebb: "",
      ebc: "",
      ebd: "",
      eca: "",
      ecb: "",
      ecc: "",
      ecd: "",
      ece: "",
      ecf: "",
      ecg: "",
      ech: "",
      eci: "",
      faa: "",
      fab: "",
      fac: "",
      fad: "",
      fae: "",
      faf: "",
      text1: "",
      text2: "",
      text3: "",
      text4: "",
      text5: "",
      text6: "",
    };
  },
   mounted: function () {
    axios
      .get("http://localhost:5000/API/rapor/detail/" + this.id_siswa + "/akhir_semester/" + this.semester)
      .then((response) => {
        this.results = response.data.rapor[0].nilai;
        this.aaa = this.results[0][0].a;
        this.aab = this.results[0][0].b;
        this.aac = this.results[0][0].c;
        this.aad = this.results[0][0].d;
        this.aad = this.results[0][0].d;
        this.aae = this.results[0][0].e;
        this.aba = this.results[0][1].a;
        this.abb = this.results[0][1].b;
        this.abc = this.results[0][1].c;
        this.baa = this.results[1][0].a;
        this.bab = this.results[1][0].b;
        this.bac = this.results[1][0].c;
        this.bad = this.results[1][0].d;
        this.bba = this.results[1][1].a;
        this.bbb = this.results[1][1].b;
        this.bbc = this.results[1][1].c;
        this.bbd = this.results[1][1].d;
        this.bbe = this.results[1][1].e;
        this.bbf = this.results[1][1].f;
        this.bbg = this.results[1][1].g;
        this.bca = this.results[1][2].a;
        this.bcb = this.results[1][2].b;
        this.bcc = this.results[1][2].c;
        this.caa = this.results[2][0].a;
        this.cab = this.results[2][0].b;
        this.cac = this.results[2][0].c;
        this.cad = this.results[2][0].d;
        this.cba = this.results[2][1].a;
        this.cbb = this.results[2][1].b;
        this.cbc = this.results[2][1].c;
        this.cbd = this.results[2][1].d;
        this.cbe = this.results[2][1].e;
        this.cbf = this.results[2][1].f;
        this.cbg = this.results[2][1].g;
        this.cca = this.results[2][2].a;
        this.ccb = this.results[2][2].b;
        this.ccc = this.results[2][2].c;
        this.ccd = this.results[2][2].d;
        this.cce = this.results[2][2].e;
        this.ccf = this.results[2][2].f;
        this.daa = this.results[3][0].a;
        this.dab = this.results[3][0].b;
        this.dac = this.results[3][0].c;
        this.dba = this.results[3][1].a;
        this.dbb = this.results[3][1].b;
        this.dbc = this.results[3][1].c;
        this.dbd = this.results[3][1].d;
        this.dbe = this.results[3][1].e;
        this.dbf = this.results[3][1].f;
        this.dca = this.results[3][2].a;
        this.dcb = this.results[3][2].b;
        this.dcc = this.results[3][2].c;
        this.dcd = this.results[3][2].d;
        this.eaa = this.results[4][0].a;
        this.eab = this.results[4][0].b;
        this.eac = this.results[4][0].c;
        this.eba = this.results[4][1].a;
        this.ebb = this.results[4][1].b;
        this.ebc = this.results[4][1].c;
        this.ebd = this.results[4][1].d;
        this.eca = this.results[4][2].a;
        this.ecb = this.results[4][2].b;
        this.ecc = this.results[4][2].c;
        this.ecd = this.results[4][2].d;
        this.ece = this.results[4][2].e;
        this.ecf = this.results[4][2].f;
        this.ecg = this.results[4][2].g;
        this.ech = this.results[4][2].h;
        this.eci = this.results[4][2].i;
        this.faa = this.results[5][0].a;
        this.fab = this.results[5][0].b;
        this.fac = this.results[5][0].c;
        this.fad = this.results[5][0].d;
        this.fae = this.results[5][0].e;
        this.faf = this.results[5][0].f;
        this.text1 = this.results[6][0].text1;
        this.text2 = this.results[6][0].text2;
        this.text3 = this.results[6][0].text3;
        this.text4 = this.results[6][0].text4;
        this.text5 = this.results[6][0].text5;
        this.text6 = this.results[6][0].text6;
        console.log(response.data.rapor[0].nilai);
      })
      .catch(function (error) {
        console.error(error.response.data);
      });
  },
});
</script>

<style scoped>
/* template style */

ion-col {
  padding: 0;
}

/* Textarea style */
ion-textarea.custom-textarea {
  --background: #373737;
  --color: #fff;
  --padding-end: 10px;
  --padding-start: 10px;
  --placeholder-color: #ddd;
  --placeholder-opacity: 0.8;
}

/* Icon navbar style */

a .iconButton {
  color: #67748e;
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

.btn-search:focus ~ .input-search {
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
  .btn-search:focus ~ .input-search {
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
  .btn-search:focus ~ .input-search {
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
    left: 60px;
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

  .btn-search:focus ~ .input-search {
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

  .btn-search:focus ~ .input-search {
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

  .btn-search:focus ~ .input-search {
    width: 150px;
  }

  .input-search:focus {
    width: 150px;
  }
}
</style>
