/*global $, jQuery*/

$(function () {
    "use strict";
    var empInfoList, mangrInfoList, employee, manager, boss, mangrImage;
    function GetEmployee(empid) {
        mangrInfoList = $("#manager ul li a");
        $.getJSON("json.js", function (data) {
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
    $("#autocomplete").click(function (event) {
        var empImage, empID = event.target.attributes[0].value, bubble;
        $.getJSON("json.js", function (data) {
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
                        empInfoList[1].innerHTML = "View Direct Reports <br>";
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
    
});