const recognition = new webkitSpeechRecognition();
let label = "click and speak";
let words = [];

function setup() {
  createCanvas(800, 600);
  fill(210);

  setupRecognizer();
}

function draw() {
  background(30);
  textSize(20);
  text(label, 30, 30);
  _.each(words, word => {
    word.update();
    textSize(word.size);
    text(word.content, word.x, word.y);
  });
}

function mouseClicked() {
  recognitionStart();
}

function setupRecognizer() {
  recognition.interimResults = true;
  recognition.lang = 'ja-JP';

  recognition.onstart = () => {
    label = "recognition started";
  };
  recognition.onresult = event => {
    console.log("recognition result:", event);
    // event.resultsは配列でないため、普通にイテレートできない。
    // underscoreでちょっと変則的に対応した。
    let ws = _.map(_.range(event.resultIndex, event.results.length), i => {
      let result = event.results[i][0];
      return new FallingWord(result.transcript);
    });
    words = _.union(words, ws);
  };
  recognition.onend = () => {
    label = "recognition ended";
  };
}

function recognitionStart() {
  label = "recognition starting...";
  words = [];
  recognition.start();
  console.log(recognition);
}
