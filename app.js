// СОЗДАНИЕ КЛАВИАТУРЫ

function keyboardCreate() {
  // ПРОРИСОВКА КЛАВИАТУРЫ

  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", '<div class="wrapper"></div>');
  const wrapper = document.querySelector(".wrapper");
  wrapper.insertAdjacentHTML(
    "afterbegin",
    "<div class='header'><h1>RSS Virtual Keyboard 3023q1</h1><h5>Created on Win. Switch languages by left Shift+Alt</h5></div>"
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

  // ЗАПОЛНЕНИЕ РЯДОВ BUTTON

  const keyboard = document.querySelector(".keyboard");
  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button symbol letter" id="buttonBackquote" type="button"></button><button class="button symbol" id="button1" type="button"></button><button class="button symbol" id="button2" type="button"></button><button class="button symbol" id="button3" type="button"></button><button class="button symbol" id="button4" type="button"></button><button class="button symbol" id="button5" type="button"></button><button class="button symbol" id="button6" type="button"></button><button class="button symbol" id="button7" type="button"></button><button class="button symbol" id="button8" type="button"></button><button class="button symbol" id="button9" type="button"></button><button class="button symbol" id="button0" type="button"></button><button class="button symbol" id="buttonDash" type="button"></button><button class="button symbol" id="buttonEqually" type="button"></button><button class="button action" id="buttonDel" type="button"></button><button class="button action" id="buttonBackspace" type="button"></button>'
  );

  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action" id="buttonTab" type="button"></button><button class="button symbol letter" id="buttonQ" type="button"></button><button class="button symbol letter" id="buttonW" type="button"></button><button class="button symbol letter" id="buttonE" type="button"></button><button class="button symbol letter" id="buttonR" type="button"></button><button class="button symbol letter" id="buttonT" type="button"></button><button class="button symbol letter" id="buttonY" type="button"></button><button class="button symbol letter" id="buttonU" type="button"></button><button class="button symbol letter" id="buttonI" type="button"></button><button class="button symbol letter" id="buttonO" type="button"></button><button class="button symbol letter" id="buttonP" type="button"></button><button class="button symbol letter" id="buttonOpenSquareBracket" type="button"></button><button class="button symbol letter" id="buttonCloseSquareBracket" type="button"></button><button class="button symbol" id="buttonBackSlash" type="button"></button>'
  );

  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action" id="buttonCapsLock" type="button"></button><button class="button symbol letter" id="buttonA" type="button"a</button><button class="button symbol letter" id="buttonS" type="button"></button><button class="button symbol letter" id="buttonD" type="button"></button><button class="button symbol letter" id="buttonF" type="buttonF"></button><button class="button symbol letter" id="buttonG" type="button"></button><button class="button symbol letter" id="buttonH" type="button"></button><button class="button symbol letter" id="buttonJ" type="button"></button><button class="button symbol letter" id="buttonK" type="button"></button><button class="button symbol letter" id="buttonL" type="button"></button><button class="button symbol letter" id="buttonSemicolon" type="button"></button><button class="button symbol letter" id="buttonApostrophe" type="button"></button><button class="button action" id="buttonEnter" type="button"></button>'
  );

  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action shift" id="buttonLeftShift" type="button"></button><button class="button symbol letter" id="buttonZ" type="button"></button><button class="button symbol letter" id="buttonX" type="button"></button><button class="button symbol letter" id="buttonC" type="button"></button><button class="button symbol letter" id="buttonV" type="button"></button><button class="button symbol letter" id="buttonB" type="button"></button><button class="button symbol letter" id="buttonN" type="button"></button><button class="button symbol letter" id="buttonM" type="button"></button><button class="button symbol letter" id="buttonComma" type="button"></button><button class="button symbol letter" id="buttonDot" type="button"></button><button class="button symbol letter" id="buttonForwardSlash" type="button"></button><button class="button action" id="buttonForward" type="button"></button><button class="button action shift" id="buttonRightShift" type="button"></button>'
  );
  keyboard.insertAdjacentHTML(
    "beforeend",
    '<button class="button action" id="buttonLeftControl" type="button"></button><button class="button action" id="buttonWin" type="button"></button><button class="button action" id="buttonLeftAlt" type="button"></button><button class="button symbol" id="buttonSpace" type="button"></button><button class="button action" id="buttonRightAlt" type="button"></button><button class="button action" id="buttonLeft" type="button"></button><button class="button action" id="buttonBack" type="button"></button><button class="button action" id="buttonRight" type="button"></button><button class="button action" id="buttonRightControl" type="button"></button>'
  );
}

