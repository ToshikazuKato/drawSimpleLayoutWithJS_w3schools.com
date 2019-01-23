//create <div id='target'><div> inside body tag
const body = document.querySelector('body');
const script = document.querySelector('script');
const div = document.createElement('div');
div.id = 'target';
body.insertBefore(div, script);

//a function which can render any HTML tag,  with flexible attributes support
/**
tag, attrObj, target, text
 * @param {string} tag tag name
 * @param {object} attrObj attribute object
 * @param {string} target target that specify the place to insert tag created inside this function
 * @param {string} text text inside tag
 */

function drawHTML (arr) {

  const tag = arr[0];
  const attrObj = arr[1];
  const target = arr[2];
  const text = arr[3];

  //create element
  const ele = document.createElement(tag);

  if(text !== undefined){
    const textNode = document.createTextNode(text);
    ele.appendChild(textNode);
  }

  //add attributes to the element
  const ObjKeys = Object.keys(attrObj);
  // const ObjValues = Object.values(attrObj);

  ObjKeys.forEach(function(key) {
  if( key in attrObj ) {
    ele.setAttribute(key, attrObj[key]);
    //console.log( key, attrObj[key] );
  }
});

  //insert element into target
    //get target element
    const targetEle = document.querySelector(target);
    targetEle.appendChild(ele);

    // ele.setAttribute();

}

const htmlArr = [
  ['div', {'class' : 'top flex'}, 'div#target'],
  ['a',{'class' : 'title gray', 'href' : 'https://www.w3schools.com'},'div.top.flex','w3schools'],
  ['span', {'class' : 'green'},'a.title.gray','.com'],
  ['div', {'class' : 'subTitile right'},'div.top.flex',"THE WORLD'S LARGEST WEB DEVELOPER SITE"],
  ['section', {'class' : 'navbar flex'}, 'div#target'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex'],
  ['i', {'class' : 'fas fa-home'}, 'a.navbarLink'],
  ['a', {'class' : 'navbarLink active', 'href' : '#'}, 'section.navbar.flex', 'HTML'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'CSS'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'JAVASCRIPT'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'SQL'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'PHP'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'BOOTSTRAP'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'HOW TO'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'PYTHON'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'W3.CSS'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'JQUERY'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'XML'],
  ['a', {'class' : 'navbarLink', 'href' : '#'}, 'section.navbar.flex', 'MORE'],
  ['div', {'class' : 'flexColumn'}, 'div#target'],
  ['section', {'class' : 'leftMenuBar flex'}, 'div.flexColumn'],
  ['h2', {'class' : 'left'}, 'section.leftMenuBar.flex', 'HTML5 TUTORIAL'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML HOME'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Introduction'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Editors'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Basic'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Elements'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Attributes'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Headings'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Paragraphs'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Styles'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Formatting'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Quotations'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Comments'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Colors'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML CSS'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Links'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Images'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Tables'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Lists'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Blocks'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Classes'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Id'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Iframes'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML JavaScript'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML File paths'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Head'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Layout'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Responsive'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Computercode'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Entities'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Symbols'],
  ['a', {'class' : 'leftMenuLink','href' : '#'}, 'section.leftMenuBar', 'HTML Charset'],
  ['section', {'class' : 'main flex'}, 'div.flexColumn'],
  ['h1', {'class' : 'h1Title'}, 'section.main.flex', 'HTML The class Attribute'],
  ['div',{'class' : 'btnContainer'}, 'section.main.flex'],
  ['a', {'class' : 'btn', 'href' : '#'}, 'div.btnContainer', '< Previous'],
  ['a', {'class' : 'btn', 'href' : '#'}, 'div.btnContainer', 'Next >'],
  ['hr', {'class' : 'hr'}, 'section.main.flex'],
  ['article', {'class' : 'article' }, 'section.main.flex'],
  ['h2', {'class' : 'h2'}, 'article.article','Using The class Attribute'],
  ['p', {'class' : 'p'}, 'article.article','The HTML class attribute is used to define equal styles for elements with the same class name.'],
  ['p', {'class' : 'p'}, 'article.article','So, all HTML elements with the same class attribute will have the same format and style.'],
  ['p', {'class' : 'p'}, 'article.article','Here we have three < div > elements that point to the same class name:'],
  ['div', {'class' : 'ex'}, 'article.article'],
  ['h2', {'class' : 'h2'}, 'div.ex', 'Example'],
  ['section', {'class' : 'rightNav'}, 'div.flexColumn'],
  ['h2', {'class' : 'left'}, 'section.rightNav', 'Side bar']
];

htmlArr.forEach(val => {
 drawHTML(val);
});
