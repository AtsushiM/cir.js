# Max configuration
SRC = namespace_start.js utility.js klass.js extend.js selector.js selector.methods.js HashController.js Ajax.js Bind.js CanvasImage.js CanvasRender.js DataStore.js Event.js ExternalInterface.js ExternalAndroidInterface.js ExternalIOSInterface.js Facebook.js FPS.js ImgLoad.js Loading.js LocalStorage.js Mobile.js NumberImage.js Observer.js PreRender.js ScriptLoad.js ServerMeta.js SessionStorage.js Surrogate.js Throttle.js Timer.js Twitter.js XML.js namespace_end.js

# Minimum configuration
# SRC = namespace_start.js utility.js klass.js extend.js Event.js Mobile.js Observer.js namespace_end.js

# Minimum configuration + element selector
# SRC = namespace_start.js utility.js klass.js extend.js selector.js selector.methods.js Event.js Mobile.js Observer.js namespace_end.js

COMBINE = ../hyapp.combine.js
COMPRESS = ../hyapp.js

$(COMBINE) : $(SRC)
	cat $^ > $@

	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --js $(COMBINE) --js_output_file $(COMPRESS)) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
#	rm -f $(COMBINE)

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
