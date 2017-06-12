/**
 * Created by genm1023 on 6/11/17.
 */
var balance = document.getElementById("balance");
var vested = document.getElementById("vested");
var buy = document.getElementById("buy");
var estimateDay = document.getElementById("estimateDay");
var estimateDate = document.getElementById("estimateDate");
var address = document.getElementById("address");
var bar = document.getElementById("bar");

function fromAddress(address) {
    if(address.value != ""){
        balance.readOnly = true;
        vested.readOnly = true;
    }else{
        balance.readOnly = false;
        vested.readOnly = false;
        balance.value = "";
        vested.value = "";
    }
    adrs = address.value.replace(/.-+/g, "");
    if(adrs.length == 40){
        $.ajax({
            url: 'http://alice2.nem.ninja:7890/account/get?address='+adrs,
            type: 'GET',
            dataType: 'json',
            timeout: 5000
        })
        .then(
            function (data) {
                console.log(data.account.balance + ' ' + data.account.vestedBalance);
                vested.value = insertDot(data.account.vestedBalance);
                balance.value = insertDot(data.account.balance);
                indicateParcentile();
                calc();
            },
            function () {
                console.log("error")
            }
        );
    }
}
function changedNum() {
    if(vested.value == "" && balance.value == ""){
        address.readOnly = false;
    }else{
        address.readOnly = true;
        indicateParcentile();

    }
    calc();

}
function insertDot(str){
    var len = str.toString().length;
    return str.toString().slice(0, len-6) + '.' + str.toString().slice(len-6, len);
}

function parceFloatN(num){
    return num.value == "" ? 0 : parseFloat(num.value);
}
function showDate(num){
    var date = new Date();

    if(num!=0 && num!=''){
        date.setDate(date.getDate()+num);
    }
    return date.getFullYear()+ '/' + (date.getMonth()+1) + '/' + date.getDate();
}
function calc() {
    var transition = [parceFloatN(vested)];
    var increment = [];
    var estbal = parceFloatN(buy) + parceFloatN(balance);

    var i;
    for(i=0; i<3650 ; i++){
        increment.push((estbal-transition[i])/10);
        if(transition[i]>=10000) break;
        transition.push(transition[i]+increment[i]);
    }

    estimateDay.innerHTML = i>=3650 ? "∞" : i;
    estimateDate.innerHTML = i>=3650 ? "永遠に来ません" : showDate(i);
    console.log(showDate(i));


    $('#myChart').data('transition', transition);
    if(estbal >= 10000){
        inputDataToChart(transition, increment);
    }else{
        inputDataToChart([0],[0]);
    }

}
function indicateParcentile(){
    var percent = 0;
    try{
        percent = parceFloatN(vested) / 100;
    }catch(e) {

    }
    bar.style.width = percent.toString() + '%';
    bar.innerHTML = (Math.floor(percent*10)/10).toString() + '%';

}
function getDay(n){
    var today = new Date();
    console.log(today.toString());
}
