console.log(C.template('<%-test%><%if(test){%><%=C.util.replaceAll("12345", "123", "456")%><%}%><%=test%>', {
    test: 'abc'
}));