keyboardCreate();

// МАССИВ ЗНАЧЕНИЙ BUTTON

let buttonKeys = [
  {
    value: "buttonBackquote",
    en_caps: "`",
    en_down: "`",
    en_up: "~",
    en_shift: "~",
    ru_caps: "Ё",
    ru_down: "ё",
    ru_up: "Ё",
    ru_shift: "ё",
  },
  {
    value: "button1",
    en_caps: "1",
    en_down: "1",
    en_up: "!",
    en_shift: "!",
    ru_caps: "1",
    ru_down: "1",
    ru_up: "!",
    ru_shift: "!",
  },
  {
    value: "button2",
    en_caps: "2",
    en_down: "2",
    en_up: "@",
    en_shift: "@",
    ru_caps: "2",
    ru_down: "2",
    ru_up: '"',
    ru_shift: '"',
  },
  {
    value: "button3",
    en_caps: "3",
    en_down: "3",
    en_up: "#",
    en_shift: "#",
    ru_caps: "3",
    ru_down: "3",
    ru_up: "№",
    ru_shift: "№",
  },
  {
    value: "button4",
    en_caps: "4",
    en_down: "4",
    en_up: "$",
    en_shift: "$",
    ru_caps: "4",
    ru_down: "4",
    ru_up: ";",
    ru_shift: ";",
  },
  {
    value: "button5",
    en_caps: "5",
    en_down: "5",
    en_up: "%",
    en_shift: "%",
    ru_caps: "5",
    ru_down: "5",
    ru_up: "%",
    ru_shift: "%",
  },
  {
    value: "button6",
    en_caps: "6",
    en_down: "6",
    en_up: "^",
    en_shift: "^",
    ru_caps: "6",
    ru_down: "6",
    ru_up: ":",
    ru_shift: ":",
  },
  {
    value: "button7",
    en_caps: "7",
    en_down: "7",
    en_up: "&",
    en_shift: "&",
    ru_caps: "7",
    ru_down: "7",
    ru_up: "?",
    ru_shift: "?",
  },
  {
    value: "button8",
    en_caps: "8",
    en_down: "8",
    en_up: "*",
    en_shift: "*",
    ru_caps: "8",
    ru_down: "8",
    ru_up: "*",
    ru_shift: "*",
  },
  {
    value: "button9",
    en_caps: "9",
    en_down: "9",
    en_up: "(",
    en_shift: "(",
    ru_caps: "9",
    ru_down: "9",
    ru_up: "(",
    ru_shift: "(",
  },
  {
    value: "button0",
    en_caps: "0",
    en_down: "0",
    en_up: ")",
    en_shift: ")",
    ru_caps: "0",
    ru_down: "0",
    ru_up: ")",
    ru_shift: ")",
  },
  {
    value: "buttonDash",
    en_caps: "-",
    en_down: "-",
    en_up: "_",
    en_shift: "_",
    ru_caps: "-",
    ru_down: "-",
    ru_up: "_",
    ru_shift: "_",
  },
  {
    value: "buttonEqually",
    en_caps: "=",
    en_down: "=",
    en_up: "+",
    en_shift: "+",
    ru_caps: "=",
    ru_down: "=",
    ru_up: "+",
    ru_shift: "+",
  },
  {
    value: "buttonDel",
    en_down: "Del",
    en_up: "Del",
    ru_down: "Del",
    ru_up: "Del",
  },
  {
    value: "buttonBackspace",
    en_down: "⟵",
    en_up: "⟵",
    ru_down: "⟵",
    ru_up: "⟵",
  },
  {
    value: "buttonTab",
    en_down: "Tab",
    en_up: "Tab",
    ru_down: "Tab",
    ru_up: "Tab",
  },
  {
    value: "buttonQ",
    en_down: "q",
    en_up: "Q",
    ru_down: "й",
    ru_up: "Й",
  },
  {
    value: "buttonW",
    en_down: "w",
    en_up: "W",
    ru_down: "ц",
    ru_up: "Ц",
  },
  {
    value: "buttonE",
    en_down: "e",
    en_up: "E",
    ru_down: "у",
    ru_up: "У",
  },
  {
    value: "buttonR",
    en_down: "r",
    en_up: "R",
    ru_down: "к",
    ru_up: "К",
  },
  {
    value: "buttonT",
    en_down: "t",
    en_up: "T",
    ru_down: "е",
    ru_up: "Е",
  },
  {
    value: "buttonY",
    en_down: "y",
    en_up: "Y",
    ru_down: "н",
    ru_up: "Н",
  },
  {
    value: "buttonU",
    en_down: "u",
    en_up: "U",
    ru_down: "г",
    ru_up: "Г",
  },
  {
    value: "buttonI",
    en_down: "i",
    en_up: "I",
    ru_down: "ш",
    ru_up: "Ш",
  },
  {
    value: "buttonO",
    en_down: "o",
    en_up: "O",
    ru_down: "щ",
    ru_up: "Щ",
  },
  {
    value: "buttonP",
    en_down: "p",
    en_up: "P",
    ru_down: "з",
    ru_up: "З",
  },
  {
    value: "buttonOpenSquareBracket",
    en_caps: "[",
    en_down: "[",
    en_up: "{",
    en_shift: "{",
    ru_caps: "Х",
    ru_down: "х",
    ru_up: "Х",
    ru_shift: "х",
  },
  {
    value: "buttonCloseSquareBracket",
    en_caps: "]",
    en_down: "]",
    en_up: "}",
    en_shift: "}",
    ru_caps: "Ъ",
    ru_down: "ъ",
    ru_up: "Ъ",
    ru_shift: "ъ",
  },
  {
    value: "buttonBackSlash",
    en_caps: "\\",
    en_down: "\\",
    en_up: "|",
    en_shift: "|",
    ru_caps: "\\",
    ru_down: "\\",
    ru_up: "/",
    ru_shift: "/",
  },
  {
    value: "buttonCapsLock",
    en_down: "CapsLock",
    en_up: "CapsLock",
    ru_down: "CapsLock",
    ru_up: "CapsLock",
  },
  {
    value: "buttonA",
    en_down: "a",
    en_up: "A",
    ru_down: "ф",
    ru_up: "Ф",
  },
  {
    value: "buttonS",
    en_down: "s",
    en_up: "S",
    ru_down: "ы",
    ru_up: "Ы",
  },
  {
    value: "buttonD",
    en_down: "d",
    en_up: "D",
    ru_down: "в",
    ru_up: "В",
  },
  {
    value: "buttonF",
    en_down: "f",
    en_up: "F",
    ru_down: "а",
    ru_up: "А",
  },
  {
    value: "buttonG",
    en_down: "g",
    en_up: "G",
    ru_down: "п",
    ru_up: "П",
  },
  {
    value: "buttonH",
    en_down: "h",
    en_up: "H",
    ru_down: "р",
    ru_up: "Р",
  },
  {
    value: "buttonJ",
    en_down: "j",
    en_up: "J",
    ru_down: "о",
    ru_up: "О",
  },
  {
    value: "buttonK",
    en_down: "k",
    en_up: "K",
    ru_down: "л",
    ru_up: "Л",
  },
  {
    value: "buttonL",
    en_down: "l",
    en_up: "L",
    ru_down: "д",
    ru_up: "Д",
  },
  {
    value: "buttonSemicolon",
    en_caps: ";",
    en_down: ";",
    en_up: ":",
    en_shift: ":",
    ru_caps: "Ж",
    ru_down: "ж",
    ru_up: "Ж",
    ru_shift: "ж",
  },
  {
    value: "buttonApostrophe",
    en_caps: "'",
    en_down: "'",
    en_up: '"',
    en_shift: '"',
    ru_caps: "Э",
    ru_down: "э",
    ru_up: "Э",
    ru_shift: "э",
  },
  {
    value: "buttonEnter",
    en_down: "Enter",
    en_up: "Enter",
    ru_down: "Enter",
    ru_up: "Enter",
  },

  {
    value: "buttonLeftShift",
    en_down: "Shift",
    en_up: "Shift",
    ru_down: "Shift",
    ru_up: "Shift",
  },
  {
    value: "buttonZ",
    en_down: "z",
    en_up: "Z",
    ru_down: "я",
    ru_up: "Я",
  },
  {
    value: "buttonX",
    en_down: "x",
    en_up: "X",
    ru_down: "ч",
    ru_up: "Ч",
  },
  {
    value: "buttonC",
    en_down: "c",
    en_up: "C",
    ru_down: "с",
    ru_up: "С",
  },
  {
    value: "buttonV",
    en_down: "v",
    en_up: "V",
    ru_down: "м",
    ru_up: "М",
  },
  {
    value: "buttonB",
    en_down: "b",
    en_up: "B",
    ru_down: "и",
    ru_up: "И",
  },
  {
    value: "buttonN",
    en_down: "n",
    en_up: "N",
    ru_down: "т",
    ru_up: "Т",
  },
  {
    value: "buttonM",
    en_down: "m",
    en_up: "M",
    ru_down: "ь",
    ru_up: "Ь",
  },
  {
    value: "buttonComma",
    en_caps: ",",
    en_down: ",",
    en_up: "<",
    en_shift: "<",
    ru_caps: "Б",
    ru_down: "б",
    ru_up: "Б",
    ru_shift: "б",
  },
  {
    value: "buttonDot",
    en_caps: ".",
    en_down: ".",
    en_up: ">",
    en_shift: ">",
    ru_caps: "Ю",
    ru_down: "ю",
    ru_up: "Ю",
    ru_shift: "ю",
  },
  {
    value: "buttonForwardSlash",
    en_caps: "/",
    en_down: "/",
    en_up: "?",
    en_shift: "?",
    ru_caps: ".",
    ru_down: ".",
    ru_up: ",",
    ru_shift: ",",
  },
  {
    value: "buttonForward",
    en_down: "&#8679;",
    en_up: "&#8679;",
    ru_down: "&#8679;",
    ru_up: "&#8679;",
  },
  {
    value: "buttonRightShift",
    en_down: "Shift",
    en_up: "Shift",
    ru_down: "Shift",
    ru_up: "Shift",
  },
  {
    value: "buttonLeftControl",
    en_down: "Ctrl",
    en_up: "Ctrl",
    ru_down: "Ctrl",
    ru_up: "Ctrl",
  },
  {
    value: "buttonWin",
    en_down: "Win",
    en_up: "Win",
    ru_down: "Win",
    ru_up: "Win",
  },
  {
    value: "buttonLeftAlt",
    en_down: "Alt",
    en_up: "Alt",
    ru_down: "Alt",
    ru_up: "Alt",
  },
  {
    value: "buttonSpace",
    en_down: " ",
    en_up: " ",
    ru_down: " ",
    ru_up: " ",
  },
  {
    value: "buttonRightAlt",
    en_down: "Alt",
    en_up: "Alt",
    ru_down: "Alt",
    ru_up: "Alt",
  },
  {
    value: "buttonLeft",
    en_down: "&#8678;",
    en_up: "&#8678;",
    ru_down: "&#8678;",
    ru_up: "&#8678;",
  },
  {
    value: "buttonBack",
    en_down: "&#8681;",
    en_up: "&#8681;",
    ru_down: "&#8681;",
    ru_up: "&#8681;",
  },
  {
    value: "buttonRight",
    en_down: "&#8680;",
    en_up: "&#8680;",
    ru_down: "&#8680;",
    ru_up: "&#8680;",
  },
  {
    value: "buttonRightControl",
    en_down: "Ctrl",
    en_up: "Ctrl",
    ru_down: "Ctrl",
    ru_up: "Ctrl",
  },
];

