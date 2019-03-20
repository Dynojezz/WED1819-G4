/*------------------------------------------ DROPDOWN MENU -----------------------------------------*/

    // Beim Betätigen des Buttons, wechsel der Anzeige (sichtbar/nicht-sichtbar) des Dropdown-Inhalts
    function myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

    function filterFunction() {
      var input, filter, ul, li, a, i;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      div = document.getElementById("myDropdown");
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
        } else {
          a[i].style.display = "none";
        }
      }
    }


/*------------------------------------------ COUNTDOWN -----------------------------------------*/

    // Set the date we're counting down to
    var countDownDate = new Date("Apr 20, 2019 18:00:00").getTime();

    // Updated den Countdown jede Sekunde
    var x = setInterval(function() {

        // aktuellen Tag und Zeit ermitteln
        var now = new Date().getTime();

        // Ermittelt die Distanz zwischen jetzt und dem countdown-Zeitpunkt
        var distance = countDownDate - now;

        // Berechnung der Zeit für Tage, Stunden, Minuten und Sekunden
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Ausgabe des Resultats über das Element mit der id="result"
        document.getElementById("result").innerHTML = "Noch " + days + " Tage " + hours + " Stunden "
        + minutes + " Minuten und " + seconds + " Sekunden bis zur nächsten Sitzung!";

        // Wenn der countdown vorbei ist, wird dieses Text sichtbar.
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("result").innerHTML = "Bald startet hier ein neuer Countdown zur nächsten Sitzung!";
        }
    }, 1000);


/*------------------------------------------ Dropdown-Button für die "Nach Schulen filtern" -----------------------------------------*/

    // Beim Betätigen des Buttons, wechsel der Anzeige (sichtbar/nicht-sichtbar) des Dropdown-Inhalts
    function myFunction2() {
      document.getElementById("myDropdown_school").classList.toggle("show_school");
    }

    // Das Menü schließt sich, wenn der User auf einen Bereich außerhalb des dropdowns clicked
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn_school')) {
        var dropdowns = document.getElementsByClassName("dropdown-content_school");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show_school')) {
            openDropdown.classList.remove('show_school');
          }
        }
      }
    }
