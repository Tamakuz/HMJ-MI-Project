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
    const storage = firebase.storage();



    async function getData() {


      const dosen = await db.collection("smt1").get();

      dosen.docs.forEach((mhs, i) => {
        const storageRef = storage.ref().child(`smt1/${mhs.data().nama}.jpg`);
          storageRef.getDownloadURL().then((url) => {
          document.getElementById('foto'+i).src = url;
        })
        document.getElementById('dataStudent').innerHTML += `
                    <div class="modal fade" id="staticBackdrop${i}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Profile Mahasiswa</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body d-flex justify-content-center">
                                    <div class="card swiper-slide" style="width: 70%;">
                                        <div class="card-img m-auto d-flex justify-content-center align-items-center">
                                            <img src="" class="card-img-top m-2 img-thumbnail" alt="" id="foto${i}">
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">Ketua Umum BANTENG</h5>
                                            <p class="card-text">Nim    : ${mhs.data().nim}</p>
                                            <p class="card-text">Nama   : ${mhs.data().nama}</p>
                                            <p class="card-text">Jenis Kelamin   : ${mhs.data().kelamin}</p>
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

        document.getElementById('dataStudent').innerHTML += `
            <tr>
                <th class="align-middle text-center">${i + 1}</th>
                <th class="align-middle">${mhs.data().nim}</th>
                <th class="align-middle">${mhs.data().nama}</th>
                <th class="d-flex align-items-center justify-content-center">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${i}">
                        view more
                    </button>
                </th>
            </tr>
        `
      });

    };
    getData();

    // TOTAL MAHASISWA
    function totalMhs() {
      db.collection('smt1').get().then(querySnapshot => {
        document.getElementById('totalMhs').innerHTML = querySnapshot.size;
      })
    }
    totalMhs()

    // TOTAL MAHASISWA LAKI-LAKI
    function mhsLaki() {
      db.collection('smt1').where('kelamin', 'in', ['Laki - laki']).get().then(querySnapshot => {
        document.getElementById('totalMhsLaki').innerHTML = querySnapshot.size;
      })
    }
    mhsLaki()

    // TOTAL MAHASISWA PEREMPUAN
    function mhsPerempuan() {
      db.collection('smt1').where('kelamin', 'in', ['Perempuan']).get().then(querySnapshot => {
        document.getElementById('totalMhsPerempuan').innerHTML = querySnapshot.size;
      })
    }
    mhsPerempuan()