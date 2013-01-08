VPATH = ../src

COMBINE = cir.custom.js
COMPRESS = cir.custom.min.js

NS_S = namespace_start.js
NS_E = namespace_end.js

INDISPENSABLE = utility.js element.js klass.js extend.js Event.js

ANE =
EASE = ease.js
# ANE = Tweener.js $(EASE)

S =
# only selector
# S = selector.js selector.methods.js
# selector & animate
# S = selector.js selector.methods.js selector.methods.animate.js $(ANE)

SNS =
FB = Facebook.js
TW = Twitter.js
# SNS = $(FB) $(TW)

USEFULL =
AJAX = Ajax.js
MB = Mobile.js
OBS = Observer.js
# USEFULL = $(AJAX) $(MB) $(OBS)

HSC = HashController.js
EXT =
# EXT = $(HSC) ExternalInterface.js ExternalInterface.Android.js ExternalInterface.IOS.js

ELECTRL =
BIND = Bind.js
CIMG = CanvasImage.js
CREN= CanvasRender.js
DRAG = DragFlick.js
ILD = ImgLoad.js
FONT = FontImage.js
XML = XML.js
# ELECTRL = $(BIND) $(CIMG) $(CREN) $(DRAG) $(ILD) $(FONT) $(XML)

STOR =
ST= DataStore.js
LST = LocalStorage.js
SST = SessionStorage.js
# STOR = $(ST) $(LST) $(SST)

MONO =
DFD = Deferred.js
FPS = FPS.js
LD = Loading.js
PREN = PreRender.js
SLD = ScriptLoad.js
SMET = ServerMeta.js
SUG = Surrogate.js
TRT = Throttle.js
TIR = Timer.js
# MONO = $(DFD) $(FPS) $(LD) $(PREN) $(SLD) $(SMET) $(SUG) $(TRT) $(TIR)

SRC = $(NS_S) $(INDISPENSABLE) $(S) $(SNS) $(USEFULL) $(EXT) $(ELECTRL) $(STOR) $(MONO) $(NS_E)

$(COMBINE) : $(SRC)
	cat $^ > $@

	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --js $(COMBINE) --js_output_file $(COMPRESS)) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
	rm -f $(COMBINE)
