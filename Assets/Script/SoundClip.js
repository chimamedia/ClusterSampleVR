const se = $.audio("Audio1");


$.onInteract(() => {
    
    se.play();

    /* 音の再生と停止の切り替え
    let playing = $.state.playing;
    if(playing == null) playing = false;
 
    playing = !playing;
    if(playing) {

        //音量をランダムで変更する
        //se.volume = Math.random() * 2.5;

        se.play();
    }
    else se.stop();


    $.state.playing = playing;
    */
});