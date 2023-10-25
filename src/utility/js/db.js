useEffect(() => {
    database.ref('data/test').on("value", function (snapshot) {
      console.log(snapshot.val());
    });

    db.collection("test collection").doc("Ec9mK16RC1pDcG36szFz").onSnapshot((doc) => {
      var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      // console.log(source, " data: ", doc.data());
      console.log(doc.id)
      console.log(doc.data().system.minimam.prossor);
      console.log(doc.data().system.recommended.prossor);

      database.ref(doc.data().img).once('value', (snapshot) => {

        snapshot.forEach(
          function (Childsnapshot) {
            console.log(Childsnapshot.key,Childsnapshot.val())
          });

      });
    });

  }, []);

  function addData() {
    db.collection("test collection").doc().set({
      name: 'Test game',
      price: '2000',
      system: {
        minimam: {
          os: 'Windows',
          prossor: 'Intel i3 5th Gen',
          memory: '4GB',
          graphics: 'Intel UHD 620'
        },
        recommended: {
          os: 'Windows',
          prossor: 'Intel i5 5th Gen',
          memory: '8GB',
          graphics: 'Nvidia gtx 560'
        }
      }
    }).then(() => {
      console.log("Document successfully written!");
    }).catch((error) => {
      console.error("Error writing document: ", error);
    });
  }
