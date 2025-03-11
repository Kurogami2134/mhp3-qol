function update_canva (bar_scale, map_x, map_y, map_scale) {
    let canvas = document.getElementById("game_screen");
    let ctx = canvas.getContext('2d');
    let map = new Image();
    let bars = new Image();
    let bar_end = new Image();

    map.src = 'map.png';
    bars.src = 'bars.png';
    bar_end.src = 'bars_end.png';

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bars, 0, 0)
    ctx.clearRect(bar_scale * 398 + 66, 0, canvas.width, canvas.height)
    ctx.drawImage(bar_end, bar_scale * 398 + 66, 0)
    ctx.drawImage(map, map_x, map_y, map.width*map_scale, map.height*map_scale)
}

function preview() {
    let bar_scale =  parseFloat(document.getElementById("bar_scale").value);
    let map_x =  parseFloat(document.getElementById("map_x").value);
    let map_y =  parseFloat(document.getElementById("map_y").value);
    let map_scale =  parseFloat(document.getElementById("map_scale").value);
    update_canva(bar_scale, map_x, map_y, map_scale);
}

function generate_file() {
    var bytes = new Int32Array(24);
    
    let bar_scale =  parseFloat(document.getElementById("bar_scale").value);
    let map_x =  parseFloat(document.getElementById("map_x").value);
    let map_y =  parseFloat(document.getElementById("map_y").value);
    let map_scale =  parseFloat(document.getElementById("map_scale").value);
    let map_size = parseInt(map_scale*0xA0);

    
    bytes[0] = 0x9d90430;
    bytes[1] = 4;
    bytes[2] = map_size << 16 | map_size;

    bytes[3] = 0x9d65638;
    bytes[4] = 4;
    bytes[5] = 0x340500a0;

    bytes[6] = 0x9d6562c;
    bytes[7] = 4;
    bytes[8] = 0x340400a0;

    bytes[9] = 0x9da93ec;
    bytes[10] = 4;
    bytes[11] = new Int32Array(new Float32Array([map_scale]).buffer)[0];

    bytes[12] = 0x9da93e4;
    bytes[13] = 4;
    bytes[14] = new Int32Array(new Float32Array([1.5/map_scale]).buffer)[0];

    bytes[15] = 0x9d902b0;
    bytes[16] = 4;
    bytes[17] = map_y << 16 | map_x;

    bytes[18] = 0x09DA93A0;
    bytes[19] = 8;
    bytes[20] = new Int32Array(new Float32Array([150/bar_scale]).buffer)[0];
    bytes[21] = new Int32Array(new Float32Array([900/bar_scale]).buffer)[0];

    bytes[22] = -1;
    return bytes;
}

function download() {
    var blob = new Blob([generate_file()], {type: "application/octet-stream"});
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download="0064P";
    link.click();
}

document.addEventListener("DOMContentLoaded", (event) => {
    preview();
});
