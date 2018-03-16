$("document").ready(function(){
    $(".update").click(function(){
        var url = '/getTaskData/'+$(this).attr("data-id");
        $.get(url,function(res){
            if(res.status='success'){
                var data = res.data;
                $("#addTask .name").val(data.name);
                $("#addTask .description").val(data.description);
                $("#addTask .amount").val(data.amount);
                $("#addTask .id").val(data._id);
                $("#addTask").modal();
            }
        });
    });

    $(".delete").click(function(){
        $("#deleteTask").modal();
        $("#deleteTask .deleteBtn").attr("href",'/deleteTask/'+$(this).attr("data-id"));
    });

    $(".edit").click(function(){
        var url = '/getTaskData/'+$(this).attr("data-id");
        $.get(url,function(res){
            if(res.status='success'){
                var data = res.data;
                $("#viewTask .name").text(data.name);
                $("#viewTask .description").text(data.description);
                $("#viewTask .amount").text(data.amount);
                $("#viewTask .created").text(data.created);
                $("#viewTask .updated").text(data.updated);
                $("#viewTask").modal();
            }
        });
    });
});