const se = $.audio("Audio1");


$.onInteract(() => {

      se.play();

      //音の再生と停止の切り替え
      let playing = $.state.playing;
      if(playing == null) playing = false;

      playing = !playing;
      if(playing) {
          se.play();
      }
      else se.stop();

    $.state.playing = playing;
  });