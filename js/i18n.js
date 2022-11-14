function update_captions(){
  if(window.innerWidth < 520){
    captions = ["Coffee", "Panini",
      "Idea", "Code",
      "<span style='display:inline-block;line-height:11px;vertical-align:middle'>Deep Learning</span>",
      "<span style='font-size:11px;display:inline-block;line-height:11px;vertical-align:middle'>See Supervisor</span>",
      "<span style='font-size:11px'>Experiment</span>", "Paper",
      "<span style='font-size:11px'>Conference</span>", "Viva", "PhD",
      "<span style='font-size:smaller'>Postdoc</span>",
      "<span style='font-size:smaller'>Lecturer</span>", "Reader", "Prof."];
    captions_rel = ["<span style='font-size:9px;'>Relationship</span>",
      "<span style='font-size:11px;'>Break-up</span>"];
  }
  else{
    captions = ["Coffee", "Panini",
      "Idea", "Code",
      "<span style='font-size:24px;display:inline-block;line-height:24px;vertical-align:middle'>Deep Learning</span>",
      "<span style='font-size:20px;display:inline-block;line-height:20px;vertical-align:middle'>See Supervisor</span>",
      "<span style='font-size:20px'>Experiment</span>", "Paper",
      "<span style='font-size:20px'>Conference</span>", "Viva", "PhD",
      "<span style='font-size:smaller'>Postdoc</span>",
      "<span style='font-size:smaller'>Lecturer</span>", "Reader", "Prof."];
    captions_rel = ["<span style='font-size:15px;'>Relationship</span>",
      "<span style='font-size:20px;'>Break-up</span>"];
  }
}

var span_en;

function create_switch_en(){
  span_en = document.createElement('div');
  span_en.style.position = "absolute";
  span_en.style.top = "0";
  if(window.innerWidth < 520)
    span_en.style.fontSize = "10px";
  else
    span_en.style.fontSize = "small";
  span_en.style.backgroundColor = "#8f7a66";
  span_en.style.borderRadius = "0 0 3px 3px";
  span_en.style.padding = "3px 10px";
  span_en.style.color = "white";
  span_en.style.cursor = "pointer";
  span_en.onclick = play_in_english;
  span_en.textContent = "🇬🇧 Switch to English";
  var container = document.querySelector('.container');
  container.insertBefore(span_en, container.firstChild);
}


function play_in_english(){
  update_captions();
  window.addEventListener('resize', update_captions, true);

  caption_garbage = "<span style='font-size:smaller'>Garbage</span>";
  window.game.actuate();

  game_title = "PhD+Garbage";
  game_alt_title = "Love";
  result_msg = "You got a ";
  var titleElem = document.getElementById('title');
  if(titleElem.textContent != "Love") titleElem.textContent = game_title;
  document.querySelector('.restart-button').textContent = "Drop out";
  document.querySelector('.retry-button').textContent = "Try again";
  document.querySelector('.game-explanation').innerHTML = "<strong class='important'>How to play:</strong> This is like <a target='_blank' href='https://ymfa.github.io/phd-2048/'>PhD 2048</a> but you need to keep at least one garbage with you. So, when combining two <strong>Experiments</strong> to <strong>Paper</strong>, you need to have a garbage. And after that, you cannot destroy all garbages. ";

  if(span_en) span_en.parentNode.removeChild(span_en);
  window.game.storageManager.storage.setItem('lang', 'en');
}
