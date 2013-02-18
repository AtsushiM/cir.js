C['Ajax'] = klassExtendBase(
    (config) ->
        if config
            @['request'](config)
            return @;
    {
        'request': (vars) ->
            if vars.dataType == 'json'
                delete vars.dataType
                return @['json'] vars

            url = vars['url']
            callback = vars['callback'] || nullFunction
            error = vars['error'] || nullFunction
            type = vars['type'] || 'GET'
            query = EMPTY
            xhr = this._xhr = new XMLHttpRequest

            if !vars['cash']
                if !vars['query']
                    vars['query'] = {}

                vars['query']['cir' + dateNow()] = 0;

            if vars['query']
                query = vars['query']

                if isObject query
                    query = encodeURI makeQueryString query


            xhr.onreadystatechange = ->
                if xhr.readyState * 1 isnt 4
                    return

                if xhr.status is 200
                    return callback xhr.responseText, xhr

                error xhr

            if type is 'GET'
                if url.indexOf('?') isnt -1
                    url += '&'
                else
                    url += '?'

                url += query
                query = EMPTY

            xhr.open(type, url)

            if type is 'POST'
                xhr.setRequestHeader 'Content-Type', 'application/x-www-form-urlencoded'

            xhr.send query

            return @

        'abort': () ->
            if @_xhr
                @_xhr.abort

            return @

        'json': (vars) ->
            callback = vars['callback']
            error = vars['error']

            vars['callback'] = (data) ->
                callback jsonParse data

            vars['error'] = (data) ->
                if error
                    error data

            @['request'] vars

            return @
    }
)
