# Max configuration
SRC = namespace_start.js utility.js element.js klass.js extend.js selector.js selector.methods.js selector.methods.animate.js ease.js Event.js HashController.js Ajax.js Bind.js CanvasImg.js CanvasRender.js DataStore.js Deferred.js DragFlick.js ExternalInterface.js ExternalInterface.Android.js ExternalInterface.IOS.js Facebook.js FPS.js ImgLoad.js WindowLoad.js LocalStorage.js Mobile.js FontImg.js Observer.js PreRender.js Route.js ScriptLoad.js ServerMeta.js SessionStorage.js Surrogate.js Throttle.js Timer.js Tweener.js Twitter.js XML.js namespace_end.js

# Minimum configuration
# SRC = namespace_start.js utility.js element.js klass.js extend.js Event.js Mobile.js Observer.js namespace_end.js

# Minimum configuration + element selector + animation
# SRC = namespace_start.js utility.js element.js klass.js extend.js selector.js selector.methods.js selector.methods.animate.js Tweener.js Event.js Mobile.js Observer.js namespace_end.js

COMBINE = ../cir.js
COMPRESS = ../cir.min.js

$(COMBINE) : $(SRC)
	cat $^ > $@

	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --js $(COMBINE) --js_output_file $(COMPRESS)) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
#	rm -f $(COMBINE)

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
