var before = document.getElementById("before");
var liner = document.getElementById("liner"); // div that holds the cursor
var command = document.getElementById("typer"); // span that is the cursor
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

var git = 0;
var commandsHistory = [];

console.log("Hey, why you looking at the console? 😉")
setTimeout(function() {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
    if (e.keyCode == 13) {
      commandsHistory.push(command.innerHTML);
      git = commandsHistory.length;
      addLine("guest@rickr04.github.io:~$ " + command.innerHTML, "no-animation", 0);
      commander(command.innerHTML.toLowerCase());
      command.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && git != 0) {
      git -= 1;
      textarea.value = commandsHistory[git];
      command.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && git != commandsHistory.length) {
      git += 1;
      if (commandsHistory[git] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = commandsHistory[git];
      }
      command.innerHTML = textarea.value;
    }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "whois":
      loopLines(whois, "color2 margin", 80);
      break;
    case "whoami":
      loopLines(whoami, "color2 margin", 80);
      break;
    case "resume":
      addLine("Opening Resume...", "color2", 0);
      newTab(resume);
      break;  
    case "sudo rm -rf":
      addLine("Hey hey now, stop that", "error", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commandsHistory, "color2", 80);
      addLine("<br>", "command", 80 * commandsHistory.length + 50);
      break;
    case "email":
      addLine('Opening mailto:<a href="mailto:rickramirez04@gmail.com">rickramirez04@gmail.com</a>...', "color2", 80);
      newTab(email);
      break;
    case "clear":
      setTimeout(function() {
        terminal.innerHTML = '<a id="before"></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "bbyoda":
      loopLines(banner, "", 80);
      break;
    case "linkedin":
      addLine("Opening LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "github":
      addLine("Opening GitHub...", "color2", 0);
      newTab(github);
      break;
    case "exit":
      addLine("Shutting Down Terminal...Opening Portfolio", 0)  
      newPage()
      break;
    default:
      addLine("<span class=\"inherit\">Command not found. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
      break;
  }
}

function newPage(){
  setTimeout(function() {
    window.location.href="home.html"
  }, 1000);
  
}

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}


function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function() {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function(item, index) {
    addLine(item, style, index * time);
  });
}
