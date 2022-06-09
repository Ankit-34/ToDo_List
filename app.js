var counter = 0;

        function add() {
            var val = document.getElementById("id").value;
            if (val != "") {
                counter = counter + 1;
                var outer = document.createElement("li");
                var c1 = "out" + counter;
                outer.classList.add(c1);
                outer.setAttribute("id", "out");
                var inner = document.createElement("p");
                var c2 = "in" + counter;
                inner.classList.add(c2);
                inner.setAttribute("id", "in");
                var r = document.createElement("button");
                var c3 = "r" + counter;
                r.classList.add(c3);
                r.setAttribute("id", "remove");
                var d = document.createElement("button");
                var c4 = "d" + counter;
                d.classList.add(c4);
                d.setAttribute("id", "done");
                $(r).click(function() {
                    r.parentElement.remove();
                });

                $(d).click(function() {
                    d.parentElement.style.color = "red";
                });

                document.querySelector(".list").appendChild(outer);
                document.querySelector("." + c1).appendChild(inner);
                document.querySelector("." + c1).appendChild(r);
                r.innerHTML = "X";
                document.querySelector("." + c1).appendChild(d);
                d.innerHTML = "✓";
                inner.innerHTML = val;

            } else {
                alert("Please enter text");
            }
            document.getElementById("id").value = null;
        }

        function cl() {
            document.querySelector(".list").innerHTML = null;
            counter = 0;
        }