$(function () {
    //년도 제목
    let title = $(".cMove .title");
    //버튼
    let prevBtn = $(".prevBtn");
    let nextBtn = $(".nextBtn");
    //달력
    var calendar1 = $(".calendar>tbody>td");
    var calendar2 = $(".calendar>tbody>tr");

    // calendar 버튼 클릭시 이벤트 발생
    prevBtn.click(function () {
        $("#calendar > tbody > td").remove();
                $("#calendar > tbody > tr").remove();
                today = new Date ( today.getFullYear(), today.getMonth()-1, today.getDate());
                buildCalendar();
    })
    nextBtn.click(function () {
        $("#calendar > tbody > td").remove();
                $("#calendar > tbody > tr").remove();
                today = new Date ( today.getFullYear(), today.getMonth()+1, today.getDate());
                buildCalendar();
    })

    //오늘의 날자
    var today = new Date();
    //요일 정보
    var date = new Date();
    function buildCalendar() {

        nowYear = today.getFullYear();
        nowMonth = today.getMonth();
        firstDate = new Date(nowYear, nowMonth, 1).getDate();
        firstDay = new Date(nowYear, nowMonth, 1).getDay(); //1st의 요일
        lastDate = new Date(nowYear, nowMonth + 1, 0).getDate();

        if ((nowYear % 4 === 0 && nowYear % 100 !== 0) || nowYear % 400 === 0) { //윤년 적용
            lastDate[1] = 29;
        }

        title.text(nowYear + "년 " + (nowMonth + 1) + "월");
        $(".exhibi_info_wrap>h2").text(nowYear + "년 " + (nowMonth + 1) + "월");

        for (i = 0; i < firstDay; i++) { //첫번째 줄 빈칸
            $("#calendar tbody:last").append("<td></td>");
        }
        for (i = 1; i <= lastDate; i++) { // 날짜 채우기
            plusDate = new Date(nowYear, nowMonth, i).getDay();
            if (plusDate == 0) {
                $("#calendar tbody:last").append("<tr></tr>");
            }
            $("#calendar tbody:last").append("<td class='date'>" + i + "</td>");
        }
        if ($("#calendar > tbody > td").length % 7 != 0) { //마지막 줄 빈칸
            for (i = 1; i <= $("#calendar > tbody > td").length % 7; i++) {
                $("#calendar tbody:last").append("<td></td>");
            }
        }
        $(".date").each(function (index) { // 오늘 날짜 표시
            if (nowYear == date.getFullYear() && nowMonth == date.getMonth() && $(".date").eq(index).text() == date.getDate()) {
                $(".date").eq(index).addClass('active');
            }
        })
    }
    buildCalendar();
})