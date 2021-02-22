let currentpage = 0; //initialize the currentpage variable

function change(page) {
  //using a template literal format, which allows you to add variables easily
  document.getElementById("content").innerHTML = `<h1> ${headertitles[page]}
    </h1> <p> ${paragraphs[page]}
    </p><img src=${images[page]}>
    <button onclick="back()" class="back">BACK</button> `;

  document.getElementById("content").innerHTML = `<h1> ${headertitles[page]}
    </h1> <p> ${paragraphs[page]}
    </p><img src=${images[page]}>
    <button onclick="back()" class="back">BACK</button> `;

  //to figure out what next button to show
  if (page == headertitles.length - 1) {
    document.getElementById(
      "content"
    ).innerHTML += `<button onclick="restart()" class="next">RESTART</button>`;
  } else {
    document.getElementById(
      "content"
    ).innerHTML += `<button onclick="next()" class="next">NEXT</button>`;
  }
}

function back() {
  //if you are on Animal 1, which is Squirrel with Pizza, when you press the back button you should return to the original title page
  if (currentpage == 0) {
    document.getElementById("content").innerHTML = original;
  } else {
    //if current page is 1 (SPAC Deer), then your "next page" is 0 (Pizza Squirrel)
    let nextpage = currentpage - 1;

    //now, since you've "changed pages," set your current page to the page you are now on.

    currentpage = nextpage;

    //then call the changepage function which will edit the HTML
    change(nextpage);
  }
}

function next() {
  //if the user is not on page 2, pressing the "next" button should increment the page by 1
  let nextpage = currentpage + 1;
  currentpage = nextpage;
  change(nextpage);
}

//if the user wants to restart, set the current page to 0 and return to the original title page
function restart() {
  currentpage = 0;
  document.getElementById("content").innerHTML = original;
}

//arrays for each of the animals
//the index of the array starts at "0"
//so "page 0" will correspond to "Squirrel with Pizza"
//"page 1" is "SPAC Deer"
//"page 2" is "Bagel Squirrel"
headertitles = ["1. Squirrel with Pizza", "2. SPAC Deer", "3. Bagel Squirrel"];

paragraphs = [
  "Squirrels are all too common on this campus, but it's not everyday you see one eating a slice of pizza. Perhaps this one is from Sargent",
  "Why did the deer cross the road? ",
  "Who is giving these squirrels all these carbs??",
];

images = ["pizzasquirrel.png", "spacdeer.png", "bagelsquirrel.png"];

//the original HTML for when the user wants to either go back to the first page, or restart
original = `<div class="header">
<h1>
  <span style="float: left">NORTHWESTERN</span>
  <span style="float: right">ANIMAL SIGHTINGS</span>
</h1>
<h2 class="names">By Amy Guo & Nathanial Ortiz</h2>
</div>
<div class="text">
<p>
  While Northwestern may not be best known for its lush flora and fauna,
  it has its own unique array of wildlife: from devious squirrels, to
  vicious rabbits, sensual skunks, and overly opulent Canadian Geese.
  See if you can spot some of the stranger animals in each of these
  locations.
</p>
<button onclick="change(0)" class="next">NEXT</button>
</div>`;