// ПЕРЕМЕННЫЙ АКТУАЛЬНОГО ЯЗЫКА И РЕГИСТРА

let lang;
let cplck;

// ЗАПОЛНЕНИЕ ЗНАЧЕНИЙ BUTTON БАЗОВЫМИ ЗНАЧЕНИЯМИ (en_down)

const button = document.querySelectorAll(".button");

button.forEach((button) => {
  for (let i = 0; i < buttonKeys.length; i++) {
    if (button.id == buttonKeys[i].value)
      button.innerHTML += buttonKeys[i].en_down;
    lang = "en";
    cplck = "down";
  }
});

// РЕАЛИЗАЦИЯ CAPS LOCK CLICK

const capsLockClick = document.getElementById("buttonCapsLock");

capsLockClick.addEventListener("click", () => {
  audio.play();
  if (cplck === "down" && lang === "en") {
    button.forEach((button) => {
      for (let i = 0; i < buttonKeys.length; i++) {
        if (
          button.id == buttonKeys[i].value &&
          button.classList.contains("letter")
        )
          button.innerHTML = buttonKeys[i].en_up;
        cplck = "up";
      }
    });
  } else if (cplck === "up" && lang === "en") {
    button.forEach((button) => {
      for (let i = 0; i < buttonKeys.length; i++) {
        if (
          button.id == buttonKeys[i].value &&
          button.classList.contains("letter")
        )
          button.innerHTML = buttonKeys[i].en_down;
        cplck = "down";
      }
    });
  } else if (cplck === "down" && lang === "ru") {
    button.forEach((button) => {
      for (let i = 0; i < buttonKeys.length; i++) {
        if (
          button.id == buttonKeys[i].value &&
          button.classList.contains("letter")
        )
          button.innerHTML = buttonKeys[i].ru_up;
        cplck = "up";
      }
    });
  } else if (cplck === "up" && lang === "ru") {
    button.forEach((button) => {
      for (let i = 0; i < buttonKeys.length; i++) {
        if (
          button.id == buttonKeys[i].value &&
          button.classList.contains("letter")
        )
          button.innerHTML = buttonKeys[i].ru_down;
        cplck = "down";
      }
    });
  }
});

