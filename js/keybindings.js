let keybinds = {
    "1" : "#00",
    "2" : "#01",
    "3" : "#02",
    "4" : "#03",
    "5" : "#04",
    "6" : "#05",
    "7" : "#06",
    "8" : "#07",
    "9" : "#08",
    "0" : "#09",

    "q" : "#10",
    "w" : "#11",
    "e" : "#12",
    "r" : "#13",
    "t" : "#14",
    "y" : "#15",
    "u" : "#16",
    "i" : "#17",
    "o" : "#18",
    "p" : "#19",

    "a" : "#20",
    "s" : "#21",
    "d" : "#22",
    "f" : "#23",
    "g" : "#24",
    "h" : "#25",
    "j" : "#26",
    "k" : "#27",
    "l" : "#28",
    ";" : "#29",

    "z" : "#30",
    "x" : "#31",
    "c" : "#32",
    "v" : "#33",
    "b" : "#34",
    "n" : "#35",
    "m" : "#36",
    "," : "#37",
    "." : "#38",
    "/" : "#39",
}

function initKeybinds(){
    chrome.storage.local.get(['keybinds'], function (res) {
        if (res['keybinds']) {
            enableKeybinds()
        } else {
            disableKeybinds()
        }
    })
}

function disableKeybinds() {
    $('#key-preview').css('display', 'none')
    $('.grid-item-inside-key').css('display', 'none')
}

function enableKeybinds() {
    $('#key-preview').css('display', 'block')
    $('.grid-item-inside-key').css('display', 'block')
}