(function() {

    var debug = false;

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
                    "1300,1655": "${ Campus from Personal }"
                },
                "2": {

                },
                "3": {

                }
            },
            "Student Information": {
                "1": {
                    "500,260": "${ English Name from Personal }",
                    "1000,260": "${ Chinese Name from Personal }",
                    "250,410": "${ HKID No from Personal }",
                    "750,410": "${ Student ID from Personal }",
                    "1210,410": "${ Department from Personal }",
                    "400,495": "${ Programme Code from Personal }",
                    "120,605": "${ Programme Title from Personal }",
                    "790,540": "${ Campus from Personal }",
                    "1210,540": "${ Study/Class from Personal }",
                    "500,660": "${ Telephone from Personal }",
                    "980,660": "${ Email from Personal }",
                    "240,1890": "${ Date from System }",

                }
            }
        };

        var output = document.getElementById("output");

        output.innerHTML = Object.keys(Template).map(function(i) {
            Object.keys(Template[i]).forEach(function(v) {

                if (!debug || i == "Statement of Understanding (Organization)" && v == "3") {
                    edit("IA Document Template/" + i + "/" + i + "-" + v + ".png", Template[i][v]);
                }

            });
            return '<div class="image shadow"><div>' + i + '</div></div>';
        }).join("") + '<button class="shadow">Download All</button>';

        var image = output.getElementsByTagName("div");
        for (var i = 0; i < image.length; i += 2) {
            image[i].style.backgroundImage = "url('IA Document Template/" + image[i].firstChild.innerHTML + "/" + image[i].firstChild.innerHTML + "-1.png')";
        }

    };

    window.cache = {

    };

    window.data = {
        "System": {
            "Date": "2017/04/28"
        },
        "Personal": {
            "English Name": "Wong Ka Wa",
            "Chinese Name": "黄嘉華",
            "HKID No": "R0000000",
            "Student ID": "150595510",
            "Department": "Infomation Technology",
            "Programme Code": "IT114105",
            "Programme Title": "Higher Diploma in Software Engineering",
            "Campus": "LWL",
            "Study/Class": "2/C",
            "Telephone": "91738490",
            "Email": "j113203@gmail.com"
        }
    };

    var replace = function(str) {
        return str.replace(/\${.(.*).from.(.*).}/g, function(a, b, c) {
            return data[c][b] || "";
        });
    };

    var edit = function(url, setting) {

        img = new Image();

        img.onload = function() {

            var canvas = document.createElement('canvas');
            if (debug) {
                canvas.style.position = "absolute";
                canvas.style.width = "100%";
                canvas.style.height = "100%";
            }
            canvas.width = this.width;
            canvas.height = this.height;
            var ctx = canvas.getContext("2d");

            ctx.drawImage(img, 0, 0);
            ctx.font = "bold 30px Ubuntu";
            // ctx.fillText("Wong Ka Wa", 600, 736);
            Object.keys(setting).forEach(function(i) {
                var v = i.split(",");
                ctx.fillText(replace(setting[i]), v[0], v[1]);
            });

            if (debug) {
                document.body.appendChild(canvas);
            } else {
                cache[url] = canvas.toDataURL();
            }

        };

        img.src = url;
    };

    output();

})();