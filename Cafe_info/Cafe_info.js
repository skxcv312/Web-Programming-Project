function Open_html(cafe_name){
    Show_review(cafe_name);
    Change_star(5);
    Tot_rating(cafe_name, -1);
}

// function Show_popup(url){
//     window.open(url, '_blank','width=800px, height = 800px');
// }

function Change_cafemap(cafe_name){
    if (document.getElementById("map").value != "원본"){
        document.getElementById("map").value = "원본";
        document.getElementById("cafe_image").innerHTML="<img id='cafe_map' width='500px' height='500px' src='Cafe_images/" + cafe_name + "map.png' alt = 'map'>";
    }
    else{
        document.getElementById("map").value= "지도";
        document.getElementById("cafe_image").innerHTML="<img width='500px' height='500px' src='Cafe_images/" + cafe_name + ".jpg' alt = 'image'>"
    }
}


function Change_star(num){
    document.getElementById("star_image").innerHTML = "";

    for(i = 0; i < 5; i++){
        if (i < num)
            document.getElementById("star_image").innerHTML += " <img src='Icon_images/star_color.png' width ='15px' height = '15px'>";
        else
            document.getElementById("star_image").innerHTML += " <img src='Icon_images/star.png' width ='15px' height = '15px'>";
    }
}


function Submit(cafe_name){
    var user_review = document.getElementById("review").value;
    var user_star = document.getElementById("user_star").value;
    //document.write(user_review);
    if (user_review == ""){
        alert("리뷰를 작성해주세요.");
    }
    else{
        alert("소중한 리뷰 감사합니다.");
        Uplode_review(cafe_name, user_review, user_star);
    }
}


function Uplode_review(cafe_name, user_review, user_star){
    var localStorage = window.localStorage;
    var num_review = localStorage[cafe_name + "tot_reviews"];

    if (num_review == undefined) num_review = 0;    
    //document.write(user_review);
    localStorage[cafe_name + num_review] = user_review;
    localStorage[cafe_name + num_review + "user_star"] = user_star;
    localStorage[cafe_name + "tot_reviews"] = parseInt(num_review) + 1;
    Tot_rating(cafe_name, user_star);
}


function Tot_rating(cafe_name, user_star){
    var localStorage = window.localStorage;
    var num_review = localStorage[cafe_name + "tot_reviews"];
    var tot = localStorage[cafe_name + "tot_star"];
    if(num_review == undefined ){
        tot = 0;
        num_review = 0;
    }

    if (user_star != -1){
        tot = parseInt(tot) + parseInt(user_star);
    }

    localStorage[cafe_name + "tot_star"] = tot;
    
    if(num_review != 0){
        tot /= parseInt(num_review); 
    }
    
    document.getElementById("tot_rating").innerHTML = "<img src='Icon_images/star_color.png' width ='12px' height = '12px'> " + tot.toFixed(2) + "/5 ( " + num_review + "Reviews )";   
}


function Show_review(cafe_name){
    var localStorage = window.localStorage;
    var num_review = localStorage[cafe_name + "tot_reviews"];
    document.getElementById("other_reviews").innerHTML = "";
    
    if(num_review != undefined){
        for(i = num_review-1; i >= 0; i--){
            user_star = localStorage[cafe_name + i + "user_star"]

            document.getElementById("other_reviews").innerHTML += 
            "<table id = 'review_bord'><tr><td id='user_icon' rowspan='2'><img src='Icon_images/deer.png' width ='30px' height = '30px'></td><td>익명 " + (i+1) + 
            "</td></tr><tr><td id=" + i +"><tr><td colspan = '2'>" + localStorage[cafe_name + i] + "</td></tr></table>";
            
            for (j = 0; j < 5; j++){
                if(j < user_star)
                    document.getElementById(i).innerHTML += " <img src='Icon_images/star_color.png' width ='12px' height = '12px'>";
                else
                    document.getElementById(i).innerHTML += " <img src='Icon_images/star.png' width ='12px' height = '12px'>";
            }
        }
    }
}


function Remove(cafe_name){
    var localStorage = window.localStorage;
    var num_review = localStorage.num_review;

    for(i=0;i<num_review;i++){
        localStorage.removeItem(cafe_name + i);
        localStorage.removeItem(cafe_name + i + "user_star");
    }

    localStorage.removeItem(cafe_name + "tot_reviews");
    localStorage.removeItem(cafe_name + "tot_star");
    Open_html(cafe_name);
}

// function Clear(){
//      window.localStorage.clear();
// }