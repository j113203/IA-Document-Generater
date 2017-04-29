(function() {

    var init = function(name) {
        var e = document.getElementById("detail." + name);
        var input = e.getElementsByTagName("input");
        var p = e.getElementsByTagName("p");

        for (var i = 0; i < input.length * 2; i += 2) {
            (function(i) {
                input[i / 2].oninput = function() {
                    if (this.value.length) {
                        p[i].style.color = "#E0E0E0";
                    } else {
                        p[i].style.color = "#000";
                    }
                };
            })(i);
        }

        e.classList.remove("await");
        e.style.animation = "none";
        e.style.animation = name + "fadeIn 1s";

        return e;
    };

    var personal = function() {

        var e = init("personal");
        var $ = e.getElementsByTagName("button");
        $[0].onclick = function() {
            e.classList.add("await");
            e.style.animation = "personalfadeOut 1s";
            company();
        };

        next.onclick = function() {
            $[0].onclick();
        };

        prev.onclick = function() {

        };

    };


    var company = function() {
        var e = init("company");
        var $ = e.getElementsByTagName("button");

        $[0].onclick = function() {
            e.classList.add("await");
            e.style.animation = "companyfadeOut 1s";
            personal();
        };

        next.onclick = function() {

        };

        prev.onclick = function() {
            $[0].onclick();
        };

    };

    personal();

    var output = function() {

        var Template = {
            "Evaluation Report (Student)": {
                "1": {

                },
                "2": {

                },
                "3": {

                }
            },
            "Final Report (CompanyOrganization Mentor)": {
                "1": {

                },
                "2": {

                },
                "3": {

                }
            },
            "Industrial Attachment Certificate (Template)": {
                "1": {

                }
            },
            "Insurance Coverage for Industrial Attachment Students": {
                "1": {

                },
                "2": {

                }
            },
            "Monthly Report (Student)": {
                "1": {

                }
            },
            "Statement of Understanding (Organization)": {
                "1": {

                },
                "2": {

                },
                "3": {

                }
            },
            "Student Information": {
                "1": {

                }
            }
        };

        var output = document.getElementById("output");

        output.innerHTML = Object.keys(Template).map(function(i) {
            Object.keys(Template[i]).forEach(function(v) {
                edit("IA Document Template/" + i + "/" + i + "-" + v + ".png", Template[i][v]);
            });
            return '<div class="image shadow"><div>' + i + '</div></div>';
        }).join("");

        var image = output.getElementsByTagName("div");
        for (var i = 0; i < image.length; i += 2) {
            image[i].style.backgroundImage = "url('IA Document Template/" + image[i].firstChild.innerHTML + "/" + image[i].firstChild.innerHTML + "-1.png')";
        }

        // edit("IA Document Template/Final Report (CompanyOrganization Mentor)/Final Report (CompanyOrganization Mentor)-1.png");
    };

    window.cache = {

    };

    var edit = function(url, setting) {

        img = new Image();

        img.setAttribute('crossOrigin', 'anonymous');

        img.onload = function() {

            var canvas = document.createElement('canvas');
            canvas.style.position = "absolute";
            //  canvas.style.width = "100%";
            // canvas.style.height = "100%";
            canvas.width = this.width;
            canvas.height = this.height;
            var ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0);
            ctx.font = "bold 30px Ubuntu";
            // ctx.fillText("Wong Ka Wa", 600, 736);

            canvas[url] = canvas.toDataURL();
            // document.body.appendChild(canvas);

        };

        img.src = url;
    };

    output();

})();