let $score;

function add(x, y) {
    $score = x + y;
    
    if ($score % 2 === 0) {
        parzyste();
    } else nieparzyste();
}

const parzyste = first => console.log(`Liczba ${$score} jest parzysta`);

const nieparzyste = function ()  {
        console.log(`Liczba ${$score} jest nieparzysta`);
    }

add(3,4);