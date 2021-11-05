//written by Gourav Chouhan

/* for using this effect just give an id to the svg you and to animate then
    initilize the WritingEffect class with some arguments, use vs code to get help

    ex: let someName = new WritingEffect('id of svg', speed , boolean for oneByOne or not);
        someName.animate(DEALY_TIME  //default is 0
*/
class WritingEffect {
  constructor(svgId, speed = 200, oneByOne = true) {
    this.id = svgId;
    this.speed = speed;
    this.oneByOne = oneByOne;
  }

  animate(delay = 0) {
    let elm = document.getElementById(this.id);
    let path = elm.getElementsByTagName("path");
    let nextBegin = delay;

    for (let i = 0; i < path.length; i++) {
      let item = path[i];
      let pathlength = item.getTotalLength();

      item.setAttribute("stroke-dasharray", pathlength);
      item.setAttribute("stroke-dashoffset", pathlength);

      let time = pathlength / this.speed;
      item.innerHTML = `<animate attributeName="stroke-dashoffset" begin="${nextBegin}s" dur="${time}s" to="0" fill="freeze" />`;
      if (this.oneByOne) nextBegin += time;
      else nextBegin = 0;
    }
  }
}
