var randomTexts = ["BPYRF004N6", "VZADLT2L", "0AGTB0NX", "Z8V2PFVO", "BP01D3USRJ"];



        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        function getRandomCharacter() {
            return characters.charAt(Math.floor(Math.random() * characters.length));
        }

        function scrambleText(targetText) {
            var scrambledText = '';
            for (var i = 0; i < targetText.length; i++) {
                scrambledText += getRandomCharacter();
            }
            return scrambledText;
        }
