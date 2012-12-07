SRC = namespace_start.js utility.js klass.js extend.js HashController.js Ajax.js CanvasImage.js CanvasRender.js DataStore.js Event.js ExternalInterface.js ExternalAndroidInterface.js ExternalIOSInterface.js Facebook.js FPS.js ImgLoad.js Loading.js LocalStorage.js Mobile.js NumberImage.js Observer.js PreRender.js ServerMeta.js Surrogate.js Throttle.js Timer.js Twitter.js XML.js namespace_end.js
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
