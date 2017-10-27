$(".btn-abrir-cerrar").on("click", function() {
    var content = $(this).parents().parents();
    var img = content.children()[0];
    var text = $(content.children()[1]).children()[1];

    if($(this).text().trim()=="Abrir"){
        $(this).html("<i class='fa fa-bars' aria-hidden='true'></i>&nbsp<i class='fa fa-caret-up fa-lg' aria-hidden='true'></i>&nbspCerrar");
        $(img).addClass("img-open");
        $(text).addClass("text-open");
    }
    else if($(this).text().trim()=="Cerrar"){
        $(this).html("<i class='fa fa-bars' aria-hidden='true'></i>&nbsp<i class='fa fa-caret-down fa-lg' aria-hidden='true'></i>&nbspAbrir");
        $(img).removeClass("img-open");
        $(text).removeClass("text-open");
    }
})