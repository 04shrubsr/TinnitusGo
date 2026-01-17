audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

show();
document.onload = show();
window.onload = show();

function show() {
  frequency = document.getElementById("fIn").value;
  document.getElementById("fOut").innerHTML = frequency + ' Hz';

  volume = document.getElementById("vIn").value / 100;

  if (document.getElementById("but").innerHTML === "⏸"){
    oscillator.stop();
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    oscillator.start();
  }
};

function beep() {

  if (document.getElementById("but").innerHTML === "⏸"){
    oscillator.stop();
    document.getElementById("but").innerHTML = "▶";

  } else {
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    document.getElementById("but").innerHTML = "⏸";
    oscillator.start();
  }
};

function update(){
  oscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  oscillator.start();
}

function to_SD2(){
  document.getElementById("SD_text").style.visibility = 'collapse';
  document.getElementById("SD_text2").style.visibility = 'visible';
}

function to_SD1(){
  document.getElementById("SD_text2").style.visibility = 'collapse';
  document.getElementById("SD_text").style.visibility = 'visible';
}

function to_N2(){
  document.getElementById("N_text").style.visibility = 'collapse';
  document.getElementById("N_text2").style.visibility = 'visible';
}

function to_N1(){
  document.getElementById("N_text2").style.visibility = 'collapse';
  document.getElementById("N_text").style.visibility = 'visible';
}

function to_TT2(){
  document.getElementById("TT_text").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'collapse';
  document.getElementById("TT_text2").style.visibility = 'visible';
}

function to_TT1(){
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text").style.visibility = 'visible';
}

function to_TT3(){
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'visible';
}

function to_GI2(){
  document.getElementById("GI_text").style.visibility = 'collapse';
  document.getElementById("GI_text2").style.visibility = 'visible';
}

function to_GI1(){
  document.getElementById("GI_text2").style.visibility = 'collapse';
  document.getElementById("GI_text").style.visibility = 'visible';
}

function SD_next(){
  document.getElementById("SD_table").style.visibility = 'collapse';
  document.getElementById("N_table").style.visibility = 'visible';
  document.getElementById("SD_text").style.visibility = 'collapse';
  document.getElementById("SD_text2").style.visibility = 'collapse';
  document.getElementById("N_text").style.visibility = 'visible';
}

function N_next(){
  document.getElementById("N_table").style.visibility = 'collapse';
  document.getElementById("TT_table").style.visibility = 'visible';
  document.getElementById("N_text").style.visibility = 'collapse';
  document.getElementById("N_text2").style.visibility = 'collapse';
  document.getElementById("TT_text").style.visibility = 'visible';
}

function N_prev(){
  document.getElementById("N_table").style.visibility = 'collapse';
  document.getElementById("SD_table").style.visibility = 'visible';
  document.getElementById("N_text").style.visibility = 'collapse';
  document.getElementById("N_text2").style.visibility = 'collapse';
  document.getElementById("SD_text").style.visibility = 'visible';
}

function TT_next(){
  document.getElementById("TT_table").style.visibility = 'collapse';
  document.getElementById("GI_table").style.visibility = 'visible';
  document.getElementById("TT_text").style.visibility = 'collapse';
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'collapse';
  document.getElementById("GI_text").style.visibility = 'visible';
}

function TT_prev(){
  document.getElementById("TT_table").style.visibility = 'collapse';
  document.getElementById("N_table").style.visibility = 'visible';
  document.getElementById("TT_text").style.visibility = 'collapse';
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'collapse';
  document.getElementById("N_text").style.visibility = 'visible';
}

function GI_prev(){
  document.getElementById("GI_table").style.visibility = 'collapse';
  document.getElementById("TT_table").style.visibility = 'visible';
  document.getElementById("GI_text").style.visibility = 'collapse';
  document.getElementById("GI_text2").style.visibility = 'collapse';
  document.getElementById("TT_text").style.visibility = 'visible';
}

document.getElementById("fIn").addEventListener('change', function() {
    update()
});

document.getElementById("vIn").addEventListener('change', function() {
    update()
});

function clear(){
  document.getElementById("title").innerHTML = document.getElementById("queue")
  queue = document.getElementById("queue")
  for (let i=0; i < document.getElementById("queue").rows.length-1; i++){
      queue.deleteRow(i);
  }
}

function close_all(){
  document.getElementById("q_sec").style.visibility= 'collapse';
  document.getElementById("f_sec").style.visibility = 'collapse';
  document.getElementById("frequency_label").style.visibility = 'collapse';
  document.getElementById("player_label").style.visibility= 'collapse';
  document.getElementById("SD_table").style.visibility= 'collapse';
  document.getElementById("N_table").style.visibility= 'collapse';
  document.getElementById("TT_table").style.visibility= 'collapse';
  document.getElementById("GI_table").style.visibility= 'collapse';
  document.getElementById("home_label").style.visibility= 'collapse';
  document.getElementById("h_sec").style.visibility= 'collapse';
  document.getElementById("SD_text").style.visibility= 'collapse';
  document.getElementById("N_text").style.visibility= 'collapse';
  document.getElementById("TT_text").style.visibility= 'collapse';
  document.getElementById("GI_text").style.visibility= 'collapse';
  document.getElementById("to_SD").style.visibility = 'collapse'
  document.getElementById("to_N").style.visibility = 'collapse'
  document.getElementById("to_TT").style.visibility = 'collapse'
  document.getElementById("to_GI").style.visibility = 'collapse'}

function open_home(){
  close_all();
  document.getElementById("home_label").style.visibility= 'visible';
  document.getElementById("h_sec").style.visibility= 'visible';
  document.getElementById("SD_text").style.visibility= 'visible';
  document.getElementById("to_N").style.visibility = 'visible'}

function open_player(){
  close_all();
  document.getElementById("player_label").style.visibility= 'visible';
  document.getElementById("q_sec").style.visibility= 'visible';
}

function open_lib(){
  close_all();
  document.getElementById("SD_table").style.visibility= 'visible';
}

function open_freq(){
  close_all();
  document.getElementById("f_sec").style.visibility = 'visible';
  document.getElementById("frequency_label").style.visibility = 'visible';
}

function to_N(){
  document.getElementById("N_text").style.visibility = 'visible';
  document.getElementById("SD_text").style.visibility = 'collapse';
  document.getElementById("to_N").style.visibility = 'collapse';
  document.getElementById("to_TT").style.visibility = 'visible';
}

function to_TT(){
  document.getElementById("TT_text").style.visibility = 'visible';
  document.getElementById("N_text").style.visibility = 'collapse';
  document.getElementById("to_TT").style.visibility = 'collapse';
  document.getElementById("to_GI").style.visibility = 'visible';
}

function to_GI(){
  document.getElementById("GI_text").style.visibility = 'visible';
  document.getElementById("TT_text").style.visibility = 'collapse';
  document.getElementById("to_GI").style.visibility = 'collapse';
  document.getElementById("to_SD").style.visibility = 'visible';
}

function to_SD(){
  document.getElementById("SD_text").style.visibility = 'visible';
  document.getElementById("GI_text").style.visibility = 'collapse';
  document.getElementById("to_SD").style.visibility = 'collapse';
  document.getElementById("to_N").style.visibility = 'visible';
}