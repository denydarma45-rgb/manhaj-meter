// Variabel utama untuk pengelolaan aplikasi
let currentQuestion = 0;
const answers = new Array(questions.length).fill(null);

// Elemen DOM utama
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const questionNumber = document.getElementById('question-number');
const questionTitle = document.getElementById('question-title');
const choicesContainer = document.getElementById('choices');
const progressBar = document.getElementById('progress-bar');
const profileName = document.getElementById('profile-name');
const organizationResult = document.getElementById('organization-result');
const descriptionText = document.getElementById('description');

// CSS dinamis untuk mengubah lebar progress bar
const dynamicStyle = document.createElement('style');
dynamicStyle.textContent = '#progress-bar::before { width: var(--progress-width, 0%) !important; }';
document.head.appendChild(dynamicStyle);

// Inisialisasi event listener saat halaman siap
function initializeApp() {
  startBtn.addEventListener('click', handleStart);
  prevBtn.addEventListener('click', handlePrevious);
  nextBtn.addEventListener('click', handleNext);
  restartBtn.addEventListener('click', handleRestart);
  shareBtn.addEventListener('click', handleShare);
  renderQuestion();
}

// Menampilkan layar kuis dari halaman welcome
function handleStart() {
  welcomeScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  resultScreen.classList.add('hidden');
  renderQuestion();
}

// Render pertanyaan saat ini di layar kuis
function renderQuestion() {
  const current = questions[currentQuestion];
  questionNumber.textContent = `Soal ${currentQuestion + 1} dari ${questions.length}`;
  questionTitle.textContent = current.question;
  updateProgressBar();
  renderChoices(current.options);
  updateNavigationButtons();
}

// Buat markup pilihan radio berdasarkan opsi pertanyaan
function renderChoices(options) {
  choicesContainer.innerHTML = '';

  options.forEach((option, index) => {
    const optionId = `choice-${currentQuestion}-${index}`;
    const optionLabel = document.createElement('label');
    const radioInput = document.createElement('input');

    optionLabel.className = 'choice';
    radioInput.type = 'radio';
    radioInput.name = 'choice';
    radioInput.id = optionId;
    radioInput.value = index;

    const selectedAnswer = answers[currentQuestion];
    if (selectedAnswer === index) {
      radioInput.checked = true;
    }

    optionLabel.appendChild(radioInput);
    optionLabel.appendChild(document.createElement('span'));
    optionLabel.querySelector('span').textContent = option.text;

    optionLabel.addEventListener('click', () => {
      radioInput.checked = true;
    });

    choicesContainer.appendChild(optionLabel);
  });
}

// Perbarui tampilan progress bar berdasarkan soal saat ini
function updateProgressBar() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressBar.style.setProperty('--progress-width', `${progress}%`);
}

// Perbarui keadaan tombol navigasi
function updateNavigationButtons() {
  prevBtn.style.display = currentQuestion === 0 ? 'none' : 'inline-flex';

  if (currentQuestion === questions.length - 1) {
    nextBtn.textContent = 'Lihat Hasil';
  } else {
    nextBtn.textContent = 'Berikutnya →';
  }
}

// Simpan jawaban pengguna untuk pertanyaan saat ini
function saveAnswer() {
  const selectedInput = document.querySelector('input[name="choice"]:checked');

  if (!selectedInput) {
    return false;
  }

  answers[currentQuestion] = Number(selectedInput.value);
  return true;
}

// Tangani tombol berikutnya
function handleNext() {
  if (!saveAnswer()) {
    alert('Silakan pilih salah satu jawaban.');
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
    return;
  }

  showResult();
}

// Tangani tombol sebelumnya
function handlePrevious() {
  if (currentQuestion > 0) {
    currentQuestion -= 1;
    renderQuestion();
  }
}

