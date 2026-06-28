function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'si-LK'; // Sinhala
  utterance.pitch = 0.5;    // 1.0 = Normal. 0.5 = බර/ගැඹුරු 
  utterance.rate = 0.7;     // 1.0 = Normal. 0.7 = සෙමින්, ගාම්භීර
  utterance.volume = 1;

  // "Microsoft Ruwan" or "Google Sinhala" Male Voice එක Force කරනවා
  const voices = window.speechSynthesis.getVoices();
  const maleVoice = voices.find(voice => voice.lang === 'si-LK' && voice.name.includes('Male'));
  if (maleVoice) {
    utterance.voice = maleVoice;
  }

  window.speechSynthesis.speak(utterance);
}
