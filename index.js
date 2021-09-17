//crossing done items
$("ul").on("click","li",function()
{
	$(this).toggleClass("doneitems");

});

//clicking X
$("ul").on("click","span",function(event)
{
	
	$(this).parent().fadeOut(500,function()
	{
		$(this).remove();
	});
	
	event.stopPropagation();
});

//adding new todos
$('input[type="text"]').keypress(function(event)
{
	if(event.which===13)
	{
		
		var newtodo=$(this).val();
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ newtodo +"</li>");
		$(this).val("");

	}
	
});

$("#plus").on("click",function()
{
	$("input").slideToggle();
})

$("#pencil").on("click",function()
{
	$("#maincontainer").fadeToggle();
});
