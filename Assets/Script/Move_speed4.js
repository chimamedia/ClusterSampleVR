const hayasa = 2.0;
const nagasa = 2.0;
muki = new Vector3(0,0,0);

$.onUpdate(deltaTime => {
  if (!$.state.shokika) {
    $.state.shokika = true;
    $.state.ichi = $.getPosition();
    $.state.time = 0.0;
  }

  $.state.time += deltaTime;

  let _ichi = $.state.ichi.clone();
  let _muki = muki.clone();

    const nagasa_now = nagasa;
    muki = new Vector3(Math.cos($.state.time * hayasa), 0, Math.sin($.state.time * hayasa));
  _ichi.add(_muki.multiplyScalar(nagasa_now));
  $.setPosition(_ichi);
});