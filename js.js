    document.getElementById('navigate-button').addEventListener('click', function() {
        window.open('https://www.google.com/maps/dir/?api=1&destination=43.43244709324804, 17.24412116004586', '_blank')
    });

    document.getElementById('wedding-location').addEventListener('click', function() {
        window.open('https://www.google.com/maps/place/43.43244709324804, 17.24412116004586', '_blank')
    });

    //Forma za goste//
    document.addEventListener("DOMContentLoaded", function() {
        var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("sheetdb-form")),
            }).then(response => response.json())
              .then((html) => {
                if (html.created) {
                    document.getElementById('success-message').style.display = 'block';
                } else {
                    alert('Došlo je do pogreške. Molimo pokušajte ponovno.');
                }
            }).catch(error => console.error('Error:', error));
        });
    });

// Dodaj funkcionalnost za mute/unmute
const music = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');


// Početno puštanje glazbe
music.play();

muteButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        muteButton.textContent = 'Mute'; // Promijeni tekst na "Mute"
    } else {
        music.pause();
        muteButton.textContent = 'Unmute'; // Promijeni tekst na "Unmute"
    }
});

