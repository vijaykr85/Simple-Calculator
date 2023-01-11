(function(){
    let screen = document.querySelector('#input');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let valuee = e.target.dataset.num;
            console.log("shu"+ valuee)
            screen.value = screen.value + valuee;
            console.log("shu"+ valuee)
        })
    });


    equal. addEventListener('click', function(e){
        console.log("shu"+screen.value)
        if(screen.value === ''){
            console.log("sbuh")
            // screen.value = "Please enter";
        }else{
            console.log("sbuh")
            var answer = eval(screen.value);
            // console.log(screen.value)
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = "";
    })





})();