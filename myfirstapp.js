const displayMassage = function (massage) {
    document.getElementById("massage").innerHTML = massage
  }

let winningNames = ["Morlu", "Wendell", "NNeka", "Grace"]
        let winner = winningNames.toString()


        document.getElementById("b1").onclick = function () {
            const input = (document.getElementById("inputField").value)
            const input1 = input[0].toUpperCase() + input.slice(1).toLowerCase()
            console.log(input1)

            for (i = 0; i <= winningNames.length; i++) {
                if (input1 == winningNames[i]) {
                    displayMassage("❤💖💖 Yes! That's My Love")
                    break
                }
                if (i == winningNames.length) {
                    displayMassage("Sorry You Do Not Know My Love")
                }
            }

        }
