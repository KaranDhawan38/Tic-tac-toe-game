window.addEventListener("load", function () {
    var boxes = document.getElementsByClassName("col");
    var playerTurn = {
        x: true,
        o: false
    };

    for (var boxIndex = 0; boxIndex < boxes.length; boxIndex++) {
        boxes[boxIndex].addEventListener("click", function (event) {
            ticTacToe.boxClicked(event.currentTarget, playerTurn);
        });
    }
});

ticTacToe = (function () {

    function boxClicked(box, playerTurn) {
        var boxValue = box.children;

        if (boxValue === undefined)
            return;

        if (boxValue[0].innerText !== "")
            return;

        var textForBox = playerTurn.x ? "X" : "O";

        boxValue[0].innerText = textForBox;

        playerTurn.x = !playerTurn.x;
        playerTurn.y = !playerTurn.y;
    }

    return {
        boxClicked: boxClicked
    };

})();