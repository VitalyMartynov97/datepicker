const CLASS_NAME        = 'vm_datepicker'
const USER_DATE_FORMAT  = 'DD.MM.YYYY'
const SYSTEM_DATEFORMAT = 'YYYY-MM-DD'
const CALENDAR_CLASS    = 'vm_dtp_c'

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
    window.setTimeout(function() {
        for (lib_index in names)
        {
            if (!window[names[lib_index]])
            {
                whenAvailable(names, callback);
            }
        }
        callback();
    }, 250);
}

function createCalendarCss() {
    let style = "<style type='text/css'> ."+CALENDAR_CLASS+"{"

    style += "width:200px;"
    style += "height:200px;"
    style += "background-color:#fff;"
    style += "border:1px solid black;"
    style += "border-radius:5px;"
    style += "} </style>"

    $(style).appendTo("head");
}

function destroyCalendars() {
    $('.'+CALENDAR_CLASS).remove()
}

whenAvailable(['jQuery', 'moment'], function() {
    createCalendarCss()

    $("body").click(function(e) {
        if (e.target.classList.contains(CALENDAR_CLASS) || e.target.classList.contains(CLASS_NAME))
        {
            return;
        }
        if ($(e.target).parents("#myDiv").length) {
            alert("Inside div");
        } else {
            destroyCalendars()
        }
    });

    let input_list = $('.'+CLASS_NAME)

    for (input_index in input_list)
    {
       input_list[input_index].style = 'cursor: pointer;'
       input_list[input_index].value = moment().format(USER_DATE_FORMAT)
    }

    $('.'+CLASS_NAME).click(function(e){
        destroyCalendars()

        // let clicked_input = $('.'+CLASS_NAME).index(this)
        // $(this);

        let $div = $("<div>", {
            id: "test_calendar", 
            "class": CALENDAR_CLASS,
        })

        // destroy calendar if user has clicked outside the calendar 
        $div.click(function(e){})

        let $select_year = $("<select>", {})
        $div.append($select_year) 

        $("body").append($div)
    });
});