// РЕАЛИЗАЦИЯ CAPS LOCK KEYDOWN

// const capsLockKeydown = document.getElementById("buttonCapsLock");

document.addEventListener("keydown", (event) => {
  if (event.key === "CapsLock") {
    if (cplck === "down" && lang === "en") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (
            button.id == buttonKeys[i].value &&
            button.classList.contains("letter")
          )
            button.innerHTML = buttonKeys[i].en_up;
          cplck = "up";
          document.querySelector("textarea").focus();
        }
      });
    } else if (cplck === "up" && lang === "en") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (
            button.id == buttonKeys[i].value &&
            button.classList.contains("letter")
          )
            button.innerHTML = buttonKeys[i].en_down;
          cplck = "down";
          document.querySelector("textarea").focus();
        }
      });
    } else if (cplck === "down" && lang === "ru") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (
            button.id == buttonKeys[i].value &&
            button.classList.contains("letter")
          )
            button.innerHTML = buttonKeys[i].ru_up;
          cplck = "up";
          document.querySelector("textarea").focus();
        }
      });
    } else if (cplck === "up" && lang === "ru") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (
            button.id == buttonKeys[i].value &&
            button.classList.contains("letter")
          )
            button.innerHTML = buttonKeys[i].ru_down;
          cplck = "down";
          document.querySelector("textarea").focus();
        }
      });
    }
  }
});

