SRC = namespace.js utility.js DataStore.js Event.js ExternalInterface.js FPS.js HashController.js Loading.js Mobile.js NumberImage.js Observer.js Proxy.js Timer.js
COMBINE = src.combine.js
COMPRESS = ../hyapp.js

$(COMBINE) : $(SRC)
	cat $^ > $@

	growlnotify -t 'auto-make' -m 'make start.'
	((java -jar /Applications/gcc/compiler.jar --js $(COMBINE) --js_output_file $(COMPRESS)) && growlnotify -t 'auto-make' -m 'make complete.') || growlnotify -t 'auto-make' -m 'make error.'
	rm -f $(COMBINE)

.PHONY: clean
clean :
	rm -f $(COMBINE) $(COMPRESS)
