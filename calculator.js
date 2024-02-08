
        let display = document.getElementById('display');

        function addToDisplay(value) {
            if (display.textContent === '0') {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }

        function clearDisplay() {
            display.textContent = '0';
        }

        function calculate() {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = 'Error';
            }
        }

        function goToMainPage() {
            // Replace this with the URL of your main page
            window.location.href = 'index.html';
        }

        document.querySelectorAll('#buttons button').forEach(button => {
            button.addEventListener('click', () => addToDisplay(button.textContent));
        });

        document.getElementById('clear').addEventListener('click', clearDisplay);