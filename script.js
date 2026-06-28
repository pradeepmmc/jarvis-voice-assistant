const textInput = document.getElementById('textInput');
const speakBtn = document.getElementById('speakBtn');

speakBtn.addEventListener('click', () => {
  // TextBox එකේ තියෙන වචන ටික ගන්නවා
  const text = textInput.value;

  if (text !== '') {
    // Text-to-Speech object එක හදාගන්නවා
    const utterance = new SpeechSynthesisUtterance(text);

    // භාෂාව තෝරනවා (මෙතන ඉංග්‍රීසි දීලා තියෙන්නේ)
    utterance.lang = 'en-US'; 
    
    // වේගය (rate) සහ කටහඬේ තාරතාවය (pitch) වෙනස් කරන්නත් පුළුවන්
    utterance.rate = 1; // 0.1 ඉඳන් 10 වෙනකන් දෙන්න පුළුවන් (සාමාන්‍ය වේගය 1)
    utterance.pitch = 1; // 0 ඉඳන් 2 වෙනකන් දෙන්න පුළුවන් (සාමාන්‍ය අගය 1)

    // Voice එක play කරනවා
    window.speechSynthesis.speak(utterance);
  } else {
    alert('කරුණාකර මොනවා හරි ටයිප් කරන්න!');
  }
});
