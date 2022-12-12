// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const firebaseConfig = {
			apiKey: "AIzaSyB8v7ecpBIo7kRZjqjkejker5nVqgoyEVE",
			authDomain: "hmj-mi-project.firebaseapp.com",
			projectId: "hmj-mi-project",
			storageBucket: "hmj-mi-project.appspot.com",
			messagingSenderId: "469988837084",
			appId: "1:469988837084:web:8139f1aab5591cb5271619",
			measurementId: "G-7X1W0FV6G3"
		};

		firebase.initializeApp(firebaseConfig);

		const db = firebase.firestore();



		async function getData() {
    
      const dosen = await db.collection("dosen").get();

			dosen.docs.forEach((dsn, i) => {
				document.getElementById('dataDosen').innerHTML += `
                  <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog rounded bg-transparent p-0">
                    <div class="modal-content shadow">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">PROFIL DOSEN</h1>
                      </div>
                      <div class="modal-body d-flex justify-content-center">
                        <div class="card swiper-slide" style="width: 70%;">
                          <div class="card-img m-auto d-flex justify-content-center align-items-center">
                              <img src="../img/hero.jpg" class="card-img-top m-2 img-thumbnail" alt="">
                          </div>
                          <div class="card-body">
                              <h5 class="card-title text-center">Ketua Umum BANTENG</h5>
                              <p class="card-text">Nama   : ${dsn.data().nama}</p>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
                `

				document.getElementById('dataDosen').innerHTML += `
                    <tr>
                        <th class="align-middle text-center">${i + 1}</th>
                        <th class="align-middle" id="nama-data">${dsn.data().nama}</th>
                        <th class="d-flex align-items-center justify-content-center m-0">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
                                view more
                            </button>
                        </th>
                    </tr>
                `
			});

		};
		getData();

    // db.collection('dosen').where('kelamin', 'in', ['perempuan']).get().then(querySnapshot => {
    //   document.getElementById('testSex').innerHTML = querySnapshot.size;
    // })

    // TOTAL DOSEN
    function totalDosen() {
      db.collection('dosen').get().then(querySnapshot => {
        document.getElementById('totalDosen').innerHTML = querySnapshot.size;
      })
    }
    totalDosen()

    // TOTAL DOSEN LAKI-LAKI
    function dosenLaki() {
      db.collection('dosen').where('kelamin', 'in', ['laki']).get().then(querySnapshot => {
        document.getElementById('totalLaki').innerHTML = querySnapshot.size;
      })
    }
    dosenLaki()

    // TOTAL DOSEN PEREMPUAN
    function dosenPerempuan() {
      db.collection('dosen').where('kelamin', 'in', ['perempuan']).get().then(querySnapshot => {
        document.getElementById('totalPerempuan').innerHTML = querySnapshot.size;
      })
    }
    dosenPerempuan()