// Hitung dan tampilkan hasil akhir
function showResult() {
  const totals = calculateTotals();
  const percentages = calculatePercentages(totals);
  const sortedResults = sortResults(percentages);

  renderResultItems(sortedResults);
  renderProfile(sortedResults[0]);

  welcomeScreen.classList.add('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
}

// Hitung total skor untuk setiap kategori
function calculateTotals() {
  return answers.reduce(
    (acc, selectedIndex, questionIndex) => {
      if (selectedIndex === null) {
        return acc;
      }

      const score = questions[questionIndex].options[selectedIndex].score;
      acc.nu += score.nu;
      acc.muh += score.muh;
      acc.salafi += score.salafi;
      return acc;
    },
    { nu: 0, muh: 0, salafi: 0 }
  );
}

// Hitung persentase dari total skor
function calculatePercentages(totals) {
  const totalScore = totals.nu + totals.muh + totals.salafi;
  const safeTotal = totalScore === 0 ? 1 : totalScore;

  return {
    nu: Math.round((totals.nu / safeTotal) * 100),
    muh: Math.round((totals.muh / safeTotal) * 100),
    salafi: Math.round((totals.salafi / safeTotal) * 100)
  };
}

// Urutkan hasil dari nilai terbesar ke terkecil
function sortResults(percentages) {
  const groups = [
    { key: 'nu', label: 'The Traditional Harmonizer', value: percentages.nu },
    { key: 'muh', label: 'The Analytical Seeker', value: percentages.muh },
    { key: 'salafi', label: 'The Scriptural Purist', value: percentages.salafi }
  ];

  return groups.sort((a, b) => b.value - a.value);
}

// Render card hasil organisasi terurut
function renderResultItems(sortedResults) {
  organizationResult.innerHTML = '';

  sortedResults.forEach((item, index) => {
    const resultItem = document.createElement('div');
    const placeLabel = ['🥇', '🥈', '🥉'][index] || '•';

    resultItem.className = 'result-item';
    resultItem.innerHTML = `
      <strong>${placeLabel} ${item.label}</strong>
      <div class="bar">
        <div class="fill" style="width: ${item.value}%;"></div>
      </div>
      <span>${item.value}%</span>
    `;

    organizationResult.appendChild(resultItem);
  });
}

// Tentukan profil dominan dan tampilkan penjelasan
function renderProfile(topResult) {
  profileName.textContent = topResult.label;

  let profileDescription = '';

  if (topResult.key === 'nu') {
    profileDescription =
      'Anda cenderung menghargai tradisi dan menjaga keharmonisan dalam praktik beragama. Pendekatan Anda memadukan nilai-nilai lokal dengan penghayatan spiritual yang hangat. Anda nyaman dengan jalur yang menggabungkan warisan agama dan adat istiadat. Upaya memelihara kedamaian antarumat menjadi bagian penting dari pemahaman keagamaan Anda. Anda memilih keseimbangan daripada konfrontasi.';
  } else if (topResult.key === 'muh') {
    profileDescription =
      'Anda menyukai pendekatan yang bersifat analitis dan terstruktur dalam memahami ajaran agama. Anda terbuka pada kajian teks yang disertai argumentasi dan logika. Metode Anda memberi ruang bagi perbedaan pendapat yang berlandaskan dalil. Anda mencari pemahaman yang jelas dan dapat dipertanggungjawabkan. Kritis namun tetap mencari keseimbangan.';
  } else {
    profileDescription =
      'Anda cenderung menekankan kembali pada teks utama dan berhati-hati terhadap inovasi dalam praktik keagamaan. Anda mengutamakan kesesuaian langsung dengan sumber-sumber agama yang paling otentik. Pendekatan Anda bersifat detail dan teliti dalam menjaga kemurnian ajaran. Anda nyaman pada kejelasan nash dan batas yang tegas. Anda memilih kesederhanaan dalam ibadah dan keyakinan.';
  }

  descriptionText.textContent = profileDescription;
}

// Reset aplikasi ke kondisi awal
function handleRestart() {
  currentQuestion = 0;
  answers.fill(null);
  welcomeScreen.classList.remove('hidden');
  quizScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  renderQuestion();
}

// Bagikan hasil menggunakan share API atau clipboard
function handleShare() {
  const totals = calculateTotals();
  const percentages = calculatePercentages(totals);
  const sortedResults = sortResults(percentages);
  const profile = sortedResults[0];
  const message = buildShareMessage(sortedResults, profile.label);

  if (navigator.share) {
    navigator
      .share({
        title: 'Hasil ManhajMeter',
        text: message
      })
      .catch(() => {
        copyTextToClipboard(message);
      });
    return;
  }

  copyTextToClipboard(message);
}

// Buat teks hasil yang akan dibagikan
function buildShareMessage(sortedResults, profileLabel) {
  const lines = [
    'Hasil ManhajMeter:',
    ...sortedResults.map((item, index) => {
      const medal = ['🥇', '🥈', '🥉'][index] || '•';
      return `${medal} ${item.label}: ${item.value}%`;
    }),
    `Profil dominan: ${profileLabel}`
  ];

  return lines.join('\n');
}

// Salin teks ke clipboard dengan fallback
function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Hasil berhasil disalin ke clipboard.');
    });
    return;
  }

  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = text;
  tempTextarea.style.position = 'fixed';
  tempTextarea.style.left = '-9999px';
  document.body.appendChild(tempTextarea);
  tempTextarea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextarea);
  alert('Hasil berhasil disalin ke clipboard.');
}

// Jalankan aplikasi setelah semua elemen siap
initializeApp();
