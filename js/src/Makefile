SRC = namespace_start.js utility.js dom.js klass.js extend.js Event.js Base.js ease.js cssease.js Animation.js Transition.js Tweener.js selector.js selector.methods.js selector.methods.animate.js HashQuery.js Embed.js Media.js Audio.js Sound.js Video.js Movie.js Ajax.js Bind.js Brush.js DataStore.js WebStorage.js LocalStorage.js SessionStorage.js Deferred.js DragFlick.js ExternalInterface.js ExternalInterface.Android.js ExternalInterface.IOS.js Facebook.js FPS.js ImgLoad.js WindowLoad.js Mobile.js FontImg.js Observer.js PreRender.js Route.js ScriptLoad.js ServerMeta.js Surrogate.js Throttle.js Timer.js Twitter.js XML.js namespace_end.js

COMBINE = ../cir.js
COMPRESS = ../cir.compress.js
FINAL = ../cir.min.js

$(COMBINE) : $(SRC)
	cat $^ > $@

	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js $(COMBINE) --js_output_file $(COMPRESS)) && cat clouser_start.js $(COMPRESS) clouser_end.js > $(FINAL) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
	rm -f $(COMPRESS)
#	((java -jar /Applications/gcc/compiler.jar --compilation_level SIMPLE_OPTIMIZATIONS  --js $(COMBINE) --js_output_file $(FINAL)) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
#	rm -f $(COMBINE)

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
