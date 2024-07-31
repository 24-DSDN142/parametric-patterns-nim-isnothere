//parameter variables and custom functions are here!
let Palette = 1 //colour palette of design. There are 3 set variations
let x = [0,99,127] 
//Palette 1x = 0,99,127 
//Palette 2x = 255,165,123
let pequito = 0.5
//MORE PARAMETERS AT THE TOP OF "IF" STATEMENTS
function ScaleRow1(){
    arc(50,y,100,100,180,0);
    arc(50,y,80,80,180,0);
    arc(50,y,60,60,180,0);
    arc(50,y,40,40,180,0);
    arc(50,y,20,20,180,0)
    arc(150,y,100,100,180,0);
    arc(150,y,80,80,180,0);
    arc(150,y,60,60,180,0);
    arc(150,y,40,40,180,0);
    arc(150,y,20,20,180,0)}
function ScaleRow2(){
  
  arc(200,y,100,100,180,270);
  arc(200,y,80,80,180,270);
  arc(200,y,60,60,180,270);
  arc(200,y,40,40,180,270);
  arc(200,y,20,20,180,270)
  arc(100,y,100,100,180,0);
  arc(100,y,80,80,180,0);
  arc(100,y,60,60,180,0);
  arc(100,y,40,40,180,0);
  arc(100,y,20,20,180,0)
  arc(0,y,100,100,270,0);
  arc(0,y,80,80,270,0);
  arc(0,y,60,60,270,0);
  arc(0,y,40,40,270,0);
  arc(0,y,20,20,270,0)
  }

function Lilypad(){
  arc (170,150,50,50,270,210)
  arc (30,50,50,50,330,270)
  line (170,150,170,125)
  line (30,50,30,25)
  line (170,150,148.5,137.5)
  line (30,50,51.5,37.5)}
function Fishy(){ 
  arc(130,50,70,50,330,240)
  line(130,50,157,34)
  line(130,50,117,27)
  noStroke()
  triangle(92,157,52,100,130,60)
  triangle(92,157,52,100,70,130)
  triangle(130,50,130,70,100,77)
  triangle(110,68,90,81,110,75)
  stroke(x)
  arc(70,130,70,70,50,240)
  bezier(92,157,120,130,140,90,130,50)
  noFill()
  bezier(52,100,70,90,100,80,130,50);
  fill(255)
  ellipse(80,150,10,10);
  noFill()
  arc(95,135,15,15,240,30)
  arc(100,130,18,18,240,30)}
function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
  angleMode(DEGREES)
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 //arc(midx,midy,w,h,start,end)
 //ellipse (midx,midy,w,h,vertices)
 //curve (angx1, angy1, rightx, righty, leftx, lefty, angx2, angy2)

  if (Palette == 1){
    let WaveStroke = [88,112,121]
    let WaveLight = [150,191,205]
    let WaveDark = [121,154,166]
    let LilypadStroke = [49,93,76]
    let LilypadFill = [92,173,125]
    let FishyFill = [0,45,68]
    let FishyStroke = [0,99,127]
    stroke(WaveStroke)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 25)
    fill(WaveDark) //darker
    ScaleRow2 (y = 50)
    fill(WaveLight) //lighter
    ScaleRow1 (y=75)
    fill(WaveDark) //darker
    ScaleRow2 (y = 100)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 125)
    fill(WaveDark) //darker
    ScaleRow2 (y = 150)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 175)
    fill(WaveDark) //darker
    ScaleRow2 (y = 200) 
    stroke(LilypadStroke)
    fill(LilypadFill)
    Lilypad();
    fill(FishyFill)
    stroke(FishyStroke)
    Fishy()}

  if(Palette == 2){
    let WaveStroke = [194,83,83]
    let WaveLight = [255,114,114]
    let WaveDark = [249,154,154]
    let LilypadStroke = [154,103,42]
    let LilypadFill = [234,190,134]
    let FishyFill = [255,244,230]
    let FishyStroke = [255,165,123]
    stroke(WaveStroke)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 25)
    fill(WaveDark) //darker
    ScaleRow2 (y = 50)
    fill(WaveLight) //lighter
    ScaleRow1 (y=75)
    fill(WaveDark) //darker
    ScaleRow2 (y = 100)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 125)
    fill(WaveDark) //darker
    ScaleRow2 (y = 150)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 175)
    fill(WaveDark) //darker
    ScaleRow2 (y = 200) 
    stroke(LilypadStroke)
    fill(LilypadFill)
    Lilypad();
    fill(FishyFill)
    stroke(FishyStroke)
    Fishy()}

  if (Palette == 3){
    let WaveStroke = [194,83,83]
    let WaveLight = [255,114,114]
    let WaveDark = [249,154,154]
    let LilypadStroke = [154,103,42]
    let LilypadFill = [234,190,134]
    stroke(WaveStroke)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 25)
    fill(WaveDark) //darker
    ScaleRow2 (y = 50)
    fill(WaveLight) //lighter
    ScaleRow1 (y=75)
    fill(WaveDark) //darker
    ScaleRow2 (y = 100)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 125)
    fill(WaveDark) //darker
    ScaleRow2 (y = 150)
    fill(WaveLight) //lighter
    ScaleRow1 (y = 175)
    fill(WaveDark) //darker
    ScaleRow2 (y = 200) 
    stroke(LilypadStroke)
    fill(LilypadFill)
    Lilypad();
    Fishy()}
  
  
  
 
  
}