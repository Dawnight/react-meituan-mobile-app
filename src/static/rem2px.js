(function () {
  window.onload = function () {
    const docEl = document.documentElement;

    function setRemUnit() {
      const rem = docEl.clientWidth / 10;
      docEl.style.fontSize = rem + 'px';
    }

    setRemUnit();
    window.addEventListener('resize', setRemUnit);
  };
})();
