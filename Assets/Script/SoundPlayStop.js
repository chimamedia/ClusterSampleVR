const se = $.audio("Audio1");


$.onInteract(() => {

      se.play();

      //���̍Đ��ƒ�~�̐؂�ւ�
      let playing = $.state.playing;
      if(playing == null) playing = false;

      playing = !playing;
      if(playing) {
          se.play();
      }
      else se.stop();

    $.state.playing = playing;
  });