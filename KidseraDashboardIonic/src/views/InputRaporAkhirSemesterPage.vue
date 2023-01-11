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
                <ion-breadcrumb style="font-size: 1em;" href="/pages/Rapor/TahunAjaranRapor">Tahun Ajaran
                </ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em;" href="/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor">Peserta
                  Didik
                </ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em;"
                  href="/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor/InputNilaiPesertaDidikRapor">Detail</ion-breadcrumb>
                <ion-breadcrumb style="font-size: 1em;"
                  href="/pages/Rapor/TahunAjaranRapor/PesertaDidikRapor/InputNilaiPesertaDidikRapor/InputRapor">Input</ion-breadcrumb>
              </ion-breadcrumbs>

              <h5 style="margin-left: 11px;">Input E - Rapor</h5>
            </ion-title>
          </ion-col>
          <ion-col size-sm="6" size="10">
            <ion-row class="ion-align-items-center ion-justify-content-end goright mt-2" style="margin-right: 20px;">
              <div class="btn-group dropstart mb-1 ms-2" style="content: inherit;">
                <button class="btn dropdown-toggle text-info text-gradient" type="button" data-bs-toggle="dropdown"
                  aria-expanded="true" style="background-color: transparent;">
                  Hi {{ username }}
                </button>
                <ul class="dropdown-menu dropdown-menu-dark">
                  <li><a class="dropdown-item" @click="del()">Logout</a></li>
                </ul>
              </div>
              <div v-if="is_admin == 'true'" class="nav-icon">
                <a href="/SignUp">
                  <ion-icon class="iconButton text-info text-gradient" src="assets/icon/signup.svg"></ion-icon>
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
                    Mengenal agama yang dianut <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                        v-model="formData.aaa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault1"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                        v-model="formData.aaa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault2"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                        v-model="formData.aaa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault3"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                        v-model="formData.aaa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault4"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.aaa.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengerjakan Ibadah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault5"
                        v-model="formData.aab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault5"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault6"
                        v-model="formData.aab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault6"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault7"
                        v-model="formData.aab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault7"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault8"
                        v-model="formData.aab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault8"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.aab.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Terbiasa rasa syukur terhadap ciptaan Allah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault9"
                        v-model="formData.aac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault9"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault10"
                        v-model="formData.aac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault10"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault11"
                        v-model="formData.aac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault11"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault3" id="flexRadioDefault12"
                        v-model="formData.aac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault12"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.aac.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengucapkan doa-doa pendek dan ibadah harian <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault13"
                        v-model="formData.aad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault13"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault14"
                        v-model="formData.aad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault14"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault15"
                        v-model="formData.aad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault15"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault4" id="flexRadioDefault16"
                        v-model="formData.aad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault16"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.aad.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan hari - hari besar agama <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault17"
                        v-model="formData.aae" value="1" />
                      <label class="form-check-label" for="flexRadioDefault17"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault18"
                        v-model="formData.aae" value="2" />
                      <label class="form-check-label" for="flexRadioDefault18"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault19"
                        v-model="formData.aae" value="3" />
                      <label class="form-check-label" for="flexRadioDefault19"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault5" id="flexRadioDefault20"
                        v-model="formData.aae" value="4" />
                      <label class="form-check-label" for="flexRadioDefault20"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.aae.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault21"
                        v-model="formData.aba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault21"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault22"
                        v-model="formData.aba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault22"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault23"
                        v-model="formData.aba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault23"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault6" id="flexRadioDefault24"
                        v-model="formData.aba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault24"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.aba.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Terbiasa menjaga kebersihan diri dan lingkungan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault25"
                        v-model="formData.abb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault25"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault26"
                        v-model="formData.abb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault26"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault27"
                        v-model="formData.abb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault27"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault7" id="flexRadioDefault28"
                        v-model="formData.abb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault28"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.abb.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Terbiasa menjaga kebersihan diri dan lingkungan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault29"
                        v-model="formData.abc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault29"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault30"
                        v-model="formData.abc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault30"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault31"
                        v-model="formData.abc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault31"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault8" id="flexRadioDefault32"
                        v-model="formData.abc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault32"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.abc.$errors" :key="error.$uid">
                      <br /> {{ error.$message }}
                    </ion-note>
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
                    Melakukan berbagai gerakan terkoordinasi untuk melatih kelenturan, kelincahan dan keseimbangan
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault33"
                        v-model="formData.baa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault33"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault34"
                        v-model="formData.baa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault34"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault35"
                        v-model="formData.baa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault35"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault9" id="flexRadioDefault36"
                        v-model="formData.baa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault36"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.baa.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan tarian <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault37"
                        v-model="formData.bab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault37"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault38"
                        v-model="formData.bab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault38"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault39"
                        v-model="formData.bab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault39"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault10" id="flexRadioDefault40"
                        v-model="formData.bab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault40"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bab.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Melakukan permainan fisik dengan aturan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault41"
                        v-model="formData.bac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault41"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault42"
                        v-model="formData.bac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault42"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault43"
                        v-model="formData.bac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault43"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault44"
                        v-model="formData.bac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault44"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bac.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Melakukan kegiatan kebersihan diri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault45"
                        v-model="formData.bad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault45"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault46"
                        v-model="formData.bad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault46"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault47"
                        v-model="formData.bad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault47"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault12" id="flexRadioDefault48"
                        v-model="formData.bad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault48"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bad.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault49"
                        v-model="formData.bba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault49"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault50"
                        v-model="formData.bba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault50"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault51"
                        v-model="formData.bba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault51"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault13" id="flexRadioDefault52"
                        v-model="formData.bba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault52"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bba.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Melakukan koordinasi gerakan mata, tangan dan kaki dalam kegiatan senam dan tarian <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault53"
                        v-model="formData.bbb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault53"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault54"
                        v-model="formData.bbb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault54"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault55"
                        v-model="formData.bbb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault55"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault56"
                        v-model="formData.bbb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault56"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bbb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Melakukan eksplorasi dengan berbagai media dan kegiatan
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault57"
                        v-model="formData.bbc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault57"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault58"
                        v-model="formData.bbc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault58"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault59"
                        v-model="formData.bbc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault59"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault60"
                        v-model="formData.bbc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault60"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bbc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menggunakan alat tulis dan alat makan dengan benar <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault61"
                        v-model="formData.bbd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault61"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault62"
                        v-model="formData.bbd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault62"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault63"
                        v-model="formData.bbd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault63"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault16" id="flexRadioDefault64"
                        v-model="formData.bbd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault64"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bbd.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menggunting sesuai dengan pola <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault17" id="flexRadioDefault65"
                        v-model="formData.bbe" value="1" />
                      <label class="form-check-label" for="flexRadioDefault65"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault17" id="flexRadioDefault66"
                        v-model="formData.bbe" value="2" />
                      <label class="form-check-label" for="flexRadioDefault66"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault17" id="flexRadioDefault67"
                        v-model="formData.bbe" value="3" />
                      <label class="form-check-label" for="flexRadioDefault67"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault17" id="flexRadioDefault68"
                        v-model="formData.bbe" value="4" />
                      <label class="form-check-label" for="flexRadioDefault68"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bbe.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Terampil menggunakan tangan kanan dan kiri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault18" id="flexRadioDefault69"
                        v-model="formData.bbf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault69"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault18" id="flexRadioDefault70"
                        v-model="formData.bbf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault70"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault18" id="flexRadioDefault71"
                        v-model="formData.bbf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault71"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault18" id="flexRadioDefault72"
                        v-model="formData.bbf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault72"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bbf.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menempel gambar dengan tepat <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault19" id="flexRadioDefault73"
                        v-model="formData.bbg" value="1" />
                      <label class="form-check-label" for="flexRadioDefault73"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault19" id="flexRadioDefault74"
                        v-model="formData.bbg" value="2" />
                      <label class="form-check-label" for="flexRadioDefault74"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault19" id="flexRadioDefault75"
                        v-model="formData.bbg" value="3" />
                      <label class="form-check-label" for="flexRadioDefault75"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault19" id="flexRadioDefault76"
                        v-model="formData.bbg" value="4" />
                      <label class="form-check-label" for="flexRadioDefault76"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bbg.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault20" id="flexRadioDefault77"
                        v-model="formData.bca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault77"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault20" id="flexRadioDefault78"
                        v-model="formData.bca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault78"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault20" id="flexRadioDefault79"
                        v-model="formData.bca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault79"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault20" id="flexRadioDefault80"
                        v-model="formData.bca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault80"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bca.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memebersihkan dan membereskan tempat bermain <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault21" id="flexRadioDefault81"
                        v-model="formData.bcb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault81"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault21" id="flexRadioDefault82"
                        v-model="formData.bcb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault82"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault21" id="flexRadioDefault83"
                        v-model="formData.bcb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault83"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault21" id="flexRadioDefault84"
                        v-model="formData.bcb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault84"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bcb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menutup hidung dan mulut ketika bersin <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault22" id="flexRadioDefault85"
                        v-model="formData.bcc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault85"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault22" id="flexRadioDefault86"
                        v-model="formData.bcc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault86"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault22" id="flexRadioDefault87"
                        v-model="formData.bcc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault87"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault22" id="flexRadioDefault88"
                        v-model="formData.bcc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault88"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.bcc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault23" id="flexRadioDefault89"
                        v-model="formData.caa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault89"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault23" id="flexRadioDefault90"
                        v-model="formData.caa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault90"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault23" id="flexRadioDefault91"
                        v-model="formData.caa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault91"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault23" id="flexRadioDefault92"
                        v-model="formData.caa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault92"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.caa.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengulang kalimat yang lebih kompleks <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault24" id="flexRadioDefault93"
                        v-model="formData.cab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault93"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault24" id="flexRadioDefault94"
                        v-model="formData.cab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault94"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault24" id="flexRadioDefault95"
                        v-model="formData.cab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault95"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault24" id="flexRadioDefault96"
                        v-model="formData.cab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault96"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cab.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memahami aturang dalam suatu perintah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault25" id="flexRadioDefault97"
                        v-model="formData.cac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault97"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault25" id="flexRadioDefault98"
                        v-model="formData.cac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault98"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault25" id="flexRadioDefault99"
                        v-model="formData.cac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault99"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault25" id="flexRadioDefault100"
                        v-model="formData.cac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault100"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cac.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Senang dan menghargai bacaan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault26" id="flexRadioDefault101"
                        v-model="formData.cad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault101"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault26" id="flexRadioDefault102"
                        v-model="formData.cad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault102"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault26" id="flexRadioDefault103"
                        v-model="formData.cad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault103"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault26" id="flexRadioDefault48104"
                        v-model="formData.cad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault48104"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cad.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault27" id="flexRadioDefault105"
                        v-model="formData.cba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault105"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault27" id="flexRadioDefault106"
                        v-model="formData.cba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault106"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault27" id="flexRadioDefault107"
                        v-model="formData.cba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault107"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault27" id="flexRadioDefault108"
                        v-model="formData.cba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault108"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cba.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan kelompok gambar yang memiliki bunyi yang sama
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault28" id="flexRadioDefault109"
                        v-model="formData.cbb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault109"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault28" id="flexRadioDefault110"
                        v-model="formData.cbb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault110"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault28" id="flexRadioDefault111"
                        v-model="formData.cbb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault111"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault28" id="flexRadioDefault112"
                        v-model="formData.cbb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault112"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cbb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memiliki lebih banyak kata-kata untuk mengekspresikan ide
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault29" id="flexRadioDefault113"
                        v-model="formData.cbc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault113"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault29" id="flexRadioDefault114"
                        v-model="formData.cbc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault114"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault29" id="flexRadioDefault115"
                        v-model="formData.cbc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault115"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault29" id="flexRadioDefault116"
                        v-model="formData.cbc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault116"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cbc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan kalimat sederhana dalam struktur lengkap (pokok kalimat - predikat - keterangan) <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault30" id="flexRadioDefault117"
                        v-model="formData.cbd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault117"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault30" id="flexRadioDefault118"
                        v-model="formData.cbd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault118"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault30" id="flexRadioDefault119"
                        v-model="formData.cbd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault119"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault30" id="flexRadioDefaul120"
                        v-model="formData.cbd" value="4" />
                      <label class="form-check-label" for="flexRadioDefaul120"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cbd.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mampu mengungkapkan pendapat <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault31" id="flexRadioDefault121"
                        v-model="formData.cbe" value="1" />
                      <label class="form-check-label" for="flexRadioDefault121"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault31" id="flexRadioDefault122"
                        v-model="formData.cbe" value="2" />
                      <label class="form-check-label" for="flexRadioDefault122"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault31" id="flexRadioDefault123"
                        v-model="formData.cbe" value="3" />
                      <label class="form-check-label" for="flexRadioDefault123"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault31" id="flexRadioDefault124"
                        v-model="formData.cbe" value="4" />
                      <label class="form-check-label" for="flexRadioDefault124"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cbe.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memiliki banyak perbendaharaan kata untuk mengekspresikan ide <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault32" id="flexRadioDefault125"
                        v-model="formData.cbf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault125"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault32" id="flexRadioDefault126"
                        v-model="formData.cbf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault126"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault32" id="flexRadioDefault127"
                        v-model="formData.cbf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault127"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault32" id="flexRadioDefault128"
                        v-model="formData.cbf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault128"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cbf.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Melanjutkan sebagian cerita yang telah diperdengarkan<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault33" id="flexRadioDefault129"
                        v-model="formData.cbg" value="1" />
                      <label class="form-check-label" for="flexRadioDefault129"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault33" id="flexRadioDefault130"
                        v-model="formData.cbg" value="2" />
                      <label class="form-check-label" for="flexRadioDefault130"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault33" id="flexRadioDefault131"
                        v-model="formData.cbg" value="3" />
                      <label class="form-check-label" for="flexRadioDefault131"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault33" id="flexRadioDefault132"
                        v-model="formData.cbg" value="4" />
                      <label class="form-check-label" for="flexRadioDefault132"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cbg.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault34" id="flexRadioDefault133"
                        v-model="formData.cca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault133"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault34" id="flexRadioDefault134"
                        v-model="formData.cca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault134"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault34" id="flexRadioDefault135"
                        v-model="formData.cca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault135"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault34" id="flexRadioDefault136"
                        v-model="formData.cca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault136"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cca.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengenal suara huruf awal dari nama benda-benda yang ada disekitarnya<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault35" id="flexRadioDefault137"
                        v-model="formData.ccb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault137"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault35" id="flexRadioDefault138"
                        v-model="formData.ccb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault138"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault35" id="flexRadioDefault139"
                        v-model="formData.ccb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault139"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault35" id="flexRadioDefault140"
                        v-model="formData.ccb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault140"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ccb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan kelompok gambar yang memiliki bunyi / huruf awal yang sama<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault36" id="flexRadioDefault141"
                        v-model="formData.ccc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault141"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault36" id="flexRadioDefault142"
                        v-model="formData.ccc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault142"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault36" id="flexRadioDefault143"
                        v-model="formData.ccc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault143"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault36" id="flexRadioDefault144"
                        v-model="formData.ccc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault144"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ccc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memahami hubungan antara bunyi dan bentuk huruf <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault37" id="flexRadioDefault145"
                        v-model="formData.ccd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault145"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault37" id="flexRadioDefault146"
                        v-model="formData.ccd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault146"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault37" id="flexRadioDefault147"
                        v-model="formData.ccd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault147"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault37" id="flexRadioDefault148"
                        v-model="formData.ccd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault148"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ccd.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menuliskan dan membaca nama diri sendiri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault38" id="flexRadioDefault149"
                        v-model="formData.cce" value="1" />
                      <label class="form-check-label" for="flexRadioDefault149"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault38" id="flexRadioDefault150"
                        v-model="formData.cce" value="2" />
                      <label class="form-check-label" for="flexRadioDefault150"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault38" id="flexRadioDefault151"
                        v-model="formData.cce" value="3" />
                      <label class="form-check-label" for="flexRadioDefault151"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault38" id="flexRadioDefault152"
                        v-model="formData.cce" value="4" />
                      <label class="form-check-label" for="flexRadioDefault152"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.cce.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memahami arti kata <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault39" id="flexRadioDefault153"
                        v-model="formData.ccf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault153"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault39" id="flexRadioDefault154"
                        v-model="formData.ccf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault154"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault39" id="flexRadioDefault155"
                        v-model="formData.ccf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault155"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault39" id="flexRadioDefault156"
                        v-model="formData.ccf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault156"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ccf.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault40" id="flexRadioDefault157"
                        v-model="formData.daa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault157"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault40" id="flexRadioDefault158"
                        v-model="formData.daa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault158"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault40" id="flexRadioDefault159"
                        v-model="formData.daa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault159"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault40" id="flexRadioDefault160"
                        v-model="formData.daa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault160"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.daa.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Kreatif dalam menyelesaikan masalah <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault41" id="flexRadioDefault161"
                        v-model="formData.dab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault161"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault41" id="flexRadioDefault162"
                        v-model="formData.dab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault162"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault41" id="flexRadioDefault163"
                        v-model="formData.dab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault163"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault41" id="flexRadioDefault164"
                        v-model="formData.dab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault164"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dab.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memecahkan sendiri masalah sederhana dalam kehidupan sehari-hari <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault42" id="flexRadioDefault165"
                        v-model="formData.dac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault165"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault42" id="flexRadioDefault166"
                        v-model="formData.dac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault166"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault42" id="flexRadioDefault167"
                        v-model="formData.dac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault167"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault42" id="flexRadioDefault168"
                        v-model="formData.dac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault168"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dac.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault43" id="flexRadioDefault169"
                        v-model="formData.dba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault169"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault43" id="flexRadioDefault170"
                        v-model="formData.dba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault170"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault43" id="flexRadioDefault171"
                        v-model="formData.dba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault171"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault43" id="flexRadioDefault172"
                        v-model="formData.dba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault172"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dba.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menyusun perencanaan kegiatan yang akan dilakukan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault44" id="flexRadioDefault173"
                        v-model="formData.dbb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault173"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault44" id="flexRadioDefault174"
                        v-model="formData.dbb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault174"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault44" id="flexRadioDefault175"
                        v-model="formData.dbb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault175"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault44" id="flexRadioDefault176"
                        v-model="formData.dbb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault176"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dbb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengenal sebab - akibat tentang lingkungannya <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault45" id="flexRadioDefault177"
                        v-model="formData.dbc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault177"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault45" id="flexRadioDefault178"
                        v-model="formData.dbc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault178"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault45" id="flexRadioDefault179"
                        v-model="formData.dbc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault179"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault45" id="flexRadioDefault180"
                        v-model="formData.dbc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault180"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dbc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengklasifikasikan benda berdasarkan warna, bentuk, dan ukuran <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault46" id="flexRadioDefault181"
                        v-model="formData.dbd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault181"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault46" id="flexRadioDefaul182"
                        v-model="formData.dbd" value="2" />
                      <label class="form-check-label" for="flexRadioDefaul182"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault46" id="flexRadioDefault183"
                        v-model="formData.dbd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault183"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault46" id="flexRadioDefault184"
                        v-model="formData.dbd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault184"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dbd.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengenal pola ABCD-ABCD <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault47" id="flexRadioDefault185"
                        v-model="formData.dbe" value="1" />
                      <label class="form-check-label" for="flexRadioDefault185"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault47" id="flexRadioDefault186"
                        v-model="formData.dbe" value="2" />
                      <label class="form-check-label" for="flexRadioDefault186"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault47" id="flexRadioDefault187"
                        v-model="formData.dbe" value="3" />
                      <label class="form-check-label" for="flexRadioDefault187"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault47" id="flexRadioDefault188"
                        v-model="formData.dbe" value="4" />
                      <label class="form-check-label" for="flexRadioDefault188"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dbe.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengurutkan benda berdasarkan ukuran dari paling kecil kepaling besar atau sebaliknya <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault48" id="flexRadioDefault189"
                        v-model="formData.dbf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault189"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault48" id="flexRadioDefault190"
                        v-model="formData.dbf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault190"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault48" id="flexRadioDefault191"
                        v-model="formData.dbf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault191"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault48" id="flexRadioDefault192"
                        v-model="formData.dbf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault192"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dbf.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault49" id="flexRadioDefault193"
                        v-model="formData.dca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault193"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault49" id="flexRadioDefault194"
                        v-model="formData.dca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault194"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault49" id="flexRadioDefault195"
                        v-model="formData.dca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault195"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault49" id="flexRadioDefault196"
                        v-model="formData.dca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault196"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dca.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menyebutkan lambang bilangan untuk menghitung<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault50" id="flexRadioDefault197"
                        v-model="formData.dcb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault197"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault50" id="flexRadioDefault198"
                        v-model="formData.dcb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault198"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault50" id="flexRadioDefault199"
                        v-model="formData.dcb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault199"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault50" id="flexRadioDefault200"
                        v-model="formData.dcb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault200"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dcb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mencocokan lambang bilangan dengan bilangan <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault51" id="flexRadioDefault201"
                        v-model="formData.dcc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault201"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault51" id="flexRadioDefault202"
                        v-model="formData.dcc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault202"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault51" id="flexRadioDefault203"
                        v-model="formData.dcc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault203"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault51" id="flexRadioDefault204"
                        v-model="formData.dcc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault204"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dcc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Membedakan dan mengelompokan benda yang jumlahnya sama, tidak sama, lebih banyak, <br />lebih
                    sedikit dari 2 kumpulan benda termasuk penjumlahan dan pengurangan
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault52" id="flexRadioDefault205"
                        v-model="formData.dcd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault205"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault52" id="flexRadioDefault206"
                        v-model="formData.dcd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault206"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault52" id="flexRadioDefault207"
                        v-model="formData.dcd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault207"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault52" id="flexRadioDefault208"
                        v-model="formData.dcd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault208"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.dcd.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault53" id="flexRadioDefault209"
                        v-model="formData.eaa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault209"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault53" id="flexRadioDefault210"
                        v-model="formData.eaa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault210"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault53" id="flexRadioDefault211"
                        v-model="formData.eaa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault211"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault53" id="flexRadioDefault212"
                        v-model="formData.eaa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault212"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.eaa.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memperhatikan kehati-hatian kepada orang yang belum dikenal
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault54" id="flexRadioDefault213"
                        v-model="formData.eab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault213"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault54" id="flexRadioDefault214"
                        v-model="formData.eab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault214"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault54" id="flexRadioDefault215"
                        v-model="formData.eab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault215"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault54" id="flexRadioDefault216"
                        v-model="formData.eab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault216"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.eab.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengenal emosi diri dan mengelolanya secara wajar (mengendalikan emosi)
                    <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault74" id="flexRadioDefault269"
                        v-model="formData.eac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault269"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault74" id="flexRadioDefault270"
                        v-model="formData.eac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault270"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault74" id="flexRadioDefault271"
                        v-model="formData.eac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault271"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault74" id="flexRadioDefault272"
                        v-model="formData.eac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault272"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.eac.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault55" id="flexRadioDefault217"
                        v-model="formData.eba" value="1" />
                      <label class="form-check-label" for="flexRadioDefault217"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault55" id="flexRadioDefault218"
                        v-model="formData.eba" value="2" />
                      <label class="form-check-label" for="flexRadioDefault218"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault55" id="flexRadioDefault219"
                        v-model="formData.eba" value="3" />
                      <label class="form-check-label" for="flexRadioDefault219"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault55" id="flexRadioDefault220"
                        v-model="formData.eba" value="4" />
                      <label class="form-check-label" for="flexRadioDefault220"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.eba.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Tahu akan Haknya <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault56" id="flexRadioDefault221"
                        v-model="formData.ebb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault221"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault56" id="flexRadioDefault222"
                        v-model="formData.ebb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault222"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault56" id="flexRadioDefault223"
                        v-model="formData.ebb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault223"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault56" id="flexRadioDefault224"
                        v-model="formData.ebb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault224"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ebb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mentaati aturan kelas (Kegiatan, Aturan) <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault57" id="flexRadioDefault225"
                        v-model="formData.ebc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault225"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault57" id="flexRadioDefault226"
                        v-model="formData.ebc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault226"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault57" id="flexRadioDefault227"
                        v-model="formData.ebc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault227"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault57" id="flexRadioDefault228"
                        v-model="formData.ebc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault228"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ebc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengatur diri sendiri <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault58" id="flexRadioDefault229"
                        v-model="formData.ebd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault229"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault58" id="flexRadioDefault230"
                        v-model="formData.ebd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault230"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault58" id="flexRadioDefault231"
                        v-model="formData.ebd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault231"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault58" id="flexRadioDefault232"
                        v-model="formData.ebd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault232"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ebd.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault59" id="flexRadioDefault233"
                        v-model="formData.eca" value="1" />
                      <label class="form-check-label" for="flexRadioDefault233"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault59" id="flexRadioDefault234"
                        v-model="formData.eca" value="2" />
                      <label class="form-check-label" for="flexRadioDefault234"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault59" id="flexRadioDefault235"
                        v-model="formData.eca" value="3" />
                      <label class="form-check-label" for="flexRadioDefault235"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault59" id="flexRadioDefault236"
                        v-model="formData.eca" value="4" />
                      <label class="form-check-label" for="flexRadioDefault236"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.eca.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengetahui perasaan temannya dan merespon secara wajar<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault60" id="flexRadioDefault237"
                        v-model="formData.ecb" value="1" />
                      <label class="form-check-label" for="flexRadioDefault237"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault60" id="flexRadioDefault238"
                        v-model="formData.ecb" value="2" />
                      <label class="form-check-label" for="flexRadioDefault238"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault60" id="flexRadioDefault239"
                        v-model="formData.ecb" value="3" />
                      <label class="form-check-label" for="flexRadioDefault239"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault60" id="flexRadioDefault240"
                        v-model="formData.ecb" value="4" />
                      <label class="form-check-label" for="flexRadioDefault240"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ecb.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Berbagi dengan orang lain <br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault61" id="flexRadioDefault241"
                        v-model="formData.ecc" value="1" />
                      <label class="form-check-label" for="flexRadioDefault241"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault61" id="flexRadioDefault242"
                        v-model="formData.ecc" value="2" />
                      <label class="form-check-label" for="flexRadioDefault242"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault61" id="flexRadioDefault243"
                        v-model="formData.ecc" value="3" />
                      <label class="form-check-label" for="flexRadioDefault243"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault61" id="flexRadioDefault244"
                        v-model="formData.ecc" value="4" />
                      <label class="form-check-label" for="flexRadioDefault244"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ecc.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menghargai hak/pendapat/karya orang lain<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault62" id="flexRadioDefault245"
                        v-model="formData.ecd" value="1" />
                      <label class="form-check-label" for="flexRadioDefault245"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault62" id="flexRadioDefault246"
                        v-model="formData.ecd" value="2" />
                      <label class="form-check-label" for="flexRadioDefault246"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault62" id="flexRadioDefault247"
                        v-model="formData.ecd" value="3" />
                      <label class="form-check-label" for="flexRadioDefault247"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault62" id="flexRadioDefault248"
                        v-model="formData.ecd" value="4" />
                      <label class="form-check-label" for="flexRadioDefault248"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ecd.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menggunakan cara yang diterima secara sosial dalam menyelesaikan <br />
                    masalah (menggunakan pikiran untuk menyelesaikan masalah)<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault63" id="flexRadioDefault249"
                        v-model="formData.ece" value="1" />
                      <label class="form-check-label" for="flexRadioDefault249"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault63" id="flexRadioDefault250"
                        v-model="formData.ece" value="2" />
                      <label class="form-check-label" for="flexRadioDefault250"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault63" id="flexRadioDefault251"
                        v-model="formData.ece" value="3" />
                      <label class="form-check-label" for="flexRadioDefault251"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault63" id="flexRadioDefault252"
                        v-model="formData.ece" value="4" />
                      <label class="form-check-label" for="flexRadioDefault252"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ece.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Bersikap kooperatif dengan teman<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault64" id="flexRadioDefault253"
                        v-model="formData.ecf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault253"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault64" id="flexRadioDefault254"
                        v-model="formData.ecf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault254"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault64" id="flexRadioDefault255"
                        v-model="formData.ecf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault255"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault64" id="flexRadioDefault256"
                        v-model="formData.ecf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault256"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ecf.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menunjukan sikap toleran<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault65" id="flexRadioDefault257"
                        v-model="formData.ecg" value="1" />
                      <label class="form-check-label" for="flexRadioDefault257"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault65" id="flexRadioDefault258"
                        v-model="formData.ecg" value="2" />
                      <label class="form-check-label" for="flexRadioDefault258"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault65" id="flexRadioDefault259"
                        v-model="formData.ecg" value="3" />
                      <label class="form-check-label" for="flexRadioDefault259"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault65" id="flexRadioDefault260"
                        v-model="formData.ecg" value="4" />
                      <label class="form-check-label" for="flexRadioDefault260"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ecg.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengekspresikan emosi yang sesuai dengan kondisi yang ada (senang-sedih-antusias dsb)<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault66" id="flexRadioDefault261"
                        v-model="formData.ech" value="1" />
                      <label class="form-check-label" for="flexRadioDefault261"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault66" id="flexRadioDefault262"
                        v-model="formData.ech" value="2" />
                      <label class="form-check-label" for="flexRadioDefault262"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault66" id="flexRadioDefault263"
                        v-model="formData.ech" value="3" />
                      <label class="form-check-label" for="flexRadioDefault263"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault66" id="flexRadioDefault264"
                        v-model="formData.ech" value="4" />
                      <label class="form-check-label" for="flexRadioDefault264"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.ech.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Mengenal tata krama dan sopan santun dengan nilai sosial budaya setempa<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault67" id="flexRadioDefault265"
                        v-model="formData.eci" value="1" />
                      <label class="form-check-label" for="flexRadioDefault265"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault67" id="flexRadioDefault266"
                        v-model="formData.eci" value="2" />
                      <label class="form-check-label" for="flexRadioDefault266"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault67" id="flexRadioDefault267"
                        v-model="formData.eci" value="3" />
                      <label class="form-check-label" for="flexRadioDefault267"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault67" id="flexRadioDefault268"
                        v-model="formData.eci" value="4" />
                      <label class="form-check-label" for="flexRadioDefault268"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.eci.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                      <input class="form-check-input" type="radio" name="flexRadioDefault68" id="flexRadioDefault269"
                        v-model="formData.faa" value="1" />
                      <label class="form-check-label" for="flexRadioDefault269"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault68" id="flexRadioDefault270"
                        v-model="formData.faa" value="2" />
                      <label class="form-check-label" for="flexRadioDefault270"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault68" id="flexRadioDefault271"
                        v-model="formData.faa" value="3" />
                      <label class="form-check-label" for="flexRadioDefault271"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault68" id="flexRadioDefault272"
                        v-model="formData.faa" value="4" />
                      <label class="form-check-label" for="flexRadioDefault272"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.faa.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Bermain drama sederhana<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault69" id="flexRadioDefault273"
                        v-model="formData.fab" value="1" />
                      <label class="form-check-label" for="flexRadioDefault273"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault69" id="flexRadioDefault274"
                        v-model="formData.fab" value="2" />
                      <label class="form-check-label" for="flexRadioDefault274"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault69" id="flexRadioDefault275"
                        v-model="formData.fab" value="3" />
                      <label class="form-check-label" for="flexRadioDefault275"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault69" id="flexRadioDefault276"
                        v-model="formData.fab" value="4" />
                      <label class="form-check-label" for="flexRadioDefault276"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.fab.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Menggambar berbagai macam bentuk yang beragam<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault70" id="flexRadioDefault277"
                        v-model="formData.fac" value="1" />
                      <label class="form-check-label" for="flexRadioDefault277"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault70" id="flexRadioDefault278"
                        v-model="formData.fac" value="2" />
                      <label class="form-check-label" for="flexRadioDefault278"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault70" id="flexRadioDefault279"
                        v-model="formData.fac" value="3" />
                      <label class="form-check-label" for="flexRadioDefault279"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault70" id="flexRadioDefault280"
                        v-model="formData.fac" value="4" />
                      <label class="form-check-label" for="flexRadioDefault280"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.fac.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Melukis dengan berbagai cara dan objek<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault71" id="flexRadioDefault281"
                        v-model="formData.fad" value="1" />
                      <label class="form-check-label" for="flexRadioDefault281"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault71" id="flexRadioDefault282"
                        v-model="formData.fad" value="2" />
                      <label class="form-check-label" for="flexRadioDefault282"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault71" id="flexRadioDefault283"
                        v-model="formData.fad" value="3" />
                      <label class="form-check-label" for="flexRadioDefault283"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault71" id="flexRadioDefault284"
                        v-model="formData.fad" value="4" />
                      <label class="form-check-label" for="flexRadioDefault284"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.fad.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Anak bersenandung atau bernyanyi sambil mengerjakan sesuatu<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault72" id="flexRadioDefault285"
                        v-model="formData.fae" value="1" />
                      <label class="form-check-label" for="flexRadioDefault285"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault72" id="flexRadioDefault286"
                        v-model="formData.fae" value="2" />
                      <label class="form-check-label" for="flexRadioDefault286"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault72" id="flexRadioDefault287"
                        v-model="formData.fae" value="3" />
                      <label class="form-check-label" for="flexRadioDefault287"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault72" id="flexRadioDefault288"
                        v-model="formData.fae" value="4" />
                      <label class="form-check-label" for="flexRadioDefault288"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.fae.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Memainkan alat musik/instrumen/benda bersama teman<br />
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault73" id="flexRadioDefault289"
                        v-model="formData.faf" value="1" />
                      <label class="form-check-label" for="flexRadioDefault289"> BB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault73" id="flexRadioDefault290"
                        v-model="formData.faf" value="2" />
                      <label class="form-check-label" for="flexRadioDefault290"> MB </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault73" id="flexRadioDefault291"
                        v-model="formData.faf" value="3" />
                      <label class="form-check-label" for="flexRadioDefault291"> BSH </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="flexRadioDefault73" id="flexRadioDefault292"
                        v-model="formData.faf" value="4" />
                      <label class="form-check-label" for="flexRadioDefault292"> BSB </label>
                    </div>
                    <ion-note color="danger" v-for="error in v$.faf.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                    <ion-textarea class="custom-textarea" placeholder="Type something here"
                      v-model="formData.text1"></ion-textarea>
                    <ion-note color="danger" v-for="error in v$.text1.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Motorik Kasar dan Motorik Halus<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here"
                      v-model="formData.text2"></ion-textarea>
                    <ion-note color="danger" v-for="error in v$.text2.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Bahasa<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here"
                      v-model="formData.text3"></ion-textarea>
                    <ion-note color="danger" v-for="error in v$.text3.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Kognitif<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here"
                      v-model="formData.text4"></ion-textarea>
                    <ion-note color="danger" v-for="error in v$.text4.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Sosial-emosional<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here"
                      v-model="formData.text5"></ion-textarea>
                    <ion-note color="danger" v-for="error in v$.text5.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
                  </li>
                  <li class="list-group-item">
                    Seni<br />
                    <ion-textarea class="custom-textarea" placeholder="Type something here"
                      v-model="formData.text6"></ion-textarea>
                    <ion-note color="danger" v-for="error in v$.text6.$errors" :key="error.$uid">
                      <br />
                      {{ error.$message }}
                    </ion-note>
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
                <a class="btn btn-primary" role="button" @click="submitForm()">Simpan</a>
              </ion-col>
            </ion-row>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
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
import axios from "axios";

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
  data() {
    return {
      username: localStorage.getItem("username"),
      is_admin: localStorage.getItem("is_admin"),
    };
  },
  props: ["tahun", "kelas", "id_siswa", "periode", "semester"],
  setup() {
    const formData = reactive({
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
    });

    const rules = computed(() => {
      return {
        aaa: {
          required,
        },
        aab: {
          required,
        },
        aac: {
          required,
        },
        aad: {
          required,
        },
        aae: {
          required,
        },
        aba: {
          required,
        },
        abb: {
          required,
        },
        abc: {
          required,
        },
        baa: {
          required,
        },
        bab: {
          required,
        },
        bac: {
          required,
        },
        bad: {
          required,
        },
        bba: {
          required,
        },
        bbb: {
          required,
        },
        bbc: {
          required,
        },
        bbd: {
          required,
        },
        bbe: {
          required,
        },
        bbf: {
          required,
        },
        bbg: {
          required,
        },
        bca: {
          required,
        },
        bcb: {
          required,
        },
        bcc: {
          required,
        },
        caa: {
          required,
        },
        cab: {
          required,
        },
        cac: {
          required,
        },
        cad: {
          required,
        },
        cba: {
          required,
        },
        cbb: {
          required,
        },
        cbc: {
          required,
        },
        cbd: {
          required,
        },
        cbe: {
          required,
        },
        cbf: {
          required,
        },
        cbg: {
          required,
        },
        cca: {
          required,
        },
        ccb: {
          required,
        },
        ccc: {
          required,
        },
        ccd: {
          required,
        },
        cce: {
          required,
        },
        ccf: {
          required,
        },
        daa: {
          required,
        },
        dab: {
          required,
        },
        dac: {
          required,
        },
        dba: {
          required,
        },
        dbb: {
          required,
        },
        dbc: {
          required,
        },
        dbd: {
          required,
        },
        dbe: {
          required,
        },
        dbf: {
          required,
        },
        dca: {
          required,
        },
        dcb: {
          required,
        },
        dcc: {
          required,
        },
        dcd: {
          required,
        },
        eaa: {
          required,
        },
        eab: {
          required,
        },
        eac: {
          required,
        },
        eba: {
          required,
        },
        ebb: {
          required,
        },
        ebc: {
          required,
        },
        ebd: {
          required,
        },
        eca: {
          required,
        },
        ecb: {
          required,
        },
        ecc: {
          required,
        },
        ecd: {
          required,
        },
        ece: {
          required,
        },
        ecf: {
          required,
        },
        ecg: {
          required,
        },
        ech: {
          required,
        },
        eci: {
          required,
        },
        faa: {
          required,
        },
        fab: {
          required,
        },
        fac: {
          required,
        },
        fad: {
          required,
        },
        fae: {
          required,
        },
        faf: {
          required,
        },
        text1: {
          required,
        },
        text2: {
          required,
        },
        text3: {
          required,
        },
        text4: {
          required,
        },
        text5: {
          required,
        },
        text6: {
          required,
        },
      };
    });

    const v$ = useVuelidate(rules, formData);

    return { formData, v$ };
  },
  methods: {
    async submitForm() {
      const result = await this.v$.$validate();

      if (!result) {
        console.log(result);
        alert("failed");
      } else {
        const json = JSON.stringify({
          aaa: this.formData.aaa,
          aab: this.formData.aab,
          aac: this.formData.aac,
          aad: this.formData.aad,
          aae: this.formData.aae,
          aba: this.formData.aba,
          abb: this.formData.abb,
          abc: this.formData.abc,
          baa: this.formData.baa,
          bab: this.formData.bab,
          bac: this.formData.bac,
          bad: this.formData.bad,
          bba: this.formData.bba,
          bbb: this.formData.bbb,
          bbc: this.formData.bbc,
          bbd: this.formData.bbd,
          bbe: this.formData.bbe,
          bbf: this.formData.bbf,
          bbg: this.formData.bbg,
          bca: this.formData.bca,
          bcb: this.formData.bcb,
          bcc: this.formData.bcc,
          caa: this.formData.caa,
          cab: this.formData.cab,
          cac: this.formData.cac,
          cad: this.formData.cad,
          cba: this.formData.cba,
          cbb: this.formData.cbb,
          cbc: this.formData.cbc,
          cbd: this.formData.cbd,
          cbe: this.formData.cbe,
          cbf: this.formData.cbf,
          cbg: this.formData.cbg,
          cca: this.formData.cca,
          ccb: this.formData.ccb,
          ccc: this.formData.ccc,
          ccd: this.formData.ccd,
          cce: this.formData.cce,
          ccf: this.formData.ccf,
          daa: this.formData.daa,
          dab: this.formData.dab,
          dac: this.formData.dac,
          dba: this.formData.dba,
          dbb: this.formData.dbb,
          dbc: this.formData.dbc,
          dbd: this.formData.dbd,
          dbe: this.formData.dbe,
          dbf: this.formData.dbf,
          dca: this.formData.dca,
          dcb: this.formData.dcb,
          dcc: this.formData.dcc,
          dcd: this.formData.dcd,
          eaa: this.formData.eaa,
          eab: this.formData.eab,
          eac: this.formData.eac,
          eba: this.formData.eba,
          ebb: this.formData.ebb,
          ebc: this.formData.ebc,
          ebd: this.formData.ebd,
          eca: this.formData.eca,
          ecb: this.formData.ecb,
          ecc: this.formData.ecc,
          ecd: this.formData.ecd,
          ece: this.formData.ece,
          ecf: this.formData.ecf,
          ecg: this.formData.ecg,
          ech: this.formData.ech,
          eci: this.formData.eci,
          faa: this.formData.faa,
          fab: this.formData.fab,
          fac: this.formData.fac,
          fad: this.formData.fad,
          fae: this.formData.fae,
          faf: this.formData.faf,
          text1: this.formData.text1,
          text2: this.formData.text2,
          text3: this.formData.text3,
          text4: this.formData.text4,
          text5: this.formData.text5,
          text6: this.formData.text6,
          periode: "akhir_semester",
          semester: this.semester,
        });
        console.log(json);
        await axios
          .post("http://31.187.72.73:81/API/rapor/" + this.id_siswa, json, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Credentials": "true",
              "Content-Type": "application/json",
              "Authorization": "Bearer " + localStorage.getItem("access_token"),
            },
            withCredentials: true,
          })
          .then((response) => {
            console.log(response);
            alert("Success");
            window.location.href = "/pages/Rapor/" + this.tahun + "/" + this.kelas + "/" + this.id_siswa;
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
      }
    },
    del() {
      let headers = {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      };

      axios
        .delete("http://31.187.72.73:81/API/auth/logout", { headers })
        .then((response) => {
          console.log(response);
          localStorage.clear();
          alert("Anda berhasil keluar");
          window.location.href = "/SignIn";
        })
        .catch((error) => {
          let status = error.response.data.msg;
          if (status == "Missing Authorization Header") {
            alert("Anda belum login");
          }
          else if (status == "Token has expired") {
            alert("Sesi telah berakhir, silahkan login kembali");
          }
          window.location.href = "/SignIn";
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

.btn-search:focus~.input-search {
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
