const se = $.audio("Audio1");


$.onInteract(() => {

      se.play();

      //‰¹‚ÌÄ¶‚Æ’â~‚ÌØ‚è‘Ö‚¦
      let playing = $.state.playing;
      if(playing == null) playing = false;

      playing = !playing;
      if(playing) {
          se.play();
      }
      else se.stop();

    $.state.playing = playing;
  });