// ДОБАВЛЯЕМ В BUTTON ЗВУК

document.querySelectorAll("button").forEach(function (button) {
  button.setAttribute("onclick", "playSound()");
});

let audio = new Audio("sounds/key.mp3");

// ВВОД ЗНАЧЕНИЙ В TEXTAREA

const symbolPrint = document.querySelectorAll(".symbol");
const textArea = document.querySelector("textarea");

symbolPrint.forEach((element) => {
  element.addEventListener("click", () => {
    let value = element.textContent;
    textArea.value += value;
    audio.play();
    document.querySelector("textarea").focus();
  });
});

// РЕАЛИЗАЦИЯ SHIFT+ALT ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА

document.addEventListener("keydown", (event) => {
  if (event.getModifierState("Shift") && event.getModifierState("Alt")) {
    audio.play();
    if (lang === "en" && cplck === "down") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (button.id == buttonKeys[i].value) {
            button.innerHTML = buttonKeys[i].ru_down;
            document.querySelector("textarea").focus();
          }
        }
      });
      lang = "ru";
    } else if (lang === "ru" && cplck === "down") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (button.id == buttonKeys[i].value) {
            button.innerHTML = buttonKeys[i].en_down;
            document.querySelector("textarea").focus();
          }
        }
      });
      lang = "en";
    } else if (lang === "en" && cplck === "up") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (
            button.id == buttonKeys[i].value &&
            button.classList.contains("letter")
          ) {
            button.innerHTML = buttonKeys[i].ru_up;
            document.querySelector("textarea").focus();
          }
        }
      });
      lang = "ru";
    } else if (lang === "ru" && cplck === "up") {
      button.forEach((button) => {
        for (let i = 0; i < buttonKeys.length; i++) {
          if (
            button.id == buttonKeys[i].value &&
            button.classList.contains("letter")
          ) {
            button.innerHTML = buttonKeys[i].en_up;
            document.querySelector("textarea").focus();
          }
        }
      });
      lang = "en";
    }
  }
});

