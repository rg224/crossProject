const data_div = document.getElementById('data');
const container = document.getElementById('show_sentiment');

var pattern = new RegExp("^((http|https|ftp)\://)*([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&%\$#\=~_\-]+))*$");

$(function () {
    function get_response() {
        console.log('here');
        var value = $('#text').val();

        if (value.length > 0) {

            if(pattern.test(value)) {
                container.style.display = "block";
		        var html_string = `<div id="analyze_result">
                                    <div id="title">
                                    Title : boAt Rugged v3 Extra Tough Unbreakable Braided Micro: Amazon.in: Computers & Accessories
                                    </div>
                            
                                    <div id="title">
                                    Reviews Analyzed: 8
                                    </div>
                                    
                                    <div class="row" id="scrape_data">
                                    <div class="col" id="positive_review" style="text-align: center;">
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                        <div>Positive Reviews</div>
                                    </div>      
                                    </div>
                            
                                    <div id="title">
                                    Total Positive Reviews: 7 :: Total Negative Reviews: 1
                                    </div>
                            
                                    <div id="customer_sat">
                                        Customer Satisfaction via Reviews is 25%
                                    </div>
                                </div>`
                    
                container.innerHTML = html_string;
            }
            else {
                var message = "POSITIVE";
                var html_string = `<div id="result" style="background-color: #26a69a;">${message}</div>`;
                container.innerHTML = html_string;
            }
        }
        else {
            alert("Fill the input box");
        }
    }

    $('#go').click(function(){
        get_response();
    }); 
    
    $('#text').keypress(function (e) {
        var key = e.which;
        if(key == 13)  // the enter key code
        {
            $('#go').click();
        }
    }); 
});

