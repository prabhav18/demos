var volumeInput = document.getElementById('volume-input');
var inputWarning = document.getElementById('input-warning');

var conf = {
  key: '29ba4a30-8b5e-4336-a7dd-c94ff3b25f30',
  analytics: {
    key: '45adcf9b-8f7c-4e28-91c5-50ba3d442cd4',
    videoId: 'audio-peak-limiter'
  },
  playback: {
    volume: 20
  }
};

var source = {
  dash: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
  hls: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
  progressive: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
  poster: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
};

var playerContainer = document.getElementById('player-container');
var player = new bitmovin.player.Player(playerContainer, conf);

function loadPlayer() {
  player.load(source);
}

volumeInput.addEventListener('keyup', function () {
  if (volumeInput.value <= 100 && volumeInput.value >= 0 && volumeInput.value != "") {
    inputWarning.style.display = 'none';
    player.setVolume(volumeInput.value);
  } else {
    inputWarning.style.display = 'inherit';
  }
});

$(document).ready(function () {
  loadPlayer();
});
