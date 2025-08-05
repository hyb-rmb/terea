(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BGterea = function() {
	this.initialize(img.BGterea);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,959);


(lib.Black_Txt = function() {
	this.initialize(img.Black_Txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,552,170);


(lib.curiouslatin = function() {
	this.initialize(img.curiouslatin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,77);


(lib.ed01 = function() {
	this.initialize(img.ed01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1999,429);


(lib.ed02 = function() {
	this.initialize(img.ed02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1997,428);


(lib.ed03pngcopy = function() {
	this.initialize(img.ed03pngcopy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1997,428);


(lib.Findmore = function() {
	this.initialize(img.Findmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,74);


(lib.NEW = function() {
	this.initialize(img.NEW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,80);


(lib.Oasis_Txt = function() {
	this.initialize(img.Oasis_Txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,482,169);


(lib.Sun_Txt = function() {
	this.initialize(img.Sun_Txt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,510,170);


(lib.tereatxt = function() {
	this.initialize(img.tereatxt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,444,169);


(lib.warning = function() {
	this.initialize(img.warning);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,107);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.warning_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.warning();
	this.instance.setTransform(-160,-26.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.warning_1, new cjs.Rectangle(-160,-26.7,320,53.5), null);


(lib.stageBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("A6KNcIAA63MA0VAAAIAAa3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stageBtn, new cjs.Rectangle(-167.5,-85.9,335,171.9), null);


(lib.perint_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Sun_Txt();
	this.instance.setTransform(-127.5,-42.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-42.5,255,85);


(lib.oasis_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Oasis_Txt();
	this.instance.setTransform(-120.5,-42.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-42.2,241,84.5);


(lib._new = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.NEW();
	this.instance.setTransform(-80,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._new, new cjs.Rectangle(-80,-40,160,80), null);


(lib.mc_time2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-102.9,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(-101.85,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-23.1,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-23.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-10.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-4.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:-100.8},0).to({_off:true},1).wait(2).to({_off:false,x:-97.65},0).to({_off:true},1).wait(2).to({_off:false,x:-94.5},0).to({_off:true},1).wait(2).to({_off:false,x:-91.35},0).to({_off:true},1).wait(2).to({_off:false,x:-88.2},0).to({_off:true},1).wait(2).to({_off:false,x:-85.05},0).to({_off:true},1).wait(2).to({_off:false,x:-81.9},0).to({_off:true},1).wait(2).to({_off:false,x:-78.75},0).to({_off:true},1).wait(2).to({_off:false,x:-75.6},0).to({_off:true},1).wait(2).to({_off:false,x:-72.45},0).to({_off:true},1).wait(2).to({_off:false,x:-69.3},0).to({_off:true},1).wait(2).to({_off:false,x:-66.15},0).to({_off:true},1).wait(2).to({_off:false,x:-63},0).to({_off:true},1).wait(2).to({_off:false,x:-59.85},0).to({_off:true},1).wait(2).to({_off:false,x:-56.7},0).to({_off:true},1).wait(2).to({_off:false,x:-53.55},0).to({_off:true},1).wait(2).to({_off:false,x:-50.4},0).to({_off:true},1).wait(2).to({_off:false,x:-47.25},0).to({_off:true},1).wait(2).to({_off:false,x:-44.1},0).to({_off:true},1).wait(2).to({_off:false,x:-40.95},0).to({_off:true},1).wait(2).to({_off:false,x:-37.8},0).to({_off:true},1).wait(2).to({_off:false,x:-34.65},0).to({_off:true},1).wait(2).to({_off:false,x:-31.5},0).to({_off:true},1).wait(2).to({_off:false,x:-28.35},0).to({_off:true},1).wait(2).to({_off:false,x:-25.2},0).to({_off:true},1).wait(2).to({_off:false,x:-22.05},0).to({_off:true},1).wait(2).to({_off:false,x:-18.9},0).to({_off:true},1).wait(2).to({_off:false,x:-15.75},0).to({_off:true},1).wait(2).to({_off:false,x:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-9.45},0).to({_off:true},1).wait(2).to({_off:false,x:-6.3},0).to({_off:true},1).wait(2).to({_off:false,x:-3.15},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-99.75},0).to({_off:true},1).wait(2).to({_off:false,x:-96.6},0).to({_off:true},1).wait(2).to({_off:false,x:-93.45},0).to({_off:true},1).wait(2).to({_off:false,x:-90.3},0).to({_off:true},1).wait(2).to({_off:false,x:-87.15},0).to({_off:true},1).wait(2).to({_off:false,x:-84},0).to({_off:true},1).wait(2).to({_off:false,x:-80.85},0).to({_off:true},1).wait(2).to({_off:false,x:-77.7},0).to({_off:true},1).wait(2).to({_off:false,x:-74.55},0).to({_off:true},1).wait(2).to({_off:false,x:-71.4},0).to({_off:true},1).wait(2).to({_off:false,x:-68.25},0).to({_off:true},1).wait(2).to({_off:false,x:-65.1},0).to({_off:true},1).wait(2).to({_off:false,x:-61.95},0).to({_off:true},1).wait(2).to({_off:false,x:-58.8},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(2).to({_off:false,x:-52.5},0).to({_off:true},1).wait(2).to({_off:false,x:-49.35},0).to({_off:true},1).wait(2).to({_off:false,x:-46.2},0).to({_off:true},1).wait(2).to({_off:false,x:-43.05},0).to({_off:true},1).wait(2).to({_off:false,x:-39.9},0).to({_off:true},1).wait(2).to({_off:false,x:-36.75},0).to({_off:true},1).wait(2).to({_off:false,x:-33.6},0).to({_off:true},1).wait(2).to({_off:false,x:-30.45},0).to({_off:true},1).wait(2).to({_off:false,x:-27.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.15},0).to({_off:true},1).wait(2).to({_off:false,x:-21},0).to({_off:true},1).wait(2).to({_off:false,x:-17.85},0).to({_off:true},1).wait(2).to({_off:false,x:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-11.55},0).to({_off:true},1).wait(2).to({_off:false,x:-8.4},0).to({_off:true},1).wait(2).to({_off:false,x:-5.25},0).to({_off:true},1).wait(2).to({_off:false,x:-2.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-98.7},0).to({_off:true},1).wait(2).to({_off:false,x:-95.55},0).to({_off:true},1).wait(2).to({_off:false,x:-92.4},0).to({_off:true},1).wait(2).to({_off:false,x:-89.25},0).to({_off:true},1).wait(2).to({_off:false,x:-86.1},0).to({_off:true},1).wait(2).to({_off:false,x:-82.95},0).to({_off:true},1).wait(2).to({_off:false,x:-79.8},0).to({_off:true},1).wait(2).to({_off:false,x:-76.65},0).to({_off:true},1).wait(2).to({_off:false,x:-73.5},0).to({_off:true},1).wait(2).to({_off:false,x:-70.35},0).to({_off:true},1).wait(2).to({_off:false,x:-67.2},0).to({_off:true},1).wait(2).to({_off:false,x:-64.05},0).to({_off:true},1).wait(2).to({_off:false,x:-60.9},0).to({_off:true},1).wait(2).to({_off:false,x:-57.75},0).to({_off:true},1).wait(2).to({_off:false,x:-54.6},0).to({_off:true},1).wait(2).to({_off:false,x:-51.45},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).to({_off:true},1).wait(2).to({_off:false,x:-45.15},0).to({_off:true},1).wait(2).to({_off:false,x:-42},0).to({_off:true},1).wait(2).to({_off:false,x:-38.85},0).to({_off:true},1).wait(2).to({_off:false,x:-35.7},0).to({_off:true},1).wait(2).to({_off:false,x:-32.55},0).to({_off:true},1).wait(2).to({_off:false,x:-29.4},0).to({_off:true},1).wait(2).to({_off:false,x:-26.25},0).to({_off:true},1).wait(5).to({_off:false,x:-19.95},0).to({_off:true},1).wait(2).to({_off:false,x:-16.8},0).to({_off:true},1).wait(2).to({_off:false,x:-13.65},0).to({_off:true},1).wait(5).to({_off:false,x:-7.35},0).to({_off:true},1).wait(5).to({_off:false,x:-1.05},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_4.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.mc_time = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_99 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(99).call(this.frame_99).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	mask.setTransform(0,-0.025);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(-103.95,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnVAjQgMAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKAMAAIOqAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-102.9,-0.025);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(-101.85,-0.025);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOqAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-23.1,-0.025);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-23.1}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-10.5}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3,p:{x:-4.2}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false,x:-100.8},0).to({_off:true},1).wait(2).to({_off:false,x:-97.65},0).to({_off:true},1).wait(2).to({_off:false,x:-94.5},0).to({_off:true},1).wait(2).to({_off:false,x:-91.35},0).to({_off:true},1).wait(2).to({_off:false,x:-88.2},0).to({_off:true},1).wait(2).to({_off:false,x:-85.05},0).to({_off:true},1).wait(2).to({_off:false,x:-81.9},0).to({_off:true},1).wait(2).to({_off:false,x:-78.75},0).to({_off:true},1).wait(2).to({_off:false,x:-75.6},0).to({_off:true},1).wait(2).to({_off:false,x:-72.45},0).to({_off:true},1).wait(2).to({_off:false,x:-69.3},0).to({_off:true},1).wait(2).to({_off:false,x:-66.15},0).to({_off:true},1).wait(2).to({_off:false,x:-63},0).to({_off:true},1).wait(2).to({_off:false,x:-59.85},0).to({_off:true},1).wait(2).to({_off:false,x:-56.7},0).to({_off:true},1).wait(2).to({_off:false,x:-53.55},0).to({_off:true},1).wait(2).to({_off:false,x:-50.4},0).to({_off:true},1).wait(2).to({_off:false,x:-47.25},0).to({_off:true},1).wait(2).to({_off:false,x:-44.1},0).to({_off:true},1).wait(2).to({_off:false,x:-40.95},0).to({_off:true},1).wait(2).to({_off:false,x:-37.8},0).to({_off:true},1).wait(2).to({_off:false,x:-34.65},0).to({_off:true},1).wait(2).to({_off:false,x:-31.5},0).to({_off:true},1).wait(2).to({_off:false,x:-28.35},0).to({_off:true},1).wait(2).to({_off:false,x:-25.2},0).to({_off:true},1).wait(2).to({_off:false,x:-22.05},0).to({_off:true},1).wait(2).to({_off:false,x:-18.9},0).to({_off:true},1).wait(2).to({_off:false,x:-15.75},0).to({_off:true},1).wait(2).to({_off:false,x:-12.6},0).to({_off:true},1).wait(2).to({_off:false,x:-9.45},0).to({_off:true},1).wait(2).to({_off:false,x:-6.3},0).to({_off:true},1).wait(2).to({_off:false,x:-3.15},0).to({_off:true},1).wait(2).to({_off:false,x:0},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-99.75},0).to({_off:true},1).wait(2).to({_off:false,x:-96.6},0).to({_off:true},1).wait(2).to({_off:false,x:-93.45},0).to({_off:true},1).wait(2).to({_off:false,x:-90.3},0).to({_off:true},1).wait(2).to({_off:false,x:-87.15},0).to({_off:true},1).wait(2).to({_off:false,x:-84},0).to({_off:true},1).wait(2).to({_off:false,x:-80.85},0).to({_off:true},1).wait(2).to({_off:false,x:-77.7},0).to({_off:true},1).wait(2).to({_off:false,x:-74.55},0).to({_off:true},1).wait(2).to({_off:false,x:-71.4},0).to({_off:true},1).wait(2).to({_off:false,x:-68.25},0).to({_off:true},1).wait(2).to({_off:false,x:-65.1},0).to({_off:true},1).wait(2).to({_off:false,x:-61.95},0).to({_off:true},1).wait(2).to({_off:false,x:-58.8},0).to({_off:true},1).wait(2).to({_off:false,x:-55.65},0).to({_off:true},1).wait(2).to({_off:false,x:-52.5},0).to({_off:true},1).wait(2).to({_off:false,x:-49.35},0).to({_off:true},1).wait(2).to({_off:false,x:-46.2},0).to({_off:true},1).wait(2).to({_off:false,x:-43.05},0).to({_off:true},1).wait(2).to({_off:false,x:-39.9},0).to({_off:true},1).wait(2).to({_off:false,x:-36.75},0).to({_off:true},1).wait(2).to({_off:false,x:-33.6},0).to({_off:true},1).wait(2).to({_off:false,x:-30.45},0).to({_off:true},1).wait(2).to({_off:false,x:-27.3},0).to({_off:true},1).wait(2).to({_off:false,x:-24.15},0).to({_off:true},1).wait(2).to({_off:false,x:-21},0).to({_off:true},1).wait(2).to({_off:false,x:-17.85},0).to({_off:true},1).wait(2).to({_off:false,x:-14.7},0).to({_off:true},1).wait(2).to({_off:false,x:-11.55},0).to({_off:true},1).wait(2).to({_off:false,x:-8.4},0).to({_off:true},1).wait(2).to({_off:false,x:-5.25},0).to({_off:true},1).wait(2).to({_off:false,x:-2.1},0).to({_off:true},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false,x:-98.7},0).to({_off:true},1).wait(2).to({_off:false,x:-95.55},0).to({_off:true},1).wait(2).to({_off:false,x:-92.4},0).to({_off:true},1).wait(2).to({_off:false,x:-89.25},0).to({_off:true},1).wait(2).to({_off:false,x:-86.1},0).to({_off:true},1).wait(2).to({_off:false,x:-82.95},0).to({_off:true},1).wait(2).to({_off:false,x:-79.8},0).to({_off:true},1).wait(2).to({_off:false,x:-76.65},0).to({_off:true},1).wait(2).to({_off:false,x:-73.5},0).to({_off:true},1).wait(2).to({_off:false,x:-70.35},0).to({_off:true},1).wait(2).to({_off:false,x:-67.2},0).to({_off:true},1).wait(2).to({_off:false,x:-64.05},0).to({_off:true},1).wait(2).to({_off:false,x:-60.9},0).to({_off:true},1).wait(2).to({_off:false,x:-57.75},0).to({_off:true},1).wait(2).to({_off:false,x:-54.6},0).to({_off:true},1).wait(2).to({_off:false,x:-51.45},0).to({_off:true},1).wait(2).to({_off:false,x:-48.3},0).to({_off:true},1).wait(2).to({_off:false,x:-45.15},0).to({_off:true},1).wait(2).to({_off:false,x:-42},0).to({_off:true},1).wait(2).to({_off:false,x:-38.85},0).to({_off:true},1).wait(2).to({_off:false,x:-35.7},0).to({_off:true},1).wait(2).to({_off:false,x:-32.55},0).to({_off:true},1).wait(2).to({_off:false,x:-29.4},0).to({_off:true},1).wait(2).to({_off:false,x:-26.25},0).to({_off:true},1).wait(5).to({_off:false,x:-19.95},0).to({_off:true},1).wait(2).to({_off:false,x:-16.8},0).to({_off:true},1).wait(2).to({_off:false,x:-13.65},0).to({_off:true},1).wait(5).to({_off:false,x:-7.35},0).to({_off:true},1).wait(5).to({_off:false,x:-1.05},0).to({_off:true},1).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.2)").s().p("AnVAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_4.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(100));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-3.5,99.8,7);


(lib.headline = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tereatxt();
	this.instance.setTransform(-222,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.headline, new cjs.Rectangle(-222,-84.5,444,169), null);


(lib.e03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ed03pngcopy();
	this.instance.setTransform(-46.2,61.25,0.0751,0.0751,-65.0119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.e03, new cjs.Rectangle(-46.2,-74.6,92.5,149.5), null);


(lib.e02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ed02();
	this.instance.setTransform(-46.2,61.2,0.0751,0.0751,-65.0084);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.e02, new cjs.Rectangle(-46.2,-74.7,92.5,149.5), null);


(lib.e01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ed01();
	this.instance.setTransform(-46.25,61.15,0.075,0.075,-64.9986);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.e01, new cjs.Rectangle(-46.2,-74.7,92.5,149.5), null);


(lib.curious = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Findmore();
	this.instance.setTransform(14,-27,0.546,0.546);

	this.instance_1 = new lib.curiouslatin();
	this.instance_1.setTransform(-141,-27,0.546,0.546);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curious, new cjs.Rectangle(-141,-27,277.3,42.1), null);


(lib.bgg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BGterea();
	this.instance.setTransform(-196.3,-294.1,0.6134,0.6134);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgg, new cjs.Rectangle(-196.3,-294.1,392.6,588.3), null);


(lib.bermint_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Black_Txt();
	this.instance.setTransform(-138,-42.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-42.5,276,85);


(lib.terea_slide = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {oasis:0,bermint:20,perint:40};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		this.lp_oasis.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/terea-oasis-pearl-iqos.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_oasis.alpha = 0.05;
	}
	this.frame_39 = function() {
		this.stop();
		this.lp_bermint.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/terea-oasis-pearl-iqos.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_bermint.alpha = 0.05;
	}
	this.frame_59 = function() {
		this.stop();
		this.lp_perint.addEventListener("click", function() {
		    setTimeout(function() {  //Bypass popup blockers
		        window.open("https://www.iqos.com/id/id/shop/terea-oasis-pearl-iqos.html", "_blank");
		    }, 100);
		}.bind(this));
		
		this.lp_perint.alpha = 0.05;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(1));

	// Layer_10
	this.lp_oasis = new lib.stageBtn();
	this.lp_oasis.name = "lp_oasis";
	this.lp_oasis.setTransform(0.2,142.15,0.9554,0.5831,0,0,0,0.2,0.6);

	this.lp_bermint = new lib.stageBtn();
	this.lp_bermint.name = "lp_bermint";
	this.lp_bermint.setTransform(0.2,142.15,0.9554,0.5831,0,0,0,0.2,0.6);

	this.lp_perint = new lib.stageBtn();
	this.lp_perint.name = "lp_perint";
	this.lp_perint.setTransform(0.2,142.15,0.9554,0.5831,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.lp_oasis}]},19).to({state:[]},1).to({state:[{t:this.lp_bermint}]},19).to({state:[]},1).to({state:[{t:this.lp_perint}]},19).wait(1));

	// Layer_8
	this.instance = new lib.e01();
	this.instance.setTransform(77.55,4.95,0.7755,0.7747,0,0,0,0.1,0.1);

	this.instance_1 = new lib.e02();
	this.instance_1.setTransform(84.3,2.65,0.7366,0.7357);
	this.instance_1._off = true;

	this.instance_2 = new lib.e03();
	this.instance_2.setTransform(81.35,5.65,0.7505,0.7499);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,regY:0,scaleX:1.0664,scaleY:1.0663,x:1.3,y:4.9},19).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({regX:0.1,scaleX:1.0129,scaleY:1.0115,x:1.45,y:3.5},19).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40).to({_off:false},0).to({regY:-0.1,scaleX:1.0319,scaleY:1.0315,x:-0.55,y:5.6},19).wait(1));

	// Layer_7
	this.instance_3 = new lib.e03();
	this.instance_3.setTransform(-0.55,5.6,1.0319,1.0315,0,0,0,0,-0.1);

	this.instance_4 = new lib.e01();
	this.instance_4.setTransform(1.3,4.9,1.0664,1.0663);
	this.instance_4._off = true;

	this.instance_5 = new lib.e02();
	this.instance_5.setTransform(1.45,3.5,1.0129,1.0115,0,0,0,0.1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:0,scaleX:0.7505,scaleY:0.7499,x:-78.65,y:5.65},19).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({_off:false},0).to({scaleX:0.7756,scaleY:0.7752,x:-78.65,y:4.85},19).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).to({regX:0,scaleX:0.7366,scaleY:0.7362,x:-78.65,y:2.7},19).wait(1));

	// Layer_6
	this.instance_6 = new lib.e02();
	this.instance_6.setTransform(-78.65,2.7,0.7366,0.7362);

	this.instance_7 = new lib.e03();
	this.instance_7.setTransform(-78.65,5.65,0.7505,0.7499);
	this.instance_7._off = true;

	this.instance_8 = new lib.e01();
	this.instance_8.setTransform(-78.65,4.85,0.7756,0.7752);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.7357,x:84.3,y:2.65},19).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({x:81.35},19).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.7755,scaleY:0.7747,x:77.55,y:4.95},19).wait(1));

	// Layer_9
	this.instance_9 = new lib.oasis_txt("synched",0);
	this.instance_9.setTransform(0.05,-95,0.4519,0.4519,0,0,0,0.1,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.bermint_txt("synched",0);
	this.instance_10.setTransform(0.05,-95,0.4519,0.4519,0,0,0,0.1,0);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.instance_11 = new lib.perint_txt("synched",0);
	this.instance_11.setTransform(0.05,-95,0.4519,0.4519,0,0,0,0.1,0);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(14).to({_off:false},0).to({regX:0,scaleX:0.7839,scaleY:0.7839,x:0,y:-103,alpha:1},5).to({_off:true},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(34).to({_off:false},0).to({regX:0,scaleX:0.7839,scaleY:0.7839,x:0,y:-103,alpha:1},5).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(54).to({_off:false},0).to({regX:0,scaleX:0.7839,scaleY:0.7839,x:0,y:-103,alpha:1},5).wait(1));

	// Layer_5
	this.instance_12 = new lib.mc_time();
	this.instance_12.setTransform(-103.55,-277.65);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AAwAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAgAvaAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape.setTransform(51.775,-277.675);

	this.instance_13 = new lib.mc_time2();
	this.instance_13.setTransform(-52,-277.75,1,1,0,0,0,-52,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AnUAjQgNAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_1.setTransform(-103.55,-277.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AnUAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOpAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAg");
	this.shape_2.setTransform(103.55,-277.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAwAjQgMAAgJgKQgIgKAAgPIAAAAQAAgOAIgKQAJgKAMAAIOrAAQANAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgNAAgAvaAjQgNAAgIgKQgJgKAAgPIAAAAQAAgOAJgKQAIgKANAAIOrAAQAMAAAIAKQAJAKAAAOIAAAAQAAAPgJAKQgIAKgMAAg");
	this.shape_3.setTransform(-51.775,-277.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_12}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_13}]},20).to({state:[{t:this.shape_3}]},20).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.4,-281.2,417.5,473.2);


(lib.newbg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bgg();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0446,scaleY:1.0446},59).to({scaleX:1,scaleY:1},80).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205,-307.2,410.1,614.5);


// stage content:
(lib.Terea_storiesv2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,49];
	// timeline functions:
	this.frame_0 = function() {
		this.nxtBtn.alpha = 0.05;
		this.prvBtn.alpha = 0.05;
		
		// Frame list untuk gallery
		this.frameList = [0, 20, 40];
		this.currentIndex = 0;
		
		// Set frame awal
		this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		
		// Flag & ticker reference
		let reverseTicker = null;
		
		// Fungsi play backward
		const playBackwardTo = (targetFrame) => {
		    if (reverseTicker) createjs.Ticker.removeEventListener("tick", reverseTicker);
		    reverseTicker = () => {
		        if (this.slides.currentFrame > targetFrame) {
		            this.slides.gotoAndStop(this.slides.currentFrame - 1);
		        } else {
		            createjs.Ticker.removeEventListener("tick", reverseTicker);
		        }
		    };
		    createjs.Ticker.addEventListener("tick", reverseTicker);
		};
		
		// Tombol Next (normal)
		this.nxtBtn.addEventListener("click", () => {
		    this.currentIndex = (this.currentIndex + 1) % this.frameList.length;
		    this.slides.gotoAndPlay(this.frameList[this.currentIndex]);
		});
		
		// Tombol Previous (play backward)
		this.prvBtn.addEventListener("click", () => {
		    let prevIndex = (this.currentIndex - 1 + this.frameList.length) % this.frameList.length;
		    let targetFrame = this.frameList[prevIndex];
		    playBackwardTo(targetFrame);
		    this.currentIndex = prevIndex;
		});
	}
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// Layer_2
	this.instance = new lib.warning_1();
	this.instance.setTransform(160,453.25);
	this.instance.compositeOperation = "hard-light";

	this.instance_1 = new lib._new();
	this.instance_1.setTransform(40,43.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(50));

	// Layer_6
	this.nxtBtn = new lib.stageBtn();
	this.nxtBtn.name = "nxtBtn";
	this.nxtBtn.setTransform(240.05,188.85,0.4777,2.1841,0,0,0,0.1,0.5);

	this.prvBtn = new lib.stageBtn();
	this.prvBtn.name = "prvBtn";
	this.prvBtn.setTransform(80.05,188.85,0.4777,2.1841,0,0,0,0.2,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.prvBtn},{t:this.nxtBtn}]}).wait(50));

	// Layer_5
	this.instance_2 = new lib.curious();
	this.instance_2.setTransform(162.35,403.75,0.7157,0.7157);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50));

	// Layer_3
	this.instance_3 = new lib.headline();
	this.instance_3.setTransform(160.1,102.5,0.49,0.49,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50));

	// Layer_4
	this.slides = new lib.terea_slide();
	this.slides.name = "slides";
	this.slides.setTransform(160,288.4);

	this.timeline.addTween(cjs.Tween.get(this.slides).wait(50));

	// Layer_1
	this.instance_4 = new lib.newbg();
	this.instance_4.setTransform(160.3,193.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(62.6,139,294,348.3);
// library properties:
lib.properties = {
	id: '7EAF8F31844F4A469F9DFC5AE21425EB',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BGterea.png", id:"BGterea"},
		{src:"images/Black_Txt.png", id:"Black_Txt"},
		{src:"images/curiouslatin.png", id:"curiouslatin"},
		{src:"images/ed01.png", id:"ed01"},
		{src:"images/ed02.png", id:"ed02"},
		{src:"images/ed03pngcopy.png", id:"ed03pngcopy"},
		{src:"images/Findmore.png", id:"Findmore"},
		{src:"images/NEW.png", id:"NEW"},
		{src:"images/Oasis_Txt.png", id:"Oasis_Txt"},
		{src:"images/Sun_Txt.png", id:"Sun_Txt"},
		{src:"images/tereatxt.png", id:"tereatxt"},
		{src:"images/warning.png", id:"warning"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7EAF8F31844F4A469F9DFC5AE21425EB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;