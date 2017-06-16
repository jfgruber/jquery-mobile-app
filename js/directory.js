/*global $, jQuery*/

$(function () {
    "use strict";
//    function GetSubs(id) {
//        var search, countBubble, intSubs = 0;
//        if (id.length === 4) {
//            $.getJSON("../json.js", function (data) {
//                $.each(data, function () {
//                    $.each(this, function (key, value) {
//                        search = value.reportsTo;
//                        if (id === search) {
//                            intSubs++;
//                            sessionStorage.intSubs = intSubs;
//                        }
//                    });
//                });
//            });
//            
//            countBubble = "<span class='ui-li-count cnt-bubble'>" + sessionStorage.intSubs + "</span>";
//        } else {
//
//            countBubble = "<span class='ui-li-count cnt-bubble'>" + intSubs + "</span>";
//        }
//        
//        return countBubble;
//        
//    }
    
    $("#autocomplete").on("filterablebeforefilter", function () {
        var $ul = $(this), html = "", image, rtIcon, bubble, charID;
        $ul.html("");
        $ul.html("<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>");
        $ul.listview("refresh");
        $.getJSON("/json.js", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    
                    image = "<img " + " alt='" + value.id + "'" +  "src='" + value.imagePath + "'>";
                    
                    html += "<li><a" + " alt='" + value.id + "'" +  "href='#employeePage'>" + image + value.name + "<br>" + value.title + "</a></li>";
                    $ul.html(html);
                    $ul.listview("refresh");
                    $ul.trigger("updatelayout");
                    sessionStorage.intSubs = 0;

                });
            });
        });
    });

    
});