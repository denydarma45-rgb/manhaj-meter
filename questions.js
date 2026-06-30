const questions = [
  {
    question: "Bagaimana Anda biasanya menangani tradisi keagamaan yang sudah berlangsung lama di komunitas Anda?",
    options: [
      {
        text: "Saya cenderung menghargai dan melanjutkan kebiasaan tersebut selama tidak bertentangan jelas dengan prinsip dasar agama.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya ingin memeriksa asal-usulnya dengan dasar teks dan bukti sehingga bisa dipahami dengan lebih ilmiah.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya lebih memilih memurnikan praktik dengan hanya mengikuti teks utama secara literal tanpa penambahan tradisi.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Ketika mencari dalil, pendekatan mana yang paling penting bagi Anda?",
    options: [
      {
        text: "Saya memperhitungkan teks dan juga bagaimana ulama generasi sebelumnya menjelaskan maknanya.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya menganalisis dalil dengan logika dan konteks bahasa untuk mencapai pemahaman yang masuk akal.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya memprioritaskan pemahaman yang langsung dari teks tanpa menambahkan interpretasi yang kompleks.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana Anda melihat peran hadis dalam kehidupan keagamaan sehari-hari?",
    options: [
      {
        text: "Saya mengikuti hadis yang sudah disepakati ulama dan diterapkan dalam tradisi komunitas." ,
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya menilai hadis berdasarkan kekuatan sanad dan kesesuaian konteksnya.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya memprioritaskan hadis yang jelas dan tidak bertentangan dengan ayat Al-Qur'an sambil menghindari yang lemah.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Apa sikap Anda terhadap pelaksanaan sunnah yang tidak selalu dilakukan secara kaku?",
    options: [
      {
        text: "Saya melihatnya sebagai bagian dari warisan keyakinan yang bisa dipraktikkan dengan kelembutan.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya berusaha memahami tujuan sunnah tersebut supaya pelaksanaannya tidak lepas dari makna.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya mengikuti sunnah secara ketat ketika jelas berasal dari teks tanpa tambahan adat.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Ketika memilih panduan dalam memahami agama, hal apa yang paling Anda perhatikan?",
    options: [
      {
        text: "Saya memilih panduan yang menjaga keseimbangan antara teks dan tradisi lokal.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya lebih percaya pada argumen yang tersusun rapi dan dapat dipertanggungjawabkan secara ilmu.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya memilih yang menekankan kembali kepada teks utama dan menghindari inovasi yang tidak jelas landasannya.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana Anda melihat hubungan antara budaya lokal dan praktik ibadah?",
    options: [
      {
        text: "Saya melihat budaya lokal sebagai warna yang sah selama tidak bertentangan dengan prinsip agama.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya ingin memastikan budaya tersebut selaras dengan dalil sebelum mengadopsinya dalam ibadah.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya lebih memilih praktik yang jelas berdasarkan nash dan berhati-hati terhadap unsur-unsur lokal yang tak berdasar.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Saat mendengar tentang tahlilan dan yasinan, apa yang paling Anda pikirkan?",
    options: [
      {
        text: "Saya melihatnya sebagai cara berkumpul sambil berdoa untuk keluarga dan leluhur.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya memeriksa apakah praktik tersebut sesuai dengan teks dan tidak berlebihan dalam ritual.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya cenderung mengutamakan doa langsung kepada Tuhan dan berhati-hati terhadap tradisi yang tak didukung oleh nash.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana pandangan Anda terhadap ziarah kubur dan permohonan doa di sana?",
    options: [
      {
        text: "Saya melihatnya sebagai kesempatan mendoakan orang yang sudah tiada dalam suasana yang penuh rasa hormat.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya ingin memastikan bahwa doa dan tata caranya tidak melampaui batas yang ditetapkan dalam teks.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya berhati-hati terhadap praktik yang dapat mengaburkan batas antara ibadah kepada Tuhan dan penghormatan.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana Anda memahami konsep tawassul dalam berdoa?",
    options: [
      {
        text: "Saya memandangnya sebagai usaha memohon pertolongan Tuhan melalui perantara yang baik secara hati-hati.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya menelaah dasar dalilnya secara cermat agar pengertian tawassul tidak melenceng.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya mengutamakan doa langsung kepada Tuhan tanpa perantara jika tidak ada bukti yang jelas.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Apa sikap Anda terhadap praktik bid'ah dalam konteks amalan keagamaan?",
    options: [
      {
        text: "Saya berusaha membedakan antara tradisi baik dan hal baru yang tidak memiliki dasar jelas.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya menggunakan kajian dalil untuk menentukan mana yang bisa diterima dan mana yang tidak.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya cenderung menolak amalan baru yang tidak ditemukan dalam ajaran awal agama.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Ketika bertemu dengan masalah baru, bagaimana Anda memilih cara berijtihad?",
    options: [
      {
        text: "Saya menghargai pendapat ulama yang berpengalaman dan tradisi yang sudah mapan.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya mencari penjelasan yang sistematis berdasarkan kajian teks dan logika.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya lebih memilih dasar yang langsung dari sumber utama tanpa memperluas pada interpretasi tambahan.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana Anda merespons perbedaan pendapat di kalangan ulama?",
    options: [
      {
        text: "Saya melihatnya sebagai kekayaan tradisi yang harus dihargai saat menempuh jalan beragama.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya mempelajari argumen masing-masing pihak untuk memahami dasar perbedaan itu.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya memilih pendapat yang menurut saya paling mendekati teks secara literal dan jelas landasannya.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Apa yang Anda jadikan acuan saat menentukan figur keagamaan untuk dijadikan teladan?",
    options: [
      {
        text: "Saya memilih figur yang dikenal menjaga tradisi dan hubungan dengan masyarakat.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya mencari tokoh yang menjelaskan agama secara rasional dan berdasarkan sumber primer.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya mengikuti figur yang menekankan kembali pada teks utama dan kebersihan akidah.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana pendekatan Anda saat membaca Al-Qur'an?",
    options: [
      {
        text: "Saya memperhatikan makna dan kebiasaan tafsir dari guru-guru yang saya percayai.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya menelaah teks dengan konteks bahasa dan penjelasan mendetail.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya cenderung membaca langsung dan mengambil makna yang paling jelas dari ayat.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana cara Anda memahami hadis ketika ada banyak versi dan penjelasan?",
    options: [
      {
        text: "Saya memadukan penjelasan ulama klasik dengan kelaziman yang sudah dikenal masyarakat.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya membandingkan sanad dan matan untuk mendapatkan pemahaman yang koheren.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya memilih penjelasan yang paling sesuai dengan teks dan tidak memberi ruang bagi penafsiran berlebihan.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Seberapa penting bagi Anda untuk menjaga hubungan antara praktik agama dan budaya lokal?",
    options: [
      {
        text: "Saya menganggapnya penting untuk menyesuaikan ajaran dengan kehidupan sehari-hari.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya ingin budaya tersebut tetap berada dalam batas-batas dalil agama.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya lebih suka memisahkan budaya dari ibadah kecuali jika jelas diizinkan oleh teks.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana Anda menilai pentingnya sanad saat menilai sebuah hadis?",
    options: [
      {
        text: "Saya menganggap sanad penting, tetapi juga memperhatikan kesesuaian dengan praktik sejarah.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya melihat sanad sebagai salah satu ukuran utama untuk menilai kekuatan hadis.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya menempatkan sanad sebagai dasar utama sebelum menerima sebuah hadis.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Apa yang Anda utamakan saat menghadapi amalan yang tidak ada contoh jelasnya pada masa Nabi?",
    options: [
      {
        text: "Saya cenderung mempertimbangkan kebiasaan baik yang berkembang selama berabad-abad.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya menilai berdasarkan kaidah umum dan dalil yang relevan agar tetap berada di jalur yang benar.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya berhati-hati dan lebih memilih meninggalkan saat bukti teks tidak jelas.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Seberapa besar pengaruh pendekatan tradisional dalam menentukan praktik ibadah Anda?",
    options: [
      {
        text: "Saya merasa nyaman dengan praktik yang diwarisi oleh para leluhur agama.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya lebih mengedepankan pemikiran kritis yang sesuai dengan teks dan konteks.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya mengutamakan kembali pada pemahaman langsung tanpa terlalu bergantung pada tradisi lama.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  },
  {
    question: "Bagaimana Anda memandang proses memilih ustadz atau pembimbing agama?",
    options: [
      {
        text: "Saya memilih berdasarkan reputasi dan hubungan mereka dengan komunitas lokal.",
        score: {
          nu: 3,
          muh: 1,
          salafi: 0
        }
      },
      {
        text: "Saya menilai kemampuan mereka menjelaskan ajaran secara logis dan berlandaskan teks.",
        score: {
          nu: 1,
          muh: 3,
          salafi: 2
        }
      },
      {
        text: "Saya mencari pembimbing yang tegas pada teks utama dan menghindari ajaran yang samar.",
        score: {
          nu: 0,
          muh: 1,
          salafi: 3
        }
      }
    ]
  }
];
