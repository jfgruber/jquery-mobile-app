/*global $, jQuery*/

$(function () {
    "use strict";
    var empInfoList, mangrInfoList, employee, manager, boss, mangrImage;
    function GetEmployee(empid) {
        mangrInfoList = $("#manager ul li a");
        $.getJSON("../json.js", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    if (empid === value.id) {
                        boss = value.name;
                        $("#employees ul li:first-child a").html("View Manager:<br>" + boss);

//                        Manager Information 
                        mangrImage = value.imagePath;
                        $("#manager img").attr("src", mangrImage);
                        $("#manager h2").text(value.name);
                        $("#manager h3").text(value.title);
                        mangrInfoList[0].innerHTML = "View Manager:<br> Amy Jones";
                        mangrInfoList[1].innerHTML = "View Direct Reports";
                        $(mangrInfoList[2]).attr("href", "tel:858-555-1212");
                        mangrInfoList[2].innerHTML = "Office Number:<br>" + value.officeNumber;
                        $(mangrInfoList[3]).attr("href", "tel:858-555-1212");
                        mangrInfoList[3].innerHTML = "Cell Number:<br>" + value.cellNumber;
                        $(mangrInfoList[4]).attr("href", "mailto:" + value.email);
                        mangrInfoList[4].innerHTML = "Email:<br>" + value.email;
                    }
                });
            });
        });
    }



    empInfoList = $("#employees ul li a");
    $("#reports ul").click(function (event) {
        var empImage, empID = event.target.getAttribute("alt");
        $.getJSON("../json.js", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    if (empID === value.id) {
                        empImage = value.imagePath;
                        $("#employees img").attr("src", empImage);
                        $("#employees h2").text(value.name);
                        $("#employees h3").text(value.title);
                        employee = value.reportsTo;
                        manager = new GetEmployee(employee);
                        $(empInfoList[1]).attr("alt", value.id);
                        empInfoList[1].innerHTML = "View Direct Reports";
                        $(empInfoList[2]).attr("href", "tel:858-555-1212");
                        empInfoList[2].innerHTML = "Office Number:<br>" + value.officeNumber;
                        $(empInfoList[3]).attr("href", "tel:858-555-1212");
                        empInfoList[3].innerHTML = "Cell Number:<br>" + value.cellNumber;
                        $(empInfoList[4]).attr("href", "mailto:" + value.email);
                        empInfoList[4].innerHTML = "Email:<br>" + value.email;

                    }
                });
            });
        });
    });

//    
//    function GetSubs(id) {
//        var search, intRTo = 0, countBubble;
//        if (id.length === 4) {
//            $.getJSON("../json.js", function (data) {
//                $.each(data, function () {
//                    $.each(this, function (key, value) {
//                        search = value.reportsTo;
//                        if (id === search) {
//                            intRTo += 1;
//                        }
//                    });
//                });
//            });
//            countBubble = "<span class='ui-li-count cnt-bubble'>" + intRTo + "</span>";
//            
//        } else {
//            intRTo = 0;
//            countBubble = "<span class='ui-li-count cnt-bubble'>" + intRTo + "</span>";
//        }
//        return countBubble;
//    }


    $("#employees ul li:nth-child(2) a, #manager ul li:nth-child(2) a").click(function (event) {
        var rTo, manID = $(this).attr("alt");
        if (manID.length !== 4) {
            event.preventDefault();
        } else {
            $("#reports ul").html(" ");
            $.getJSON("../json.js", function (data) {
                $.each(data, function () {
                    $.each(this, function (key, value) {
                        rTo = value.reportsTo;
                        if (manID === rTo) {
                            
                            $("#reports ul").append("<li class='ui-li-has-thumb ui-first-child'><a alt='" + value.id + "' class='ui-btn ui-btn-icon-right ui-icon-carat-r' href='#employeePage'><img alt='" + value.id + "'  src='" + value.imagePath + "'> <h2 alt='" + value.id + "'>" + value.name + "</h2>" + "<h3 alt='" + value.id + "'>" + value.title + "</h3></a></li>");
                            

                        }
                    });
                });

            });
        }
    });

});
