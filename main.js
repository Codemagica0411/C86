var canvas = new fabric.Canvas("myCanvas");
px = 10;
py = 10;
block_w = 30;
block_h = 30;
var player_object="";
function player_update() {
 fabric.Image.fromURL("player.png", function(Img) {
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
    top: py,
    left:px
}) ;
canvas.add("player_object");

 })  ; 
}