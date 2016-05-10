//这个函数必须放在document ready 外面
function rowClick(obj)
{
  var asn_id = $(obj).attr('id');
  console.log(asn_id);

  //根据订单号获取订单详细信息
  $.post("/stockin/Asn/"+asn_id,function(data){
    console.log(data);
     $("#tb-list-detail").find("tbody tr").remove();
      //console.log(data);
      for(var i=0;i<data['asn_detail'].length;i++){
          $("#tb-list-detail").append('<tr>'+
                              '<td>'+data['asn_detail'][i]['pro_name'] +'</td>'+
                              '<td>'+data['asn_detail'][i]['pro_spec']+'</td>'+
                              '<td>'+data['asn_detail'][i]['pro_origin'] +'</td>'+
                              '<td>'+data['asn_detail'][i]['pro_pack_size']+'</td>'+
                              '<td>'+data['asn_detail'][i]['qty']+'</td>'+
                            '</tr>');
      }

    });
}

function on_supplier_list_row_click(obj){
  // console.log(tmp);
  $('#supplier').val($(obj).find('td').first().text());
  $('#myModal').modal('hide');
}

$(document).ready(function(){


  var pageno =1;
  var pagesize =5;
  var total = 0;

  $("#combopagesize").change(function(){
    pagesize=$(this).val();
    queryUserList();
  });

  $(".pagination").find("li").click(function(){
      var tmp=$(this).find("a").text();
      console.log(tmp);
      if(tmp=="首页" && pageno>1)
      {
        pageno = 1;
      }else if(tmp=="上一页" && pageno>1)
      {
        pageno --;
      }else if(tmp=="下一页" &&pageno<total/pagesize){
        pageno++
      }else if(tmp=="尾页" &&pageno<total/pagesize){
        pageno = Math.ceil(total/pagesize);
      }

      console.log(pageno);

      queryUserList();
  });

  function queryUserList(){
    $.post("/stockin/Asn/list?"+"pageno="+pageno +"&pagesize="+pagesize+"&asn_statu="+"A"
        ,{}
        ,function(data,status){
          console.log(data);

          if(data)
          {
            $("#tb-list").find("tr").remove();
            for(var i=0;i<data['rows'].length;i++)
            {

              $("#tb-list").append('<tr id="'+data['rows'][i].asn_id +'" onclick="rowClick(this)" >'+
                                      '<td style="width:50px"><input type="checkbox" id="'+data['rows'][i].asn_id+'"></td>'+
                                      '<td style="width:50px">'+data['rows'][i].asn_id +'</td>'+
                                      '<td style="width:50px">'+data['rows'][i].supplier+'</td>'+
                                      '<td style="width:50px">'+data['rows'][i].asn_statu +'</td>'+
                                      '<td style="width:50px">'+data['rows'][i].asn_create_date+'</td>'+
                                    '</tr>');
            }
            total = data["total"];
            $("#showpagedetails").text("  当前页"+pageno+
                                        "/总页数"+Math.ceil(total/pagesize)+
                                        " 总记录数"+total +"每页显示");
          }
        });
  }

  //查询按钮
  $("#btnQuery").click(function(){
    queryUserList();
  });

  $("#btnSub").click(function(){
    var asn_id = $("#asn_id").val();
    console.log(asn_id);
    var tmp = {
                asn_id:asn_id,//单据号
                supplier:"lgd",//供应商
                asn_statu:"a",//单据状态
                asn_detail:{
                  pro_name:"口红" //品名
                  ,pro_spec:"1*1*1" //规格
                  ,pro_origin:"石家庄" //产地
                  ,pro_pack_size:"100" //包装大小
                  ,qty:100 //数量
                }
              }

    console.log(tmp.asn)
    $.post("/stockin/Asn/add",{
        tmp: JSON.stringify(tmp) 
      },{dataType:"json"},function(data){
      console.log(data);
    });
  });


  $(".table").click(function(){
      console.log(this);
    });

  $("#supplier").click(function(){
    $('#myModal').modal('show');
    $('#modal_supplier_list').find('tr').remove();
  });


  $('#modal_query_supplier').keypress(function(code){
          // console.log(code);
    if(13==code.keyCode)
      $.post('/confbasic/supplier/list?mcode='+$("#modal_query_supplier").val(),function(data){
      if(data){
        $('#modal_supplier_list').find('tr').remove();
        for(var i=0;i<data.length;i++){
          $('#modal_supplier_list').append('<tr ondblclick = "on_supplier_list_row_click(this)">'+
                                    '<td>'+data[i]['supplier_id']+'</td>'+
                                    '<td>'+data[i]['supplier_name']+'</td>'+
                                    '<td>'+data[i]['supplier_contact']+'</td>'+
                                    '<td>'+data[i]['supplier_email']+'</td>'+
                                    '<td>'+data[i]['mcode']+'</td>'+
                                  '</tr>');
        }
      }
      //console.log(data);
    })
  });

  $('#btn-asn-add').click(function(){
    $('#modal-asn-add-main').modal('show');
  });

  $('#btn-asn-add-detail').click(function(){
    $('#modal-asn-add-detail').modal('show');
  });
});