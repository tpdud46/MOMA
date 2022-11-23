$(function () {
    //검색 아이콘 클릭시 검색창 내려오기
    $('.search').click(function () {
        $('.search_wrap').stop().slideDown(500);
    });
    $('.search_close').click(function () {
        $('.search_wrap').stop().slideUp(500);
    });
    //ham버튼 클릭시 mnav 슬라이드 되기
    $('.hamBtn').click(function () {
        $('.mnav_wrap').animate({ left: 0 }, 600);
        $(".m_text").css('height',$('.mnav_mid').height() - $('#mnav').height()+"px")
    });
    $('.mnav_top>.close').click(function () {
        $('.mnav_wrap').animate({ left: '100%' }, 600);
    });
    //mnav 클릭시 서브메뉴 슬라이드및 이미지 변경
    $('#mnav>li>a').click(function () {
        $(this).parent().find('.msub').stop().slideToggle(400);
        let up = 0;
        let i = $(this).index();
        if (up != i) {
            $(this).removeClass('up');
        }
        $(this).toggleClass('up');
        up = i;
    });
});