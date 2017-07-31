/*global $, jQuery*/

$(function () {
    "use strict";
        
    
    $("#manager ul li:first-child a").click(function (event) {
        var mangrInfoList, mangrImage, i, dr;
        mangrInfoList = $("#manager ul li a");
        $.getJSON("json.js", function (data) {
            $.each(data, function () {
                $.each(this, function (key, value) {
                    if ("1001"  === value.id) {
                        mangrImage = value.imagePath;
                        $("#manager img").attr("src", mangrImage);
                        $("#manager h2").text(value.name);
                        $("#manager h3").text(value.title);
                        mangrInfoList[0].innerHTML = "View Manager:<br> Amy Jones";
                        $(mangrInfoList[1]).attr("alt", value.id);
                        mangrInfoList[1].innerHTML = "View Direct Reports<span class='ui-li-count cnt-bubble'>0</span>";
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

    });
        
});