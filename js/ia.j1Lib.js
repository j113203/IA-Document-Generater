(function() {

    var debug = location.hostname.length == 0;

    var version = "1.1";

    var header = document.getElementById("header");
    header.innerHTML += " v" + version;

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
                    data[name[0].toUpperCase() + name.slice(1)][this.getAttribute("name")] = this.value || this.getAttribute("placeholder") || "";
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

        $[1].onclick = function() {
            e.classList.add("await");
            e.style.animation = "companyfadeOut 1s";
            document.getElementById("output").style.display = "block";
            output();
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
                    "600,480": "${ English Name from Company }",
                    "600,530": "${ Address from Company }",
                    "600,580": "${ Mentor Name from Company }",
                    "600,630": "${ Mentor Telephone from Company }",
                    "600,680": "${ Mentor Email from Company }",
                    "600,730": "${ English Name from Company }",
                    "1160,580": "${ Job Title from Company }",
                    "1160,630": "${ Job Department from Company }",
                    "1160,680": "${ Fax Number from Company }",
                    "800,785": "${ From from Company }",
                    "1220,785": "${ To from Company }",
                },
                "2": {

                },
                "3": {
                    "710,1800": "${ To from Company }",
                    "710,1980": "${ To from Company }",
                }
            },
            "Industrial Attachment Certificate (Template)": {
                "1": {
                    "430,610": "${ English Name from Personal }",
                    "430,790": "${ English Name from Company }",
                    "560,950": "${ From from Company }",
                    "810,950": "${ Hours from Company }",
                    "430,1170": "${ Chinese Name from Personal }",
                    "520,1290": "${ English Name from Company }",
                    "930,1390": "${ Hours from Company }",
                }
            },
            "Insurance Coverage for Industrial Attachment Students": {
                "1": {

                },
                "2": {
                    "1000,1240": "${ From from Company }",
                    "560,563": "${ English Name from Personal }",
                    "1150,563": "${ Programme Code from Personal }/${ Study/Class from Personal }",
                    "1060,625": "${ Campus from Personal }",
                    "790,940": "${ From from Company }",
                    "1060,940": "${ From from Company }",
                }
            },
            "Monthly Report (Student)": {
                "1": {
                    "780,410": "${ From from Company }",
                    "1100,410": "${ To from Company }",
                    "1170,1195": "${ Hours from Company }",
                    "680,1780": "${ English Name from Personal }",
                    "680,1980": "${ To from Company }"
                }
            },
            "Statement of Understanding (Organization)": {
                "1": {
                    "1300,1655": "${ Campus from Personal }"
                },
                "2": {
                    "1000,1980": "${ Allowance (Total) from Company }",
                    "1105,1840": "${ From from Company }",
                    "1320,1840": "${ To from Company }",

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
                    "240,1890": "${ To from Company }",
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
        }).join("") + '<button class="shadow">Download Zip</button>';

        var image = output.getElementsByTagName("div");
        for (var i = 0; i < image.length; i += 2) {
            image[i].style.backgroundImage = "url('IA Document Template/" + image[i].firstChild.innerHTML + "/" + image[i].firstChild.innerHTML + "-1.png')";
            image[i].onclick = function() {
                preview(this.firstChild.innerHTML, Object.keys(Template[this.firstChild.innerHTML]));
            };
        }

        output.getElementsByTagName("button")[0].onclick = function() {
            var zip = new JSZip();
            zip.file("readme.txt", "IA Document Generater v" + version + "\n\nPower By j113203");
            var img = zip.folder("IA Document");
            for (var e in cache) {
                img.file(unescape(e.substr(e.lastIndexOf("/") + 1)), cache[e].split('base64,')[1], { base64: true });
            }

            zip.generateAsync({ type: "blob" }).then(function(content) {
                saveAs(content, "IA Document - Power By j113203.zip");
            });

        };

    };

    var cache = {

    };

    var data = {
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
        },
        "Company": {
            "English Name": "XXX Limited",
            "Address": "XXX, HK",
            "Fax Number": "00000000",
            "Mentor Name": "Jack Wong",
            "Mentor Title": "System Analysis",
            "Mentor Email": "j113203@gmail.com",
            "Mentor Telephone": "00000000",
            "Job Title": "Programmer",
            "Job Department": "Development",
            "From": "27-07-2016",
            "To": "26-08-2016",
            "Hours": "180",
            "Allowance (Total)": "100"
        }
    };

    var replace = function(str) {
        return str.replace(/\${\ (.*?) from (.*?)\ }/g, function(a, b, c) {
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

            ctx.drawImage(this, 0, 0);
            ctx.font = "bold 30px Ubuntu";
            // ctx.fillText("Wong Ka Wa", 600, 736);
            Object.keys(setting).forEach(function(i) {
                var v = i.split(",");
                ctx.fillText(replace(setting[i]), v[0], v[1]);
            });

            if (debug) {
                // document.body.appendChild(canvas);
            } else {
                cache[this.src] = canvas.toDataURL();
            }

        };

        img.src = url;
    };


    var preview = function(name, pic) {
        var e = document.getElementById("preview");
        e.style.display = "block";
        var image = document.getElementById("image");
        e.onclick = function(e) {
            if (e.target == image) {
                this.style.display = "none";
            }
        };

        var thumbnail = document.getElementById("thumbnail");
        thumbnail.innerHTML = pic.map(function(i) {
            if (debug) {
                return '<img src="IA Document Template/' + name + "/" + name + "-" + i + '.png" />';
            } else {
                return '<img src="' + cache[document.location.href + encodeURI("IA Document Template/" + name + "/" + name + "-" + i + ".png")] + '" />';
            }
        }).join("");

        for (var i in pic) {
            thumbnail.children[i].onclick = function() {
                image.children[0].src = this.src;
            };
        }

        thumbnail.children[0].onclick();

    };

    if (debug) {
        document.getElementById("output").style.display = "block";
        output();
    }
})();