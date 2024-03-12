
        function showRandomCode() {
            var randomCode = document.getElementById('randomCode');
            if (randomTexts.length === 0) {
                randomCode.textContent = "EMPTY";
                return;
            }
            var randomIndex = Math.floor(Math.random() * randomTexts.length);
            var targetText = randomTexts[randomIndex];
            randomTexts.splice(randomIndex, 1);  // Remove the used text from the array

            // Scramble text
            var scrambleInterval = setInterval(function () {
                randomCode.textContent = scrambleText(targetText);
            }, 100);

            // After 1 second, set the final text and clear the interval
            setTimeout(function () {
                clearInterval(scrambleInterval);
                randomCode.textContent = targetText;
            }, 1000);
        }

        document.getElementById('vlup').addEventListener('click', function (event) {
            event.preventDefault();
            var popup = document.getElementById('myvlup');
            showRandomCode();
            popup.style.display = "block";
        });

        document.getElementById('refreshButton').addEventListener('click', function (event) {
            event.preventDefault();
            showRandomCode();
            document.getElementById('copyButton').textContent = "Copy";
        });

        document.getElementById('copyButton').addEventListener('click', function (event) {
            event.preventDefault();
            var randomCode = document.getElementById('randomCode');
            var textArea = document.createElement("textarea");
            textArea.value = randomCode.textContent;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("Copy");
            textArea.remove();
            this.textContent = "Copied!";
        });

        window.onclick = function(event) {
            var popup = document.getElementById('myvlup');
            if (event.target == popup) {
                popup.style.display = "none";
            }
        }
    