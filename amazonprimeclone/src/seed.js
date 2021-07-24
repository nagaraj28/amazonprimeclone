export function seedDatabase(firebase) {
    function getUUID() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
    }
  
    /* series
      ============================================ */
    //comedy
    firebase.firestore().collection('series').add({
      id: getUUID(),
      title: 'Hostel Daze',
      description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
      genre: 'comedy',
      maturity: '18',
      slug: 'Hostel-Daze',
      imageSrc: 'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/6329a3ce102c0007cd3b9aa9d75c5385a3f105791a76845887e4f492ba2a7176._UR1920,1080_RI_UX400_UY225_.jpg'
    });

    firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Panchayat',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Panchayat',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2407ebef02f8ce9f1218ecd1100725b2ce84718201b925e000ed1e561220cc1e._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Psych',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Psych',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/08a72b3fc5bc4231726c8c6fef348c29aea504756c68524ec928c2a984b5c4ae._UR1920,1080_RI_UX400_UY225_.jpg'
      });
      
      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Shaitaan Haveli',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Shaitaan-Haveli',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/1fb6541581057ab7f34879065303961476e10fde2279a27b6d1742e77d291ab9._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      //Drama

        
      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Breathe',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'Breathe',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a168c10d593f02337a42180eff321190e7f56c721294d463f29560591355ab6d._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Breathe',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'Breathe',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/a168c10d593f02337a42180eff321190e7f56c721294d463f29560591355ab6d._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'The Flash',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'The-Flash',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/94eabbaa620f5da40abdbd02587e6faa169838b28d2faf4d188e6ec1a28b9634._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'The Flash',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'The-Flash',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/94eabbaa620f5da40abdbd02587e6faa169838b28d2faf4d188e6ec1a28b9634._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      
      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Tom Clancy\'s Jack Ryan',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'Tom Clancy\'s-Jack-Ryan',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/be6cb0b10f8b04700cc7d0ec455f92f68d1cd84f6dada061e0bfe16b09addd7f._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'SuperGirl',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'SuperGirl',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/7cb21b67b3654204ec8880c4b844097b546c328791436812da4cb03876d82aaf._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      
      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'The Wilds',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'The Wilds',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/fa2393beee3bf375a53b1e324f813a3f6eda36142fe575de558acd744b081125._UR1920,1080_RI_UX400_UY225_.jpg'
      });


       
      firebase.firestore().collection('series').add({
        id: getUUID(),
        title: 'Carnival Row',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'Drama',
        maturity: '18',
        slug: 'Carniva-Row',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CRNY_S1/*/COVER_ART/CLEAN/RoofTop._UR1920,1080_RI_UX400_UY225_.jpg'
      });

 ///Romance

  
 firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Modern Love',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Romance',
    maturity: '18',
    slug: 'Modern-Love',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/MOLV_S1/*/en_US/COVER_ART/BENCH._UR1920,1080_RI_UX400_UY225_.jpg'
  });

  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Reign',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Romance',
    maturity: '18',
    slug: 'Reign',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/18027ad07ae3ae93c8a06f7e77ea965f6ee1ecb819294c0a559f18562222c014._UR1920,1080_RI_UX400_UY225_.jpg'
  });

  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Time Out',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Romance',
    maturity: '18',
    slug: 'Time Out',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/782a001fa2303e65c4571d10eac0189c0d7dbcbec2702d4700067ea75a0e92ac._UR300,300_BL99_UR400,225_CLs%7C400,225%7C/782a001fa2303e65c4571d10eac0189c0d7dbcbec2702d4700067ea75a0e92ac.jpg%7C0,0,400,225+0,0,400,225_.jpg'
  });
      

  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Anger Management',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Romance',
    maturity: '18',
    slug: 'Anger-Management',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5c6794b54cac48eb3d7c46bbae2ae1a786560f9fb597298f7218d33d3184efeb._UR300,300_BL99_UR400,225_CLs%7C400,225%7C/5c6794b54cac48eb3d7c46bbae2ae1a786560f9fb597298f7218d33d3184efeb.jpg%7C0,0,400,225+0,0,400,225_.jpg'
  });

  
  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Skulls & Roses',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Romance',
    maturity: '18',
    slug: 'Skulls-&-Roses',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/ac360ee5bf633fb0f48cdf18ba863e269fb997a7f21381cb1c3685afbc90a5fa._UR1920,1080_RI_UX400_UY225_.jpg'
  });


  //Documentary


  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'City of Ghosts',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Documentary',
    maturity: '18',
    slug: 'City-of-Ghosts',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/98390776c18d691776f754c34dc66b480f62d3f4489d617534a7b12612b17023._UR1920,1080_RI_SX356_FMjpg_.jpg'
  });

  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Make Us Dream',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Documentary',
    maturity: '18',
    slug: 'Make Us Dream',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/9ca09f83282264c9e831b463f3f226f2b94d6194c7f8d923d59b148b949e112c._UR1920,1080_RI_SX356_FMjpg_.jpg'
  });


  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Kashmir The Story',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Documentary',
    maturity: '18',
    slug: 'Kashmir-The-Story',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/24ff1bb02c5a2f9997dcefb3cf537186286913254e8c054defb7c82ddc4565db._UR1920,1080_RI_SX356_FMjpg_.jpg'
  });

  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Chasing Happiness',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Documentary',
    maturity: '18',
    slug: 'Chasing-Happiness',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/JBRO/en_US/COVER_ART/Kevin._UR1920,1080_RI_SX356_FMjpg_.jpg'
  });

  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'One Child Nation',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Documentary',
    maturity: '18',
    slug: 'One-Child-Nation',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/OCN/*/COVER_ART/RedShirt._UR1920,1080_RI_SX356_FMjpg_.jpg'
  });


  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Miracle Nature',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Documentary',
    maturity: '18',
    slug: 'Miracle-Nature',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d245597c47d946f6998ab04b48afb304fdcbaaab299b7a76c976a32a4b3bf241._UR1920,1080_RI_SX356_FMjpg_.jpg'
  });



  firebase.firestore().collection('series').add({
    id: getUUID(),
    title: 'Head Above Water',
    description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
    genre: 'Documentary',
    maturity: '18',
    slug: 'Head Above Water',
    imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/688c9e5b5b9ada8e047481aab13bc1a2437541afa08e8735a7c12d0cb0c87230._UR1920,1080_RI_SX356_FMjpg_.png'
  });

/* Movies
      ============================================ */
    //comedy

    firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Tom & Jerry',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Tom & Jerry',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/b894c4829c54a3733d3e427ba8fb746ef0193d21f40039193d01ffa9e02879f6._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Ek Mini Katha',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Ek Mini Katha',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4ce85335b541b460ce9ef01cb4884ea7c64cea4c2ada91a15bbb219c259773c7._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Sonu Ke Titu Ki Sweety',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Sonu Ke Titu Ki Sweety',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/dfb788acd0dcbd94cdfd66b3553ae94fc1dcbede3fe2d63f7dc6d26b3197a118._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Hello Charlie',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Hello Charlie',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/42aa0403ab27512776152a84fa014ee3bf20625f3f0364bd97fe8abea932868f._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Another Round',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Another Round',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/e6f5d7106ad148bc3daced22183ed2240f9d6ace5e4f2e6762fd1665cfe6f7b7._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Baywatch',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Baywatch',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/5f6175a529131a9ac24e18d44b32bd7e7d5f6307746472ae5a6701ef9db5189d._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Despicable Me',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Despicable Me',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4d22a2766e3dfe9c5e2c9186efadae34c4a513f5b0971f45ce3c980f797fd7d5._UR1920,1080_RI_UX400_UY225_.jpg'
      });

    
      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Despicable Me 2',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'comedy',
        maturity: '18',
        slug: 'Despicable Me 2',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d0393c112db0a6903d609e8c3884263598e6f050152520ee5d788f8e19d16466._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      //Romance

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Chemical Hearts',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'romance',
        maturity: '18',
        slug: 'Chemical Hearts',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/CHEM/*/*_*/COVER_ART/LILI_BLUR_BACKGROUND._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Photograph',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'romance',
        maturity: '18',
        slug: 'Photograph',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/44c2131db76aefb7210447a3f86ce3fc38f5670346a2219d3caf2cc0d7f4f27b._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Jaanu',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'romance',
        maturity: '18',
        slug: 'Jaanu',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/d0aed39dc6270a50048e44dba6a2f60e2416bfebd8be86f9a8491ecbbcff7578._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'American Pie 2',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'romance',
        maturity: '18',
        slug: 'American Pie 2',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/0a2aa01ddd39af71dcc361476b953983a3e95cb67cbebc1eb3bfeaf4646b6f4c._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'The Aeronauts',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'romance',
        maturity: '18',
        slug: 'The Aeronauts',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/atv-aps-images/encoded/AERO/en_US/COVER_ART/CLEAN/BLUE._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Notebook',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'romance',
        maturity: '18',
        slug: 'Notebook',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/52d4bd6c61df92f844919fead65f13d18051569ddd2646d7b3e1c59e4eeaf58a._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      //Horror

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'The Priest',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'horror',
        maturity: '18',
        slug: 'The Priest',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/129df6694b748a6ac8132d808c3ff7d9b3f63538af5773c748d291e33461fabc._UR1920,1080_RI_UX400_UY225_.jpg'
      });

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Train To Busan',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'horror',
        maturity: '18',
        slug: 'Train To Busan',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/77f7350fb4436280a0266913c13eb64efd6743ec81b0d889c985e91fdd8f2a79._UR1920,1080_RI_UX400_UY225_.jpg'
      });


      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'Conjuring, The (2013)',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'horror',
        maturity: '18',
        slug: 'Conjuring, The (2013)',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/07a7af2f0cc37792b2eb0ee196b53dd10a39ed816fc6f61633116e65ad603745._UR1920,1080_RI_UX400_UY225_.jpg'
      });
      

      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'IT',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'horror',
        maturity: '18',
        slug: 'IT',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/4e214f9e9cfb8334dc29891f22c67e7e6dce57514b55aba1c05f5188ed513f66._UR1920,1080_RI_UX400_UY225_.jpg'
      });
      
      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'The Conjuring 2',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'horror',
        maturity: '18',
        slug: 'The Conjuring 2',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/f0431505d9327cc5c53635d793c3600531a049c8a17c59267010773493361018._UR1920,1080_RI_UX400_UY225_.jpg'
      });
      
      firebase.firestore().collection('movies').add({
        id: getUUID(),
        title: 'The Power',
        description: '6 friends enter their second year of college and dig deeper into the notorious universe of an Indian hostel. Hostel Daze Season 2 incorporates the second chapter of hostel-life in the lives of Ankit, Jaat, Chirag, Jhantoo, Akanksha and Nabomita. The problems, the hurdles and the unlimited quirks have now doubled.',
        genre: 'horror',
        maturity: '18',
        slug: 'The Power',
        imageSrc:'https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/2d1aa1886e331f615cf089df9c7da30e1dbc5cb169df303d036e8c9cd7570360._UR1920,1080_RI_UX400_UY225_.png'
      });
        
}