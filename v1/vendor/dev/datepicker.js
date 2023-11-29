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

function whenAvailable(names, callback) {
    var interval = 100; 

    window.setTimeout(function() {
        let all_upload = false
        for (lib_index in names)
        {
            all_upload = window[names[lib_index]]
        }
        if (all_upload) {
            callback(window[names[0]]);
        } else {
            whenAvailable(names, callback);
        }
    }, interval);
}

function getContainers() {
    return $('.'+CLASS_NAME);
}

function addNowDates() {
    let input_list = getContainers()

    for (input_index in input_list)
    {
        input_list[input_index].value = moment().format('YYYY-MM-DD')
    }
}

function addDaemons() {
    let input_list = getContainers()

    for (input_index in input_list)
    {
       // input_list[input_index].value = '123'
    }
}

function setStyle() {
    let input_list = getContainers()

    for (input_index in input_list)
    {
       input_list[input_index].style = 'cursor: pointer;'
    }
}

// code starts...

whenAvailable(['jQuery', 'moment'], function(t) {
    setStyle()
    addNowDates()
    addDaemons()
});
