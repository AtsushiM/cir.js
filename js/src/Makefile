SRC = namespace_start.js util.js dom.js Class.js Base.js Observer.js Event.js ease.js ssease.js SSAnime.js AnimeFrame.js Tweener.js selector.js selector.methods.js selector.methods.animate.js HashQuery.js Embed.js Media.js Audio.js Sound.js Video.js Movie.js Ajax.js AbstractTask.js Async.js Sync.js Anvas.js DateFactory.js Rollover.js Storage.js WebStorage.js LocalStorage.js SessionStorage.js DragFlick.js ExternalInterface.js ExternalInterface.Android.js ExternalInterface.IOS.js Facebook.js FPS.js ElementLoad.js ImgLoad.js ScriptLoad.js WindowLoad.js Mobile.js PC.js Orientation.js Modal.js WindowAction.js DeviceOrientation.js DeviceMotion.js DeviceShake.js FontImg.js PreRender.js Router.js ServerMeta.js Surrogate.js Throttle.js Twitter.js XML.js Model.js View.js Ollection.js Validate.js Scroll.js LimitText.js require.js namespace.js Calc.js LowPassFilter.js template.js BackForwardCache.js SocketRequest.js namespace_end.js

COMBINE = ../cir.combine.js
COMPRESS = ../cir.compress.js
FINAL = ../cir.min.js
CANREAD = ../cir.js

$(COMBINE) : $(SRC)
	cat $^ > $@

	cat clouser_start.js $(COMBINE) clouser_end.js > $(CANREAD)
	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js $(COMBINE) --js_output_file $(COMPRESS)) && cat clouser_start.js $(COMPRESS) clouser_end.js > $(FINAL) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
	rm -f $(COMPRESS)
	rm -f $(COMBINE)

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
