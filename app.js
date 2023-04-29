function keyboardCreate() {
  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", '<div class="wrapper"></div>');
  const wrapper = document.querySelector(".wrapper");
  wrapper.insertAdjacentHTML(
    "afterbegin",
    "<div class='header'><h1>Virtual Keyboard 3023q1</h1><h5>humans only</h5></div>"
  );
  wrapper.insertAdjacentHTML("beforeend", "<div class='container'></div>");
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "afterbegin",
    "<div class='rick'><img  src='images/rick.png'/></div"
  );
  container.insertAdjacentHTML(
    "beforeend",
    "<div class='container__center'></div>"
  );
  container.insertAdjacentHTML(
    "beforeend",
    "<div class='mortie'><img  src='images/mortie.png'/></div>"
  );
  const container__center = document.querySelector(".container__center");
  container__center.insertAdjacentHTML(
    "afterbegin",
    '<textarea class="textarea" autofocus placeholder="Enter something..."></textarea>'
  );
  container__center.insertAdjacentHTML(
    "beforeend",
    '<div class="keyboard"></div>'
  );

  const keyboard = document.querySelector(".keyboard");
  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button symbol" id="buttonBackquote" type="button">&grave;</button><button class="button symbol" id="button1" type="button">1</button><button class="button symbol" id="button2" type="button">2</button><button class="button symbol" id="button3" type="button">3</button><button class="button symbol" id="button4" type="button">4</button><button class="button symbol" id="button5" type="button">5</button><button class="button symbol" id="button6" type="button">6</button><button class="button symbol" id="button7" type="button">7</button><button class="button symbol" id="button8" type="button">8</button><button class="button symbol" id="button9" type="button">9</button><button class="button symbol" id="button0" type="button">0</button><button class="button symbol" id="buttonDash" type="button">-</button><button class="button symbol" id="buttonEqually" type="button">=</button><button class="button action" id="buttonBackspace" type="button">⟵</button>'
  );

  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action" id="buttonTab" type="button">Tab</button><button class="button symbol" id="buttonQ" type="button">q</button><button class="button symbol" id="buttonW" type="button">w</button><button class="button symbol" id="buttonE" type="button">e</button><button class="button symbol" id="buttonR" type="button">r</button><button class="button symbol" id="buttonT" type="button">t</button><button class="button symbol" id="buttonY" type="button">y</button><button class="button symbol" id="buttonU" type="button">u</button><button class="button symbol" id="buttonI" type="button">i</button><button class="button symbol" id="buttonO" type="button">o</button><button class="button symbol" id="buttonP" type="button">p</button><button class="button symbol" id="buttonOpenSquareBracket" type="button">[</button><button class="button symbol" id="buttonCloseSquareBracket" type="button">]</button><button class="button action" id="buttonBackSlash" type="button">&bsol;</button>'
  );

  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action" id="buttonCapsLock" type="button">Caps Lock</button><button class="button symbol" id="buttonA" type="button">a</button><button class="button symbol" id="buttonS" type="button">s</button><button class="button symbol" id="buttonD" type="button">d</button><button class="button symbol" id="buttonF" type="button">f</button><button class="button symbol" id="buttonG" type="button">g</button><button class="button symbol" id="buttonH" type="button">h</button><button class="button symbol" id="buttonJ" type="button">j</button><button class="button symbol" id="buttonK" type="button">k</button><button class="button symbol" id="buttonL" type="button">l</button><button class="button symbol" id="buttonSemicolon" type="button">&semi;</button><button class="button symbol" id="buttonApostrophe" type="button">&apos;</button><button class="button action" id="buttonEnter" type="button">&#13;</button>'
  );

  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action" id="buttonLeftShift" type="button">Shift</button><button class="button symbol" id="buttonZ" type="button">z</button><button class="button symbol" id="buttonX" type="button">x</button><button class="button symbol" id="buttonC" type="button">c</button><button class="button symbol" id="buttonV" type="button">v</button><button class="button symbol" id="buttonB" type="button">b</button><button class="button symbol" id="buttonN" type="button">n</button><button class="button symbol" id="buttonM" type="button">m</button><button class="button symbol" id="buttonComma" type="button">,</button><button class="button symbol" id="buttonDot" type="button">.</button><button class="button symbol" id="buttonForwardSlash" type="button">&sol;</button><button class="button action" id="buttonForward" type="button">&#8679;</button><button class="button action" id="buttonRightShift" type="button">Shift</button>'
  );
  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action" id="buttonLeftControl" type="button">Ctrl</button><button class="button action" id="buttonWin" type="button">Win</button><button class="button action" id="buttonLeftAlt" type="button">Alt</button><button class="button symbol" id="buttonSpace" type="button">Space</button><button class="button action" id="buttonRightAlt" type="button">Alt</button><button class="button action" id="buttonLeft" type="button">&#8678;</button><button class="button action" id="buttonBack" type="button">&#8681;</button><button class="button action" id="buttonRight" type="button">&#8680;</button><button class="button action" id="buttonRightControl" type="button">Ctrl</button>'
  );
}

keyboardCreate();
