const CLASS_NAME = 'vm_datepicker'

document.addEventListener('DOMContentLoaded', function(){
    let urls = [
        'https://code.jquery.com/jquery-3.6.3.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js'
    ]; 

    for (url_index in urls)
    {
        let script = document.createElement('script')
        script.src = urls[url_index]
        document.getElementsByTagName('head')[0].appendChild(script)
    }
});

function whenAvailable(name, callback) {
    var interval = 1; // ms
    window.setTimeout(function() {
        if (window[name]) {
            callback(window[name]);
        } else {
            whenAvailable(name, callback);
        }
    }, interval);
}

whenAvailable("jQuery", function(t) {
    addDaemons();
});

// document.addEventListener('DOMContentLoaded', function(){
//     let urls = [
//         'https://code.jquery.com/jquery-3.6.3.min.js',
//         'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js'
//     ]; 

//     for (url_index in urls)
//     {
//         let script = document.createElement('script')
//         script.src = urls[url_index]
//         document.getElementsByTagName('head')[0].appendChild(script)
//     }

//     addDaemons()
// });

function addDaemons() {
    let input_list = $('.'+CLASS_NAME)

    for (input_index in input_list)
    {
        input_list[input_index].value = '123'
    }
}



