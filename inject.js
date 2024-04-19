setTimeout(function() {
    alert("Spreekend Extension Loaded");
var myButton = document.getElementsByClassName('microphone')[0];
myButton.click();

// Select all elements with a certain class
classList = ['customize', 'audius']

for (var i = 0; i < classList.length; i++) {
    var elements = document.getElementsByClassName(classList[i]);
    // Iterate over the selected elements and remove them
    for (var j = 0; j < elements.length; j++) {
        elements[j].parentNode.removeChild(elements[j]);
    }
}

var styleElement = document.createElement('style');
var css = '.audius { display: none; }';
styleElement.appendChild(document.createTextNode(css));
document.head.appendChild(styleElement);


var divElement = document.getElementsByClassName('shader')[0];
var htmlContent = `<div id="overlay" style="position: fixed;top: 50%;left: 50%;z-index: 100;transform: translate(-50%, -50%);">
<img src="https://storage.googleapis.com/shorts-gen-website/riordan-logo.png" style="width: 100vh; display: block;z-index: 101;" id="riordan">
<img src="https://storage.googleapis.com/shorts-gen-website/lefty-logo.png" style="width: 100vh; display: none;z-index: 101;" id="lefty">
<img src="https://storage.googleapis.com/shorts-gen-website/san-pacho.png" style="width: 100vh; display: none;z-index: 101;" id="pacho">
</div>`;
divElement.insertAdjacentHTML('beforeend', htmlContent);

document.addEventListener('keydown', function(event) {
    // Check if comma key (key code 188) is pressed
    if (event.key === ',') {
        // Change the CSS content inside the style tag
        var divElement = document.getElementById('riordan');
        divElement.style.display = 'none';
        var divElement = document.getElementById('lefty');
        divElement.style.display = 'block';
        var divElement = document.getElementById('pacho');
        divElement.style.display = 'none';
    }
    if (event.key === '.') {
        // Change the CSS content inside the style tag
        var divElement = document.getElementById('riordan');
        divElement.style.display = 'block';
        var divElement = document.getElementById('lefty');
        divElement.style.display = 'none';
        var divElement = document.getElementById('pacho');
        divElement.style.display = 'none';
    }
    if (event.key === '/') {
        // Change the CSS content inside the style tag
        var divElement = document.getElementById('riordan');
        divElement.style.display = 'none';
        var divElement = document.getElementById('lefty');
        divElement.style.display = 'none';
        var divElement = document.getElementById('pacho');
        divElement.style.display = 'block';
    }
});


var styleElement = document.createElement('style');
var css = `
.audius, .progress-circle, .sketch-browser {
    display: none !important;
}
`;
styleElement.appendChild(document.createTextNode(css));
document.head.appendChild(styleElement);

var max = 38;
var count = 0;
var isGoingRight = true;
function pressKey() {
    if (count < max && isGoingRight) {
        var myButton = document.getElementsByClassName('right')[0];
        myButton.click();
        count++;
    } else {
        var myButton = document.getElementsByClassName('left')[0];
        myButton.click();
        count--;
        isGoingRight = false;

        if (count === 0) {
            isGoingRight = true;
        }
    }
}

// Call every 1 minute and a half
setInterval(pressKey, 1000 * 90);


}, 5000);
console.log('Spreekend Extension is loading');