// ПОДСВЕТКА ВИРТУАЛЬНЫХ КЛАВИШ ПРИ НАЖАТИИ РЕАЛЬНЫХ

// нажимаем

document.addEventListener("keydown", (event) => {
  audio.play();
  for (let y = 0; y < buttonKeys.length; y++) {
    if (event.key == buttonKeys[y].en_down) {
      let elem = document.getElementById(buttonKeys[y].value);
      if (
        elem.classList.contains("letter") ||
        elem.classList.contains("symbol")
      ) {
        elem.classList.add("active");
      } else {
        elem.classList.add("activeAction");
      }
      document.querySelector("textarea").focus();
    }
  }
});

// отпускаем

document.addEventListener("keyup", (event) => {
  for (let y = 0; y < buttonKeys.length; y++) {
    if (event.key == buttonKeys[y].en_down) {
      let elem = document.getElementById(buttonKeys[y].value);
      if (
        elem.classList.contains("letter") ||
        elem.classList.contains("symbol")
      ) {
        elem.classList.remove("active");
      } else {
        elem.classList.remove("activeAction");
      }
      document.querySelector("textarea").focus();
    }
  }
});

// РЕАЛИЗАЦИЯ КНОПКИ ENTER по клику

const enterKey = document.getElementById("buttonEnter");

enterKey.addEventListener("click", () => {
  audio.play();
  textArea.value += "\n";
  document.querySelector("textarea").focus();
});

// РЕАЛИЗАЦИЯ КНОПКИ TAB

const tabKey = document.getElementById("buttonTab");

// по клику

tabKey.addEventListener("click", () => {
  audio.play();
  textArea.value += "    ";
  document.querySelector("textarea").focus();
});

// по нажатию

document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    textArea.value += "    ";
    document.querySelector("textarea").focus();
  }
});

// РЕАЛИЗАЦИЯ КНОПКИ BACKSPACE по клику

const backSpace = document.getElementById("buttonBackspace");

backSpace.addEventListener("click", () => {
  audio.play();
  let currentValue = textArea.value;
  textArea.value = currentValue.substring(0, currentValue.length - 1);
  document.querySelector("textarea").focus();
});

// РЕАЛИЗАЦИЯ КНОПКИ DELETE

const del = document.getElementById("buttonDel");

// по клику

del.addEventListener("click", () => {
  audio.play();
  let currentValue = textArea.value;
  let cursorPosition = textArea.selectionStart;
  if (cursorPosition < currentValue.length) {
    textArea.value =
      currentValue.substring(0, cursorPosition) +
      currentValue.substring(cursorPosition + 1);
    document.querySelector("textarea").focus();
    textArea.setSelectionRange(cursorPosition, cursorPosition);
  }
});

// по нажатию

textArea.addEventListener("keydown", (event) => {
  if (event.key === 46) {
    let currentValue = textArea.value;
    let cursorPosition = textArea.selectionStart;
    if (cursorPosition < currentValue.length) {
      textArea.value =
        currentValue.substring(0, cursorPosition) +
        currentValue.substring(cursorPosition + 1);
      textArea.setSelectionRange(cursorPosition, cursorPosition);
    }
  }
});

// РЕАЛИЗАЦИЯ SHIFT+ALT ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА

document.addEventListener("keypress", (event) => {
  if (event.getModifierState("Shift") && lang === "ru") {
    button.forEach((button) => {
      for (let i = 0; i < buttonKeys.length; i++) {
        if (button.id == buttonKeys[i].value) {
          button.innerHTML = buttonKeys[i].ru_shift;
          document.querySelector("textarea").focus();
        }
      }
    });
  }
});
