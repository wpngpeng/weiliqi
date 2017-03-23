/**
 * Created by Administrator on 2017/2/7.
 */
$(function(){
    $(".m-con-main a").click(function(){
        var index=$(this).index();
        $(".m-con-main a").removeClass('active');
        $(this).addClass('active');
        $(".m-project").removeClass('on').eq(index).addClass('on');
    })
})
