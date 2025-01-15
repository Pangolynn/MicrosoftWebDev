chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === 'updateIcon') {
        chrome.action.setIcon({ imageData: drawIcon(msg.value) });
    }    
});

function drawIcon(value) {
	// Manifest V3 service worker has no access to DOM, 
	// create Offscreen canvas instead
	let canvas = new OffscreenCanvas(200,200);
	let context = canvas.getContext('2d');

	context.beginPath();
	context.fillStyle = value.color;
	context.arc(100, 100, 50, 0, 2 * Math.PI);
	context.fill();

	return context.getImageData(50, 50, 100, 100);
}

