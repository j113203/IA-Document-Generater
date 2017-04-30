(function() {

    var debug = location.hostname.length == 0;

    var version = "1.3";

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

        initData();

        var Template = {
            "Evaluation Report (Student)": {
                "1": {
                    "232,586": "${ Campus-1 from Evaluation Report }",
                    "232,636": "${ Campus-2 from Evaluation Report }",
                    "232,686": "${ Campus-3 from Evaluation Report }",
                    "232,736": "${ Campus-4 from Evaluation Report }",
                    "232,786": "${ Campus-5 from Evaluation Report }",
                    "232,836": "${ Campus-6 from Evaluation Report }",
                    "500,940": "${ Programme Code from Personal }",
                    "210,1090": "✓",

                    "726,1600": "${ 5.1.1 from Evaluation Report }",
                    "810,1600": "${ 5.1.2 from Evaluation Report }",
                    "890,1600": "${ 5.1.3 from Evaluation Report }",
                    "970,1600": "${ 5.1.4 from Evaluation Report }",
                    "1050,1600": "${ 5.1.5 from Evaluation Report }",
                    "1130,1600": "${ 5.1.6 from Evaluation Report }",
                    "1210,1600": "${ 5.1.7 from Evaluation Report }",
                    "1290,1600": "${ 5.1.8 from Evaluation Report }",
                    "1370,1600": "${ 5.1.9 from Evaluation Report }",
                    "1460,1600": "${ 5.1.10 from Evaluation Report }",

                    "726,1750": "${ 5.2.1 from Evaluation Report }",
                    "810,1750": "${ 5.2.2 from Evaluation Report }",
                    "890,1750": "${ 5.2.3 from Evaluation Report }",
                    "970,1750": "${ 5.2.4 from Evaluation Report }",
                    "1050,1750": "${ 5.2.5 from Evaluation Report }",
                    "1130,1750": "${ 5.2.6 from Evaluation Report }",
                    "1210,1750": "${ 5.2.7 from Evaluation Report }",
                    "1290,1750": "${ 5.2.8 from Evaluation Report }",
                    "1370,1750": "${ 5.2.9 from Evaluation Report }",
                    "1460,1750": "${ 5.2.10 from Evaluation Report }",

                    "726,1950": "${ 5.3.1 from Evaluation Report }",
                    "810,1950": "${ 5.3.2 from Evaluation Report }",
                    "890,1950": "${ 5.3.3 from Evaluation Report }",
                    "970,1950": "${ 5.3.4 from Evaluation Report }",
                    "1050,1950": "${ 5.3.5 from Evaluation Report }",
                    "1130,1950": "${ 5.3.6 from Evaluation Report }",
                    "1210,1950": "${ 5.3.7 from Evaluation Report }",
                    "1290,1950": "${ 5.3.8 from Evaluation Report }",
                    "1370,1950": "${ 5.3.9 from Evaluation Report }",
                    "1460,1950": "${ 5.3.10 from Evaluation Report }",

                    "726,2150": "${ 5.4.1 from Evaluation Report }",
                    "810,2150": "${ 5.4.2 from Evaluation Report }",
                    "890,2150": "${ 5.4.3 from Evaluation Report }",
                    "970,2150": "${ 5.4.4 from Evaluation Report }",
                    "1050,2150": "${ 5.4.5 from Evaluation Report }",
                    "1130,2150": "${ 5.4.6 from Evaluation Report }",
                    "1210,2150": "${ 5.4.7 from Evaluation Report }",
                    "1290,2150": "${ 5.4.8 from Evaluation Report }",
                    "1370,2150": "${ 5.4.9 from Evaluation Report }",
                    "1460,2150": "${ 5.4.10 from Evaluation Report }"
                },
                "2": {
                    "726,150": "${ 5.5.1 from Evaluation Report }",
                    "810,150": "${ 5.5.2 from Evaluation Report }",
                    "890,150": "${ 5.5.3 from Evaluation Report }",
                    "970,150": "${ 5.5.4 from Evaluation Report }",
                    "1050,150": "${ 5.5.5 from Evaluation Report }",
                    "1130,150": "${ 5.5.6 from Evaluation Report }",
                    "1210,150": "${ 5.5.7 from Evaluation Report }",
                    "1290,150": "${ 5.5.8 from Evaluation Report }",
                    "1370,150": "${ 5.5.9 from Evaluation Report }",
                    "1460,150": "${ 5.5.10 from Evaluation Report }",

                    "726,300": "${ 5.6.1 from Evaluation Report }",
                    "810,300": "${ 5.6.2 from Evaluation Report }",
                    "890,300": "${ 5.6.3 from Evaluation Report }",
                    "970,300": "${ 5.6.4 from Evaluation Report }",
                    "1050,300": "${ 5.6.5 from Evaluation Report }",
                    "1130,300": "${ 5.6.6 from Evaluation Report }",
                    "1210,300": "${ 5.6.7 from Evaluation Report }",
                    "1290,300": "${ 5.6.8 from Evaluation Report }",
                    "1370,300": "${ 5.6.9 from Evaluation Report }",
                    "1460,300": "${ 5.6.10 from Evaluation Report }",

                    "660,1700": "${ 9.1.1 from Evaluation Report }",
                    "740,1700": "${ 9.1.2 from Evaluation Report }",
                    "820,1700": "${ 9.1.3 from Evaluation Report }",
                    "900,1700": "${ 9.1.4 from Evaluation Report }",
                    "980,1700": "${ 9.1.5 from Evaluation Report }",
                    "1060,1700": "${ 9.1.6 from Evaluation Report }",
                    "1150,1700": "${ 9.1.7 from Evaluation Report }",
                    "1230,1700": "${ 9.1.8 from Evaluation Report }",
                    "1325,1700": "${ 9.1.9 from Evaluation Report }",
                    "1435,1700": "${ 9.1.10 from Evaluation Report }",

                    "660,1800": "${ 9.2.1 from Evaluation Report }",
                    "740,1800": "${ 9.2.2 from Evaluation Report }",
                    "820,1800": "${ 9.2.3 from Evaluation Report }",
                    "900,1800": "${ 9.2.4 from Evaluation Report }",
                    "980,1800": "${ 9.2.5 from Evaluation Report }",
                    "1060,1800": "${ 9.2.6 from Evaluation Report }",
                    "1150,1800": "${ 9.2.7 from Evaluation Report }",
                    "1230,1800": "${ 9.2.8 from Evaluation Report }",
                    "1325,1800": "${ 9.2.9 from Evaluation Report }",
                    "1435,1800": "${ 9.2.10 from Evaluation Report }",

                    "660,1900": "${ 9.3.1 from Evaluation Report }",
                    "740,1900": "${ 9.3.2 from Evaluation Report }",
                    "820,1900": "${ 9.3.3 from Evaluation Report }",
                    "900,1900": "${ 9.3.4 from Evaluation Report }",
                    "980,1900": "${ 9.3.5 from Evaluation Report }",
                    "1060,1900": "${ 9.3.6 from Evaluation Report }",
                    "1150,1900": "${ 9.3.7 from Evaluation Report }",
                    "1230,1900": "${ 9.3.8 from Evaluation Report }",
                    "1325,1900": "${ 9.3.9 from Evaluation Report }",
                    "1435,1900": "${ 9.3.10 from Evaluation Report }",

                    "660,2000": "${ 9.4.1 from Evaluation Report }",
                    "740,2000": "${ 9.4.2 from Evaluation Report }",
                    "820,2000": "${ 9.4.3 from Evaluation Report }",
                    "900,2000": "${ 9.4.4 from Evaluation Report }",
                    "980,2000": "${ 9.4.5 from Evaluation Report }",
                    "1060,2000": "${ 9.4.6 from Evaluation Report }",
                    "1150,2000": "${ 9.4.7 from Evaluation Report }",
                    "1230,2000": "${ 9.4.8 from Evaluation Report }",
                    "1325,2000": "${ 9.4.9 from Evaluation Report }",
                    "1435,2000": "${ 9.4.10 from Evaluation Report }",

                    "660,2150": "${ 9.5.1 from Evaluation Report }",
                    "740,2150": "${ 9.5.2 from Evaluation Report }",
                    "820,2150": "${ 9.5.3 from Evaluation Report }",
                    "900,2150": "${ 9.5.4 from Evaluation Report }",
                    "980,2150": "${ 9.5.5 from Evaluation Report }",
                    "1060,2150": "${ 9.5.6 from Evaluation Report }",
                    "1150,2150": "${ 9.5.7 from Evaluation Report }",
                    "1230,2150": "${ 9.5.8 from Evaluation Report }",
                    "1325,2150": "${ 9.5.9 from Evaluation Report }",
                    "1435,2150": "${ 9.5.10 from Evaluation Report }"
                },
                "3": {
                    "660,200": "${ 9.6.1 from Evaluation Report }",
                    "740,200": "${ 9.6.2 from Evaluation Report }",
                    "820,200": "${ 9.6.3 from Evaluation Report }",
                    "900,200": "${ 9.6.4 from Evaluation Report }",
                    "980,200": "${ 9.6.5 from Evaluation Report }",
                    "1060,200": "${ 9.6.6 from Evaluation Report }",
                    "1150,200": "${ 9.6.7 from Evaluation Report }",
                    "1230,200": "${ 9.6.8 from Evaluation Report }",
                    "1325,200": "${ 9.6.9 from Evaluation Report }",
                    "1435,200": "${ 9.6.10 from Evaluation Report }",

                    "660,300": "${ 9.7.1 from Evaluation Report }",
                    "740,300": "${ 9.7.2 from Evaluation Report }",
                    "820,300": "${ 9.7.3 from Evaluation Report }",
                    "900,300": "${ 9.7.4 from Evaluation Report }",
                    "980,300": "${ 9.7.5 from Evaluation Report }",
                    "1060,300": "${ 9.7.6 from Evaluation Report }",
                    "1150,300": "${ 9.7.7 from Evaluation Report }",
                    "1230,300": "${ 9.7.8 from Evaluation Report }",
                    "1325,300": "${ 9.7.9 from Evaluation Report }",
                    "1435,300": "${ 9.7.10 from Evaluation Report }",

                    "660,400": "${ 9.8.1 from Evaluation Report }",
                    "740,400": "${ 9.8.2 from Evaluation Report }",
                    "820,400": "${ 9.8.3 from Evaluation Report }",
                    "900,400": "${ 9.8.4 from Evaluation Report }",
                    "980,400": "${ 9.8.5 from Evaluation Report }",
                    "1060,400": "${ 9.8.6 from Evaluation Report }",
                    "1150,400": "${ 9.8.7 from Evaluation Report }",
                    "1230,400": "${ 9.8.8 from Evaluation Report }",
                    "1325,400": "${ 9.8.9 from Evaluation Report }",
                    "1435,400": "${ 9.8.10 from Evaluation Report }",

                    "660,500": "${ 9.9.1 from Evaluation Report }",
                    "740,500": "${ 9.9.2 from Evaluation Report }",
                    "820,500": "${ 9.9.3 from Evaluation Report }",
                    "900,500": "${ 9.9.4 from Evaluation Report }",
                    "980,500": "${ 9.9.5 from Evaluation Report }",
                    "1060,500": "${ 9.9.6 from Evaluation Report }",
                    "1150,500": "${ 9.9.7 from Evaluation Report }",
                    "1230,500": "${ 9.9.8 from Evaluation Report }",
                    "1325,500": "${ 9.9.9 from Evaluation Report }",
                    "1435,500": "${ 9.9.10 from Evaluation Report }",

                    "660,600": "${ 9.10.1 from Evaluation Report }",
                    "740,600": "${ 9.10.2 from Evaluation Report }",
                    "820,600": "${ 9.10.3 from Evaluation Report }",
                    "900,600": "${ 9.10.4 from Evaluation Report }",
                    "980,600": "${ 9.10.5 from Evaluation Report }",
                    "1060,600": "${ 9.10.6 from Evaluation Report }",
                    "1150,600": "${ 9.10.7 from Evaluation Report }",
                    "1230,600": "${ 9.10.8 from Evaluation Report }",
                    "1325,600": "${ 9.10.9 from Evaluation Report }",
                    "1435,600": "${ 9.10.10 from Evaluation Report }",

                    "660,700": "${ 9.11.1 from Evaluation Report }",
                    "740,700": "${ 9.11.2 from Evaluation Report }",
                    "820,700": "${ 9.11.3 from Evaluation Report }",
                    "900,700": "${ 9.11.4 from Evaluation Report }",
                    "980,700": "${ 9.11.5 from Evaluation Report }",
                    "1060,700": "${ 9.11.6 from Evaluation Report }",
                    "1150,700": "${ 9.11.7 from Evaluation Report }",
                    "1230,700": "${ 9.11.8 from Evaluation Report }",
                    "1325,700": "${ 9.11.9 from Evaluation Report }",
                    "1435,700": "${ 9.11.10 from Evaluation Report }"
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
                    "430,1490": "${ English Name from Company }",
                    "930,1390": "${ Hours from Company }",
                    "520,1290": "${ From from Company }"
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

                if (!debug || i == "Industrial Attachment Certificate (Template)" && v == "1") {
                    edit("IA Document Template/" + i + "/" + i + "-" + v + ".png", Template[i][v]);
                }

            });
            return '<div class="image shadow"><div>' + i + '</div></div>';
        }).join("") + '<button class="shadow">Save As PDF</button> <button class="shadow">Save As PNG</button>';

        var image = output.getElementsByTagName("div");
        for (var i = 0; i < image.length; i += 2) {
            image[i].style.backgroundImage = "url('IA Document Template/" + image[i].firstChild.innerHTML + "/" + image[i].firstChild.innerHTML + "-1.png')";
            image[i].onclick = function() {
                preview(this.firstChild.innerHTML, Object.keys(Template[this.firstChild.innerHTML]));
            };
        }

        output.getElementsByTagName("button")[0].onclick = function() {

            this.disabled = true;
            var c = this.style.backgroundColor;
            var t = this.innerHTML;
            var th = this;

            this.style.backgroundColor = "#757575";
            this.innerHTML = "Prepareing ..";
            var zip = new JSZip();
            zip.file("readme.txt", "IA Document Generater v" + version + "\n\nPower By j113203");
            var img = zip.folder("IA Document");
            for (var e in cache) {
                var pdf = new jsPDF();
                pdf.addImage(cache[e], 'PNG', 0, 0);
                img.file(unescape(e.substr(e.lastIndexOf("/") + 1)) + ".pdf", pdf.output('datauri').split('base64,')[1], { base64: true });
            }

            zip.generateAsync({ type: "blob" }).then(function(content) {
                this.innerHTML = "Ready";
                saveAs(content, "IA Document - Power By j113203.zip");
                th.style.backgroundColor = c;
                th.innerHTML = t;
                th.disabled = false;
            });

        };

        output.getElementsByTagName("button")[1].onclick = function() {

            this.disabled = true;
            var c = this.style.backgroundColor;
            var t = this.innerHTML;
            var th = this;

            this.style.backgroundColor = "#757575";
            this.innerHTML = "Prepareing ..";
            var zip = new JSZip();
            zip.file("readme.txt", "IA Document Generater v" + version + "\n\nPower By j113203");
            var img = zip.folder("IA Document");
            for (var e in cache) {
                img.file(unescape(e.substr(e.lastIndexOf("/") + 1)), cache[e].split('base64,')[1], { base64: true });
            }

            zip.generateAsync({ type: "blob" }).then(function(content) {
                this.innerHTML = "Ready";
                saveAs(content, "IA Document - Power By j113203.zip");
                th.style.backgroundColor = c;
                th.innerHTML = t;
                th.disabled = false;
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
        },
        "Evaluation Report": {

        }
    };

    var initData = function() {

        data["Evaluation Report"]["Campus-" + (["CW", "LWL", "MH", "ST", "TY", "TM"].indexOf(data.Personal.Campus) + 1)] = "✓";

        for (var i = 1; i < 12; i++) {

            if (i < 7) {
                data["Evaluation Report"]["5." + i + "." + Math.floor(Math.random() * (10) + 1)] = "✓";
            }

            data["Evaluation Report"]["9." + i + "." + Math.floor(Math.random() * (10) + 1)] = "✓";

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