$('#edit-user').on('show.bs.collapse', function () {

    
    $(".item-list").css("margin-right","250px");
    
    $(".item-list").css("transition","all .3s");
    
    
})



$('#edit-user').on('hidden.bs.collapse', function () {
  
    $(".item-list").css("margin-right","0");
    
    
    
    
    
})


$("ul .user-info").click(function(){
    
    
 /*
 المشكله هنا انا عامل لما يكلك على الديف ... 
 ul background red .
 
 but donot work with ul list-section 
 */  
    
 $("ul").css("background-color","red");
    
    
    
    
    
})









