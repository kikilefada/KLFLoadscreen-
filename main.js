var count = 0;
var thisCount = 0;

const  handler = {
        startInitFunctionOrder(data) {
            count = data.count
        },
        initFunctionInvoking(data) {
            document.querySelector(".progressBar").style.left = "10%"
            document.querySelector(".progressBar").style.width = ((data.idx / count) * 100) + "%";

        },
        startDataFileEntries(data){
            count = data.count;
        },
        performMapLoadFunction(data) {
            ++thisCount
            document.querySelector(".progressBar").style.left = "0%"
            document.querySelector(".progressBar").style.width = ((thisCount / count) * 100) + "%"
        }

    }

window.addEventListener("message", function(e) {
    (handler[e.data.eventName] || function () {})(e.data)
})

var song;

function setup() {
    createCanvas(200, 200);
    song = loadSound('music.ogg', loaded);
    song.setVolume(0.5);

}

function loaded() {
    song.play();
}
