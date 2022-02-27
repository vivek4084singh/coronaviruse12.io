
 
$(document).ready(function () {
    

  // https://api.covid19india.org/v4/min/data.min.json
  
  // app.use(function (req, res, next){
  //   res.header("Access-Control-Allow-Origin");
  //   res.header("Access-Control-Allow-Headers","Origin, x-Requested-With, Content-Type, Accept");
  //   next();
  // });



  //   $.getJSON("https://api.covid19api.com/summary", function (data) {

  //     console.log(data);
  //     console.log(data.Countries[76]);
  //     const country_name = data.Countries[76];
  //     console.log(country_name.NewConfirmed);

  //     $("#ma").append(country_name.NewConfirmed);
  //     $("#recovered").append(country_name.TotalRecovered);

  // })
  var options = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.', 
      prefix : ' + ', 
      suffix : ' today ' ,
       
  
      
    };
    


  const formatter = new Intl.NumberFormat('en');

  

    
  
  $.getJSON("https://api.covid19india.org/v4/min/data.min.json", function (data) {


    console.log(data);

    // console.log(data.BR.total.confirmed);
    // console.log(data.BR.delta.confirmed);
    // const formatter = new Intl.NumberFormat('en');
     try {

      
      
      // const formatter = new Intl.NumberFormat('en');
      // const num = 1200000;
      
      var maha = data.MH;
      // console.log(maha.delta.confirmed);
         var ma = data.MH.delta.Recovered;
         console.log(ma);
         console.log(formatter.format(ma));
         console.log("hello");
        //  $("#wer").append(formatter.format(ma));
           var ha = data.MH.total.confirmed;
           var hb = data.MH.total.recovered;
           var hd = data.MH.total.deceased;
          //  var add2 = hd;
          //  console.log(hd+ " hiiiblkjfbnjfn");
        //  var daily = maha.delta.confirmed;

        var demo = new CountUp("wer", 0,maha.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("rev", 0,maha.delta.recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("dew", 0,maha.delta.deceased, 0, 2.1, );
      demo.start();

      $("#wer").append(formatter.format(maha.delta.confirmed));
      $("#rev").append(formatter.format(maha.delta.recovered));
      $("#dew").append(formatter.format(maha.delta.deceased));

     
    }
    catch(err) {
      // $("#alloidc").append(formatter.format(daily));
      // var demo = new CountUp("alloidc", 0,daily, 0, 2.1, options );      //  important look at .........
      //  demo.start();
      
     
    }
    // var maha = data.MH;
    // // console.log(maha.delta.confirmed);

    // $("#wer").append(maha.delta.confirmed);
    // $("#rev").append(maha.delta.recovered);
    // $("#dew").append(maha.delta.deceased);
    // kerala
    try {
      var maha1 = data.KL;
      var ha1 = data.KL.total.confirmed;
      var hb1 = data.KL.total.recovered;
      var hd1 =  data.KL.total.deceased;
      var demo = new CountUp("ke1", 0,maha1.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ke2", 0,maha1.delta.recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ke3", 0,maha1.delta.deceased, 0, 2.1, );
      demo.start();
  
      $("#ke1").append(formatter.format(maha1.delta.confirmed));
      $("#ke2").append(formatter.format(maha1.delta.recovered));
      $("#ke3").append(formatter.format(maha1.delta.deceased));
      
      
      
    }
    catch(err) {
     
    }
    // var maha1 = data.KL;
  
    // $("#ke1").append(maha1.delta.confirmed);
    // $("#ke2").append(maha1.delta.recovered);
    // $("#ke3").append(maha1.delta.deceased);
    //  karanataka
    try {
      var maha2 = data.KA;
      var ha2 = data.KA.total.confirmed;
      var hb2 = data.KA.total.recovered;
      var hd2 =  data.KA.total.deceased;
      //  var add2 = (hd+hd1+hd2);
      
      // var add1= (hb+hb1+hb2);
      // var add =(ha+ha1+ha2);
      // var demo = new CountUp("alloi", 0,maha2.delta.confirmed, 0, 2.1, );
      // demo.start();
      var demo = new CountUp("karn1", 0,maha2.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("karn2", 0,maha2.delta.recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("karn3", 0,maha2.delta.deceased, 0, 2.2, );
      demo.start();
      // $("#alloic").append(formatter.format(add));
      // $("#alloi").append(formatter.format(add));
      // $("#karn1").append(formatter.format(maha2.delta.confirmed));
      $("#karn2").append(formatter.format(maha2.delta.recovered));
      $("#karn3").append(formatter.format(maha2.delta.deceased));
      // var demo = new CountUp("alloi", 0,maha2.delta.confirmed, 0, 2.1, );
      // demo.start();
      // $("#alloi").append(formatter.format(add));
      // var ha2 = data.KA.total.confirmed;
      //  var add =(ha+ha1+ha2);
      //  console.log(formatter.format(add)+" all");
      // var demo = new CountUp("alloic", 0,add, 0, 2.1, );
      // demo.start();
      //  $("#alloic").append(formatter.format(add));
    }
    catch(err) {
    // $("#alloid").append(formatter.format(add2));
    //   var demo = new CountUp("alloid", 0,add2, 0, 2.1, );      //  important look at .........
    //    demo.start();
      // console.log(add+" all");
    }
    // var maha2 = data.KA;
   
    // $("#karn1").append(maha2.delta.confirmed);
    // $("#karn2").append(maha2.delta.recovered);
    // $("#karn3").append(maha2.delta.deceased);
    // andaman nicobar
    try {
      var maha3 = data.AN;
      var ha3 = data.AN.total.confirmed;
      var hb3 = data.AN.total.recovered;
      var hd3 =  data.AN.total.deceased;
      // console.log(add+"gjghm")
     
     
      $("#and1").append(maha3.delta.confirmed);
      $("#and2").append(maha3.delta.recovered);
      $("#and3").append(maha3.delta.deceased);

    
    }
    catch(err) {

      // $("#alloi").append(formatter.format(add));
      // var demo = new CountUp("alloi", 0,add, 0, 2.1, );      //  important look at .........
      //  demo.start();
     
    }
    // var maha3 = data.AN;
    // $("#and1").append(maha3.delta.confirmed);
    // $("#and2").append(maha3.delta.recovered);
    // $("#and3").append(maha3.delta.deceased);
    // andhra pradesap
    try {
      var maha4 = data.AP;
      var ha4 = data.AP.total.confirmed;
      var hb4 = data.AP.total.recovered;
      var hd4 =  data.AP.total.deceased;
      // var add =(ha+ha1+ha2+ha3+ha4);

      var demo = new CountUp("ap1", 0,maha4.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ap2", 0,maha4.delta.recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ap3", 0,maha4.delta.deceased, 0, 2.1, );
      demo.start();
      $("#ap1").append(formatter.format(maha4.delta.confirmed));
      $("#ap2").append(formatter.format(maha4.delta.recovered));
      $("#ap3").append(formatter.format(maha4.delta.deceased));

    }
    catch(err) {
     
      //  console.log(add+"jgjjjnjngjj")

      
    }
    // var maha4 = data.AP;
    // $("#ap1").append(maha4.delta.confirmed);
    // $("#ap2").append(maha4.delta.recovered);
    // $("#ap3").append(maha4.delta.deceased);
    // arunachal pradesh
    try {
      var maha5 = data.AR;
      var ha17 = data.AR.total.confirmed;
      var hb17 = data.AR.total.recovered;
      var hd17 =  data.AR.total.deceased;

      $("#ar1").append(formatter.format(maha5.delta.confirmed));
      $("#ar2").append(formatter.format(maha5.delta.recovered));
      $("#ar3").append(formatter.format(maha5.delta.deceased));
    }
    catch(err) {
     
    }
    // var maha5 = data.AR;
    // $("#ar1").append(maha5.delta.confirmed);
    // $("#ar2").append(maha5.delta.recovered);
    // $("#ar3").append(maha5.delta.deceased);
    // assam
    try {
      var maha6 = data.AS;
      var ha5 = data.AS.total.confirmed;
      var hb5 = data.AS.total.recovered;
      var hd5 =  data.AS.total.deceased;

      var demo = new CountUp("as1", 0,maha6.delta.confirmed, 0, 2.2, );
      demo.start();

      var demo = new CountUp("as2", 0,maha6.delta.recovered, 0, 2.2, );
      demo.start();

      var demo = new CountUp("as3", 0,maha6.delta.deceased, 0, 2.2, );
      demo.start();
      $("#as1").append(formatter.format(maha6.delta.confirmed));
      $("#as2").append(formatter.format(maha6.delta.recovered));
      $("#as3").append(formatter.format(maha6.delta.deceased));
    }
    catch(err) {
     
    }
    // var maha6 = data.AS;
    // $("#as1").append(maha6.delta.confirmed);
    // $("#as2").append(maha6.delta.recovered);
    // $("#as3").append(maha6.delta.deceased);
    // bihar
    try {
      var maha7 = data.BR;
      var hama = data.BR.total;
      var maho6 = data.BR.districts.Aurangabad;
      var ha6 = data.BR.total.confirmed;
      var hb6 = data.BR.total.recovered;
      var hd6 =  data.BR.total.deceased;

      // var demo = new CountUp("biaca2", 0,hama.confirmed, 0, 2.5, );
      // demo.start();

      var demo = new CountUp("biaca", 0,hama.confirmed, 0, 2.5, );
      demo.start();
      var demo = new CountUp("birw", 0,maha7.delta.confirmed, 0, 2.6, options );
      demo.start();

      var demo = new CountUp("bir", 0,hama.recovered, 0, 2.5, );
      demo.start();
      var demo = new CountUp("bidr", 0,maha7.delta.recovered, 0, 2.5, options );
      demo.start();

      // var demo = new CountUp("bir", 0,hama.recovered, 0, 2.5, );
      // demo.start();
    
      var demo = new CountUp("bird", 0,hama.deceased, 0, 2.5, );
      demo.start();
      var demo = new CountUp("birdd", 0,maha7.delta.deceased, 0, 2.5, options );
      demo.start();

          $("#biaca").append(formatter.format(hama.confirmed));
          $("#bir").append(formatter.format(hama.recovered));
      var demo = new CountUp("br1", 0,maha7.delta.confirmed, 0, 2.4, );
      demo.start();

      var demo = new CountUp("br2", 0,maha7.delta.recovered, 0, 2.4, );
      demo.start();


      $("#br1").append(maha7.delta.confirmed);
      $("#br2").append(maha7.delta.recovered);
      $("#br3").append(maha7.delta.deceased);

      $("#bihar11").append(formatter.format(maho6.delta.confirmed));
      $("#bihar112").append(formatter.format(maho6.delta.recovered));
      $("#bihar113").append(formatter.format(maho6.delta.deceased));
    }
    catch(err) {
      // var demo = new CountUp("bir", 0,hama.recovered, 0, 2.5, );
      // demo.start();
      // // var demo = new CountUp("birw", 0,maha7.delta.confirmed, 0, 2.6, options );
      // // demo.start();
      // var demo = new CountUp("bird", 0,hama.deceased, 0, 2.5, );
      // demo.start();
      // var demo = new CountUp("bidr", 0,maha7.delta.recovered, 0, 2.5, options );
      // demo.start();
    }
    // var maha7 = data.BR;
    // $("#br1").append(maha7.delta.confirmed);
    // $("#br2").append(maha7.delta.recovered);
    // $("#br3").append(maha7.delta.deceased);
    //chandighra
    try {
      var maha8 = data.CH;
      var ha18 = data.CH.total.confirmed;
      var hb18 = data.CH.total.recovered;
      var hd18 =  data.CH.total.deceased;

      $("#ch1").append(maha8.delta.confirmed);
      $("#ch2").append(maha8.delta.recovered);
      $("#ch3").append(maha8.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha8 = data.CH;
    // $("#ch1").append(maha8.delta.confirmed);
    // $("#ch2").append(maha8.delta.recovered);
    // $("#ch3").append(maha8.delta.deceased);
    // chhathighra
    try {
      var maha9 = data.CT;
      var ha19 = data.CT.total.confirmed;
      var hb19 = data.CT.total.recovered;
      var hd19 =  data.CT.total.deceased;

    $("#chh1").append(formatter.format(maha9.delta.confirmed));
    $("#chh2").append(formatter.format(maha9.delta.recovered));
    $("#chh3").append(formatter.format(maha9.delta.deceased));
   }
    catch(err) {
     
    }
    // var maha9 = data.CT;
    // $("#chh1").append(maha9.delta.confirmed);
    // $("#chh2").append(maha9.delta.recovered);
    // $("#chh3").append(maha9.delta.deceased);
    // delhi
    try {
     // delhi
      var maha10 = data.DL;
      var ha7 = data.DL.total.confirmed;
      var hb7 = data.DL.total.recovered;
      var hd7 =  data.DL.total.deceased;
      var demo = new CountUp("dl1", 0,maha10.delta.confirmed, 0, 2.4, );
      demo.start();

      var demo = new CountUp("dl2", 0,maha10.delta.recovered, 0, 2.4, );
      demo.start();

      $("#dl1").append(formatter.format(maha10.delta.confirmed));
      $("#dl2").append(formatter.format(maha10.delta.recovered));
      $("#dl3").append(maha10.delta.deceased);
      
    }
    catch(err) {
      
    }
    // var maha10 = data.DL;
    // $("#dl1").append(maha10.delta.confirmed);
    // $("#dl2").append(maha10.delta.recovered);
    // $("#dl3").append(maha10.delta.deceased);
    // goa
    try {
      var maha11 = data.GA;
      var ha20 = data.GA.total.confirmed;
      var hb20 = data.GA.total.recovered;
      var hd20 =  data.GA.total.deceased;
      $("#g1").append(formatter.format(maha11.delta.confirmed));
      $("#g2").append(formatter.format(maha11.delta.recovered));
      $("#g3").append(formatter.format(maha11.delta.deceased));
    }
    catch(err) {
     
    }
    // var maha11 = data.GA;
    // $("#g1").append(maha11.delta.confirmed);
    // $("#g2").append(maha11.delta.recovered);
    // $("#g3").append(maha11.delta.deceased);
    // gujarat
    try {
      var maha12 = data.GJ;
      var ha21 = data.GJ.total.confirmed;
      var hb21 = data.GJ.total.recovered;
      var hd21 =  data.GJ.total.deceased;
      
      $("#gu1").append(maha12.delta.confirmed);
      $("#gu2").append(maha12.delta.recovered);
      $("#gu3").append(maha12.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha12 = data.GJ;
    // $("#gu1").append(maha12.delta.confirmed);
    // $("#gu2").append(maha12.delta.recovered);
    // $("#gu3").append(maha12.delta.deceased);
    // himachal pradesh
    try {
      var maha13 = data.HP;
      var ha8 = data.HP.total.confirmed;
      var hb8 = data.HP.total.recovered;
      var hd8 =  data.HP.total.deceased;
      var demo = new CountUp("him1", 0,maha13.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("him2", 0,maha13.delta.recovered, 0, 2.1, );
      demo.start();

      $("#him1").append(formatter.format(maha13.delta.confirmed));
      $("#him2").append(formatter.format(maha13.delta.recovered));
      $("#him3").append(formatter.format(maha13.delta.deceased));
    }
    catch(err) {
     
    }
    // var maha13 = data.HP;
    // $("#him1").append(maha13.delta.confirmed);
    // $("#him2").append(maha13.delta.recovered);
    // $("#him3").append(maha13.delta.deceased);
    // haryana
    try {
      var maha14 = data.HR;
      var ha22 = data.HR.total.confirmed;
      var hb22 = data.HR.total.recovered;
      var hd22 =  data.HR.total.deceased;
      $("#har1").append(formatter.format(maha14.delta.confirmed));
      $("#har2").append(formatter.format(maha14.delta.recovered));
      $("#har3").append(formatter.format(maha14.delta.deceased));
    }
    catch(err) {
     
    }
    // var maha14 = data.HR;
    // $("#har1").append(maha14.delta.confirmed);
    // $("#har2").append(maha14.delta.recovered);
    // $("#har3").append(maha14.delta.deceased);
    //jharkhand
    try {
      var maha15 = data.JH;
      var ha23 = data.JH.total.confirmed;
      var hb23 = data.JH.total.recovered;
      var hd23 =  data.JH.total.deceased;
      $("#jh1").append(maha15.delta.confirmed);
      $("#jh2").append(maha15.delta.recovered);
      $("#jh3").append(maha15.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha15 = data.JH;
    // $("#jh1").append(maha15.delta.confirmed);
    // $("#jh2").append(maha15.delta.recovered);
    // $("#jh3").append(maha15.delta.deceased);
    // jammu and kashimar
    try {
      var maha16 = data.JK;
      var ha24 = data.JK.total.confirmed;
      var hb24 = data.JK.total.recovered;
      var hd24 =  data.JK.total.deceased;
      $("#jam1").append(maha16.delta.confirmed);
      $("#jam2").append(maha16.delta.recovered);
      $("#jam3").append(maha16.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha16 = data.JK;
    // $("#jam1").append(maha16.delta.confirmed);
    // $("#jam2").append(maha16.delta.recovered);
    // $("#jam3").append(maha16.delta.deceased);
    // lakshdwwep
    try {
      var maha17 = data.LD;
      var ha25 = data.LD.total.confirmed;
      var hb25 = data.LD.total.recovered;
      var hd25 =  data.LD.total.deceased;

      $("#ld1").append(maha17.delta.confirmed);
      $("#ld2").append(maha17.delta.recovered);
      $("#ld3").append(maha17.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha17 = data.LD;
    // $("#ld1").append(maha17.delta.confirmed);
    // $("#ld2").append(maha17.delta.recovered);
    // $("#ld3").append(maha17.delta.deceased);
    // meghalaya
    try {
      var maha18 = data.ML;
      var ha26 = data.ML.total.confirmed;
      var hb26 = data.ML.total.recovered;
      var hd26 =  data.ML.total.deceased;
      $("#meg1").append(maha18.delta.confirmed);
      $("#meg2").append(maha18.delta.recovered);
      $("#meg3").append(maha18.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha18 = data.ML;
    // $("#meg1").append(maha18.delta.confirmed);
    // $("#meg2").append(maha18.delta.recovered);
    // $("#meg3").append(maha18.delta.deceased);
    // manipur
    try {
      var maha19 = data.MN;
      var ha9 = data.MN.total.confirmed;
      var hb9 = data.MN.total.recovered;
      var hd9 =  data.MN.total.deceased;
      var demo = new CountUp("mn1", 0,maha19.delta.confirmed, 0, 2.3, );
      demo.start();

      var demo = new CountUp("mn2", 0,maha19.delta.recovered, 0, 2.1, );
      demo.start();

    $("#mn1").append(maha19.delta.confirmed);
    $("#mn2").append(maha19.delta.recovered);
    $("#mn3").append(maha19.delta.deceased); 
    }
    catch(err) {
     
    }
    // var maha19 = data.MN;
    // $("#mn1").append(maha19.delta.confirmed);
    // $("#mn2").append(maha19.delta.recovered);
    // $("#mn3").append(maha19.delta.deceased);
    // mp
    try {
      var maha20 = data.MP;
      var ha27 = data.MP.total.confirmed;
      var hb27 = data.MP.total.recovered;
      var hd27 =  data.MP.total.deceased;
      $("#mp1").append(maha20.delta.confirmed);
      $("#mp2").append(maha20.delta.recovered);
      $("#mp3").append(maha20.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha20 = data.MP;
    // $("#mp1").append(maha20.delta.confirmed);
    // $("#mp2").append(maha20.delta.recovered);
    // $("#mp3").append(maha20.delta.deceased);
    // mizoram
    try {
      var maha21 = data.MZ;
      var ha10 = data.MZ.total.confirmed;
      var hb10 = data.MZ.total.recovered;
      var hd10 =  data.MZ.total.deceased;
      var demo = new CountUp("miz1", 0,maha21.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("miz2", 0,maha21.delta.recovered, 0, 2.1, );
      demo.start();

      $("#miz1").append(maha21.delta.confirmed);
      $("#miz2").append(maha21.delta.recovered);
      $("#miz3").append(maha21.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha21 = data.MZ;
    // $("#miz1").append(maha21.delta.confirmed);
    // $("#miz2").append(maha21.delta.recovered);
    // $("#miz3").append(maha21.delta.deceased);
    // nagaland
    try {
      var maha22 = data.NL;
      var ha28 = data.NL.total.confirmed;
      var hb28 = data.NL.total.recovered;
      var hd28 =  data.NL.total.deceased;
      $("#nag1").append(maha22.delta.confirmed);
      $("#nag2").append(maha22.delta.recovered);
      $("#nag3").append(maha22.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha22 = data.NL;
    // $("#nag1").append(maha22.delta.confirmed);
    // $("#nag2").append(maha22.delta.recovered);
    // $("#nag3").append(maha22.delta.deceased);
    // odisha
    try {
      var maha23 = data.OR;
      var ha11 = data.OR.total.confirmed;
      var hb11 = data.OR.total.recovered;
      var hd11 =  data.OR.total.deceased;
      var demo = new CountUp("od1", 0,maha23.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("od2", 0,maha23.delta.recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("od3", 0,maha23.delta.deceased, 0, 2.1, );
      demo.start();
    $("#od1").append(maha23.delta.confirmed);
    $("#od2").append(maha23.delta.recovered);
    $("#od3").append(maha23.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha23 = data.OR;
    // $("#od1").append(maha23.delta.confirmed);
    // $("#od2").append(maha23.delta.recovered);
    // $("#od3").append(maha23.delta.deceased);
    // punjab
    try {
      var maha24 = data.PB;
      var ha29 = data.PB.total.confirmed;
      var hb29 = data.PB.total.recovered;
      var hd29 =  data.PB.total.deceased;
      $("#pun1").append(maha24.delta.confirmed);
      $("#pun2").append(maha24.delta.recovered);
      $("#pun3").append(maha24.delta.deceased); 
    }
    catch(err) {
     
    }
    // var maha24 = data.PB;
    // $("#pun1").append(maha24.delta.confirmed);
    // $("#pun2").append(maha24.delta.recovered);
    // $("#pun3").append(maha24.delta.deceased);
    // ponduchhery
    try {
      var maha25 = data.PY;
      var ha30 = data.PY.total.confirmed;
      var hb30 = data.PY.total.recovered;
      var hd30 =  data.PY.total.deceased;
      $("#puc1").append(maha25.delta.confirmed);
      $("#puc2").append(maha25.delta.recovered);
      $("#puc3").append(maha25.delta.deceased); 
    }
    catch(err) {
     
    }
    // var maha25 = data.PY;
    // $("#puc1").append(maha25.delta.confirmed);
    // $("#puc2").append(maha25.delta.recovered);
    // $("#puc3").append(maha25.delta.deceased);
    // rajashathan
    try {
      var maha26 = data.RJ;
      var ha31 = data.RJ.total.confirmed;
      var hb31 = data.RJ.total.recovered;
      var hd31 =  data.RJ.total.deceased;
      $("#raj1").append(maha26.delta.confirmed);
      $("#raj2").append(maha26.delta.recovered);
      $("#raj3").append(maha26.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha26 = data.RJ;
    // $("#raj1").append(maha26.delta.confirmed);
    // $("#raj2").append(maha26.delta.recovered);
    // $("#raj3").append(maha26.delta.deceased);
    // sikkim
    try {
      var maha27 = data.SK;
      var ha32 = data.SK.total.confirmed;
      var hb32 = data.SK.total.recovered;
      var hd32 =  data.SK.total.deceased;
    $("#sik1").append(maha27.delta.confirmed);
    $("#sik2").append(maha27.delta.recovered);
    $("#sik3").append(maha27.delta.deceased); 
    }
    catch(err) {
      
    }
    // var maha27 = data.SK;
    // $("#sik1").append(maha27.delta.confirmed);
    // $("#sik2").append(maha27.delta.recovered);
    // $("#sik3").append(maha27.delta.deceased);
    // telangana
    try {
      var maha28 = data.TG;
      var ha12 = data.TG.total.confirmed;
      var hb12 = data.TG.total.recovered;
      var hd12 =  data.TG.total.deceased;
      var demo = new CountUp("tel1", 0,maha28.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tel2", 0,maha28.delta.recovered, 0, 2.1, );
      demo.start();

      $("#tel1").append(maha28.delta.confirmed);
      $("#tel2").append(maha28.delta.recovered);
      $("#tel3").append(maha28.delta.deceased);
    }
    catch(err) {
      
    }
    // var maha28 = data.TG;
    // $("#tel1").append(maha28.delta.confirmed);
    // $("#tel2").append(maha28.delta.recovered);
    // $("#tel3").append(maha28.delta.deceased);
    // tamil nadu
    try {
      var maha29 = data.TN;
      var ha13 = data.TN.total.confirmed;
      var hb13 = data.TN.total.recovered;
      var hd13 =  data.TN.total.deceased;
      var demo = new CountUp("tam1", 0,maha29.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tam2", 0,maha29.delta.recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tam3", 0,maha29.delta.deceased, 0, 2.4, );
      demo.start();
      $("#tam1").append(maha29.delta.confirmed);
      $("#tam2").append(maha29.delta.recovered);
      $("#tam3").append(maha29.delta.deceased);
    }
    catch(err) {
      
    }
    // var maha29 = data.TN;
    // $("#tam1").append(maha29.delta.confirmed);
    // $("#tam2").append(maha29.delta.recovered);
    // $("#tam3").append(maha29.delta.deceased);
    // tripura
    try {
      var maha30 = data.TR;
      var ha14 = data.TR.total.confirmed;
      var hb14 = data.TR.total.recovered;
      var hd14 =  data.TR.total.deceased;
      var demo = new CountUp("tri1", 0,maha30.delta.confirmed, 0, 2.4, );
      demo.start();

      var demo = new CountUp("tri2", 0,maha30.delta.recovered, 0, 2.2, );
      demo.start();

      $("#tri1").append(maha30.delta.confirmed);
      $("#tri2").append(maha30.delta.recovered);
      $("#tri3").append(maha30.delta.deceased);
    }
    catch(err) {
     
    }
    // var maha30 = data.TR;
    // $("#tri1").append(maha30.delta.confirmed);
    // $("#tri2").append(maha30.delta.recovered);
    // $("#tri3").append(maha30.delta.deceased);
    // uttar pradesh
    try {
      var maha31 = data.UP;
      var ha33 = data.UP.total.confirmed;
      var hb33 = data.UP.total.recovered;
      var hd33 =  data.UP.total.deceased;
     
      $("#utt1").append(maha31.delta.confirmed);
      $("#utt2").append(maha31.delta.recovered);
      $("#utt3").append(maha31.delta.deceased);
    }
    catch(err) {
      
    }
    // var maha31 = data.UP;
    // $("#utt1").append(maha31.delta.confirmed);
    // $("#utt2").append(maha31.delta.recovered);
    // $("#utt3").append(maha31.delta.deceased);
    // uttarakhand
    try {
      var maha32 = data.UT;
      var ha34 = data.UT.total.confirmed;
      var hb34 = data.UT.total.recovered;
      var hd34 =  data.UT.total.deceased;

    $("#uttar1").append(maha32.delta.confirmed);
    $("#uttar2").append(maha32.delta.recovered);
    $("#uttar3").append(maha32.delta.deceased);
    }
    catch(err) {
      
    }
    // var maha32 = data.UT;
    // $("#uttar1").append(maha32.delta.confirmed);
    // $("#uttar2").append(maha32.delta.recovered);
    // $("#uttar3").append(maha32.delta.deceased);
    // west bengal
    try {
      var maha33 = data.WB;
      var ha15 = data.WB.total.confirmed;
      var hb15 = data.WB.total.recovered;
      var hd15 =  data.WB.total.deceased;
      var demo = new CountUp("wes1", 0,maha33.delta.confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("wes2", 0,maha33.delta.recovered, 0, 2.1, );
      demo.start();

      $("#wes1").append(maha33.delta.confirmed);
      $("#wes2").append(maha33.delta.recovered);
      $("#wes3").append(maha33.delta.deceased);
    }
    catch(err) {
      
    }
    // var maha33 = data.WB;
    // $("#wes1").append(maha33.delta.confirmed);
    // $("#wes2").append(maha33.delta.recovered);
    // $("#wes3").append(maha33.delta.deceased);
    // dadara
    try {
      var maha34 = data.DN;
      var ha35 = data.DN.total.confirmed;
      var hb35 = data.DN.total.recovered;
      var hd35 =  data.DN.total.deceased;

      $("#daa1").append(maha34.delta.confirmed);
      $("#daa2").append(maha34.delta.recovered);
      $("#daa3").append(maha34.delta.deceased);
    }
    catch(err) {
      
    }
    // var maha34 = data.DN;
    // $("#daa1").append(maha34.delta.confirmed);
    // $("#daa2").append(maha34.delta.recovered);
    // $("#daa3").append(maha34.delta.deceased);
    //    ladakh
    // ladakh district
    // leh
    try {
      var maha35 = data.LA;
      var maha35a = data.LA.districts;
      var ha16 = data.LA.total.confirmed;
      var hb16 = data.LA.total.recovered;
      var hd16 =  data.LA.total.deceased;
      // var daily = maha.delta.confirmed;
      // var add2 = hd;
      var add =(ha+ha1+ha2+ha4+ha5+ha6+ha7+ha8+ha9+ha10+ha11+ha12+ha13+ha14+ha15+ha16+ha17+ha18+ha19+ha20+ha21+ha22+ha23+ha24+ha25+ha26+ha27+ha28+ha29+ha30+ha31+ha32+ha33+ha34+ha35);

      // //  var add1= (hb+hb1+hb2+hb3+hb4);
      var add1=(hb+hb1+hb2+hb4+hb5+hb6+hb7+hb8+hb9+hb10+hb11+hb12+hb13+hb14+hb15+hb17+hb18+hb19+hb20+hb21+hb22+hb23+hb24+hb25+hb26+hb27+hb28+hb29+hb30+hb31+hb32+hb33+hb34+hb35);

      var add2=(hd+hd1+hd2+hd4+hd5+hd6+hd7+hd8+hd9+hd10+hd11+hd12+hd13+hd14+hd15+hd17+hd18+hd19+hd20+hd21+hd22+hd23+hd24+hd25+hd26+hd27+hd28+hd29+hd30+hd31+hd32+hd33+hd34+hd35);

      var daily = (maha.delta.confirmed+maha1.delta.confirmed+maha2.delta.confirmed+maha4.delta.confirmed+maha5.delta.confirmed+maha6.delta.confirmed+maha7.delta.confirmed+maha8.delta.confirmed+maha9.delta.confirmed+maha10.delta.confirmed+maha11.delta.confirmed+maha12.delta.confirmed+maha13.delta.confirmed+maha14.delta.confirmed+maha16.delta.confirmed+maha18.delta.confirmed+maha19.delta.confirmed+maha20.delta.confirmed+maha21.delta.confirmed+maha22.delta.confirmed+maha23.delta.confirmed+maha24.delta.confirmed+maha25.delta.confirmed+maha26.delta.confirmed+maha27.delta.confirmed+maha28.delta.confirmed+maha29.delta.confirmed+maha30.delta.confirmed+maha31.delta.confirmed+maha32.delta.confirmed+maha33.delta.confirmed);

      var daily1 = (maha.delta.recovered+maha1.delta.recovered+maha2.delta.recovered+maha4.delta.recovered+maha5.delta.recovered+maha6.delta.recovered+maha7.delta.recovered+maha8.delta.recovered+maha9.delta.recovered+maha10.delta.recovered+maha11.delta.recovered+maha12.delta.recovered+maha13.delta.recovered+maha14.delta.recovered+maha16.delta.recovered+maha17.delta.recovered+maha18.delta.recovered+maha19.delta.recovered+maha20.delta.recovered+maha21.delta.recovered+maha22.delta.recovered+maha23.delta.recovered+maha24.delta.recovered+maha25.delta.recovered+maha26.delta.recovered+maha27.delta.recovered+maha28.delta.recovered+maha29.delta.recovered+maha30.delta.recovered+maha31.delta.recovered+maha32.delta.recovered+maha33.delta.recovered);


      // var daily2 = (maha.delta.deceased+maha1.delta.deceased+maha2.delta.deceased+maha4.delta.deceased+maha6.delta.deceased+maha10.delta.deceased+maha11.delta.deceased+maha12.delta.deceased+maha13.delta.deceased+maha14.delta.deceased+maha18.delta.deceased+maha19.delta.deceased+maha22.delta.deceased+maha23.delta.deceased+maha24.delta.deceased+maha28.delta.deceased+maha29.delta.deceased+maha30.delta.deceased
      //   +maha33.delta.deceased);

      // var daily2 = ();
    

      $("#leh1").append(maha35a.Leh.delta.confirmed);
      $("#leh2").append(maha35a.Leh.delta.recovered);
      $("#leh3").append(maha35a.Leh.delta.deceased);
      if (maha35.delta != maha35.delta) {
  
  
  
      }
      else {
       
        $("#lac1").append(maha35.delta.confirmed);
        $("#lac2").append(maha35.delta.recovered);
        $("#lac3").append(maha35.delta.deceased)
  
      
  
      }
     

   
     
        
      
      $("#alloi").append(formatter.format(add));
      var demo = new CountUp("alloi", 0,add, 0, 2.1, );      //  important look at .........
       demo.start();
          
      //   // all india recover

         $("#alloir").append(formatter.format(add1));
      var demo = new CountUp("alloir", 0,add1, 0, 2.1, );      //  important look at .........
       demo.start();

       $("#alloid").append(formatter.format(add2));
       var demo = new CountUp("alloid", 0,add2, 0, 2.1, );      //  important look at .........
        demo.start();

      //   // all over india daily case

        $("#alloidc").append(formatter.format(daily));
        var demo = new CountUp("alloidc", 0,daily, 0, 2.1, options );      //  important look at .........
         demo.start();

      $("#alloidr").append(formatter.format(daily1));
        var demo = new CountUp("alloidr", 0,daily1, 0, 2.1, options );      //  important look at .........
         demo.start();

      //    $("#alloidd").append(formatter.format(daily2));
      //    var demo = new CountUp("alloidd", 0,daily2, 0, 2.1, options );      //  important look at .........
      //     demo.start();
      
     
      }
    
    catch(err) {
      // $("#alloi").append(formatter.format(add));
      // var demo = new CountUp("alloi", 0,add, 0, 2.1, );      //  important look at .........
      //  demo.start();
       
      console.log(err)
    
      $("#alloi").append(formatter.format(add));
      var demo = new CountUp("alloi", 0,add, 0, 2.1, );      //  important look at .........
       demo.start();

       
         $("#alloir").append(formatter.format(add1));
      var demo = new CountUp("alloir", 0,add1, 0, 2.1, );      //  important look at .........
       demo.start();

          $("#alloid").append(formatter.format(add2));
       var demo = new CountUp("alloid", 0,add2, 0, 2.1, );      //  important look at .........
        demo.start();

        $("#alloidc").append(formatter.format(daily));
        var demo = new CountUp("alloidc", 0,daily, 0, 2.1, options );      //  important look at .........
         demo.start();

         
        $("#alloidr").append(formatter.format(daily1));
        var demo = new CountUp("alloidr", 0,daily1, 0, 2.1, options );      //  important look at .........
         demo.start();

        //  $("#alloidd").append(formatter.format(daily2));
        //  var demo = new CountUp("alloidd", 0,daily2, 0, 2.1, options );      //  important look at .........
        //   demo.start();
      
    
      
    }

   
    // var maha35 = data.LA;
    // var maha35a = data.LA.districts;
    // $("#leh1").append(maha35a.Leh.delta.confirmed);
    // $("#leh2").append(maha35a.Leh.delta.recovered);
    // $("#leh3").append(maha35a.Leh.delta.deceased);
    // if (maha35.delta != maha35.delta) {



    // }
    // else {
    //   $("#lac1").append(maha35.delta.confirmed);
    //   $("#lac2").append(maha35.delta.recovered);
    //   $("#lac3").append(maha35.delta.deceased)

    

    // }
    // try {
    //   delhi
    //   var maha10 = data.DL;
    //   $("#dl1").append(maha10.delta.confirmed);
    //   $("#dl2").append(maha10.delta.recovered);
    //   $("#dl3").append(maha10.delta.deceased);
      
    // }
    // catch(err) {
      
    // }

    // ladak
    // <span class="material-icons" style="font-weight: normal; font-size: 12px;
    //         color: rgb(0, 181, 255)">
    //             arrow_upward</span>
    //   var maha3=data.LA;
    //  if(maha3.delta!=maha3.delta){

    //   $("#karn1").append(maha3.delta.confirmed);
    //  }
    //  else
    //  {

    //   // $("#karn1").append(maha2.delta.confirmed);
    //   // $("#karn2").append(maha2.delta.recovered);
    //   // $("#karn3").append(maha2.delta.deceased);
    //  }

    // console.log(data.Countries[76]);
    // const country_name = data.Countries[76];
    // console.loNewConfirmed);g(country_name.)

    // $("#ma").append(country_name.NewConfirmed);
    // $("#recovered").append(country_name.TotalRecovered);

   })
  
 
  $.getJSON("https://api.covid19india.org/data.json", function (data1) {

    console.log(data1);
    const my_state = data1.statewise;
    console.log(data1.statewise);
    console.log(my_state[21].confirmed);
    console.log(my_state[2].active);
    // console.log(my_state[21].lastupdatedtime)

    try {
     
      var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: ['January', 'February', 'March', 'April', 'May ', 'June '],
              datasets: [{
                  label: 'confirmed',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              },
              {
                label: 'recovered',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }   ]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  },
                  responsive: false,
              }
          }
      });
    } catch (error) {
      
    }

 
    
    


    try {


      var demo = new CountUp("alloiaa", 0,my_state[0].active, 0, 2.1, );
      demo.start();
      
      $("#alloiaa").append(formatter.format(my_state[0].active));

        var demo = new CountUp("alloidd", 0,my_state[0].deltadeaths, 0, 2.1, options);
      demo.start();
      
      $("#alloidd").append(formatter.format(my_state[0].deltadeaths));

      // var demo = new CountUp("alloi", 0,my_state[0].confirmed, 0, 2.1, );
      // demo.start();
      
      // $("#alloi").append(formatter.format(my_state[0].confirmed));

      // var demo = new CountUp("alloir", 0,my_state[0].recovered, 0, 2.1, );
      // demo.start();
      
      // $("#alloir").append(formatter.format(my_state[0].recovered));

      // var demo = new CountUp("alloid", 0,my_state[0].deaths, 0, 2.1, );
      // demo.start();
      
      // $("#alloid").append(formatter.format(my_state[0].deaths));

      
    } catch (error) {
      
    }

    try {
       
      var demo = new CountUp("na", 0,my_state[21].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("re", 0,my_state[21].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("de", 0,my_state[21].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ac", 0,my_state[21].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
     
    $("#na").append(formatter.format(my_state[21].confirmed));
    $("#re").append(formatter.format(my_state[21].recovered));
    $("#de").append(formatter.format(my_state[21].deaths));
    $("#ac").append(formatter.format(my_state[21].active));
    $("#lmh").append(my_state[21].lastupdatedtime);

    // $("#kea").append(my_state[17].active);
    // karnataka 

    try {
      // all over india 
      
    } catch (error) {
      
    }


    try {
       
      var demo = new CountUp("karnc", 0,my_state[16].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("karnr", 0,my_state[16].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("karnd", 0,my_state[16].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("karna", 0,my_state[16].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#karna").append(formatter.format(my_state[16].active));
    $("#karnc").append(formatter.format(my_state[16].confirmed));
    $("#karnr").append(formatter.format(my_state[16].recovered));
    $("#karnd").append(formatter.format(my_state[16].deaths));
    $("#lkarnatka").append(my_state[16].lastupdatedtime);
    // andhra pradesh
    try {
       
      var demo = new CountUp("apc", 0,my_state[2].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("apr", 0,my_state[2].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("apd", 0,my_state[2].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("apa", 0,my_state[2].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#apa").append(formatter.format(my_state[2].active));
    $("#apc").append(formatter.format(my_state[2].confirmed));
    $("#apr").append(formatter.format(my_state[2].recovered));
    $("#apd").append(formatter.format(my_state[2].deaths));
    // arunahal p
    try {
       
      var demo = new CountUp("arc", 0,my_state[3].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("arr", 0,my_state[3].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ard", 0,my_state[3].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ara", 0,my_state[3].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#ara").append(formatter.format(my_state[3].active));
    $("#arc").append(formatter.format(my_state[3].confirmed));
    $("#arr").append(formatter.format(my_state[3].recovered));
    $("#ard").append(formatter.format(my_state[3].deaths));
    // assam
    try {
       
      var demo = new CountUp("asc", 0,my_state[4].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("asr", 0,my_state[4].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("asd", 0,my_state[4].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("asa", 0,my_state[4].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#asa").append(formatter.format(my_state[4].active));
    $("#asc").append(formatter.format(my_state[4].confirmed));
    $("#asr").append(formatter.format(my_state[4].recovered));
    $("#asd").append(formatter.format(my_state[4].deaths));
    // 
    try {
       
      var demo = new CountUp("brc", 0,my_state[5].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("brr", 0,my_state[5].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("brd", 0,my_state[5].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("bra", 0,my_state[5].active, 0, 2.1, );
      demo.start();

      // var demo = new CountUp("birar", 0,my_state[5].active, 0, 2.5, );
      // demo.start();
     


     } catch (error) {
       
     }
     try {
    $("#birar").append(formatter.format(my_state[5].active));
    var demo = new CountUp("birar", 0,my_state[5].active, 0, 2.5, );
    demo.start();
    $("#brc").append(formatter.format(my_state[5].confirmed));
    $("#brr").append(formatter.format(my_state[5].recovered));
    $("#brd").append(formatter.format(my_state[5].deaths));
     } catch (error) {
       
     }
    // chandighar
    try {
       
      var demo = new CountUp("chc", 0,my_state[6].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("chr", 0,my_state[6].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("chd", 0,my_state[6].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("cha", 0,my_state[6].active, 0, 2.6, );
      demo.start();


     } catch (error) {
       
     }
    $("#chc").append(formatter.format(my_state[6].confirmed));
    $("#chr").append(formatter.format(my_state[6].recovered));
    $("#chd").append(formatter.format(my_state[6].deaths));
    $("#cha").append(formatter.format(my_state[6].active));
    $("#lchandi").append(my_state[6].lastupdatedtime);
    // chhaatigh
    try {
       
      var demo = new CountUp("chhc", 0,my_state[7].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("chhr", 0,my_state[7].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("chhd", 0,my_state[7].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("chha", 0,my_state[7].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#chhc").append(formatter.format(my_state[7].confirmed));
    $("#chhr").append(formatter.format(my_state[7].recovered));
    $("#chhd").append(formatter.format(my_state[7].deaths));
    $("#chha").append(formatter.format(my_state[7].active));
    // dadra
    try {
       
      var demo = new CountUp("dac", 0,my_state[8].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("dar", 0,my_state[8].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("dad", 0,my_state[8].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("daa", 0,my_state[8].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#dac").append(formatter.format(my_state[8].confirmed));
    $("#dar").append(formatter.format(my_state[8].recovered));
    $("#dad").append(formatter.format(my_state[8].deaths));
    $("#daa").append(formatter.format(my_state[8].active));
    $("#ldadra").append(my_state[8].lastupdatedtime);
    // delhi
    try {
       
      var demo = new CountUp("dlc", 0,my_state[9].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("dlr", 0,my_state[9].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("dld", 0,my_state[9].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("dla", 0,my_state[9].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#dlc").append(formatter.format(my_state[9].confirmed));
    $("#dlr").append(formatter.format(my_state[9].recovered));
    $("#dld").append(formatter.format(my_state[9].deaths));
    $("#dla").append(formatter.format(my_state[9].active));
    //goa
    try {
       
      var demo = new CountUp("gc", 0,my_state[10].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("gr", 0,my_state[10].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("gd", 0,my_state[10].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ga", 0,my_state[10].active, 0, 2.3, );
      demo.start();


     } catch (error) {
       
     }
    $("#gc").append(formatter.format(my_state[10].confirmed));
    $("#gr").append(formatter.format(my_state[10].recovered));
    $("#gd").append(formatter.format(my_state[10].deaths));
    $("#ga").append(formatter.format(my_state[10].active));
    $("#lgoa").append(my_state[10].lastupdatedtime);
    //gujarat
    try {
       
      var demo = new CountUp("guc", 0,my_state[11].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("gur", 0,my_state[11].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("gud", 0,my_state[11].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("gua", 0,my_state[11].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#guc").append(formatter.format(my_state[11].confirmed));
    $("#gur").append(formatter.format(my_state[11].recovered));
    $("#gud").append(formatter.format(my_state[11].deaths));
    $("#gua").append(formatter.format(my_state[11].active));

    //  harayana
    try {
       
      var demo = new CountUp("harc", 0,my_state[12].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("harr", 0,my_state[12].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("hard", 0,my_state[12].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("hara", 0,my_state[12].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#harc").append(formatter.format(my_state[12].confirmed));
    $("#harr").append(formatter.format(my_state[12].recovered));
    $("#hard").append(formatter.format(my_state[12].deaths));
    $("#hara").append(formatter.format(my_state[12].active));

    // himachal pradesh
    try {
       
      var demo = new CountUp("himc", 0,my_state[13].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("himr", 0,my_state[13].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("himd", 0,my_state[13].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("hima", 0,my_state[13].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#himc").append(formatter.format(my_state[13].confirmed));
    $("#himr").append(formatter.format(my_state[13].recovered));
    $("#himd").append(formatter.format(my_state[13].deaths));
    $("#hima").append(formatter.format(my_state[13].active));
    // jammu and kashmir
    try {
       
      var demo = new CountUp("jamc", 0,my_state[14].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("jamr", 0,my_state[14].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("jamd", 0,my_state[14].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("jama", 0,my_state[14].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#jamc").append(formatter.format(my_state[14].confirmed));
    $("#jamr").append(formatter.format(my_state[14].recovered));
    $("#jamd").append(formatter.format(my_state[14].deaths));
    $("#jama").append(formatter.format(my_state[14].active));

    // jharkhand
    try {
       
      var demo = new CountUp("jhc", 0,my_state[15].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("jhr", 0,my_state[15].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("jhd", 0,my_state[15].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("jha", 0,my_state[15].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#jhc").append(formatter.format(my_state[15].confirmed));
    $("#jhr").append(formatter.format(my_state[15].recovered));
    $("#jhd").append(formatter.format(my_state[15].deaths));
    $("#jha").append(formatter.format(my_state[15].active));

    // keral7
    try {
       
      var demo = new CountUp("kec", 0,my_state[17].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ker", 0,my_state[17].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ked", 0,my_state[17].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("kea", 0,my_state[17].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#kec").append(formatter.format(my_state[17].confirmed));
    $("#ker").append(formatter.format(my_state[17].recovered));
    $("#ked").append(formatter.format(my_state[17].deaths));
    $("#kea").append(formatter.format(my_state[17].active));
    $("#lkerala").append(my_state[17].lastupdatedtime);
    // ladakh
    try {
       
      var demo = new CountUp("lac", 0,my_state[18].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("lar", 0,my_state[18].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("lad", 0,my_state[18].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("laa", 0,my_state[18].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#lac").append(formatter.format(my_state[18].confirmed));
    $("#lar").append(formatter.format(my_state[18].recovered));
    $("#lad").append(formatter.format(my_state[18].deaths));
    $("#laa").append(formatter.format(my_state[18].active));
    $("#ladakhl").append(my_state[18].lastupdatedtime);
    // lakshdweep
    try {
       
      var demo = new CountUp("ldc", 0,my_state[19].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ldr", 0,my_state[19].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("ldd", 0,my_state[19].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("lda", 0,my_state[19].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#ldc").append(formatter.format(my_state[19].confirmed));
    $("#ldr").append(formatter.format(my_state[19].recovered));
    $("#ldd").append(formatter.format(my_state[19].deaths));
    $("#lda").append(formatter.format(my_state[19].active));
    $("#llaksh").append(my_state[19].lastupdatedtime);

    // madhya pradesh
    try {
       
      var demo = new CountUp("mpc", 0,my_state[20].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mpr", 0,my_state[20].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mpd", 0,my_state[20].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mpa", 0,my_state[20].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#mpc").append(formatter.format(my_state[20].confirmed));
    $("#mpr").append(formatter.format(my_state[20].recovered));
    $("#mpd").append(formatter.format(my_state[20].deaths));
    $("#mpa").append(formatter.format(my_state[20].active));

    // manipur
    try {
       
      var demo = new CountUp("mnc", 0,my_state[22].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mnr", 0,my_state[22].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mnd", 0,my_state[22].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mna", 0,my_state[22].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#mnc").append(formatter.format(my_state[22].confirmed));
    $("#mnr").append(formatter.format(my_state[22].recovered));
    $("#mnd").append(formatter.format(my_state[22].deaths));
    $("#mna").append(formatter.format(my_state[22].active));
    // meghalaya
    try {
       
      var demo = new CountUp("megc", 0,my_state[23].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("megr", 0,my_state[23].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("megd", 0,my_state[23].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mega", 0,my_state[23].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#megc").append(formatter.format(my_state[23].confirmed));
    $("#megr").append(formatter.format(my_state[23].recovered));
    $("#megd").append(formatter.format(my_state[23].deaths));
    $("#mega").append(formatter.format(my_state[23].active));
    $("#lmeghalaya").append(my_state[23].lastupdatedtime);

    // mizoram
    try {
       
      var demo = new CountUp("mizc", 0,my_state[24].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mizr", 0,my_state[24].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("mizd", 0,my_state[24].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("miza", 0,my_state[24].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#mizc").append(formatter.format(my_state[24].confirmed));
    $("#mizr").append(formatter.format(my_state[24].recovered));
    $("#mizd").append(formatter.format(my_state[24].deaths));
    $("#miza").append(formatter.format(my_state[24].active));
    $("#lmizoram").append(my_state[24].lastupdatedtime);
    // nagaland
    try {
       
      var demo = new CountUp("nagc", 0,my_state[25].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("nagr", 0,my_state[25].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("nagd", 0,my_state[25].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("naga", 0,my_state[25].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#nagc").append(formatter.format(my_state[25].confirmed));
    $("#nagr").append(formatter.format(my_state[25].recovered));
    $("#nagd").append(formatter.format(my_state[25].deaths));
    $("#naga").append(formatter.format(my_state[25].active));
    $("#lnagaland").append(my_state[25].lastupdatedtime);
    // odisha
    try {
       
      var demo = new CountUp("odc", 0,my_state[26].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("odr", 0,my_state[26].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("odd", 0,my_state[26].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("oda", 0,my_state[26].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#odc").append(formatter.format(my_state[26].confirmed));
    $("#odr").append(formatter.format(my_state[26].recovered));
    $("#odd").append(formatter.format(my_state[26].deaths));
    $("#oda").append(formatter.format(my_state[26].active));
    // puducherry
    try {
       
      var demo = new CountUp("puc", 0,my_state[27].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("pur", 0,my_state[27].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("pud", 0,my_state[27].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("pua", 0,my_state[27].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#puc").append(formatter.format(my_state[27].confirmed));
    $("#pur").append(formatter.format(my_state[27].recovered));
    $("#pud").append(formatter.format(my_state[27].deaths));
    $("#pua").append(formatter.format(my_state[27].active));
    $("#lsikkim").append(my_state[27].lastupdatedtime);
    // punja8
    try {
       
      var demo = new CountUp("punc", 0,my_state[28].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("punr", 0,my_state[28].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("pund", 0,my_state[28].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("puna", 0,my_state[28].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#punc").append(formatter.format(my_state[28].confirmed));
    $("#punr").append(formatter.format(my_state[28].recovered));
    $("#pund").append(formatter.format(my_state[28].deaths));
    $("#puna").append(formatter.format(my_state[28].active));
    // rajashthan
    try {
       
      var demo = new CountUp("rajc", 0,my_state[29].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("rajr", 0,my_state[29].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("rajd", 0,my_state[29].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("raja", 0,my_state[29].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#rajc").append(formatter.format(my_state[29].confirmed));
    $("#rajr").append(formatter.format(my_state[29].recovered));
    $("#rajd").append(formatter.format(my_state[29].deaths));
    $("#raja").append(formatter.format(my_state[29].active));
    // siksik
    try {
       
      var demo = new CountUp("sikc", 0,my_state[30].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("sikr", 0,my_state[30].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("sikd", 0,my_state[30].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("sika", 0,my_state[30].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#sikc").append(formatter.format(my_state[30].confirmed));
    $("#sikr").append(formatter.format(my_state[30].recovered));
    $("#sikd").append(formatter.format(my_state[30].deaths));
    $("#sika").append(formatter.format(my_state[30].active));
    $("#ltripura").append(my_state[30].lastupdatedtime);
    // tamil nadu
    try {
       
      var demo = new CountUp("tamc", 0,my_state[32].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tamr", 0,my_state[32].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tamd", 0,my_state[32].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tama", 0,my_state[32].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#tamc").append(formatter.format(my_state[32].confirmed));
    $("#tamr").append(formatter.format(my_state[32].recovered));
    $("#tamd").append(formatter.format(my_state[32].deaths));
    $("#tama").append(formatter.format(my_state[32].active));
    // telangana
    try {
       
      var demo = new CountUp("telc", 0,my_state[33].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("telr", 0,my_state[33].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("teld", 0,my_state[33].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tela", 0,my_state[33].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#telc").append(formatter.format(my_state[33].confirmed));
    $("#telr").append(formatter.format(my_state[33].recovered));
    $("#teld").append(formatter.format(my_state[33].deaths));
    $("#tela").append(formatter.format(my_state[33].active));
    // tripura
    try {
       
      var demo = new CountUp("tric", 0,my_state[34].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("trir", 0,my_state[34].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("trid", 0,my_state[34].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("tria", 0,my_state[34].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#tric").append(formatter.format(my_state[34].confirmed));
    $("#trir").append(formatter.format(my_state[34].recovered));
    $("#trid").append(formatter.format(my_state[34].deaths));
    $("#tria").append(formatter.format(my_state[34].active));
    $("#lpuducherry").append(my_state[34].lastupdatedtime);
    // uttar pradesh
    try {
       
      var demo = new CountUp("uttc", 0,my_state[35].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("uttr", 0,my_state[35].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("uttd", 0,my_state[35].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("utta", 0,my_state[35].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#uttc").append(formatter.format(my_state[35].confirmed));
    $("#uttr").append(formatter.format(my_state[35].recovered));
    $("#uttd").append(formatter.format(my_state[35].deaths));
    $("#utta").append(formatter.format(my_state[35].active));
    // uttarakhand
    try {
       
      var demo = new CountUp("uttarc", 0,my_state[36].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("uttarr", 0,my_state[36].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("uttard", 0,my_state[36].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("uttara", 0,my_state[36].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#uttarc").append(formatter.format(my_state[36].confirmed));
    $("#uttarr").append(formatter.format(my_state[36].recovered));
    $("#uttard").append(formatter.format(my_state[36].deaths));
    $("#uttara").append(formatter.format(my_state[36].active));
    //west bengal
    try {
       
      var demo = new CountUp("wesc", 0,my_state[37].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("wesr", 0,my_state[37].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("wesd", 0,my_state[37].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("wesa", 0,my_state[37].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#wesc").append(formatter.format(my_state[37].confirmed));
    $("#wesr").append(formatter.format(my_state[37].recovered));
    $("#wesd").append(formatter.format(my_state[37].deaths));
    $("#wesa").append(formatter.format(my_state[37].active));
    // Andaman and nicobar
    try {
       
      var demo = new CountUp("andc", 0,my_state[1].confirmed, 0, 2.1, );
      demo.start();

      var demo = new CountUp("andr", 0,my_state[1].recovered, 0, 2.1, );
      demo.start();

      var demo = new CountUp("andd", 0,my_state[1].deaths, 0, 2.1, );
      demo.start();

      var demo = new CountUp("anda", 0,my_state[1].active, 0, 2.1, );
      demo.start();


     } catch (error) {
       
     }
    $("#andc").append(formatter.format(my_state[1].confirmed));
    $("#andr").append(formatter.format(my_state[1].recovered));
    $("#andd").append(formatter.format(my_state[1].deaths));
    $("#anda").append(formatter.format(my_state[1].active));


       
           

    






  })
  $.getJSON("https://api.covid19india.org/state_district_wise.json", function (data2) {

    console.log(data2);
    console.log("hi");

    const my_district = data2.Bihar.districtData;
    // console.log(my_district.districtData.Alipurduar.confirmed);
    console.log(my_district.Aurangabad.active);
    $("#Otto").append(my_district.Aurangabad.active);
    // console.log(my_district1.Pune.active);

    // Maharashtra district
    // pune
   
    try{
    const my_district1 =  data2.Maharashtra.districtData;
           
    $("#dmhc").append(formatter.format(my_district1.Pune.confirmed));
    $("#dmhr").append(formatter.format(my_district1.Pune.recovered));
    $("#dmhd").append(formatter.format(my_district1.Pune.deceased));
    } catch (error) {

    }
    //  mumbai
    
    const my_district2 = data2.Maharashtra.districtData;

    $("#muc").append(my_district2.Mumbai.confirmed);
    $("#mur").append(my_district2.Mumbai.recovered);
    $("#mud").append(my_district2.Mumbai.deceased);

    // Ahmednagar
    const my_district3 = data2.Maharashtra.districtData;

    $("#ahc").append(my_district3.Ahmednagar.confirmed);
    $("#ahr").append(my_district3.Ahmednagar.recovered);
    $("#ahd").append(my_district3.Ahmednagar.deceased);
    // Thane
    const my_district4 = data2.Maharashtra.districtData;

    $("#thc").append(my_district4.Thane.confirmed);
    $("#thr").append(my_district4.Thane.recovered);
    $("#thd").append(my_district4.Thane.deceased);
    // Nagpur
    const my_district5 = data2.Maharashtra.districtData;

    $("#Nagc").append(my_district5.Nagpur.confirmed);
    $("#Nagr").append(my_district5.Nagpur.recovered);
    $("#Nagd").append(my_district5.Nagpur.deceased);
    // nasik
    const my_district6 = data2.Maharashtra.districtData;

    $("#nasikc").append(my_district6.Nashik.confirmed);
    $("#nasikr").append(my_district6.Nashik.recovered);
    $("#nasikd").append(my_district6.Nashik.deceased);
    // Satara    
    const my_district7 = data2.Maharashtra.districtData;

    $("#satarac").append(my_district7.Satara.confirmed);
    $("#satarar").append(my_district7.Satara.recovered);
    $("#satarad").append(my_district7.Satara.deceased);
    // Kolhapur
    const my_district8 = data2.Maharashtra.districtData;

    $("#kolhapurc").append(my_district8.Kolhapur.confirmed);
    $("#kolhapurr").append(my_district8.Kolhapur.recovered);
    $("#kolhapurd").append(my_district8.Kolhapur.deceased);
    //   Solapur
    const my_district9 = data2.Maharashtra.districtData;

    $("#solapurc").append(my_district9.Solapur.confirmed);
    $("#solapurr").append(my_district9.Solapur.recovered);
    $("#solapurd").append(my_district9.Solapur.deceased);
    //     // Raigad
    const my_district10 = data2.Maharashtra.districtData;

    $("#raigadc").append(my_district10.Raigad.confirmed);
    $("#raigadr").append(my_district10.Raigad.recovered);
    $("#raigadd").append(my_district10.Raigad.deceased);
    //   // Sangli
    const my_district11 = data2.Maharashtra.districtData;

    $("#sanglic").append(my_district11.Sangli.confirmed);
    $("#sanglir").append(my_district11.Sangli.recovered);
    $("#sanglid").append(my_district11.Sangli.deceased);
    //     // Aurangabad
    const my_district12 = data2.Maharashtra.districtData;

    $("#aurngc").append(my_district12.Aurangabad.confirmed);
    $("#aurngr").append(my_district12.Aurangabad.recovered);
    $("#aurngd").append(my_district12.Aurangabad.deceased);
    //   // Jalgon
    const my_district13 = data2.Maharashtra.districtData;

    $("#jalgonc").append(my_district13.Jalgaon.confirmed);
    $("#jalgonr").append(my_district13.Jalgaon.recovered);
    $("#jalgond").append(my_district13.Jalgaon.deceased);
    //     // Palghar
    const my_district14 = data2.Maharashtra.districtData;

    $("#palgharc").append(my_district14.Palghar.confirmed);
    $("#palgharr").append(my_district14.Palghar.recovered);
    $("#palghard").append(my_district14.Palghar.deceased);
    //   // Beed
    const my_district15 = data2.Maharashtra.districtData;

    $("#beedc").append(my_district15.Beed.confirmed);
    $("#beedr").append(my_district15.Beed.recovered);
    $("#beedd").append(my_district15.Beed.deceased);
    //   // Amravati
    const my_district16 = data2.Maharashtra.districtData;

    $("#amravatic").append(my_district16.Amravati.confirmed);
    $("#amravatir").append(my_district16.Amravati.recovered);
    $("#amravatid").append(my_district16.Amravati.deceased);
    //   // Nanded
    const my_district19 = data2.Maharashtra.districtData;

    $("#nandedc").append(my_district19.Nanded.confirmed);
    $("#nandedr").append(my_district19.Nanded.recovered);
    $("#nandedd").append(my_district19.Nanded.deceased);
    //   // Latur
    const my_district20 = data2.Maharashtra.districtData;

    $("#laturc").append(my_district20.Latur.confirmed);
    $("#laturr").append(my_district20.Latur.recovered);
    $("#laturd").append(my_district20.Latur.deceased);
    //   // Chandrapur
    const my_district21 = data2.Maharashtra.districtData;

    $("#chandc").append(my_district21.Chandrapur.confirmed);
    $("#chandr").append(my_district21.Chandrapur.recovered);
    $("#chandd").append(my_district21.Chandrapur.deceased);
    //   // Buldhana
    const my_district22 = data2.Maharashtra.districtData;

    $("#buldhanac").append(my_district22.Buldhana.confirmed);
    $("#buldhanar").append(my_district22.Buldhana.recovered);
    $("#buldhanad").append(my_district22.Buldhana.deceased);
    //   // Yavatmal
    const my_district23 = data2.Maharashtra.districtData;

    $("#yavatmalc").append(my_district23.Yavatmal.confirmed);
    $("#yavatmalr").append(my_district23.Yavatmal.recovered);
    $("#yavatmald").append(my_district23.Yavatmal.deceased);
    //   // Ratnagiri
    const my_district24 = data2.Maharashtra.districtData;

    $("#ratnagiric").append(my_district24.Ratnagiri.confirmed);
    $("#ratnagirir").append(my_district24.Ratnagiri.recovered);
    $("#ratnagirid").append(my_district24.Ratnagiri.deceased);
    //   // Osmanabad
    const my_district25 = data2.Maharashtra.districtData;

    $("#osmac").append(my_district25.Osmanabad.confirmed);
    $("#osmar").append(my_district25.Osmanabad.recovered);
    $("#osmad").append(my_district25.Osmanabad.deceased);
    //   // Bhandara
    const my_district26 = data2.Maharashtra.districtData;

    $("#osma1c").append(my_district26.Bhandara.confirmed);
    $("#osma1r").append(my_district26.Bhandara.recovered);
    $("#osma1d").append(my_district26.Bhandara.deceased);
    //   // Jalna
    const my_district27 = data2.Maharashtra.districtData;

    $("#jalnac").append(my_district27.Jalna.confirmed);
    $("#jalnar").append(my_district27.Jalna.recovered);
    $("#jalnad").append(my_district27.Jalna.deceased);
    //   // Akola
    const my_district28 = data2.Maharashtra.districtData;

    $("#akolac").append(my_district28.Akola.confirmed);
    $("#akolar").append(my_district28.Akola.recovered);
    $("#akolad").append(my_district28.Akola.deceased);
    //   // Wardha
    const my_district29 = data2.Maharashtra.districtData;

    $("#wardhac").append(my_district29.Wardha.confirmed);
    $("#wardhar").append(my_district29.Wardha.recovered);
    $("#wardhad").append(my_district29.Wardha.deceased);
    //   // Parbhani
    const my_district30 = data2.Maharashtra.districtData;

    $("#parbhanic").append(my_district30.Parbhani.confirmed);
    $("#parbhanir").append(my_district30.Parbhani.recovered);
    $("#parbhanid").append(my_district30.Parbhani.deceased);
    // Sindhudurg
    const my_district31 = data2.Maharashtra.districtData;

    $("#sindc").append(my_district31.Sindhudurg.confirmed);
    $("#sindr").append(my_district31.Sindhudurg.recovered);
    $("#sindd").append(my_district31.Sindhudurg.deceased);
    // Dhule
    const my_district32 = data2.Maharashtra.districtData;

    $("#dhulec").append(my_district32.Dhule.confirmed);
    $("#dhuler").append(my_district32.Dhule.recovered);
    $("#dhuled").append(my_district32.Dhule.deceased);
    // Washim
    const my_district33 = data2.Maharashtra.districtData;

    $("#washimc").append(my_district33.Washim.confirmed);
    $("#washimr").append(my_district33.Washim.recovered);
    $("#washimd").append(my_district33.Washim.deceased);
    // Gondia
    const my_district34 = data2.Maharashtra.districtData;

    $("#gondiac").append(my_district34.Gondia.confirmed);
    $("#gondiar").append(my_district34.Gondia.recovered);
    $("#gondiad").append(my_district34.Gondia.deceased);
    // Nandurbar
    const my_district35 = data2.Maharashtra.districtData;

    $("#nanduc").append(my_district35.Nandurbar.confirmed);
    $("#nandur").append(my_district35.Nandurbar.recovered);
    $("#nandud").append(my_district35.Nandurbar.deceased);
    // Gadchiroli
    const my_district36 = data2.Maharashtra.districtData;

    $("#gadchc").append(my_district36.Gadchiroli.confirmed);
    $("#gadchr").append(my_district36.Gadchiroli.recovered);
    $("#gadchd").append(my_district36.Gadchiroli.deceased);
    // Hingoli
    const my_district37 = data2.Maharashtra.districtData;

    $("#hingolic").append(my_district37.Hingoli.confirmed);
    $("#hingolir").append(my_district37.Hingoli.recovered);
    $("#hingolid").append(my_district37.Hingoli.deceased);
    // Other State
    const my_district38 = data2.Maharashtra.districtData;

    $("#otherstc").append(my_district38["Other State"].confirmed);
    $("#otherstr").append(my_district38["Other State"].recovered);
    $("#otherstd").append(my_district38["Other State"].deceased);
    // Mumbai Suburban
    const my_district39 = data2.Maharashtra.districtData;

    $("#mumbaisc").append(my_district39["Mumbai Suburban"].confirmed);
    $("#mumbaisr").append(my_district39["Mumbai Suburban"].recovered);
    $("#mumbaisd").append(my_district39["Mumbai Suburban"].deceased);

    // Ladakh district
    // Kargil
    const my_district40 = data2.Ladakh.districtData;

    $("#kargilc").append(my_district40.Kargil.confirmed);
    $("#kargilr").append(my_district40.Kargil.recovered);
    $("#kargild").append(my_district40.Kargil.deceased);
    // Leh
    const my_district41 = data2.Ladakh.districtData;

    $("#lehc").append(my_district41.Leh.confirmed);
    $("#lehr").append(my_district41.Leh.recovered);
    $("#lehd").append(my_district41.Leh.deceased);

    // Goa district
    // Unknown  unknown
    const my_district42 = data2.Goa.districtData;

    $("#unknownc").append(my_district42.Unknown.confirmed);
    $("#unknownr").append(my_district42.Unknown.recovered);
    $("#unknownd").append(my_district42.Unknown.deceased);
    // Parbhani
    const my_district43 = data2.Goa.districtData;

    $("#southgoac").append(my_district43["South Goa"].confirmed);
    $("#southgoar").append(my_district43["South Goa"].recovered);
    $("#southgoad").append(my_district43["South Goa"].deceased);

    const my_district44 = data2.Goa.districtData;

    $("#northgoac").append(my_district44["North Goa"].confirmed);
    $("#northgoar").append(my_district44["North Goa"].recovered);
    $("#northgoad").append(my_district44["North Goa"].deceased);

    const my_district45 = data2.Goa.districtData;

    $("#otherstatec").append(my_district45["Other State"].confirmed);
    $("#otherstater").append(my_district45["Other State"].recovered);
    $("#otherstated").append(my_district45["Other State"].deceased);
    // Chandigarh
    const my_district46 = data2.Chandigarh.districtData;

    $("#chandic").append(my_district46.Chandigarh.confirmed);
    $("#chandir").append(my_district46.Chandigarh.recovered);
    $("#chandid").append(my_district46.Chandigarh.deceased);
    // Lakshadweep
    const my_district47 = data2.Lakshadweep.districtData;

    $("#lakshc").append(my_district47.Lakshadweep.confirmed);
    $("#lakshr").append(my_district47.Lakshadweep.recovered);
    $("#lakshd").append(my_district47.Lakshadweep.deceased);

    const my_district48 = data2.Lakshadweep.districtData;

    $("#launknownc").append(my_district48.Unknown.confirmed);
    $("#launknownr").append(my_district48.Unknown.recovered);
    $("#launknownd").append(my_district48.Unknown.deceased);
    // andaman and nicobar district
    const my_district49 = data2["Andaman and Nicobar Islands"].districtData;

    $("#andaunc").append(my_district49.Unknown.confirmed);
    $("#andaunr").append(my_district49.Unknown.recovered);
    $("#andaund").append(my_district49.Unknown.deceased);

    const my_district50 = data2["Andaman and Nicobar Islands"].districtData;

    $("#andaunsc").append(my_district50["South Andaman"].confirmed);
    $("#andaunsr").append(my_district50["South Andaman"].recovered);
    $("#andaunsd").append(my_district50["South Andaman"].deceased);

    const my_district51 = data2["Andaman and Nicobar Islands"].districtData;

    $("#andaunnc").append(my_district51["North and Middle Andaman"].confirmed);
    $("#andaunnr").append(my_district51["North and Middle Andaman"].recovered);
    $("#andaunnd").append(my_district51["North and Middle Andaman"].deceased);

    const my_district52 = data2["Andaman and Nicobar Islands"].districtData;

    $("#nicobarc").append(my_district52.Nicobars.confirmed);
    $("#nicobarr").append(my_district52.Nicobars.recovered);
    $("#nicobard").append(my_district52.Nicobars.deceased);
    // Karaikal
    const my_district53 = data2.Puducherry.districtData;

    $("#karaikalc").append(my_district53.Karaikal.confirmed);
    $("#karaikalr").append(my_district53.Karaikal.recovered);
    $("#karaikald").append(my_district53.Karaikal.deceased);

    const my_district54 = data2.Puducherry.districtData;

    $("#mahec").append(my_district54.Mahe.confirmed);
    $("#maher").append(my_district54.Mahe.recovered);
    $("#mahed").append(my_district54.Mahe.deceased);
    // Yanam
    // Parbhani
    const my_district55 = data2.Puducherry.districtData;

    $("#yanamc").append(my_district55.Yanam.confirmed);
    $("#yanamr").append(my_district55.Yanam.recovered);
    $("#yanamd").append(my_district55.Yanam.deceased);

    const my_district56 = data2.Puducherry.districtData;

    $("#puducherryc").append(my_district56.Puducherry.confirmed);
    $("#puducherryr").append(my_district56.Puducherry.recovered);
    $("#puducherryd").append(my_district56.Puducherry.deceased);

    // dadra and nigam

    const my_district57 = data2["Dadra and Nagar Haveli and Daman and Diu"].districtData;

    $("#dadrahc").append(my_district57["Dadra and Nagar Haveli"].confirmed);
    $("#dadrahr").append(my_district57["Dadra and Nagar Haveli"].recovered);
    $("#dadrahd").append(my_district57["Dadra and Nagar Haveli"].deceased);

    const my_district58 = data2["Dadra and Nagar Haveli and Daman and Diu"].districtData;

    $("#damanc").append(my_district58.Daman.confirmed);
    $("#damanr").append(my_district58.Daman.recovered);
    $("#damand").append(my_district58.Daman.deceased);

    const my_district59 = data2["Dadra and Nagar Haveli and Daman and Diu"].districtData;

    $("#diuc").append(my_district59.Diu.confirmed);
    $("#diur").append(my_district59.Diu.recovered);
    $("#diud").append(my_district59.Diu.deceased);

    const my_district60 = data2["Dadra and Nagar Haveli and Daman and Diu"].districtData;

    $("#dadraotherc").append(my_district60["Other State"].confirmed);
    $("#dadraotherr").append(my_district60["Other State"].recovered);
    $("#dadraotherd").append(my_district60["Other State"].deceased);
    // sikkim district
    const my_district61 = data2.Sikkim.districtData;

    $("#sikkimec").append(my_district61["East Sikkim"].confirmed);
    $("#sikkimer").append(my_district61["East Sikkim"].recovered);
    $("#sikkimed").append(my_district61["East Sikkim"].deceased);

    const my_district62 = data2.Sikkim.districtData;

    $("#sikkimnc").append(my_district62["North Sikkim"].confirmed);
    $("#sikkimnr").append(my_district62["North Sikkim"].recovered);
    $("#sikkimnd").append(my_district62["North Sikkim"].deceased);
    const my_district63 = data2.Sikkim.districtData;

    $("#sikkimwc").append(my_district63["West Sikkim"].confirmed);
    $("#sikkimwr").append(my_district63["West Sikkim"].recovered);
    $("#sikkimwd").append(my_district63["West Sikkim"].deceased);

    const my_district64 = data2.Sikkim.districtData;

    $("#sikkimsc").append(my_district64["South Sikkim"].confirmed);
    $("#sikkimsr").append(my_district64["South Sikkim"].recovered);
    $("#sikkimsd").append(my_district64["South Sikkim"].deceased);

    const my_district65 = data2.Sikkim.districtData;

    $("#sikkimunknownc").append(my_district65.Unknown.confirmed);
    $("#sikkimunknownr").append(my_district65.Unknown.recovered);
    $("#sikkimunknownd").append(my_district65.Unknown.deceased);
    //  tripura distict
    // Dhalai Gomati Khowai
    const my_district66 = data2.Tripura.districtData;

    $("#Dhalaic").append(my_district66.Dhalai.confirmed);
    $("#Dhalair").append(my_district66.Dhalai.recovered);
    $("#Dhalaid").append(my_district66.Dhalai.deceased);

    const my_district67 = data2.Tripura.districtData;

    $("#Gomatic").append(my_district67.Gomati.confirmed);
    $("#Gomatir").append(my_district67.Gomati.recovered);
    $("#Gomatid").append(my_district67.Gomati.deceased);

    const my_district68 = data2.Tripura.districtData;

    $("#Khowaic").append(my_district68.Khowai.confirmed);
    $("#Khowair").append(my_district68.Khowai.recovered);
    $("#Khowaid").append(my_district68.Khowai.deceased);

    const my_district69 = data2.Tripura.districtData;

    $("#Sipahijalac").append(my_district69.Sipahijala.confirmed);
    $("#Sipahijalar").append(my_district69.Sipahijala.recovered);
    $("#Sipahijalad").append(my_district69.Sipahijala.deceased);

    const my_district70 = data2.Tripura.districtData;

    $("#Unokotic").append(my_district70.Unokoti.confirmed);
    $("#Unokotir").append(my_district70.Unokoti.recovered);
    $("#Unokotid").append(my_district70.Unokoti.deceased);
    // Parbhani
    const my_district71 = data2.Tripura.districtData;

    $("#southtripurac").append(my_district71["South Tripura"].confirmed);
    $("#southtripurar").append(my_district71["South Tripura"].recovered);
    $("#southtripurad").append(my_district71["South Tripura"].deceased);

    const my_district72 = data2.Tripura.districtData;

    $("#northtripurac").append(my_district72["North Tripura"].confirmed);
    $("#northtripurar").append(my_district72["North Tripura"].recovered);
    $("#northtripurad").append(my_district72["North Tripura"].deceased);

    const my_district73 = data2.Tripura.districtData;

    $("#westtripurac").append(my_district73["West Tripura"].confirmed);
    $("#westtripurar").append(my_district73["West Tripura"].recovered);
    $("#westtripurad").append(my_district73["West Tripura"].deceased);

    // Mizoram  DISTRICT
    const my_district74 = data2.Mizoram.districtData;

    $("#Aizawlc").append(my_district74.Aizawl.confirmed);
    $("#Aizawlr").append(my_district74.Aizawl.recovered);
    $("#Aizawld").append(my_district74.Aizawl.deceased);

      const my_district75 = data2.Mizoram.districtData;

    $("#Lungleic").append(my_district75.Lunglei.confirmed);
    $("#Lungleir").append(my_district75.Lunglei.recovered);
    $("#Lungleid").append(my_district75.Lunglei.deceased);

      const my_district76 = data2.Mizoram.districtData;

    $("#Kolasibc").append(my_district76.Kolasib.confirmed);
    $("#Kolasibr").append(my_district76.Kolasib.recovered);
    $("#Kolasibd").append(my_district76.Kolasib.deceased);

      const my_district77 = data2.Mizoram.districtData;

    $("#Lawngtlaic").append(my_district77.Lawngtlai.confirmed);
    $("#Lawngtlair").append(my_district77.Lawngtlai.recovered);
    $("#Lawngtlaid").append(my_district77.Lawngtlai.deceased);

    const my_district78 = data2.Mizoram.districtData;

    $("#Serchhipc").append(my_district78.Serchhip.confirmed);
    $("#Serchhipr").append(my_district78.Serchhip.recovered);
    $("#Serchhipd").append(my_district78.Serchhip.deceased);

    //   const my_district78 = data2.Mizoram.districtData;

    // $(#Serchhipc").append(my_district78.Serchhip.confirmed);
    // $(#Serchhipr").append(my_district78.Serchhip.recovered);
    // $(#Serchhipd").append(my_district78.Serchhip.deceased);

      const my_district79 = data2.Mizoram.districtData;

    $("#Mamitc").append(my_district79.Mamit.confirmed);
    $("#Mamitr").append(my_district79.Mamit.recovered);
    $("#Mamitd").append(my_district79.Mamit.deceased);

      const my_district80 = data2.Mizoram.districtData;

    $("#Saihac").append(my_district80.Saiha.confirmed);
    $("#Saihar").append(my_district80.Saiha.recovered);
    $("#Saihad").append(my_district80.Saiha.deceased);

      const my_district81 = data2.Mizoram.districtData;

    $("#Champhaic").append(my_district81.Champhai.confirmed);
    $("#Champhair").append(my_district81.Champhai.recovered);
    $("#Champhaid").append(my_district81.Champhai.deceased);

      const my_district82 = data2.Mizoram.districtData;

    $("#Saitualc").append(my_district82.Saitual.confirmed);
    $("#Saitualr").append(my_district82.Saitual.recovered);
    $("#Saituald").append(my_district82.Saitual.deceased);

      const my_district83 = data2.Mizoram.districtData;

    $("#Khawzawlc").append(my_district83.Khawzawl.confirmed);
    $("#Khawzawlr").append(my_district83.Khawzawl.recovered);
    $("#Khawzawld").append(my_district83.Khawzawl.deceased);

      const my_district84 = data2.Mizoram.districtData;

    $("#Hnahthialc").append(my_district84.Hnahthial.confirmed);
    $("#Hnahthialr").append(my_district84.Hnahthial.recovered);
    $("#Hnahthiald").append(my_district84.Hnahthial.deceased);

    // Meghalaya
    // Parbhani
    const my_district85 = data2.Meghalaya.districtData;

    $("#EastGaroHillsc").append(my_district85["East Garo Hills"].confirmed);
    $("#EastGaroHillsr").append(my_district85["East Garo Hills"].recovered);
    $("#EastGaroHillsd").append(my_district85["East Garo Hills"].deceased);

     const my_district86 = data2.Meghalaya.districtData;

    $("#WestGaroHillsc").append(my_district86["West Garo Hills"].confirmed);
    $("#WestGaroHillsr").append(my_district86["West Garo Hills"].recovered);
    $("#WestGaroHillsd").append(my_district86["West Garo Hills"].deceased);

     const my_district87 = data2.Meghalaya.districtData;

    $("#SouthGaroHillsc").append(my_district87["South Garo Hills"].confirmed);
    $("#SouthGaroHillsr").append(my_district87["South Garo Hills"].recovered);
    $("#SouthGaroHillsd").append(my_district87["South Garo Hills"].deceased);

     const my_district88 = data2.Meghalaya.districtData;

    $("#NorthGaroHillsc").append(my_district88["North Garo Hills"].confirmed);
    $("#NorthGaroHillsr").append(my_district88["North Garo Hills"].recovered);
    $("#NorthGaroHillsd").append(my_district88["North Garo Hills"].deceased);
     const my_district89 = data2.Meghalaya.districtData;

    $("#SouthWestGaroHillsc").append(my_district89["South West Garo Hills"].confirmed);
    $("#SouthWestGaroHillsr").append(my_district89["South West Garo Hills"].recovered);
    $("#SouthWestGaroHillsd").append(my_district89["South West Garo Hills"].deceased);

     const my_district90 = data2.Meghalaya.districtData;

    $("#WestKhasiHillsc").append(my_district90["West Khasi Hills"].confirmed);
    $("#WestKhasiHillsr").append(my_district90["West Khasi Hills"].recovered);
    $("#WestKhasiHillsd").append(my_district90["West Khasi Hills"].deceased);

     const my_district91 = data2.Meghalaya.districtData;

    $("#EastKhasiHillsc").append(my_district91["East Khasi Hills"].confirmed);
    $("#EastKhasiHillsr").append(my_district91["East Khasi Hills"].recovered);
    $("#EastKhasiHillsd").append(my_district91["East Khasi Hills"].deceased);

     const my_district92 = data2.Meghalaya.districtData;

    $("#SouthWestKhasiHillsc").append(my_district92["South West Khasi Hills"].confirmed);
    $("#SouthWestKhasiHillsr").append(my_district92["South West Khasi Hills"].recovered);
    $("#SouthWestKhasiHillsd").append(my_district92["South West Khasi Hills"].deceased);

     const my_district93 = data2.Meghalaya.districtData;

    $("#Ribhoic").append(my_district93.Ribhoi.confirmed);
    $("#Ribhoir").append(my_district93.Ribhoi.recovered);
    $("#Ribhoid").append(my_district93.Ribhoi.deceased);

     const my_district94 = data2.Meghalaya.districtData;

    $("#WestJaintiaHillsc").append(my_district94["West Jaintia Hills"].confirmed);
    $("#WestJaintiaHillsr").append(my_district94["West Jaintia Hills"].recovered);
    $("#WestJaintiaHillsd").append(my_district94["West Jaintia Hills"].deceased);

     const my_district95 = data2.Meghalaya.districtData;

    $("#EastJaintiaHillsc").append(my_district95["East Jaintia Hills"].confirmed);
    $("#EastJaintiaHillsr").append(my_district95["East Jaintia Hills"].recovered);
    $("#EastJaintiaHillsd").append(my_district95["East Jaintia Hills"].deceased);
    // Nagaland District
    const my_district96 = data2.Nagaland.districtData;

    $("#Dimapurc").append(my_district96.Dimapur.confirmed);
    $("#Dimapurr").append(my_district96.Dimapur.recovered);
    $("#Dimapurd").append(my_district96.Dimapur.deceased);

     const my_district97 = data2.Nagaland.districtData;

    $("#Kohimac").append(my_district97.Kohima.confirmed);
    $("#Kohimar").append(my_district97.Kohima.recovered);
    $("#Kohimad").append(my_district97.Kohima.deceased);

     const my_district98 = data2.Nagaland.districtData;

    $("#Mokokchungc").append(my_district98.Mokokchung.confirmed);
    $("#Mokokchungr").append(my_district98.Mokokchung.recovered);
    $("#Mokokchungd").append(my_district98.Mokokchung.deceased);

     const my_district99 = data2.Nagaland.districtData;

    $("#Monc").append(my_district99.Mon.confirmed);
    $("#Monr").append(my_district99.Mon.recovered);
    $("#Mond").append(my_district99.Mon.deceased);

     const my_district100 = data2.Nagaland.districtData;

    $("#Tuensangc").append(my_district100.Tuensang.confirmed);
    $("#Tuensangr").append(my_district100.Tuensang.recovered);
    $("#Tuensangd").append(my_district100.Tuensang.deceased);

     const my_district101 = data2.Nagaland.districtData;

    $("#Perenc").append(my_district101.Peren.confirmed);
    $("#Perenr").append(my_district101.Peren.recovered);
    $("#Perend").append(my_district101.Peren.deceased);

     const my_district102 = data2.Nagaland.districtData;

    $("#Zunhebotoc").append(my_district102.Zunheboto.confirmed);
    $("#Zunhebotor").append(my_district102.Zunheboto.recovered);
    $("#Zunhebotod").append(my_district102.Zunheboto.deceased);

     const my_district103 = data2.Nagaland.districtData;

    $("#Phekc").append(my_district103.Phek.confirmed);
    $("#Phekr").append(my_district103.Phek.recovered);
    $("#Phekd").append(my_district103.Phek.deceased);

     const my_district104 = data2.Nagaland.districtData;

    $("#Wokhac").append(my_district104.Wokha.confirmed);
    $("#Wokhar").append(my_district104.Wokha.recovered);
    $("#Wokhad").append(my_district104.Wokha.deceased);

     const my_district105 = data2.Nagaland.districtData;

    $("#Longlengc").append(my_district105.Longleng.confirmed);
    $("#Longlengr").append(my_district105.Longleng.recovered);
    $("#Longlengd").append(my_district105.Longleng.deceased);

     const my_district106 = data2.Nagaland.districtData;

    $("#Kiphirec").append(my_district106.Kiphire.confirmed);
    $("#Kiphirer").append(my_district106.Kiphire.recovered);
    $("#Kiphired").append(my_district106.Kiphire.deceased);

     const my_district107 = data2.Nagaland.districtData;

    $("#Othersc").append(my_district107.Others.confirmed);
    $("#Othersr").append(my_district107.Others.recovered);
    $("#Othersd").append(my_district107.Others.deceased);
    // himachal predesh
    const my_district108 = data2["Himachal Pradesh"].districtData;

    $("#Kangrac").append(my_district108.Kangra.confirmed);
    $("#Kangrar").append(my_district108.Kangra.recovered);
    $("#Kangrad").append(my_district108.Kangra.deceased);

     const my_district109 = data2["Himachal Pradesh"].districtData;

    $("#Mandic").append(my_district109.Mandi.confirmed);
    $("#Mandir").append(my_district109.Mandi.recovered);
    $("#Mandid").append(my_district109.Mandi.deceased);

     const my_district110 = data2["Himachal Pradesh"].districtData;

    $("#Shimlac").append(my_district110.Shimla.confirmed);
    $("#Shimlar").append(my_district110.Shimla.recovered);
    $("#Shimlad").append(my_district110.Shimla.deceased);

     const my_district111 = data2["Himachal Pradesh"].districtData;

    $("#Solanc").append(my_district111.Solan.confirmed);
    $("#Solanr").append(my_district111.Solan.recovered);
    $("#Soland").append(my_district111.Solan.deceased);

     const my_district112 = data2["Himachal Pradesh"].districtData;

    $("#Sirmaurc").append(my_district112.Sirmaur.confirmed);
    $("#Sirmaurr").append(my_district112.Sirmaur.recovered);
    $("#Sirmaurd").append(my_district112.Sirmaur.deceased);

     const my_district113 = data2["Himachal Pradesh"].districtData;

    $("#Hamirpurc").append(my_district113.Hamirpur.confirmed);
    $("#Hamirpurr").append(my_district113.Hamirpur.recovered);
    $("#Hamirpurd").append(my_district113.Hamirpur.deceased);

     const my_district114 = data2["Himachal Pradesh"].districtData;

    $("#Unac").append(my_district114.Una.confirmed);
    $("#Unar").append(my_district114.Una.recovered);
    $("#Unad").append(my_district114.Una.deceased);

     const my_district115 = data2["Himachal Pradesh"].districtData;

    $("#Bilaspurhc").append(my_district115.Bilaspur.confirmed);
    $("#Bilaspurhr").append(my_district115.Bilaspur.recovered);
    $("#Bilaspurhd").append(my_district115.Bilaspur.deceased);

     const my_district116 = data2["Himachal Pradesh"].districtData;

    $("#Chambac").append(my_district116.Chamba.confirmed);
    $("#Chambar").append(my_district116.Chamba.recovered);
    $("#Chambad").append(my_district116.Chamba.deceased);

     const my_district117 = data2["Himachal Pradesh"].districtData;

    $("#Kulluc").append(my_district117.Kullu.confirmed);
    $("#Kullur").append(my_district117.Kullu.recovered);
    $("#Kullud").append(my_district117.Kullu.deceased);

     const my_district118 = data2["Himachal Pradesh"].districtData;

    $("#Kinnaurc").append(my_district118.Kinnaur.confirmed);
    $("#Kinnaurr").append(my_district118.Kinnaur.recovered);
    $("#Kinnaurd").append(my_district118.Kinnaur.deceased);

     const my_district119 = data2["Himachal Pradesh"].districtData;

    $("#LahaulandSpitic").append(my_district119["Lahaul and Spiti"].confirmed);
    $("#LahaulandSpitir").append(my_district119["Lahaul and Spiti"].recovered);
    $("#LahaulandSpitid").append(my_district119["Lahaul and Spiti"].deceased);
    // Andhra predesh
    const my_district120 = data2["Andhra Pradesh"].districtData;

    $("#OtherStatec").append(my_district120["Other State"].confirmed);
    $("#OtherStater").append(my_district120["Other State"].recovered);
    $("#OtherStated").append(my_district120["Other State"].deceased);

    const my_district121 = data2["Andhra Pradesh"].districtData;

    $("#Vizianagaramc").append(my_district121.Vizianagaram.confirmed);
    $("#Vizianagaramr").append(my_district121.Vizianagaram.recovered);
    $("#Vizianagaramd").append(my_district121.Vizianagaram.deceased);

    const my_district122 = data2["Andhra Pradesh"].districtData;

    $("#Krishnac").append(my_district122.Krishna.confirmed);
    $("#Krishnar").append(my_district122.Krishna.recovered);
    $("#Krishnad").append(my_district122.Krishna.deceased);

    const my_district123 = data2["Andhra Pradesh"].districtData;

    $("#YSRKadapac").append(my_district123["Y.S.R. Kadapa"].confirmed);
    $("#YSRKadapar").append(my_district123["Y.S.R. Kadapa"].recovered);
    $("#YSRKadapad").append(my_district123["Y.S.R. Kadapa"].deceased);

    const my_district124 = data2["Andhra Pradesh"].districtData;

    $("#Srikakulamc").append(my_district124.Srikakulam.confirmed);
    $("#Srikakulamr").append(my_district124.Srikakulam.recovered);
    $("#Srikakulamd").append(my_district124.Srikakulam.deceased);

    const my_district125 = data2["Andhra Pradesh"].districtData;

    $("#Kurnoolc").append(my_district125.Kurnool.confirmed);
    $("#Kurnoolr").append(my_district125.Kurnool.recovered);
    $("#Kurnoold").append(my_district125.Kurnool.deceased);

    const my_district126 = data2["Andhra Pradesh"].districtData;

    $("#Prakasamc").append(my_district126.Prakasam.confirmed);
    $("#Prakasamr").append(my_district126.Prakasam.recovered);
    $("#Prakasamd").append(my_district126.Prakasam.deceased);

    const my_district127 = data2["Andhra Pradesh"].districtData;

    $("#SPSNellorec").append(my_district127["S.P.S. Nellore"].confirmed);
    $("#SPSNellorer").append(my_district127["S.P.S. Nellore"].recovered);
    $("#SPSNellored").append(my_district127["S.P.S. Nellore"].deceased);

    const my_district128 = data2["Andhra Pradesh"].districtData;

    $("#Visakhapatnamc").append(my_district128.Visakhapatnam.confirmed);
    $("#Visakhapatnamr").append(my_district128.Visakhapatnam.recovered);
    $("#Visakhapatnamd").append(my_district128.Visakhapatnam.deceased);

    const my_district129 = data2["Andhra Pradesh"].districtData;

    $("#Anantapurc").append(my_district129.Anantapur.confirmed);
    $("#Anantapurr").append(my_district129.Anantapur.recovered);
    $("#Anantapurd").append(my_district129.Anantapur.deceased);

    const my_district130 = data2["Andhra Pradesh"].districtData;

    $("#WestGodavaric").append(my_district130["West Godavari"].confirmed);
    $("#WestGodavarir").append(my_district130["West Godavari"].recovered);
    $("#WestGodavarid").append(my_district130["West Godavari"].deceased);

    const my_district131 = data2["Andhra Pradesh"].districtData;

    $("#Chittoorc").append(my_district131.Chittoor.confirmed);
    $("#Chittoorr").append(my_district131.Chittoor.recovered);
    $("#Chittoord").append(my_district131.Chittoor.deceased);

    const my_district132 = data2["Andhra Pradesh"].districtData;

    $("#EastGodavaric").append(my_district132["East Godavari"].confirmed);
    $("#EastGodavarir").append(my_district132["East Godavari"].recovered);
    $("#EastGodavarid").append(my_district132["East Godavari"].deceased);

    const my_district133 = data2["Andhra Pradesh"].districtData;

    $("#Gunturc").append(my_district133.Guntur.confirmed);
    $("#Gunturr").append(my_district133.Guntur.recovered);
    $("#Gunturd").append(my_district133.Guntur.deceased);

    // uttarakhand
    const my_district134 = data2.Uttarakhand.districtData;

    $("#Bageshwarc").append(my_district134.Bageshwar.confirmed);
    $("#Bageshwarr").append(my_district134.Bageshwar.recovered);
    $("#Bageshward").append(my_district134.Bageshwar.deceased);

     const my_district1500 = data2.Uttarakhand.districtData;

    $("#Dehradunc").append(my_district1500.Dehradun.confirmed);
    $("#Dehradunr").append(my_district1500.Dehradun.recovered);
    $("#Dehradund").append(my_district1500.Dehradun.deceased);

     const my_district135 = data2.Uttarakhand.districtData;

    $("#Haridwarc").append(my_district135.Haridwar.confirmed);
    $("#Haridwarr").append(my_district135.Haridwar.recovered);
    $("#Haridward").append(my_district135.Haridwar.deceased);

     const my_district136 = data2.Uttarakhand.districtData;

    $("#Nainitalc").append(my_district136.Nainital.confirmed);
    $("#Nainitalr").append(my_district136.Nainital.recovered);
    $("#Nainitald").append(my_district136.Nainital.deceased);

     const my_district137 = data2.Uttarakhand.districtData;

    $("#UdhamSinghNagarc").append(my_district137["Udham Singh Nagar"].confirmed);
    $("#UdhamSinghNagarr").append(my_district137["Udham Singh Nagar"].recovered);
    $("#UdhamSinghNagard").append(my_district137["Udham Singh Nagar"].deceased);

     const my_district138 = data2.Uttarakhand.districtData;

    $("#PauriGarhwalc").append(my_district138["Pauri Garhwal"].confirmed);
    $("#PauriGarhwalr").append(my_district138["Pauri Garhwal"].recovered);
    $("#PauriGarhwald").append(my_district138["Pauri Garhwal"].deceased);

     const my_district139 = data2.Uttarakhand.districtData;

    $("#TehriGarhwalc").append(my_district139["Tehri Garhwal"].confirmed);
    $("#TehriGarhwalr").append(my_district139["Tehri Garhwal"].recovered);
    $("#TehriGarhwald").append(my_district139["Tehri Garhwal"].deceased);

     const my_district140 = data2.Uttarakhand.districtData;

    $("#Uttarkashic").append(my_district140.Uttarkashi.confirmed);
    $("#Uttarkashir").append(my_district140.Uttarkashi.recovered);
    $("#Uttarkashid").append(my_district140.Uttarkashi.deceased);

     const my_district141 = data2.Uttarakhand.districtData;

    $("#Chamolic").append(my_district141.Chamoli.confirmed);
    $("#Chamolir").append(my_district141.Chamoli.recovered);
    $("#Chamolid").append(my_district141.Chamoli.deceased);

     const my_district142 = data2.Uttarakhand.districtData;

    $("#Almorac").append(my_district142.Almora.confirmed);
    $("#Almorar").append(my_district142.Almora.recovered);
    $("#Almorad").append(my_district142.Almora.deceased);

     const my_district143 = data2.Uttarakhand.districtData;

    $("#Pithoragarhc").append(my_district143.Pithoragarh.confirmed);
    $("#Pithoragarhr").append(my_district143.Pithoragarh.recovered);
    $("#Pithoragarhd").append(my_district143.Pithoragarh.deceased);

     const my_district144 = data2.Uttarakhand.districtData;

    $("#Rudraprayagc").append(my_district144.Rudraprayag.confirmed);
    $("#Rudraprayagr").append(my_district144.Rudraprayag.recovered);
    $("#Rudraprayagd").append(my_district144.Rudraprayag.deceased);

     const my_district145 = data2.Uttarakhand.districtData;

    $("#Champawatc").append(my_district145.Champawat.confirmed);
    $("#Champawatr").append(my_district145.Champawat.recovered);
    $("#Champawatd").append(my_district145.Champawat.deceased);

    // kerala

     const my_district146 = data2.Kerala.districtData;

    $("#Ernakulamc").append(my_district146.Ernakulam.confirmed);
    $("#Ernakulamr").append(my_district146.Ernakulam.recovered);
    $("#Ernakulamd").append(my_district146.Ernakulam.deceased);

     const my_district147 = data2.Kerala.districtData;

    $("#Malappuramc").append(my_district147.Malappuram.confirmed);
    $("#Malappuramr").append(my_district147.Malappuram.recovered);
    $("#Malappuramd").append(my_district147.Malappuram.deceased);
     const my_district148 = data2.Kerala.districtData;

    $("#Kozhikodec").append(my_district148.Kozhikode.confirmed);
    $("#Kozhikoder").append(my_district148.Kozhikode.recovered);
    $("#Kozhikoded").append(my_district148.Kozhikode.deceased);

     const my_district149 = data2.Kerala.districtData;

    $("#Thiruvananthapuramc").append(my_district149.Thiruvananthapuram.confirmed);
    $("#Thiruvananthapuramr").append(my_district149.Thiruvananthapuram.recovered);
    $("#Thiruvananthapuramd").append(my_district149.Thiruvananthapuram.deceased);

     const my_district150 = data2.Kerala.districtData;

    $("#Thrissurc").append(my_district150.Thrissur.confirmed);
    $("#Thrissurr").append(my_district150.Thrissur.recovered);
    $("#Thrissurd").append(my_district150.Thrissur.deceased);

     const my_district151 = data2.Kerala.districtData;

    $("#Kollamc").append(my_district151.Kollam.confirmed);
    $("#Kollamr").append(my_district151.Kollam.recovered);
    $("#Kollamd").append(my_district151.Kollam.deceased);

     const my_district152 = data2.Kerala.districtData;

    $("#Palakkadc").append(my_district152.Palakkad.confirmed);
    $("#Palakkadr").append(my_district152.Palakkad.recovered);
    $("#Palakkadd").append(my_district152.Palakkad.deceased);

     const my_district153 = data2.Kerala.districtData;

    $("#Alappuzhac").append(my_district153.Alappuzha.confirmed);
    $("#Alappuzhar").append(my_district153.Alappuzha.recovered);
    $("#Alappuzhad").append(my_district153.Alappuzha.deceased);

     const my_district154 = data2.Kerala.districtData;

    $("#Kottayamc").append(my_district154.Kottayam.confirmed);
    $("#Kottayamr").append(my_district154.Kottayam.recovered);
    $("#Kottayamd").append(my_district154.Kottayam.deceased);

     const my_district155 = data2.Kerala.districtData;

    $("#Kannurc").append(my_district155.Kannur.confirmed);
    $("#Kannurr").append(my_district155.Kannur.recovered);
    $("#Kannurd").append(my_district155.Kannur.deceased);

     const my_district156 = data2.Kerala.districtData;

    $("#Pathanamthittac").append(my_district156.Pathanamthitta.confirmed);
    $("#Pathanamthittar").append(my_district156.Pathanamthitta.recovered);
    $("#Pathanamthittad").append(my_district156.Pathanamthitta.deceased);

     const my_district157 = data2.Kerala.districtData;

    $("#Kasaragodc").append(my_district157.Kasaragod.confirmed);
    $("#Kasaragodr").append(my_district157.Kasaragod.recovered);
    $("#Kasaragodd").append(my_district157.Kasaragod.deceased);

     const my_district158 = data2.Kerala.districtData;

    $("#Idukkic").append(my_district158.Idukki.confirmed);
    $("#Idukkir").append(my_district158.Idukki.recovered);
    $("#Idukkid").append(my_district158.Idukki.deceased);

     const my_district159 = data2.Kerala.districtData;

    $("#Wayanadc").append(my_district159.Wayanad.confirmed);
    $("#Wayanadr").append(my_district159.Wayanad.recovered);
    $("#Wayanadd").append(my_district159.Wayanad.deceased);

     const my_district160 = data2.Kerala.districtData;

    $("#OtherStatekc").append(my_district160["Other State"].confirmed);
    $("#OtherStatekr").append(my_district160["Other State"].recovered);
    $("#OtherStatekd").append(my_district160["Other State"].deceased);

    // manipur

     const my_district161 = data2.Manipur.districtData;

    $("#ImphalWestc").append(my_district161["Imphal West"].confirmed);
    $("#ImphalWestr").append(my_district161["Imphal West"].recovered);
    $("#ImphalWestd").append(my_district161["Imphal West"].deceased);

     const my_district162 = data2.Manipur.districtData;

    $("#ImphalEastc").append(my_district162["Imphal East"].confirmed);
    $("#ImphalEastr").append(my_district162["Imphal East"].recovered);
    $("#ImphalEastd").append(my_district162["Imphal East"].deceased);

     const my_district163 = data2.Manipur.districtData;

    $("#Thoubalc").append(my_district163.Thoubal.confirmed);
    $("#Thoubalr").append(my_district163.Thoubal.recovered);
    $("#Thoubald").append(my_district163.Thoubal.deceased);

     const my_district164 = data2.Manipur.districtData;

    $("#Churachandpurc").append(my_district164.Churachandpur.confirmed);
    $("#Churachandpurr").append(my_district164.Churachandpur.recovered);
    $("#Churachandpurd").append(my_district164.Churachandpur.deceased);

     const my_district165 = data2.Manipur.districtData;

    $("#Bishnupurc").append(my_district165.Bishnupur.confirmed);
    $("#Bishnupurr").append(my_district165.Bishnupur.recovered);
    $("#Bishnupurd").append(my_district165.Bishnupur.deceased);

     const my_district166 = data2.Manipur.districtData;

    $("#Kakchingc").append(my_district166.Kakching.confirmed);
    $("#Kakchingr").append(my_district166.Kakching.recovered);
    $("#Kakchingd").append(my_district166.Kakching.deceased);

     const my_district167 = data2.Manipur.districtData;

    $("#CAPFPersonnelc").append(my_district167["CAPF Personnel"].confirmed);
    $("#CAPFPersonnelr").append(my_district167["CAPF Personnel"].recovered);
    $("#CAPFPersonneld").append(my_district167["CAPF Personnel"].deceased);

     const my_district168 = data2.Manipur.districtData;

    $("#Tamenglongc").append(my_district168.Tamenglong.confirmed);
    $("#Tamenglongr").append(my_district168.Tamenglong.recovered);
    $("#Tamenglongd").append(my_district168.Tamenglong.deceased);

     const my_district169 = data2.Manipur.districtData;

    $("#Unknownc").append(my_district169.Unknown.confirmed);
    $("#Unknownr").append(my_district169.Unknown.recovered);
    $("#Unknownd").append(my_district169.Unknown.deceased);

     const my_district170 = data2.Manipur.districtData;

    $("#Kangpokpic").append(my_district170.Kangpokpi.confirmed);
    $("#Kangpokpir").append(my_district170.Kangpokpi.recovered);
    $("#Kangpokpid").append(my_district170.Kangpokpi.deceased);

     const my_district171 = data2.Manipur.districtData;

    $("#Ukhrulc").append(my_district171.Ukhrul.confirmed);
    $("#Ukhrulr").append(my_district171.Ukhrul.recovered);
    $("#Ukhruld").append(my_district171.Ukhrul.deceased);

     const my_district173 = data2.Manipur.districtData;

    $("#Senapatic").append(my_district173.Senapati.confirmed);
    $("#Senapatir").append(my_district173.Senapati.recovered);
    $("#Senapatid").append(my_district173.Senapati.deceased);

     const my_district172 = data2.Manipur.districtData;

    $("#Chandelc").append(my_district172.Chandel.confirmed);
    $("#Chandelr").append(my_district172.Chandel.recovered);
    $("#Chandeld").append(my_district172.Chandel.deceased);

     const my_district174 = data2.Manipur.districtData;

    $("#Jiribamc").append(my_district174.Jiribam.confirmed);
    $("#Jiribamr").append(my_district174.Jiribam.recovered);
    $("#Jiribamd").append(my_district174.Jiribam.deceased);

     const my_district175 = data2.Manipur.districtData;

    $("#Tengnoupalc").append(my_district175.Tengnoupal.confirmed);
    $("#Tengnoupalr").append(my_district175.Tengnoupal.recovered);
    $("#Tengnoupald").append(my_district175.Tengnoupal.deceased);

     const my_district176 = data2.Manipur.districtData;

    $("#Noneyc").append(my_district176.Noney.confirmed);
    $("#Noneyr").append(my_district176.Noney.recovered);
    $("#Noneyd").append(my_district176.Noney.deceased);

     const my_district177 = data2.Manipur.districtData;

    $("#Kamjongc").append(my_district177.Kamjong.confirmed);
    $("#Kamjongr").append(my_district177.Kamjong.recovered);
    $("#Kamjongd").append(my_district177.Kamjong.deceased);

     const my_district178 = data2.Manipur.districtData;

    $("#Pherzawlc").append(my_district178.Pherzawl.confirmed);
    $("#Pherzawlr").append(my_district178.Pherzawl.recovered);
    $("#Pherzawld").append(my_district178.Pherzawl.deceased);
      
    // jammu and kashmir district
     const my_district179 = data2["Jammu and Kashmir"].districtData;

    $("#Anantnagc").append(my_district179.Anantnag.confirmed);
    $("#Anantnagr").append(my_district179.Anantnag.recovered);
    $("#Anantnagd").append(my_district179.Anantnag.deceased);

      const my_district180 = data2["Jammu and Kashmir"].districtData;

    $("#Srinagarc").append(my_district180.Srinagar.confirmed);
    $("#Srinagarr").append(my_district180.Srinagar.recovered);
    $("#Srinagard").append(my_district180.Srinagar.deceased);

      const my_district181 = data2["Jammu and Kashmir"].districtData;

    $("#Jammuc").append(my_district181.Jammu.confirmed);
    $("#Jammur").append(my_district181.Jammu.recovered);
    $("#Jammud").append(my_district181.Jammu.deceased);

      const my_district182 = data2["Jammu and Kashmir"].districtData;

    $("#Baramullac").append(my_district182.Baramulla.confirmed);
    $("#Baramullar").append(my_district182.Baramulla.recovered);
    $("#Baramullad").append(my_district182.Baramulla.deceased);

      const my_district183 = data2["Jammu and Kashmir"].districtData;

    $("#Budgamc").append(my_district183.Budgam.confirmed);
    $("#Budgamr").append(my_district183.Budgam.recovered);
    $("#Budgamd").append(my_district183.Budgam.deceased); //

      const my_district184 = data2["Jammu and Kashmir"].districtData;

    $("#Pulwamac").append(my_district184.Pulwama.confirmed);
    $("#Pulwamar").append(my_district184.Pulwama.recovered);
    $("#Pulwamad").append(my_district184.Pulwama.deceased);

      const my_district185 = data2["Jammu and Kashmir"].districtData;

    $("#Kupwarac").append(my_district185.Kupwara.confirmed);
    $("#Kupwarar").append(my_district185.Kupwara.recovered);
    $("#Kupwarad").append(my_district185.Kupwara.deceased);

      const my_district186 = data2["Jammu and Kashmir"].districtData;

    $("#Udhampurc").append(my_district186.Udhampur.confirmed);
    $("#Udhampurr").append(my_district186.Udhampur.recovered);
    $("#Udhampurd").append(my_district186.Udhampur.deceased);

      const my_district187 = data2["Jammu and Kashmir"].districtData;

    $("#Kulgamc").append(my_district187.Kulgam.confirmed);
    $("#Kulgamr").append(my_district187.Kulgam.recovered);
    $("#Kulgamd").append(my_district187.Kulgam.deceased);

      const my_district188 = data2["Jammu and Kashmir"].districtData;

    $("#Rajouric").append(my_district188.Rajouri.confirmed);
    $("#Rajourir").append(my_district188.Rajouri.recovered);
    $("#Rajourid").append(my_district188.Rajouri.deceased);

      const my_district189 = data2["Jammu and Kashmir"].districtData;

    $("#Ganderbalc").append(my_district189.Ganderbal.confirmed);
    $("#Ganderbalr").append(my_district189.Ganderbal.recovered);
    $("#Ganderbald").append(my_district189.Ganderbal.deceased);

      const my_district190 = data2["Jammu and Kashmir"].districtData;

    $("#Bandiporac").append(my_district190.Bandipora.confirmed);
    $("#Bandiporar").append(my_district190.Bandipora.recovered);
    $("#Bandiporad").append(my_district190.Bandipora.deceased);

      const my_district191 = data2["Jammu and Kashmir"].districtData;

    $("#Kathuac").append(my_district191.Kathua.confirmed);
    $("#Kathuar").append(my_district191.Kathua.recovered);
    $("#Kathuad").append(my_district191.Kathua.deceased);

      const my_district192 = data2["Jammu and Kashmir"].districtData;

    $("#Dodac").append(my_district192.Doda.confirmed);
    $("#Dodar").append(my_district192.Doda.recovered);
    $("#Dodad").append(my_district192.Doda.deceased);

      const my_district193 = data2["Jammu and Kashmir"].districtData;

    $("#Sambac").append(my_district193.Samba.confirmed);
    $("#Sambar").append(my_district193.Samba.recovered);
    $("#Sambad").append(my_district193.Samba.deceased);

      const my_district194 = data2["Jammu and Kashmir"].districtData;

    $("#Punchc").append(my_district194.Punch.confirmed);
    $("#Punchr").append(my_district194.Punch.recovered);
    $("#Punchd").append(my_district194.Punch.deceased);

      const my_district195 = data2["Jammu and Kashmir"].districtData;

    $("#Reasic").append(my_district195.Reasi.confirmed);
    $("#Reasir").append(my_district195.Reasi.recovered);
    $("#Reasid").append(my_district195.Reasi.deceased);

      const my_district196 = data2["Jammu and Kashmir"].districtData;

    $("#Rambancc").append(my_district196.Ramban.confirmed);
    $("#Rambancr").append(my_district196.Ramban.recovered);
    $("#Rambancd").append(my_district196.Ramban.deceased);

      const my_district197 = data2["Jammu and Kashmir"].districtData;

    $("#Shopiyanc").append(my_district197.Shopiyan.confirmed);
    $("#Shopiyanr").append(my_district197.Shopiyan.recovered);
    $("#Shopiyand").append(my_district197.Shopiyan.deceased);

      const my_district198 = data2["Jammu and Kashmir"].districtData;

    $("#Kishtwarc").append(my_district198.Kishtwar.confirmed);
    $("#Kishtwarr").append(my_district198.Kishtwar.recovered);
    $("#Kishtward").append(my_district198.Kishtwar.deceased);

      const my_district199 = data2["Jammu and Kashmir"].districtData;

    $("#Mirpurc").append(my_district199.Mirpur.confirmed);
    $("#Mirpurr").append(my_district199.Mirpur.recovered);
    $("#Mirpurd").append(my_district199.Mirpur.deceased);

      const my_district200 = data2["Jammu and Kashmir"].districtData;

    $("#Muzaffarabadc").append(my_district200.Muzaffarabad.confirmed);
    $("#Muzaffarabadr").append(my_district200.Muzaffarabad.recovered);
    $("#Muzaffarabadd").append(my_district200.Muzaffarabad.deceased);

    // punjab district

      const my_district201 = data2.Punjab.districtData;

    $("#Ludhianac").append(my_district201.Ludhiana.confirmed);
    $("#Ludhianar").append(my_district201.Ludhiana.recovered);
    $("#Ludhianad").append(my_district201.Ludhiana.deceased);

    const my_district202 = data2.Punjab.districtData;

    $("#SASNagarc").append(my_district202["S.A.S. Nagar"].confirmed);
    $("#SASNagarr").append(my_district202["S.A.S. Nagar"].recovered);
    $("#SASNagard").append(my_district202["S.A.S. Nagar"].deceased);

      const my_district203 = data2.Punjab.districtData;

    $("#Jalandharc").append(my_district203.Jalandhar.confirmed);
    $("#Jalandharr").append(my_district203.Jalandhar.recovered);
    $("#Jalandhard").append(my_district203.Jalandhar.deceased);

      const my_district204 = data2.Punjab.districtData;

    $("#Patialac").append(my_district204.Patiala.confirmed);
    $("#Patialar").append(my_district204.Patiala.recovered);
    $("#Patialad").append(my_district204.Patiala.deceased);

      const my_district205 = data2.Punjab.districtData;

    $("#Amritsarc").append(my_district205.Amritsar.confirmed);
    $("#Amritsarr").append(my_district205.Amritsar.recovered);
    $("#Amritsard").append(my_district205.Amritsar.deceased);

      const my_district206 = data2.Punjab.districtData;

    $("#Bathindac").append(my_district206.Bathinda.confirmed);
    $("#Bathindar").append(my_district206.Bathinda.recovered);
    $("#Bathindad").append(my_district206.Bathinda.deceased);

      const my_district207 = data2.Punjab.districtData;

    $("#Hoshiarpurc").append(my_district207.Hoshiarpur.confirmed);
    $("#Hoshiarpurr").append(my_district207.Hoshiarpur.recovered);
    $("#Hoshiarpurd").append(my_district207.Hoshiarpur.deceased);

      const my_district208 = data2.Punjab.districtData;

    $("#Gurdaspurc").append(my_district208.Gurdaspur.confirmed);
    $("#Gurdaspurr").append(my_district208.Gurdaspur.recovered);
    $("#Gurdaspurd").append(my_district208.Gurdaspur.deceased);

      const my_district209 = data2.Punjab.districtData;

    $("#Fazilkac").append(my_district209.Fazilka.confirmed);
    $("#Fazilkar").append(my_district209.Fazilka.recovered);
    $("#Fazilkad").append(my_district209.Fazilka.deceased);

      const my_district210 = data2.Punjab.districtData;

    $("#SriMuktsarSahibc").append(my_district210["Sri Muktsar Sahib"].confirmed);
    $("#SriMuktsarSahibr").append(my_district210["Sri Muktsar Sahib"].recovered);
    $("#SriMuktsarSahibd").append(my_district210["Sri Muktsar Sahib"].deceased);

      const my_district211 = data2.Punjab.districtData;

    $("#Pathankotc").append(my_district211.Pathankot.confirmed);
    $("#Pathankotr").append(my_district211.Pathankot.recovered);
    $("#Pathankotd").append(my_district211.Pathankot.deceased);

      const my_district212 = data2.Punjab.districtData;

    $("#Kapurthalac").append(my_district212.Kapurthala.confirmed);
    $("#Kapurthalar").append(my_district212.Kapurthala.recovered);
    $("#Kapurthalad").append(my_district212.Kapurthala.deceased);

      const my_district213 = data2.Punjab.districtData;

    $("#Sangrurc").append(my_district213.Sangrur.confirmed);
    $("#Sangrurr").append(my_district213.Sangrur.recovered);
    $("#Sangrurd").append(my_district213.Sangrur.deceased);

      const my_district214 = data2.Punjab.districtData;

    $("#Mansac").append(my_district214.Mansa.confirmed);
    $("#Mansar").append(my_district214.Mansa.recovered);
    $("#Mansad").append(my_district214.Mansa.deceased);

      const my_district215 = data2.Punjab.districtData;

    $("#Ferozepurc").append(my_district215.Ferozepur.confirmed);
    $("#Ferozepurr").append(my_district215.Ferozepur.recovered);
    $("#Ferozepurd").append(my_district215.Ferozepur.deceased);

      const my_district216 = data2.Punjab.districtData;

    $("#Faridkotc").append(my_district216.Faridkot.confirmed);
    $("#Faridkotr").append(my_district216.Faridkot.recovered);
    $("#Faridkotd").append(my_district216.Faridkot.deceased);

      const my_district217 = data2.Punjab.districtData;

    $("#Rupnagarc").append(my_district217.Rupnagar.confirmed);
    $("#Rupnagarr").append(my_district217.Rupnagar.recovered);
    $("#Rupnagard").append(my_district217.Rupnagar.deceased);

      const my_district218 = data2.Punjab.districtData;

    $("#ShahidBhagatSinghNagarc").append(my_district218["Shahid Bhagat Singh Nagar"].confirmed);
    $("#ShahidBhagatSinghNagarr").append(my_district218["Shahid Bhagat Singh Nagar"].recovered);
    $("#ShahidBhagatSinghNagard").append(my_district218["Shahid Bhagat Singh Nagar"].deceased);

      const my_district219 = data2.Punjab.districtData;

    $("#FatehgarhSahibc").append(my_district219["Fatehgarh Sahib"].confirmed);
    $("#FatehgarhSahibr").append(my_district219["Fatehgarh Sahib"].recovered);
    $("#FatehgarhSahibd").append(my_district219["Fatehgarh Sahib"].deceased);

      const my_district220 = data2.Punjab.districtData;

    $("#Mogac").append(my_district220.Moga.confirmed);
    $("#Mogar").append(my_district220.Moga.recovered);
    $("#Mogad").append(my_district220.Moga.deceased);

      const my_district221 = data2.Punjab.districtData;

    $("#TarnTaranc").append(my_district221["Tarn Taran"].confirmed);
    $("#TarnTaranr").append(my_district221["Tarn Taran"].recovered);
    $("#TarnTarand").append(my_district221["Tarn Taran"].deceased);

      const my_district222 = data2.Punjab.districtData;

    $("#Barnalac").append(my_district222.Barnala.confirmed);
    $("#Barnalar").append(my_district222.Barnala.recovered);
    $("#Barnalad").append(my_district222.Barnala.deceased);

    // Haryana district

      const my_district223 = data2.Haryana.districtData;

    $("#Gurugramc").append(my_district223.Gurugram.confirmed);
    $("#Gurugramr").append(my_district223.Gurugram.recovered);
    $("#Gurugramd").append(my_district223.Gurugram.deceased);

    const my_district224 = data2.Haryana.districtData;

    $("#Faridabadc").append(my_district224.Faridabad.confirmed);
    $("#Faridabadr").append(my_district224.Faridabad.recovered);
    $("#Faridabadd").append(my_district224.Faridabad.deceased);

    const my_district225 = data2.Haryana.districtData;

    $("#Hisarc").append(my_district225.Hisar.confirmed);
    $("#Hisarr").append(my_district225.Hisar.recovered);
    $("#Hisard").append(my_district225.Hisar.deceased);

    const my_district226 = data2.Haryana.districtData;

    $("#Sonipatc").append(my_district226.Sonipat.confirmed);
    $("#Sonipatr").append(my_district226.Sonipat.recovered);
    $("#Sonipatd").append(my_district226.Sonipat.deceased);

    const my_district227 = data2.Haryana.districtData;

    $("#Karnalc").append(my_district227.Karnal.confirmed);
    $("#Karnalr").append(my_district227.Karnal.recovered);
    $("#Karnald").append(my_district227.Karnal.deceased);

    const my_district228 = data2.Haryana.districtData;

    $("#Panipatc").append(my_district228.Panipat.confirmed);
    $("#Panipatr").append(my_district228.Panipat.recovered);
    $("#Panipatd").append(my_district228.Panipat.deceased);

    const my_district229 = data2.Haryana.districtData;

    $("#Panchkulac").append(my_district229.Panchkula.confirmed);
    $("#Panchkular").append(my_district229.Panchkula.recovered);
    $("#Panchkulad").append(my_district229.Panchkula.deceased);

    const my_district230 = data2.Haryana.districtData;

    $("#Ambalac").append(my_district230.Ambala.confirmed);
    $("#Ambalar").append(my_district230.Ambala.recovered);
    $("#Ambalad").append(my_district230.Ambala.deceased);

    const my_district231 = data2.Haryana.districtData;

    $("#Sirsac").append(my_district231.Sirsa.confirmed);
    $("#Sirsar").append(my_district231.Sirsa.recovered);
    $("#Sirsad").append(my_district231.Sirsa.deceased);

    const my_district232 = data2.Haryana.districtData;

    $("#Rohtakc").append(my_district232.Rohtak.confirmed);
    $("#Rohtakr").append(my_district232.Rohtak.recovered);
    $("#Rohtakd").append(my_district232.Rohtak.deceased);

    const my_district233 = data2.Haryana.districtData;

    $("#Yamunanagarc").append(my_district233.Yamunanagar.confirmed);
    $("#Yamunanagarr").append(my_district233.Yamunanagar.recovered);
    $("#Yamunanagard").append(my_district233.Yamunanagar.deceased);

    const my_district234 = data2.Haryana.districtData;

    $("#Bhiwanic").append(my_district234.Bhiwani.confirmed);
    $("#Bhiwanir").append(my_district234.Bhiwani.recovered);
    $("#Bhiwanid").append(my_district234.Bhiwani.deceased);

    const my_district235 = data2.Haryana.districtData;

    $("#Kurukshetrac").append(my_district235.Kurukshetra.confirmed);
    $("#Kurukshetrar").append(my_district235.Kurukshetra.recovered);
    $("#Kurukshetrad").append(my_district235.Kurukshetra.deceased);

    const my_district236 = data2.Haryana.districtData;

    $("#Mahendragarhc").append(my_district236.Mahendragarh.confirmed);
    $("#Mahendragarhr").append(my_district236.Mahendragarh.recovered);
    $("#Mahendragarhd").append(my_district236.Mahendragarh.deceased);

    const my_district237 = data2.Haryana.districtData;

    $("#Jindc").append(my_district237.Jind.confirmed);
    $("#Jindr").append(my_district237.Jind.recovered);
    $("#Jindd").append(my_district237.Jind.deceased);

    const my_district238 = data2.Haryana.districtData;

    $("#Rewaric").append(my_district238.Rewari.confirmed);
    $("#Rewarir").append(my_district238.Rewari.recovered);
    $("#Rewarid").append(my_district238.Rewari.deceased);

    const my_district239 = data2.Haryana.districtData;

    $("#Jhajjarc").append(my_district239.Jhajjar.confirmed);
    $("#Jhajjarr").append(my_district239.Jhajjar.recovered);
    $("#Jhajjard").append(my_district239.Jhajjar.deceased);

    const my_district240 = data2.Haryana.districtData;

    $("#Fatehabadc").append(my_district240.Fatehabad.confirmed);
    $("#Fatehabadr").append(my_district240.Fatehabad.recovered);
    $("#Fatehabadd").append(my_district240.Fatehabad.deceased);

    const my_district241 = data2.Haryana.districtData;

    $("#Kaithalc").append(my_district241.Kaithal.confirmed);
    $("#Kaithalr").append(my_district241.Kaithal.recovered);
    $("#Kaithald").append(my_district241.Kaithal.deceased);

    const my_district242 = data2.Haryana.districtData;

    $("#Palwalc").append(my_district242.Palwal.confirmed);
    $("#Palwalr").append(my_district242.Palwal.recovered);
    $("#Palwald").append(my_district242.Palwal.deceased);

    const my_district243 = data2.Haryana.districtData;

    $("#CharkhiDadric").append(my_district243["Charkhi Dadri"].confirmed);
    $("#CharkhiDadrir").append(my_district243["Charkhi Dadri"].recovered);
    $("#CharkhiDadrid").append(my_district243["Charkhi Dadri"].deceased);

    const my_district244 = data2.Haryana.districtData;

    $("#Nuhc").append(my_district244.Nuh.confirmed);
    $("#Nuhr").append(my_district244.Nuh.recovered);
    $("#Nuhd").append(my_district244.Nuh.deceased);

    const my_district245 = data2.Haryana.districtData;

    $("#ForeignEvacueesc").append(my_district245["Foreign Evacuees"].confirmed);
    $("#ForeignEvacueesr").append(my_district245["Foreign Evacuees"].recovered);
    $("#ForeignEvacueesd").append(my_district245["Foreign Evacuees"].deceased);

      const my_district246 = data2.Haryana.districtData;

    $("#Italiansc").append(my_district246.Italians.confirmed);
    $("#Italiansr").append(my_district246.Italians.recovered);
    $("#Italiansd").append(my_district246.Italians.deceased);

    // west bengal district
    const my_district247 = data2["West Bengal"].districtData;

    $("#North24Parganasc").append(my_district247["North 24 Parganas"].confirmed);
    $("#North24Parganasr").append(my_district247["North 24 Parganas"].recovered);
    $("#North24Parganasd").append(my_district247["North 24 Parganas"].deceased);

     const my_district248 = data2["West Bengal"].districtData;

    $("#Kolkatac").append(my_district248.Kolkata.confirmed);
    $("#Kolkatar").append(my_district248.Kolkata.recovered);
    $("#Kolkatad").append(my_district248.Kolkata.deceased);

     const my_district249 = data2["West Bengal"].districtData;

    $("#South24Parganasc").append(my_district249["South 24 Parganas"].confirmed);
    $("#South24Parganasr").append(my_district249["South 24 Parganas"].recovered);
    $("#South24Parganasd").append(my_district249["South 24 Parganas"].deceased);

     const my_district250 = data2["West Bengal"].districtData;

    $("#Howrahc").append(my_district250.Howrah.confirmed);
    $("#Howrahr").append(my_district250.Howrah.recovered);
    $("#Howrahd").append(my_district250.Howrah.deceased);

     const my_district251 = data2["West Bengal"].districtData;

    $("#Hooghlyc").append(my_district251.Hooghly.confirmed);
    $("#Hooghlyr").append(my_district251.Hooghly.recovered);
    $("#Hooghlyd").append(my_district251.Hooghly.deceased);

     const my_district252 = data2["West Bengal"].districtData;

    $("#Nadiac").append(my_district252.Nadia.confirmed);
    $("#Nadiar").append(my_district252.Nadia.recovered);
    $("#Nadiad").append(my_district252.Nadia.deceased);

     const my_district253 = data2["West Bengal"].districtData;

    $("#PurbaMedinipurc").append(my_district253["Purba Medinipur"].confirmed);
    $("#PurbaMedinipurr").append(my_district253["Purba Medinipur"].recovered);
    $("#PurbaMedinipurd").append(my_district253["Purba Medinipur"].deceased);

     const my_district254 = data2["West Bengal"].districtData;

    $("#PaschimBardhamanc").append(my_district254["Paschim Bardhaman"].confirmed);
    $("#PaschimBardhamanr").append(my_district254["Paschim Bardhaman"].recovered);
    $("#PaschimBardhamand").append(my_district254["Paschim Bardhaman"].deceased);

     const my_district255 = data2["West Bengal"].districtData;

    $("#Darjeelingc").append(my_district255.Darjeeling.confirmed);
    $("#Darjeelingr").append(my_district255.Darjeeling.recovered);
    $("#Darjeelingd").append(my_district255.Darjeeling.deceased);

     const my_district256 = data2["West Bengal"].districtData;

    $("#PaschimMedinipurc").append(my_district256["Paschim Medinipur"].confirmed);
    $("#PaschimMedinipurr").append(my_district256["Paschim Medinipur"].recovered);
    $("#PaschimMedinipurd").append(my_district256["Paschim Medinipur"].deceased);

     const my_district257 = data2["West Bengal"].districtData;

    $("#Birbhumc").append(my_district257.Birbhum.confirmed);
    $("#Birbhumr").append(my_district257.Birbhum.recovered);
    $("#Birbhumd").append(my_district257.Birbhum.deceased);

     const my_district258 = data2["West Bengal"].districtData;

    $("#PurbaBardhamanc").append(my_district258["Purba Bardhaman"].confirmed);
    $("#PurbaBardhamanr").append(my_district258["Purba Bardhaman"].recovered);
    $("#PurbaBardhamand").append(my_district258["Purba Bardhaman"].deceased);

     const my_district259 = data2["West Bengal"].districtData;

    $("#Jalpaiguric").append(my_district259.Jalpaiguri.confirmed);
    $("#Jalpaigurir").append(my_district259.Jalpaiguri.recovered);
    $("#Jalpaigurid").append(my_district259.Jalpaiguri.deceased);

     const my_district260 = data2["West Bengal"].districtData;

    $("#Bankurac").append(my_district260.Bankura.confirmed);
    $("#Bankurar").append(my_district260.Bankura.recovered);
    $("#Bankurad").append(my_district260.Bankura.deceased);

     const my_district261 = data2["West Bengal"].districtData;

    $("#Murshidabadc").append(my_district261.Murshidabad.confirmed);
    $("#Murshidabadr").append(my_district261.Murshidabad.recovered);
    $("#Murshidabadd").append(my_district261.Murshidabad.deceased);

     const my_district262 = data2["West Bengal"].districtData;

    $("#Maldac").append(my_district262.Malda.confirmed);
    $("#Maldar").append(my_district262.Malda.recovered);
    $("#Maldad").append(my_district262.Malda.deceased);

     const my_district263 = data2["West Bengal"].districtData;

    $("#CoochBeharc").append(my_district263["Cooch Behar"].confirmed);
    $("#CoochBeharr").append(my_district263["Cooch Behar"].recovered);
    $("#CoochBehard").append(my_district263["Cooch Behar"].deceased);

     const my_district264 = data2["West Bengal"].districtData;

    $("#UttarDinajpurc").append(my_district264["Uttar Dinajpur"].confirmed);
    $("#UttarDinajpurr").append(my_district264["Uttar Dinajpur"].recovered);
    $("#UttarDinajpurd").append(my_district264["Uttar Dinajpur"].deceased);

     const my_district265 = data2["West Bengal"].districtData;

    $("#Puruliac").append(my_district265.Purulia.confirmed);
    $("#Puruliar").append(my_district265.Purulia.recovered);
    $("#Puruliad").append(my_district265.Purulia.deceased);

     const my_district266 = data2["West Bengal"].districtData;

    $("#DakshinDinajpurc").append(my_district266["Dakshin Dinajpur"].confirmed);
    $("#DakshinDinajpurr").append(my_district266["Dakshin Dinajpur"].recovered);
    $("#DakshinDinajpurd").append(my_district266["Dakshin Dinajpur"].deceased);

     const my_district267 = data2["West Bengal"].districtData;

    $("#Alipurduarc").append(my_district267.Alipurduar.confirmed);
    $("#Alipurduarr").append(my_district267.Alipurduar.recovered);
    $("#Alipurduard").append(my_district267.Alipurduar.deceased);

     const my_district268 = data2["West Bengal"].districtData;

    $("#Jhargramc").append(my_district268.Jhargram.confirmed);
    $("#Jhargramr").append(my_district268.Jhargram.recovered);
    $("#Jhargramd").append(my_district268.Jhargram.deceased);

     const my_district269 = data2["West Bengal"].districtData;

    $("#Kalimpongc").append(my_district269.Kalimpong.confirmed);
    $("#Kalimpongr").append(my_district269.Kalimpong.recovered);
    $("#Kalimpongd").append(my_district269.Kalimpong.deceased);

     const my_district270 = data2["West Bengal"].districtData;

    $("#OtherStatebc").append(my_district270["Other State"].confirmed);
    $("#OtherStatebr").append(my_district270["Other State"].recovered);
    $("#OtherStatebd").append(my_district270["Other State"].deceased);

    // jharkhand district
    const my_district271 = data2.Jharkhand.districtData;

    $("#Ranchic").append(my_district271.Ranchi.confirmed);
    $("#Ranchir").append(my_district271.Ranchi.recovered);
    $("#Ranchid").append(my_district271.Ranchi.deceased);

      const my_district272 = data2.Jharkhand.districtData;

    $("#EastSinghbhumc").append(my_district272["East Singhbhum"].confirmed);
    $("#EastSinghbhumr").append(my_district272["East Singhbhum"].recovered);
    $("#EastSinghbhumd").append(my_district272["East Singhbhum"].deceased);

      const my_district273 = data2.Jharkhand.districtData;

    $("#Hazaribaghc").append(my_district273.Hazaribagh.confirmed);
    $("#Hazaribaghr").append(my_district273.Hazaribagh.recovered);
    $("#Hazaribaghd").append(my_district273.Hazaribagh.deceased);

      const my_district274 = data2.Jharkhand.districtData;

    $("#Bokaroc").append(my_district274.Bokaro.confirmed);
    $("#Bokaror").append(my_district274.Bokaro.recovered);
    $("#Bokarod").append(my_district274.Bokaro.deceased);

      const my_district275 = data2.Jharkhand.districtData;

    $("#Dhanbadc").append(my_district275.Dhanbad.confirmed);
    $("#Dhanbadr").append(my_district275.Dhanbad.recovered);
    $("#Dhanbadd").append(my_district275.Dhanbad.deceased);

      const my_district276 = data2.Jharkhand.districtData;

    $("#Ramgarhc").append(my_district276.Ramgarh.confirmed);
    $("#Ramgarhr").append(my_district276.Ramgarh.recovered);
    $("#Ramgarhd").append(my_district276.Ramgarh.deceased);

      const my_district277 = data2.Jharkhand.districtData;

    $("#WestSinghbhumc").append(my_district277["West Singhbhum"].confirmed);
    $("#WestSinghbhumr").append(my_district277["West Singhbhum"].recovered);
    $("#WestSinghbhumd").append(my_district277["West Singhbhum"].deceased);

      const my_district278 = data2.Jharkhand.districtData;

    $("#Kodermac").append(my_district278.Koderma.confirmed);
    $("#Kodermar").append(my_district278.Koderma.recovered);
    $("#Kodermad").append(my_district278.Koderma.deceased);

      const my_district279 = data2.Jharkhand.districtData;

    $("#Palamuc").append(my_district279.Palamu.confirmed);
    $("#Palamur").append(my_district279.Palamu.recovered);
    $("#Palamud").append(my_district279.Palamu.deceased);

      const my_district280 = data2.Jharkhand.districtData;

    $("#Deogharc").append(my_district280.Deoghar.confirmed);
    $("#Deogharr").append(my_district280.Deoghar.recovered);
    $("#Deoghard").append(my_district280.Deoghar.deceased);

      const my_district281 = data2.Jharkhand.districtData;

    $("#Gumlac").append(my_district281.Gumla.confirmed);
    $("#Gumlar").append(my_district281.Gumla.recovered);
    $("#Gumlad").append(my_district281.Gumla.deceased);

      const my_district282 = data2.Jharkhand.districtData;

    $("#Giridihc").append(my_district282.Giridih.confirmed);
    $("#Giridihr").append(my_district282.Giridih.recovered);
    $("#Giridihd").append(my_district282.Giridih.deceased);

      const my_district283 = data2.Jharkhand.districtData;

    $("#Lateharc").append(my_district283.Latehar.confirmed);
    $("#Lateharr").append(my_district283.Latehar.recovered);
    $("#Latehard").append(my_district283.Latehar.deceased);

      const my_district284 = data2.Jharkhand.districtData;

    $("#Khuntic").append(my_district284.Khunti.confirmed);
    $("#Khuntir").append(my_district284.Khunti.recovered);
    $("#Khuntid").append(my_district284.Khunti.deceased);


      const my_district285 = data2.Jharkhand.districtData;

    $("#SaraikelaKharsawanc").append(my_district285["Saraikela-Kharsawan"].confirmed);
    $("#SaraikelaKharsawanr").append(my_district285["Saraikela-Kharsawan"].recovered);
    $("#SaraikelaKharsawand").append(my_district285["Saraikela-Kharsawan"].deceased);

      const my_district286 = data2.Jharkhand.districtData;

    $("#Simdegac").append(my_district286.Simdega.confirmed);
    $("#Simdegar").append(my_district286.Simdega.recovered);
    $("#Simdegad").append(my_district286.Simdega.deceased);

      const my_district287 = data2.Jharkhand.districtData;

    $("#Garhwac").append(my_district287.Garhwa.confirmed);
    $("#Garhwar").append(my_district287.Garhwa.recovered);
    $("#Garhwad").append(my_district287.Garhwa.deceased);

      const my_district288 = data2.Jharkhand.districtData;

    $("#Lohardagac").append(my_district288.Lohardaga.confirmed);
    $("#Lohardagar").append(my_district288.Lohardaga.recovered);
    $("#Lohardagad").append(my_district288.Lohardaga.deceased);

      const my_district289 = data2.Jharkhand.districtData;

    $("#Chatrac").append(my_district289.Chatra.confirmed);
    $("#Chatrar").append(my_district289.Chatra.recovered);
    $("#Chatrad").append(my_district289.Chatra.deceased);

      const my_district290 = data2.Jharkhand.districtData;

    $("#Goddac").append(my_district290.Godda.confirmed);
    $("#Goddar").append(my_district290.Godda.recovered);
    $("#Goddad").append(my_district290.Godda.deceased);

      const my_district291 = data2.Jharkhand.districtData;

    $("#Jamtarac").append(my_district291.Jamtara.confirmed);
    $("#Jamtarar").append(my_district291.Jamtara.recovered);
    $("#Jamtarad").append(my_district291.Jamtara.deceased);

      const my_district292 = data2.Jharkhand.districtData;

    $("#Sahibganjc").append(my_district292.Sahibganj.confirmed);
    $("#Sahibganjr").append(my_district292.Sahibganj.recovered);
    $("#Sahibganjd").append(my_district292.Sahibganj.deceased);

      const my_district293 = data2.Jharkhand.districtData;

    $("#Dumkac").append(my_district293.Dumka.confirmed);
    $("#Dumkar").append(my_district293.Dumka.recovered);
    $("#Dumkad").append(my_district293.Dumka.deceased);

      const my_district294 = data2.Jharkhand.districtData;

    $("#Pakurc").append(my_district294.Pakur.confirmed);
    $("#Pakurr").append(my_district294.Pakur.recovered);
    $("#Pakurd").append(my_district294.Pakur.deceased);


     // Arunachal pradesh     
         
      const my_district295 = data2["Arunachal Pradesh"].districtData;

    $("#PapumParehc").append(my_district295["Papum Pare"].confirmed);
    $("#PapumParehr").append(my_district295["Papum Pare"].recovered);
    $("#PapumParehd").append(my_district295["Papum Pare"].deceased);

       const my_district296 = data2["Arunachal Pradesh"].districtData;

    $("#Changlangc").append(my_district296.Changlang.confirmed);
    $("#Changlangr").append(my_district296.Changlang.recovered);
    $("#Changlangd").append(my_district296.Changlang.deceased);

       const my_district297 = data2["Arunachal Pradesh"].districtData;

    $("#WestKamengc").append(my_district297["West Kameng"].confirmed);
    $("#WestKamengr").append(my_district297["West Kameng"].recovered);
    $("#WestKamengd").append(my_district297["West Kameng"].deceased);

       const my_district298 = data2["Arunachal Pradesh"].districtData;

    $("#EastSiangc").append(my_district298["East Siang"].confirmed);
    $("#EastSiangr").append(my_district298["East Siang"].recovered);
    $("#EastSiangd").append(my_district298["East Siang"].deceased);

       const my_district299 = data2["Arunachal Pradesh"].districtData;

    $("#Lohitc").append(my_district299.Lohit.confirmed);
    $("#Lohitr").append(my_district299.Lohit.recovered);
    $("#Lohitd").append(my_district299.Lohit.deceased);

       const my_district300 = data2["Arunachal Pradesh"].districtData;

    $("#Tawangc").append(my_district300.Tawang.confirmed);
    $("#Tawangr").append(my_district300.Tawang.recovered);
    $("#Tawangd").append(my_district300.Tawang.deceased);

       const my_district301 = data2["Arunachal Pradesh"].districtData;

    $("#LowerDibangValleyc").append(my_district301["Lower Dibang Valley"].confirmed);
    $("#LowerDibangValleyr").append(my_district301["Lower Dibang Valley"].recovered);
    $("#LowerDibangValleyd").append(my_district301["Lower Dibang Valley"].deceased);

       const my_district302 = data2["Arunachal Pradesh"].districtData;

    $("#LowerSubansiric").append(my_district302["Lower Subansiri"].confirmed);
    $("#LowerSubansirir").append(my_district302["Lower Subansiri"].recovered);
    $("#LowerSubansirid").append(my_district302["Lower Subansiri"].deceased);

       const my_district303 = data2["Arunachal Pradesh"].districtData;

    $("#Namsaic").append(my_district303.Namsai.confirmed);
    $("#Namsair").append(my_district303.Namsai.recovered);
    $("#Namsaid").append(my_district303.Namsai.deceased);

       const my_district304 = data2["Arunachal Pradesh"].districtData;

    $("#UpperSubansiric").append(my_district304["Upper Subansiri"].confirmed);
    $("#UpperSubansirir").append(my_district304["Upper Subansiri"].recovered);
    $("#UpperSubansirid").append(my_district304["Upper Subansiri"].deceased);

       const my_district305 = data2["Arunachal Pradesh"].districtData;

    $("#WestSiangc").append(my_district305["West Siang"].confirmed);
    $("#WestSiangr").append(my_district305["West Siang"].recovered);
    $("#WestSiangd").append(my_district305["West Siang"].deceased);

       const my_district306 = data2["Arunachal Pradesh"].districtData;

    $("#EastKamengc").append(my_district306["East Kameng"].confirmed);
    $("#EastKamengr").append(my_district306["East Kameng"].recovered);
    $("#EastKamengd").append(my_district306["East Kameng"].deceased);

       const my_district307 = data2["Arunachal Pradesh"].districtData;

    $("#Tirapc").append(my_district307.Tirap.confirmed);
    $("#Tirapr").append(my_district307.Tirap.recovered);
    $("#Tirapd").append(my_district307.Tirap.deceased);

       const my_district308 = data2["Arunachal Pradesh"].districtData;

    $("#Anjawc").append(my_district308.Anjaw.confirmed);
    $("#Anjawr").append(my_district308.Anjaw.recovered);
    $("#Anjawd").append(my_district308.Anjaw.deceased);

       const my_district309 = data2["Arunachal Pradesh"].districtData;

    $("#UpperSiangc").append(my_district309["Upper Siang"].confirmed);
    $("#UpperSiangr").append(my_district309["Upper Siang"].recovered);
    $("#UpperSiangd").append(my_district309["Upper Siang"].deceased);

       const my_district310 = data2["Arunachal Pradesh"].districtData;

    $("#LepaRadac").append(my_district310["Lepa Rada"].confirmed);
    $("#LepaRadar").append(my_district310["Lepa Rada"].recovered);
    $("#LepaRadad").append(my_district310["Lepa Rada"].deceased);

       const my_district311 = data2["Arunachal Pradesh"].districtData;

    $("#Longdingc").append(my_district311.Longding.confirmed);
    $("#Longdingr").append(my_district311.Longding.recovered);
    $("#Longdingd").append(my_district311.Longding.deceased);

       const my_district312 = data2["Arunachal Pradesh"].districtData;

    $("#LowerSiangc").append(my_district312["Lower Siang"].confirmed);
    $("#LowerSiangr").append(my_district312["Lower Siang"].recovered);
    $("#LowerSiangd").append(my_district312["Lower Siang"].deceased);

       const my_district313 = data2["Arunachal Pradesh"].districtData;

    $("#KurungKumeyc").append(my_district313["Kurung Kumey"].confirmed);
    $("#KurungKumeyr").append(my_district313["Kurung Kumey"].recovered);
    $("#KurungKumeyd").append(my_district313["Kurung Kumey"].deceased);

       const my_district314 = data2["Arunachal Pradesh"].districtData;

    $("#PakkeKessangc").append(my_district314["Pakke Kessang"].confirmed);
    $("#PakkeKessangr").append(my_district314["Pakke Kessang"].recovered);
    $("#PakkeKessangd").append(my_district314["Pakke Kessang"].deceased);

       const my_district315 = data2["Arunachal Pradesh"].districtData;

    $("#PapumParec").append(my_district315["Papum Pare"].confirmed);
    $("#PapumParer").append(my_district315["Papum Pare"].recovered);
    $("#PapumPared").append(my_district315["Papum Pare"].deceased);

       const my_district316 = data2["Arunachal Pradesh"].districtData;

    $("#Kamlec").append(my_district316.Kamle.confirmed);
    $("#Kamler").append(my_district316.Kamle.recovered);
    $("#Kamled").append(my_district316.Kamle.deceased);

       const my_district317 = data2["Arunachal Pradesh"].districtData;

    $("#Siangc").append(my_district317.Siang.confirmed);
    $("#Siangr").append(my_district317.Siang.recovered);
    $("#Siangd").append(my_district317.Siang.deceased);

       const my_district318 = data2["Arunachal Pradesh"].districtData;

    $("#UpperDibangValleyc").append(my_district318["Upper Dibang Valley"].confirmed);
    $("#UpperDibangValleyr").append(my_district318["Upper Dibang Valley"].recovered);
    $("#UpperDibangValleyd").append(my_district318["Upper Dibang Valley"].deceased);

       const my_district319 = data2["Arunachal Pradesh"].districtData;

    $("#KraDaadic").append(my_district319["Kra Daadi"].confirmed);
    $("#KraDaadir").append(my_district319["Kra Daadi"].recovered);
    $("#KraDaadid").append(my_district319["Kra Daadi"].deceased);

       const my_district320 = data2["Arunachal Pradesh"].districtData;

    $("#ShiYomic").append(my_district320["Shi Yomi"].confirmed);
    $("#ShiYomir").append(my_district320["Shi Yomi"].recovered);
    $("#ShiYomid").append(my_district320["Shi Yomi"].deceased);
      
    // Chhattisgarh district
       const my_district321 = data2.Chhattisgarh.districtData;

    $("#Raipurc").append(my_district321.Raipur.confirmed);
    $("#Raipurr").append(my_district321.Raipur.recovered);
    $("#Raipurd").append(my_district321.Raipur.deceased);

        const my_district322 = data2.Chhattisgarh.districtData;

    $("#Durgc").append(my_district322.Durg.confirmed);
    $("#Durgr").append(my_district322.Durg.recovered);
    $("#Durgd").append(my_district322.Durg.deceased);

        const my_district323 = data2.Chhattisgarh.districtData;

    $("#Bilaspurc").append(my_district323.Bilaspur.confirmed);
    $("#Bilaspurr").append(my_district323.Bilaspur.recovered);
    $("#Bilaspurd").append(my_district323.Bilaspur.deceased);

        const my_district324 = data2.Chhattisgarh.districtData;

    $("#JanjgirChampac").append(my_district324["Janjgir Champa"].confirmed);
    $("#JanjgirChampar").append(my_district324["Janjgir Champa"].recovered);
    $("#JanjgirChampad").append(my_district324["Janjgir Champa"].deceased);

        const my_district325 = data2.Chhattisgarh.districtData;

    $("#Rajnandgaonc").append(my_district325.Rajnandgaon.confirmed);
    $("#Rajnandgaonr").append(my_district325.Rajnandgaon.recovered);
    $("#Rajnandgaond").append(my_district325.Rajnandgaon.deceased);

        const my_district326 = data2.Chhattisgarh.districtData;

    $("#Korbac").append(my_district326.Korba.confirmed);
    $("#Korbar").append(my_district326.Korba.recovered);
    $("#Korbad").append(my_district326.Korba.deceased);

        const my_district327 = data2.Chhattisgarh.districtData;

    $("#BalodaBazarc").append(my_district327["Baloda Bazar"].confirmed);
    $("#BalodaBazarr").append(my_district327["Baloda Bazar"].recovered);
    $("#BalodaBazard").append(my_district327["Baloda Bazar"].deceased);

        const my_district328 = data2.Chhattisgarh.districtData;

    $("#Surgujac").append(my_district328.Surguja.confirmed);
    $("#Surgujar").append(my_district328.Surguja.recovered);
    $("#Surgujad").append(my_district328.Surguja.deceased);

        const my_district329 = data2.Chhattisgarh.districtData;

    $("#Raigarhhc").append(my_district329.Raigarh.confirmed);
    $("#Raigarhhr").append(my_district329.Raigarh.recovered);
    $("#Raigarhhd").append(my_district329.Raigarh.deceased);

        const my_district330 = data2.Chhattisgarh.districtData;

    $("#Mahasamundc").append(my_district330.Mahasamund.confirmed);
    $("#Mahasamundr").append(my_district330.Mahasamund.recovered);
    $("#Mahasamundd").append(my_district330.Mahasamund.deceased);

        const my_district331 = data2.Chhattisgarh.districtData;

    $("#Surajpurc").append(my_district331.Surajpur.confirmed);
    $("#Surajpurr").append(my_district331.Surajpur.recovered);
    $("#Surajpurd").append(my_district331.Surajpur.deceased);

        const my_district332 = data2.Chhattisgarh.districtData;

    $("#Balodc").append(my_district332.Balod.confirmed);
    $("#Balodr").append(my_district332.Balod.recovered);
    $("#Balodd").append(my_district332.Balod.deceased);

        const my_district333 = data2.Chhattisgarh.districtData;

    $("#Dhamtaric").append(my_district333.Dhamtari.confirmed);
    $("#Dhamtarir").append(my_district333.Dhamtari.recovered);
    $("#Dhamtarid").append(my_district333.Dhamtari.deceased);

        const my_district334 = data2.Chhattisgarh.districtData;

    $("#Koriyac").append(my_district334.Koriya.confirmed);
    $("#Koriyar").append(my_district334.Koriya.recovered);
    $("#Koriyad").append(my_district334.Koriya.deceased);

        const my_district335 = data2.Chhattisgarh.districtData;

    $("#Jashpurc").append(my_district335.Jashpur.confirmed);
    $("#Jashpurr").append(my_district335.Jashpur.recovered);
    $("#Jashpurd").append(my_district335.Jashpur.deceased);

        const my_district336 = data2.Chhattisgarh.districtData;

    $("#Mungelic").append(my_district336.Mungeli.confirmed);
    $("#Mungelir").append(my_district336.Mungeli.recovered);
    $("#Mungelid").append(my_district336.Mungeli.deceased);

        const my_district337 = data2.Chhattisgarh.districtData;

    $("#UttarBastarKankerc").append(my_district337["Uttar Bastar Kanker"].confirmed);
    $("#UttarBastarKankerr").append(my_district337["Uttar Bastar Kanker"].recovered);
    $("#UttarBastarKankerd").append(my_district337["Uttar Bastar Kanker"].deceased);

        const my_district338 = data2.Chhattisgarh.districtData;

    $("#Kabeerdhamc").append(my_district338.Kabeerdham.confirmed);
    $("#Kabeerdhamr").append(my_district338.Kabeerdham.recovered);
    $("#Kabeerdhamd").append(my_district338.Kabeerdham.deceased);

        const my_district339 = data2.Chhattisgarh.districtData;

    $("#Bastarc").append(my_district339.Bastar.confirmed);
    $("#Bastarr").append(my_district339.Bastar.recovered);
    $("#Bastard").append(my_district339.Bastar.deceased);

        const my_district340 = data2.Chhattisgarh.districtData;

    $("#Balrampurc").append(my_district340.Balrampur.confirmed);
    $("#Balrampurr").append(my_district340.Balrampur.recovered);
    $("#Balrampurd").append(my_district340.Balrampur.deceased);

        const my_district341 = data2.Chhattisgarh.districtData;

    $("#Bametarac").append(my_district341.Bametara.confirmed);
    $("#Bametarar").append(my_district341.Bametara.recovered);
    $("#Bametarad").append(my_district341.Bametara.deceased);

        const my_district342 = data2.Chhattisgarh.districtData;

    $("#Gariabandc").append(my_district342.Gariaband.confirmed);
    $("#Gariabandr").append(my_district342.Gariaband.recovered);
    $("#Gariabandd").append(my_district342.Gariaband.deceased);

        const my_district343 = data2.Chhattisgarh.districtData;

    $("#Kondagaonc").append(my_district343.Kondagaon.confirmed);
    $("#Kondagaonr").append(my_district343.Kondagaon.recovered);
    $("#Kondagaond").append(my_district343.Kondagaon.deceased);

        const my_district344 = data2.Chhattisgarh.districtData;

    $("#GaurelaPendraMarwahic").append(my_district344["Gaurela Pendra Marwahi"].confirmed);
    $("#GaurelaPendraMarwahir").append(my_district344["Gaurela Pendra Marwahi"].recovered);
    $("#GaurelaPendraMarwahid").append(my_district344["Gaurela Pendra Marwahi"].deceased);

        const my_district345 = data2.Chhattisgarh.districtData;

    $("#DakshinBastarDantewadac").append(my_district345["Dakshin Bastar Dantewada"].confirmed);
    $("#DakshinBastarDantewadar").append(my_district345["Dakshin Bastar Dantewada"].recovered);
    $("#DakshinBastarDantewadad").append(my_district345["Dakshin Bastar Dantewada"].deceased);

        const my_district346 = data2.Chhattisgarh.districtData;

    $("#Bijapurc").append(my_district346.Bijapur.confirmed);
    $("#Bijapurr").append(my_district346.Bijapur.recovered);
    $("#Bijapurd").append(my_district346.Bijapur.deceased);

        const my_district347 = data2.Chhattisgarh.districtData;

    $("#Sukmac").append(my_district347.Sukma.confirmed);
    $("#Sukmar").append(my_district347.Sukma.recovered);
    $("#Sukmad").append(my_district347.Sukma.deceased);

        const my_district348 = data2.Chhattisgarh.districtData;

    $("#Narayanpurc").append(my_district348.Narayanpur.confirmed);
    $("#Narayanpurr").append(my_district348.Narayanpur.recovered);
    $("#Narayanpurd").append(my_district348.Narayanpur.deceased);

         const my_district349 = data2.Chhattisgarh.districtData;

    $("#OtherStatechhc").append(my_district349["Other State"].confirmed);
    $("#OtherStatechhr").append(my_district349["Other State"].recovered);
    $("#OtherStatechhd").append(my_district349["Other State"].deceased);

    // karnataka district

    const my_district350 = data2.Karnataka.districtData;

    $("#BengaluruUrbanc").append(my_district350["Bengaluru Urban"].confirmed);
    $("#BengaluruUrbanr").append(my_district350["Bengaluru Urban"].recovered);
    $("#BengaluruUrband").append(my_district350["Bengaluru Urban"].deceased);

      const my_district351 = data2.Karnataka.districtData;

    $("#Mysuruc").append(my_district351.Mysuru.confirmed);
    $("#Mysurur").append(my_district351.Mysuru.recovered);
    $("#Mysurud").append(my_district351.Mysuru.deceased);

      const my_district352 = data2.Karnataka.districtData;

    $("#Tumakuruc").append(my_district352.Tumakuru.confirmed);
    $("#Tumakurur").append(my_district352.Tumakuru.recovered);
    $("#Tumakurud").append(my_district352.Tumakuru.deceased);

      const my_district353 = data2.Karnataka.districtData;

    $("#Hassanc").append(my_district353.Hassan.confirmed);
    $("#Hassanr").append(my_district353.Hassan.recovered);
    $("#Hassand").append(my_district353.Hassan.deceased);

      const my_district354 = data2.Karnataka.districtData;

    $("#Ballaric").append(my_district354.Ballari.confirmed);
    $("#Ballarir").append(my_district354.Ballari.recovered);
    $("#Ballarid").append(my_district354.Ballari.deceased);

      const my_district355 = data2.Karnataka.districtData;

    $("#DakshinaKannadac").append(my_district355["Dakshina Kannada"].confirmed);
    $("#DakshinaKannadar").append(my_district355["Dakshina Kannada"].recovered);
    $("#DakshinaKannadad").append(my_district355["Dakshina Kannada"].deceased);

      const my_district3561 = data2.Karnataka.districtData;

    $("#Belagavic").append(my_district3561.Belagavi.confirmed);
    $("#Belagavir").append(my_district3561.Belagavi.recovered);
    $("#Belagavid").append(my_district3561.Belagavi.deceased);


  const my_district356 = data2.Karnataka.districtData;

    $("#Mandyac").append(my_district356.Mandya.confirmed);
    $("#Mandyar").append(my_district356.Mandya.recovered);
    $("#Mandyad").append(my_district356.Mandya.deceased);

      const my_district357 = data2.Karnataka.districtData;

    $("#Udupic").append(my_district357.Udupi.confirmed);
    $("#Udupir").append(my_district357.Udupi.recovered);
    $("#Udupid").append(my_district357.Udupi.deceased);

      const my_district358 = data2.Karnataka.districtData;

    $("#Shivamoggac").append(my_district358.Shivamogga.confirmed);
    $("#Shivamoggar").append(my_district358.Shivamogga.recovered);
    $("#Shivamoggad").append(my_district358.Shivamogga.deceased);

      const my_district359 = data2.Karnataka.districtData;

    $("#Kalaburagic").append(my_district359.Kalaburagi.confirmed);
    $("#Kalaburagir").append(my_district359.Kalaburagi.recovered);
    $("#Kalaburagid").append(my_district359.Kalaburagi.deceased);

      const my_district360 = data2.Karnataka.districtData;

    $("#BengaluruRuralc").append(my_district360["Bengaluru Rural"].confirmed);
    $("#BengaluruRuralr").append(my_district360["Bengaluru Rural"].recovered);
    $("#BengaluruRurald").append(my_district360["Bengaluru Rural"].deceased);

      const my_district361 = data2.Karnataka.districtData;

    $("#Dharwadc").append(my_district361.Dharwad.confirmed);
    $("#Dharwadr").append(my_district361.Dharwad.recovered);
    $("#Dharwadd").append(my_district361.Dharwad.deceased);

      const my_district362 = data2.Karnataka.districtData;

    $("#UttaraKannadac").append(my_district362["Uttara Kannada"].confirmed);
    $("#UttaraKannadar").append(my_district362["Uttara Kannada"].recovered);
    $("#UttaraKannadad").append(my_district362["Uttara Kannada"].deceased);

      const my_district363 = data2.Karnataka.districtData;

    $("#Davanagerec").append(my_district363.Davanagere.confirmed);
    $("#Davanagerer").append(my_district363.Davanagere.recovered);
    $("#Davanagered").append(my_district363.Davanagere.deceased);

      const my_district364 = data2.Karnataka.districtData;

    $("#Chikkamagaluruc").append(my_district364.Chikkamagaluru.confirmed);
    $("#Chikkamagalurur").append(my_district364.Chikkamagaluru.recovered);
    $("#Chikkamagalurud").append(my_district364.Chikkamagaluru.deceased);

      const my_district365 = data2.Karnataka.districtData;

    $("#Kolarc").append(my_district365.Kolar.confirmed);
    $("#Kolarr").append(my_district365.Kolar.recovered);
    $("#Kolard").append(my_district365.Kolar.deceased);

      const my_district367 = data2.Karnataka.districtData;

    $("#Chikkaballapurac").append(my_district367.Chikkaballapura.confirmed);
    $("#Chikkaballapurar").append(my_district367.Chikkaballapura.recovered);
    $("#Chikkaballapurad").append(my_district367.Chikkaballapura.deceased);

      const my_district368 = data2.Karnataka.districtData;

    $("#Raichurc").append(my_district368.Raichur.confirmed);
    $("#Raichurr").append(my_district368.Raichur.recovered);
    $("#Raichurd").append(my_district368.Raichur.deceased);

      const my_district370 = data2.Karnataka.districtData;

    $("#Vijayapurac").append(my_district370.Vijayapura.confirmed);
    $("#Vijayapurar").append(my_district370.Vijayapura.recovered);
    $("#Vijayapurad").append(my_district370.Vijayapura.deceased);

      const my_district371 = data2.Karnataka.districtData;

    $("#Chitradurgac").append(my_district371.Chitradurga.confirmed);
    $("#Chitradurgar").append(my_district371.Chitradurga.recovered);
    $("#Chitradurgad").append(my_district371.Chitradurga.deceased);

      const my_district372 = data2.Karnataka.districtData;

    $("#Bagalkotec").append(my_district372.Bagalkote.confirmed);
    $("#Bagalkoter").append(my_district372.Bagalkote.recovered);
    $("#Bagalkoted").append(my_district372.Bagalkote.deceased);

      const my_district373 = data2.Karnataka.districtData;

    $("#Koppalc").append(my_district373.Koppal.confirmed);
    $("#Koppalr").append(my_district373.Koppal.recovered);
    $("#Koppald").append(my_district373.Koppal.deceased);

      const my_district374 = data2.Karnataka.districtData;

    $("#Kodaguc").append(my_district374.Kodagu.confirmed);
    $("#Kodagur").append(my_district374.Kodagu.recovered);
    $("#Kodagud").append(my_district374.Kodagu.deceased);

      const my_district375 = data2.Karnataka.districtData;

    $("#Chamarajanagarac").append(my_district375.Chamarajanagara.confirmed);
    $("#Chamarajanagarar").append(my_district375.Chamarajanagara.recovered);
    $("#Chamarajanagarad").append(my_district375.Chamarajanagara.deceased);

      const my_district376 = data2.Karnataka.districtData;

    $("#Yadgirc").append(my_district376.Yadgir.confirmed);
    $("#Yadgirr").append(my_district376.Yadgir.recovered);
    $("#Yadgird").append(my_district376.Yadgir.deceased);

      const my_district377 = data2.Karnataka.districtData;

    $("#Gadagc").append(my_district377.Gadag.confirmed);
    $("#Gadagr").append(my_district377.Gadag.recovered);
    $("#Gadagd").append(my_district377.Gadag.deceased);

      const my_district378 = data2.Karnataka.districtData;

    $("#Bidarc").append(my_district378.Bidar.confirmed);
    $("#Bidarr").append(my_district378.Bidar.recovered);
    $("#Bidard").append(my_district378.Bidar.deceased);

      const my_district379 = data2.Karnataka.districtData;

    $("#Ramanagarac").append(my_district379.Ramanagara.confirmed);
    $("#Ramanagarar").append(my_district379.Ramanagara.recovered);
    $("#Ramanagarad").append(my_district379.Ramanagara.deceased);

      const my_district380 = data2.Karnataka.districtData;

    $("#Haveric").append(my_district380.Haveri.confirmed);
    $("#Haverir").append(my_district380.Haveri.recovered);
    $("#Haverid").append(my_district380.Haveri.deceased);

      const my_district381 = data2.Karnataka.districtData;

    $("#OtherStatekkc").append(my_district381["Other State"].confirmed);
    $("#OtherStatekkr").append(my_district381["Other State"].recovered);
    $("#OtherStatekkd").append(my_district381["Other State"].deceased);

     // odisha district
    // const my_district381 = data2.Karnataka.districtData;

    // $("#OtherStatekkc").append(my_district381["Other State"].confirmed);
    // $("#OtherStatekkr").append(my_district381["Other State"].recovered);
    // $("#OtherStatekkd").append(my_district381["Other State"].deceased);

    // const my_district380 = data2.Odisha.districtData;

    // $("#Haveric").append(my_district380.Khordha.confirmed);
    // $("#Haverir").append(my_district380.Khordha.recovered);
    // $("#Haverid").append(my_district380.Khordha.deceased);

     const my_district382 = data2.Odisha.districtData;

    $("#Khordhac").append(my_district382.Khordha.confirmed);
    $("#Khordhar").append(my_district382.Khordha.recovered);
    $("#Khordhad").append(my_district382.Khordha.deceased);

     const my_district383 = data2.Odisha.districtData;

    $("#Cuttackc").append(my_district383.Cuttack.confirmed);
    $("#Cuttackr").append(my_district383.Cuttack.recovered);
    $("#Cuttackd").append(my_district383.Cuttack.deceased);

     const my_district384 = data2.Odisha.districtData;

    $("#Sundargarhc").append(my_district384.Sundargarh.confirmed);
    $("#Sundargarhr").append(my_district384.Sundargarh.recovered);
    $("#Sundargarhd").append(my_district384.Sundargarh.deceased);

     const my_district385 = data2.Odisha.districtData;

    $("#Puric").append(my_district385.Puri.confirmed);
    $("#Purir").append(my_district385.Puri.recovered);
    $("#Purid").append(my_district385.Puri.deceased);

     const my_district386 = data2.Odisha.districtData;

    $("#Angulc").append(my_district386.Angul.confirmed);
    $("#Angulr").append(my_district386.Angul.recovered);
    $("#Anguld").append(my_district386.Angul.deceased);

     const my_district387 = data2.Odisha.districtData;

    $("#Jajpurc").append(my_district387.Jajpur.confirmed);
    $("#Jajpurr").append(my_district387.Jajpur.recovered);
    $("#Jajpurd").append(my_district387.Jajpur.deceased);

     const my_district388 = data2.Odisha.districtData;

    $("#Mayurbhanjc").append(my_district388.Mayurbhanj.confirmed);
    $("#Mayurbhanjr").append(my_district388.Mayurbhanj.recovered);
    $("#Mayurbhanjd").append(my_district388.Mayurbhanj.deceased);

     const my_district389 = data2.Odisha.districtData;

    $("#Balasorec").append(my_district389.Balasore.confirmed);
    $("#Balasorer").append(my_district389.Balasore.recovered);
    $("#Balasored").append(my_district389.Balasore.deceased);

     const my_district390 = data2.Odisha.districtData;

    $("#Ganjamc").append(my_district390.Ganjam.confirmed);
    $("#Ganjamr").append(my_district390.Ganjam.recovered);
    $("#Ganjamd").append(my_district390.Ganjam.deceased);


     const my_district391 = data2.Odisha.districtData;

    $("#Bargarhc").append(my_district391.Bargarh.confirmed);
    $("#Bargarhr").append(my_district391.Bargarh.recovered);
    $("#Bargarhd").append(my_district391.Bargarh.deceased);

     const my_district392 = data2.Odisha.districtData;

    $("#Sambalpurc").append(my_district392.Sambalpur.confirmed);
    $("#Sambalpurr").append(my_district392.Sambalpur.recovered);
    $("#Sambalpurd").append(my_district392.Sambalpur.deceased);

     const my_district393 = data2.Odisha.districtData;

    $("#StatePoolc").append(my_district393["State Pool"].confirmed);
    $("#StatePoolr").append(my_district393["State Pool"].recovered);
    $("#StatePoold").append(my_district393["State Pool"].deceased);

     const my_district394 = data2.Odisha.districtData;

    $("#Bhadrakc").append(my_district394.Bhadrak.confirmed);
    $("#Bhadrakr").append(my_district394.Bhadrak.recovered);
    $("#Bhadrakd").append(my_district394.Bhadrak.deceased);


     const my_district395 = data2.Odisha.districtData;

    $("#Jagatsinghpurc").append(my_district395.Jagatsinghpur.confirmed);
    $("#Jagatsinghpurr").append(my_district395.Jagatsinghpur.recovered);
    $("#Jagatsinghpurd").append(my_district395.Jagatsinghpur.deceased);


     const my_district396 = data2.Odisha.districtData;

    $("#Kalahandic").append(my_district396.Kalahandi.confirmed);
    $("#Kalahandir").append(my_district396.Kalahandi.recovered);
    $("#Kalahandid").append(my_district396.Kalahandi.deceased);


     const my_district397 = data2.Odisha.districtData;

    $("#Jharsugudac").append(my_district397.Jharsuguda.confirmed);
    $("#Jharsugudar").append(my_district397.Jharsuguda.recovered);
    $("#Jharsugudad").append(my_district397.Jharsuguda.deceased);


     const my_district398 = data2.Odisha.districtData;

    $("#Nabarangapurc").append(my_district398.Nabarangapur.confirmed);
    $("#Nabarangapurr").append(my_district398.Nabarangapur.recovered);
    $("#Nabarangapurd").append(my_district398.Nabarangapur.deceased);


     const my_district399 = data2.Odisha.districtData;

    $("#Balangirc").append(my_district399.Balangir.confirmed);
    $("#Balangirr").append(my_district399.Balangir.recovered);
    $("#Balangird").append(my_district399.Balangir.deceased);


     const my_district400 = data2.Odisha.districtData;

    $("#Nuapadac").append(my_district400.Nuapada.confirmed);
    $("#Nuapadar").append(my_district400.Nuapada.recovered);
    $("#Nuapadad").append(my_district400.Nuapada.deceased);

     const my_district401 = data2.Odisha.districtData;

    $("#Kendraparac").append(my_district401.Kendrapara.confirmed);
    $("#Kendraparar").append(my_district401.Kendrapara.recovered);
    $("#Kendraparad").append(my_district401.Kendrapara.deceased);

     const my_district402 = data2.Odisha.districtData;

    $("#Nayagarhc").append(my_district402.Nayagarh.confirmed);
    $("#Nayagarhr").append(my_district402.Nayagarh.recovered);
    $("#Nayagarhd").append(my_district402.Nayagarh.deceased);

     const my_district403 = data2.Odisha.districtData;

    $("#Kendujharc").append(my_district403.Kendujhar.confirmed);
    $("#Kendujharr").append(my_district403.Kendujhar.recovered);
    $("#Kendujhard").append(my_district403.Kendujhar.deceased);

     const my_district404 = data2.Odisha.districtData;

    $("#Rayagadac").append(my_district404.Rayagada.confirmed);
    $("#Rayagadar").append(my_district404.Rayagada.recovered);
    $("#Rayagadad").append(my_district404.Rayagada.deceased);

     const my_district405 = data2.Odisha.districtData;

    $("#Koraputc").append(my_district405.Koraput.confirmed);
    $("#Koraputr").append(my_district405.Koraput.recovered);
    $("#Koraputd").append(my_district405.Koraput.deceased);

     const my_district406 = data2.Odisha.districtData;

    $("#Dhenkanalc").append(my_district406.Dhenkanal.confirmed);
    $("#Dhenkanalr").append(my_district406.Dhenkanal.recovered);
    $("#Dhenkanald").append(my_district406.Dhenkanal.deceased);

     const my_district407 = data2.Odisha.districtData;

    $("#Subarnapurc").append(my_district407.Subarnapur.confirmed);
    $("#Subarnapurr").append(my_district407.Subarnapur.recovered);
    $("#Subarnapurd").append(my_district407.Subarnapur.deceased);

     const my_district408 = data2.Odisha.districtData;

    $("#Boudhc").append(my_district408.Boudh.confirmed);
    $("#Boudhr").append(my_district408.Boudh.recovered);
    $("#Boudhd").append(my_district408.Boudh.deceased);

     const my_district409 = data2.Odisha.districtData;

    $("#Malkangiric").append(my_district409.Malkangiri.confirmed);
    $("#Malkangirir").append(my_district409.Malkangiri.recovered);
    $("#Malkangirid").append(my_district409.Malkangiri.deceased);

     const my_district410 = data2.Odisha.districtData;

    $("#Kandhamalc").append(my_district410.Kandhamal.confirmed);
    $("#Kandhamalr").append(my_district410.Kandhamal.recovered);
    $("#Kandhamald").append(my_district410.Kandhamal.deceased);

     const my_district411 = data2.Odisha.districtData;

    $("#Gajapatic").append(my_district411.Gajapati.confirmed);
    $("#Gajapatir").append(my_district411.Gajapati.recovered);
    $("#Gajapatid").append(my_district411.Gajapati.deceased);

     const my_district412 = data2.Odisha.districtData;

    $("#Deogarhc").append(my_district412.Deogarh.confirmed);
    $("#Deogarhr").append(my_district412.Deogarh.recovered);
    $("#Deogarhd").append(my_district412.Deogarh.deceased);

       const my_district4112 = data2.Odisha.districtData;

    $("#Othersoc").append(my_district4112.Others.confirmed);
    $("#Othersor").append(my_district4112.Others.recovered);
    $("#Othersod").append(my_district4112.Others.deceased);


      // Rajasthan  district
     const my_district415 = data2.Rajasthan.districtData;

    $("#Jaipurc").append(my_district415.Jaipur.confirmed);
    $("#Jaipurr").append(my_district415.Jaipur.recovered);
    $("#Jaipurd").append(my_district415.Jaipur.deceased);

    // Rajasthan
     const my_district416 = data2.Rajasthan.districtData;

    $("#Jodhpurc").append(my_district416.Jodhpur.confirmed);
    $("#Jodhpurr").append(my_district416.Jodhpur.recovered);
    $("#Jodhpurd").append(my_district416.Jodhpur.deceased);

      const my_district417 = data2.Rajasthan.districtData;

    $("#Alwarc").append(my_district417.Alwar.confirmed);
    $("#Alwarr").append(my_district417.Alwar.recovered);
    $("#Alward").append(my_district417.Alwar.deceased);

      const my_district418 = data2.Rajasthan.districtData;

    $("#Kotac").append(my_district418.Kota.confirmed);
    $("#Kotar").append(my_district418.Kota.recovered);
    $("#Kotad").append(my_district418.Kota.deceased);

      const my_district419 = data2.Rajasthan.districtData;

    $("#Udaipurc").append(my_district419.Udaipur.confirmed);
    $("#Udaipurr").append(my_district419.Udaipur.recovered);
    $("#Udaipurd").append(my_district419.Udaipur.deceased);

      const my_district420 = data2.Rajasthan.districtData;

    $("#Bikanerc").append(my_district420.Bikaner.confirmed);
    $("#Bikanerr").append(my_district420.Bikaner.recovered);
    $("#Bikanerd").append(my_district420.Bikaner.deceased);

      const my_district421 = data2.Rajasthan.districtData;

    $("#Ajmerc").append(my_district421.Ajmer.confirmed);
    $("#Ajmerr").append(my_district421.Ajmer.recovered);
    $("#Ajmerd").append(my_district421.Ajmer.deceased);

      const my_district422 = data2.Rajasthan.districtData;

    $("#Sikarc").append(my_district422.Sikar.confirmed);
    $("#Sikarr").append(my_district422.Sikar.recovered);
    $("#Sikard").append(my_district422.Sikar.deceased);

      const my_district423 = data2.Rajasthan.districtData;

    $("#Bhilwarac").append(my_district423.Bhilwara.confirmed);
    $("#Bhilwarar").append(my_district423.Bhilwara.recovered);
    $("#Bhilwarad").append(my_district423.Bhilwara.deceased);

      const my_district424 = data2.Rajasthan.districtData;

    $("#Palic").append(my_district424.Pali.confirmed);
    $("#Palir").append(my_district424.Pali.recovered);
    $("#Palid").append(my_district424.Pali.deceased);

      const my_district425 = data2.Rajasthan.districtData;

    $("#Chittorgarhc").append(my_district425.Chittorgarh.confirmed);
    $("#Chittorgarhr").append(my_district425.Chittorgarh.recovered);
    $("#Chittorgarhd").append(my_district425.Chittorgarh.deceased);

      const my_district426 = data2.Rajasthan.districtData;

    $("#Bharatpurc").append(my_district426.Bharatpur.confirmed);
    $("#Bharatpurr").append(my_district426.Bharatpur.recovered);
    $("#Bharatpurd").append(my_district426.Bharatpur.deceased);

      const my_district427 = data2.Rajasthan.districtData;

    $("#Ganganagarc").append(my_district427.Ganganagar.confirmed);
    $("#Ganganagarr").append(my_district427.Ganganagar.recovered);
    $("#Ganganagard").append(my_district427.Ganganagar.deceased);

      const my_district428 = data2.Rajasthan.districtData;

    $("#Dungarpurc").append(my_district428.Dungarpur.confirmed);
    $("#Dungarpurr").append(my_district428.Dungarpur.recovered);
    $("#Dungarpurd").append(my_district428.Dungarpur.deceased);

      const my_district429 = data2.Rajasthan.districtData;

    $("#Nagaurc").append(my_district429.Nagaur.confirmed);
    $("#Nagaurr").append(my_district429.Nagaur.recovered);
    $("#Nagaurd").append(my_district429.Nagaur.deceased);

      const my_district430 = data2.Rajasthan.districtData;

    $("#Rajsamandc").append(my_district430.Rajsamand.confirmed);
    $("#Rajsamandr").append(my_district430.Rajsamand.recovered);
    $("#Rajsamandd").append(my_district430.Rajsamand.deceased);

      const my_district431 = data2.Rajasthan.districtData;

    $("#Churuc").append(my_district431.Churu.confirmed);
    $("#Churur").append(my_district431.Churu.recovered);
    $("#Churud").append(my_district431.Churu.deceased);

      const my_district432 = data2.Rajasthan.districtData;

    $("#Hanumangarhc").append(my_district432.Hanumangarh.confirmed);
    $("#Hanumangarhr").append(my_district432.Hanumangarh.recovered);
    $("#Hanumangarhd").append(my_district432.Hanumangarh.deceased);

      const my_district433 = data2.Rajasthan.districtData;

    $("#Barmerc").append(my_district433.Barmer.confirmed);
    $("#Barmerr").append(my_district433.Barmer.recovered);
    $("#Barmerd").append(my_district433.Barmer.deceased);

      const my_district434 = data2.Rajasthan.districtData;

    $("#Jhunjhunuc").append(my_district434.Jhunjhunu.confirmed);
    $("#Jhunjhunur").append(my_district434.Jhunjhunu.recovered);
    $("#Jhunjhunud").append(my_district434.Jhunjhunu.deceased);

      const my_district435 = data2.Rajasthan.districtData;

    $("#Sirohic").append(my_district435.Sirohi.confirmed);
    $("#Sirohir").append(my_district435.Sirohi.recovered);
    $("#Sirohid").append(my_district435.Sirohi.deceased);

      const my_district436 = data2.Rajasthan.districtData;

    $("#Jaisalmerc").append(my_district436.Jaisalmer.confirmed);
    $("#Jaisalmerr").append(my_district436.Jaisalmer.recovered);
    $("#Jaisalmerd").append(my_district436.Jaisalmer.deceased);

      const my_district437 = data2.Rajasthan.districtData;

    $("#Jhalawarc").append(my_district437.Jhalawar.confirmed);
    $("#Jhalawarr").append(my_district437.Jhalawar.recovered);
    $("#Jhalaward").append(my_district437.Jhalawar.deceased);


      const my_district438 = data2.Rajasthan.districtData;

    $("#Dausac").append(my_district438.Dausa.confirmed);
    $("#Dausar").append(my_district438.Dausa.recovered);
    $("#Dausad").append(my_district438.Dausa.deceased);

      const my_district439 = data2.Rajasthan.districtData;

    $("#Baranc").append(my_district439.Baran.confirmed);
    $("#Baranr").append(my_district439.Baran.recovered);
    $("#Barand").append(my_district439.Baran.deceased);

      const my_district440 = data2.Rajasthan.districtData;

    $("#Dholpurc").append(my_district440.Dholpur.confirmed);
    $("#Dholpurr").append(my_district440.Dholpur.recovered);
    $("#Dholpurd").append(my_district440.Dholpur.deceased);

      const my_district441 = data2.Rajasthan.districtData;

    $("#SawaiMadhopurc").append(my_district441["Sawai Madhopur"].confirmed);
    $("#SawaiMadhopurr").append(my_district441["Sawai Madhopur"].recovered);
    $("#SawaiMadhopurd").append(my_district441["Sawai Madhopur"].deceased);

      const my_district442 = data2.Rajasthan.districtData;

    $("#Jalorec").append(my_district442.Jalore.confirmed);
    $("#Jalorer").append(my_district442.Jalore.recovered);
    $("#Jalored").append(my_district442.Jalore.deceased);

      const my_district443 = data2.Rajasthan.districtData;

    $("#Banswarac").append(my_district443.Banswara.confirmed);
    $("#Banswarar").append(my_district443.Banswara.recovered);
    $("#Banswarad").append(my_district443.Banswara.deceased);

      const my_district444 = data2.Rajasthan.districtData;

    $("#Tonkc").append(my_district444.Tonk.confirmed);
    $("#Tonkr").append(my_district444.Tonk.recovered);
    $("#Tonkd").append(my_district444.Tonk.deceased);

      const my_district445 = data2.Rajasthan.districtData;

    $("#Bundic").append(my_district445.Bundi.confirmed);
    $("#Bundir").append(my_district445.Bundi.recovered);
    $("#Bundid").append(my_district445.Bundi.deceased);

      const my_district446 = data2.Rajasthan.districtData;

    $("#Karaulic").append(my_district446.Karauli.confirmed);
    $("#Karaulir").append(my_district446.Karauli.recovered);
    $("#Karaulid").append(my_district446.Karauli.deceased);

      const my_district447 = data2.Rajasthan.districtData;

    $("#Pratapgarhc").append(my_district447.Pratapgarh.confirmed);
    $("#Pratapgarhr").append(my_district447.Pratapgarh.recovered);
    $("#Pratapgarhd").append(my_district447.Pratapgarh.deceased);

      const my_district448 = data2.Rajasthan.districtData;

    $("#OtherStaterjc").append(my_district448["Other State"].confirmed);
    $("#OtherStaterjr").append(my_district448["Other State"].recovered);
    $("#OtherStaterjd").append(my_district448["Other State"].deceased);

    const my_district4448 = data2.Rajasthan.districtData;

    $("#BSFCampc").append(my_district4448["BSF Camp"].confirmed);
    $("#BSFCampr").append(my_district4448["BSF Camp"].recovered);
    $("#BSFCampd").append(my_district4448["BSF Camp"].deceased);

    const my_district4449 = data2.Rajasthan.districtData;

    $("#Evacueesc").append(my_district4449.Evacuees.confirmed);
    $("#Evacueesr").append(my_district4449.Evacuees.recovered);
    $("#Evacueesd").append(my_district4449.Evacuees.deceased);

    const my_district44449 = data2.Rajasthan.districtData;

    $("#Italiansrc").append(my_district44449.Italians.confirmed);
    $("#Italiansrr").append(my_district44449.Italians.recovered);
    $("#Italiansrd").append(my_district44449.Italians.deceased);

          // telangana district
      const my_district449 = data2.Telangana.districtData;

    $("#Hyderabadc").append(my_district449.Hyderabad.confirmed);
    $("#Hyderabadr").append(my_district449.Hyderabad.recovered);
    $("#Hyderabadd").append(my_district449.Hyderabad.deceased);

      const my_district450 = data2.Telangana.districtData;

    $("#RangaReddyc").append(my_district450["Ranga Reddy"].confirmed);
    $("#RangaReddyr").append(my_district450["Ranga Reddy"].recovered);
    $("#RangaReddyd").append(my_district450["Ranga Reddy"].deceased);

      const my_district451 = data2.Telangana.districtData;

    $("#MedchalMalkajgiric").append(my_district451["Medchal Malkajgiri"].confirmed);
    $("#MedchalMalkajgirir").append(my_district451["Medchal Malkajgiri"].recovered);
    $("#MedchalMalkajgirid").append(my_district451["Medchal Malkajgiri"].deceased);

      const my_district452 = data2.Telangana.districtData;

    $("#Karimnagarc").append(my_district452.Karimnagar.confirmed);
    $("#Karimnagarr").append(my_district452.Karimnagar.recovered);
    $("#Karimnagard").append(my_district452.Karimnagar.deceased);

      const my_district453 = data2.Telangana.districtData;

    $("#Nalgondac").append(my_district453.Nalgonda.confirmed);
    $("#Nalgondar").append(my_district453.Nalgonda.recovered);
    $("#Nalgondad").append(my_district453.Nalgonda.deceased);

      const my_district454 = data2.Telangana.districtData;

    $("#Khammamc").append(my_district454.Khammam.confirmed);
    $("#Khammamr").append(my_district454.Khammam.recovered);
    $("#Khammamd").append(my_district454.Khammam.deceased);

      const my_district455 = data2.Telangana.districtData;

    $("#WarangalUrbanc").append(my_district455["Warangal Urban"].confirmed);
    $("#WarangalUrbanr").append(my_district455["Warangal Urban"].recovered);
    $("#WarangalUrband").append(my_district455["Warangal Urban"].deceased);

      const my_district456 = data2.Telangana.districtData;

    $("#Nizamabadc").append(my_district456.Nizamabad.confirmed);
    $("#Nizamabadr").append(my_district456.Nizamabad.recovered);
    $("#Nizamabadd").append(my_district456.Nizamabad.deceased);

      const my_district457 = data2.Telangana.districtData;

    $("#Sangareddyc").append(my_district457.Sangareddy.confirmed);
    $("#Sangareddyr").append(my_district457.Sangareddy.recovered);
    $("#Sangareddyd").append(my_district457.Sangareddy.deceased);

      const my_district458 = data2.Telangana.districtData;

    $("#Siddipetc").append(my_district458.Siddipet.confirmed);
    $("#Siddipetr").append(my_district458.Siddipet.recovered);
    $("#Siddipetd").append(my_district458.Siddipet.deceased);

      const my_district459 = data2.Telangana.districtData;

    $("#BhadradriKothagudemc").append(my_district459["Bhadradri Kothagudem"].confirmed);
    $("#BhadradriKothagudemr").append(my_district459["Bhadradri Kothagudem"].recovered);
    $("#BhadradriKothagudemd").append(my_district459["Bhadradri Kothagudem"].deceased);

      const my_district460 = data2.Telangana.districtData;

    $("#Suryapetc").append(my_district460.Suryapet.confirmed);
    $("#Suryapetr").append(my_district460.Suryapet.recovered);
    $("#Suryapetd").append(my_district460.Suryapet.deceased);

      const my_district461 = data2.Telangana.districtData;

    $("#Jagtialc").append(my_district461.Jagtial.confirmed);
    $("#Jagtialr").append(my_district461.Jagtial.recovered);
    $("#Jagtiald").append(my_district461.Jagtial.deceased);

      const my_district462 = data2.Telangana.districtData;

    $("#Mahabubnagarc").append(my_district462.Mahabubnagar.confirmed);
    $("#Mahabubnagarr").append(my_district462.Mahabubnagar.recovered);
    $("#Mahabubnagard").append(my_district462.Mahabubnagar.deceased);

      const my_district463 = data2.Telangana.districtData;

    $("#Mancherialc").append(my_district463.Mancherial.confirmed);
    $("#Mancherialr").append(my_district463.Mancherial.recovered);
    $("#Mancheriald").append(my_district463.Mancherial.deceased);

      const my_district464 = data2.Telangana.districtData;

    $("#Peddapallic").append(my_district464.Peddapalli.confirmed);
    $("#Peddapallir").append(my_district464.Peddapalli.recovered);
    $("#Peddapallid").append(my_district464.Peddapalli.deceased);

      const my_district465 = data2.Telangana.districtData;

    $("#Mahabubabadc").append(my_district465.Mahabubabad.confirmed);
    $("#Mahabubabadr").append(my_district465.Mahabubabad.recovered);
    $("#Mahabubabadd").append(my_district465.Mahabubabad.deceased);

      const my_district466 = data2.Telangana.districtData;

    $("#Nagarkurnoolc").append(my_district466.Nagarkurnool.confirmed);
    $("#Nagarkurnoolr").append(my_district466.Nagarkurnool.recovered);
    $("#Nagarkurnoold").append(my_district466.Nagarkurnool.deceased);

      const my_district467 = data2.Telangana.districtData;

    $("#RajannaSircillac").append(my_district467["Rajanna Sircilla"].confirmed);
    $("#RajannaSircillar").append(my_district467["Rajanna Sircilla"].recovered);
    $("#RajannaSircillad").append(my_district467["Rajanna Sircilla"].deceased);

      const my_district468 = data2.Telangana.districtData;

    $("#Kamareddyc").append(my_district468.Kamareddy.confirmed);
    $("#Kamareddyr").append(my_district468.Kamareddy.recovered);
    $("#Kamareddyd").append(my_district468.Kamareddy.deceased);

      const my_district469 = data2.Telangana.districtData;

    $("#Vikarabadc").append(my_district469.Vikarabad.confirmed);
    $("#Vikarabadr").append(my_district469.Vikarabad.recovered);
    $("#Vikarabadd").append(my_district469.Vikarabad.deceased);

      const my_district470 = data2.Telangana.districtData;

    $("#YadadriBhuvanagiric").append(my_district470["Yadadri Bhuvanagiri"].confirmed);
    $("#YadadriBhuvanagirir").append(my_district470["Yadadri Bhuvanagiri"].recovered);
    $("#YadadriBhuvanagirid").append(my_district470["Yadadri Bhuvanagiri"].deceased);

      const my_district471 = data2.Telangana.districtData;

    $("#WarangalRuralc").append(my_district471["Warangal Rural"].confirmed);
    $("#WarangalRuralr").append(my_district471["Warangal Rural"].recovered);
    $("#WarangalRurald").append(my_district471["Warangal Rural"].deceased);

      const my_district472 = data2.Telangana.districtData;

    $("#Wanaparthyc").append(my_district472.Wanaparthy.confirmed);
    $("#Wanaparthyr").append(my_district472.Wanaparthy.recovered);
    $("#Wanaparthyd").append(my_district472.Wanaparthy.deceased);

      const my_district473 = data2.Telangana.districtData;

    $("#Medakc").append(my_district473.Medak.confirmed);
    $("#Medakr").append(my_district473.Medak.recovered);
    $("#Medakd").append(my_district473.Medak.deceased);

      const my_district474 = data2.Telangana.districtData;

    $("#Jangaonc").append(my_district474.Jangaon.confirmed);
    $("#Jangaonr").append(my_district474.Jangaon.recovered);
    $("#Jangaond").append(my_district474.Jangaon.deceased);

      const my_district475 = data2.Telangana.districtData;

    $("#Nirmalc").append(my_district475.Nirmal.confirmed);
    $("#Nirmalr").append(my_district475.Nirmal.recovered);
    $("#Nirmald").append(my_district475.Nirmal.deceased);

      const my_district476 = data2.Telangana.districtData;

    $("#JogulambaGadwalc").append(my_district476["Jogulamba Gadwal"].confirmed);
    $("#JogulambaGadwalr").append(my_district476["Jogulamba Gadwal"].recovered);
    $("#JogulambaGadwald").append(my_district476["Jogulamba Gadwal"].deceased);

      const my_district477 = data2.Telangana.districtData;

    $("#Adilabadc").append(my_district477.Adilabad.confirmed);
    $("#Adilabadr").append(my_district477.Adilabad.recovered);
    $("#Adilabadd").append(my_district477.Adilabad.deceased);

      const my_district478 = data2.Telangana.districtData;

    $("#JayashankarBhupalapallyc").append(my_district478["Jayashankar Bhupalapally"].confirmed);
    $("#JayashankarBhupalapallyr").append(my_district478["Jayashankar Bhupalapally"].recovered);
    $("#JayashankarBhupalapallyd").append(my_district478["Jayashankar Bhupalapally"].deceased);

      const my_district479 = data2.Telangana.districtData;

    $("#Muluguc").append(my_district479.Mulugu.confirmed);
    $("#Mulugur").append(my_district479.Mulugu.recovered);
    $("#Mulugud").append(my_district479.Mulugu.deceased);

      const my_district480 = data2.Telangana.districtData;

    $("#KomaramBheemc").append(my_district480["Komaram Bheem"].confirmed);
    $("#KomaramBheemr").append(my_district480["Komaram Bheem"].recovered);
    $("#KomaramBheemd").append(my_district480["Komaram Bheem"].deceased);

      const my_district481 = data2.Telangana.districtData;

    $("#Narayanpetc").append(my_district481.Narayanpet.confirmed);
    $("#Narayanpetr").append(my_district481.Narayanpet.recovered);
    $("#Narayanpetd").append(my_district481.Narayanpet.deceased);

      const my_district482 = data2.Telangana.districtData;

    $("#Unknowntc").append(my_district482.Unknown.confirmed);
    $("#Unknowntr").append(my_district482.Unknown.recovered);
    $("#Unknowntd").append(my_district482.Unknown.deceased);

      const my_district48222 = data2.Telangana.districtData;

    $("#OtherStatetelc").append(my_district48222["Other State"].confirmed);
    $("#OtherStatetelr").append(my_district48222["Other State"].recovered);
    $("#OtherStateteld").append(my_district48222["Other State"].deceased);

       const my_district4822 = data2.Telangana.districtData;

    $("#ForeignEvacueesssc").append(my_district4822["Foreign Evacuees"].confirmed);
    $("#ForeignEvacueesssr").append(my_district4822["Foreign Evacuees"].recovered);
    $("#ForeignEvacueesssd").append(my_district4822["Foreign Evacuees"].deceased);
     
     

    // assam district
      const my_district483 = data2.Assam.districtData;

    $("#Unknownassc").append(my_district483.Unknown.confirmed);
    $("#Unknownassr").append(my_district483.Unknown.recovered);
    $("#Unknownassd").append(my_district483.Unknown.deceased);

       const my_district484 = data2.Assam.districtData;

    $("#KamrupMetropolitanc").append(my_district484["Kamrup Metropolitan"].confirmed);
    $("#KamrupMetropolitanr").append(my_district484["Kamrup Metropolitan"].recovered);
    $("#KamrupMetropolitand").append(my_district484["Kamrup Metropolitan"].deceased);


       const my_district485 = data2.Assam.districtData;

    $("#Dibrugarhc").append(my_district485.Dibrugarh.confirmed);
    $("#Dibrugarhr").append(my_district485.Dibrugarh.recovered);
    $("#Dibrugarhd").append(my_district485.Dibrugarh.deceased);


       const my_district486 = data2.Assam.districtData;

    $("#Kamrupc").append(my_district486.Kamrup.confirmed);
    $("#Kamrupr").append(my_district486.Kamrup.recovered);
    $("#Kamrupd").append(my_district486.Kamrup.deceased);


       const my_district487 = data2.Assam.districtData;

    $("#Cacharc").append(my_district487.Cachar.confirmed);
    $("#Cacharr").append(my_district487.Cachar.recovered);
    $("#Cachard").append(my_district487.Cachar.deceased);


       const my_district488 = data2.Assam.districtData;

    $("#Nagaonc").append(my_district488.Nagaon.confirmed);
    $("#Nagaonr").append(my_district488.Nagaon.recovered);
    $("#Nagaond").append(my_district488.Nagaon.deceased);


       const my_district489 = data2.Assam.districtData;

    $("#Jorhatc").append(my_district489.Jorhat.confirmed);
    $("#Jorhatr").append(my_district489.Jorhat.recovered);
    $("#Jorhatd").append(my_district489.Jorhat.deceased);

   const my_district490 = data2.Assam.districtData;

    $("#Golaghatc").append(my_district490.Golaghat.confirmed);
    $("#Golaghatr").append(my_district490.Golaghat.recovered);
    $("#Golaghatd").append(my_district490.Golaghat.deceased);

       const my_district491 = data2.Assam.districtData;

    $("#Sonitpurc").append(my_district491.Sonitpur.confirmed);
    $("#Sonitpurr").append(my_district491.Sonitpur.recovered);
    $("#Sonitpurd").append(my_district491.Sonitpur.deceased);

       const my_district492 = data2.Assam.districtData;

    $("#Tinsukiac").append(my_district492.Tinsukia.confirmed);
    $("#Tinsukiar").append(my_district492.Tinsukia.recovered);
    $("#Tinsukiad").append(my_district492.Tinsukia.deceased);

       const my_district493 = data2.Assam.districtData;

    $("#Lakhimpurc").append(my_district493.Lakhimpur.confirmed);
    $("#Lakhimpurr").append(my_district493.Lakhimpur.recovered);
    $("#Lakhimpurd").append(my_district493.Lakhimpur.deceased);

       const my_district494 = data2.Assam.districtData;

    $("#Morigaonc").append(my_district494.Morigaon.confirmed);
    $("#Morigaonr").append(my_district494.Morigaon.recovered);
    $("#Morigaond").append(my_district494.Morigaon.deceased);


       const my_district495 = data2.Assam.districtData;

    $("#Barpetac").append(my_district495.Barpeta.confirmed);
    $("#Barpetar").append(my_district495.Barpeta.recovered);
    $("#Barpetad").append(my_district495.Barpeta.deceased);

       const my_district496 = data2.Assam.districtData;

    $("#Goalparac").append(my_district496.Goalpara.confirmed);
    $("#Goalparar").append(my_district496.Goalpara.recovered);
    $("#Goalparad").append(my_district496.Goalpara.deceased);

       const my_district497 = data2.Assam.districtData;

    $("#Darrangc").append(my_district497.Darrang.confirmed);
    $("#Darrangr").append(my_district497.Darrang.recovered);
    $("#Darrangd").append(my_district497.Darrang.deceased);

       const my_district498 = data2.Assam.districtData;

    $("#Sivasagarc").append(my_district498.Sivasagar.confirmed);
    $("#Sivasagarr").append(my_district498.Sivasagar.recovered);
    $("#Sivasagard").append(my_district498.Sivasagar.deceased);

       const my_district499 = data2.Assam.districtData;

    $("#Nalbaric").append(my_district499.Nalbari.confirmed);
    $("#Nalbarir").append(my_district499.Nalbari.recovered);
    $("#Nalbarid").append(my_district499.Nalbari.deceased);

       const my_district500 = data2.Assam.districtData;

    $("#Dhubric").append(my_district500.Dhubri.confirmed);
    $("#Dhubrir").append(my_district500.Dhubri.recovered);
    $("#Dhubrid").append(my_district500.Dhubri.deceased);

       const my_district501 = data2.Assam.districtData;

    $("#Biswanathc").append(my_district501.Biswanath.confirmed);
    $("#Biswanathr").append(my_district501.Biswanath.recovered);
    $("#Biswanathd").append(my_district501.Biswanath.deceased);

       const my_district502 = data2.Assam.districtData;

    $("#Karimganjc").append(my_district502.Karimganj.confirmed);
    $("#Karimganjr").append(my_district502.Karimganj.recovered);
    $("#Karimganjd").append(my_district502.Karimganj.deceased);

       const my_district503 = data2.Assam.districtData;
                  
    $("#Hojaic").append(my_district503.Hojai.confirmed)    
    $("#Hojair").append(my_district503.Hojai.recovered);
    $("#Hojaid").append(my_district503.Hojai.deceased);

       const my_district504 = data2.Assam.districtData;

    $("#Dhemajic").append(my_district504.Dhemaji.confirmed);
    $("#Dhemajir").append(my_district504.Dhemaji.recovered);
    $("#Dhemajid").append(my_district504.Dhemaji.deceased);

       const my_district505 = data2.Assam.districtData;

    $("#KarbiAnglongc").append(my_district505["Karbi Anglong"].confirmed);
    $("#KarbiAnglongr").append(my_district505["Karbi Anglong"].recovered);
    $("#KarbiAnglongd").append(my_district505["Karbi Anglong"].deceased);

       const my_district506 = data2.Assam.districtData;

    $("#Hailakandic").append(my_district506.Hailakandi.confirmed);
    $("#Hailakandir").append(my_district506.Hailakandi.recovered);
    $("#Hailakandid").append(my_district506.Hailakandi.deceased);

       const my_district507 = data2.Assam.districtData;

    $("#Bongaigaonc").append(my_district507.Bongaigaon.confirmed);
    $("#Bongaigaonr").append(my_district507.Bongaigaon.recovered);
    $("#Bongaigaond").append(my_district507.Bongaigaon.deceased);

       const my_district508 = data2.Assam.districtData;

    $("#Baksac").append(my_district508.Baksa.confirmed);
    $("#Baksar").append(my_district508.Baksa.recovered);
    $("#Baksad").append(my_district508.Baksa.deceased);

       const my_district509 = data2.Assam.districtData;

    $("#Udalguric").append(my_district509.Udalguri.confirmed);
    $("#Udalgurir").append(my_district509.Udalguri.recovered);
    $("#Udalgurid").append(my_district509.Udalguri.deceased);

       const my_district510 = data2.Assam.districtData;

    $("#Kokrajharc").append(my_district510.Kokrajhar.confirmed);
    $("#Kokrajharr").append(my_district510.Kokrajhar.recovered);
    $("#Kokrajhard").append(my_district510.Kokrajhar.deceased);

       const my_district511 = data2.Assam.districtData;

    $("#Charaideoc").append(my_district511.Charaideo.confirmed);
    $("#Charaideor").append(my_district511.Charaideo.recovered);
    $("#Charaideod").append(my_district511.Charaideo.deceased);

       const my_district512 = data2.Assam.districtData;

    $("#DimaHasaoc").append(my_district512["Dima Hasao"].confirmed);
    $("#DimaHasaor").append(my_district512["Dima Hasao"].recovered);
    $("#DimaHasaod").append(my_district512["Dima Hasao"].deceased);

       const my_district513 = data2.Assam.districtData;

    $("#Chirangc").append(my_district513.Chirang.confirmed);
    $("#Chirangr").append(my_district513.Chirang.recovered);
    $("#Chirangd").append(my_district513.Chirang.deceased);

       const my_district514 = data2.Assam.districtData;

    $("#SouthSalmaraMankacharc").append(my_district514["South Salmara Mankachar"].confirmed);
    $("#SouthSalmaraMankacharr").append(my_district514["South Salmara Mankachar"].recovered);
    $("#SouthSalmaraMankachard").append(my_district514["South Salmara Mankachar"].deceased);

       const my_district515 = data2.Assam.districtData;

    $("#Majulic").append(my_district515.Majuli.confirmed);
    $("#Majulir").append(my_district515.Majuli.recovered);
    $("#Majulid").append(my_district515.Majuli.deceased);

       const my_district518 = data2.Assam.districtData;

    $("#WestKarbiAnglongc").append(my_district518["West Karbi Anglong"].confirmed);
    $("#WestKarbiAnglongr").append(my_district518["West Karbi Anglong"].recovered);
    $("#WestKarbiAnglongd").append(my_district518["West Karbi Anglong"].deceased);

       const my_district516 = data2.Assam.districtData;

    $("#OtherStateassc").append(my_district516["Other State"].confirmed);
    $("#OtherStateassr").append(my_district516["Other State"].recovered);
    $("#OtherStateassd").append(my_district516["Other State"].deceased);

       const my_district517 = data2.Assam.districtData;

    $("#AirportQuarantinec").append(my_district517["Airport Quarantine"].confirmed);
    $("#AirportQuarantiner").append(my_district517["Airport Quarantine"].recovered);
    $("#AirportQuarantined").append(my_district517["Airport Quarantine"].deceased);


    // delhi district
    const my_district5118 = data2.Delhi.districtData;

    $("#Unknowndelc").append(my_district5118.Unknown.confirmed);
    $("#Unknowndelr").append(my_district5118.Unknown.recovered);
    $("#Unknowndeld").append(my_district5118.Unknown.deceased);

    const my_district519 = data2.Delhi.districtData;

    $("#CentralDelhic").append(my_district519["Central Delhi"].confirmed);
    $("#CentralDelhir").append(my_district519["Central Delhi"].recovered);
    $("#CentralDelhid").append(my_district519["Central Delhi"].deceased);

    const my_district520 = data2.Delhi.districtData;

    $("#SouthEastDelhic").append(my_district520["South East Delhi"].confirmed);
    $("#SouthEastDelhir").append(my_district520["South East Delhi"].recovered);
    $("#SouthEastDelhid").append(my_district520["South East Delhi"].deceased);

    const my_district521 = data2.Delhi.districtData;

    $("#WestDelhic").append(my_district521["West Delhi"].confirmed);
    $("#WestDelhir").append(my_district521["West Delhi"].recovered);
    $("#WestDelhid").append(my_district521["West Delhi"].deceased);

    const my_district522 = data2.Delhi.districtData;

    $("#SouthDelhic").append(my_district522["South Delhi"].confirmed);
    $("#SouthDelhir").append(my_district522["South Delhi"].recovered);
    $("#SouthDelhid").append(my_district522["South Delhi"].deceased);

    const my_district523 = data2.Delhi.districtData;

    $("#NorthDelhic").append(my_district523["North Delhi"].confirmed);
    $("#NorthDelhir").append(my_district523["North Delhi"].recovered);
    $("#NorthDelhid").append(my_district523["North Delhi"].deceased);

    const my_district524 = data2.Delhi.districtData;

    $("#Shahdarac").append(my_district524.Shahdara.confirmed);
    $("#Shahdarar").append(my_district524.Shahdara.recovered);
    $("#Shahdarad").append(my_district524.Shahdara.deceased);

    const my_district525 = data2.Delhi.districtData;

    $("#SouthWestDelhic").append(my_district525["South West Delhi"].confirmed);
    $("#SouthWestDelhir").append(my_district525["South West Delhi"].recovered);
    $("#SouthWestDelhid").append(my_district525["South West Delhi"].deceased);

    const my_district526 = data2.Delhi.districtData;

    $("#EastDelhic").append(my_district526["East Delhi"].confirmed);
    $("#EastDelhir").append(my_district526["East Delhi"].recovered);
    $("#EastDelhid").append(my_district526["East Delhi"].deceased);

    const my_district527 = data2.Delhi.districtData;

    $("#NewDelhic").append(my_district527["New Delhi"].confirmed);
    $("#NewDelhir").append(my_district527["New Delhi"].recovered);
    $("#NewDelhid").append(my_district527["New Delhi"].deceased);

    const my_district528 = data2.Delhi.districtData;

    $("#NorthWestDelhic").append(my_district528["North West Delhi"].confirmed);
    $("#NorthWestDelhir").append(my_district528["North West Delhi"].recovered);
    $("#NorthWestDelhid").append(my_district528["North West Delhi"].deceased);

    const my_district529 = data2.Delhi.districtData;

    $("#NorthEastDelhic").append(my_district529["North East Delhi"].confirmed);
    $("#NorthEastDelhir").append(my_district529["North East Delhi"].recovered);
    $("#NorthEastDelhid").append(my_district529["North East Delhi"].deceased);


      // tamil nadu district

    const my_district530 = data2["Tamil Nadu"].districtData;

    $("#Chennaic").append(my_district530.Chennai.confirmed);
    $("#Chennair").append(my_district530.Chennai.recovered);
    $("#Chennaid").append(my_district530.Chennai.deceased);

     const my_district531 = data2["Tamil Nadu"].districtData;

    $("#Coimbatorec").append(my_district531.Coimbatore.confirmed);
    $("#Coimbatorer").append(my_district531.Coimbatore.recovered);
    $("#Coimbatored").append(my_district531.Coimbatore.deceased);

     const my_district532 = data2["Tamil Nadu"].districtData;

    $("#Chengalpattuc").append(my_district532.Chengalpattu.confirmed);
    $("#Chengalpattur").append(my_district532.Chengalpattu.recovered);
    $("#Chengalpattud").append(my_district532.Chengalpattu.deceased);

     const my_district533 = data2["Tamil Nadu"].districtData;

    $("#Thiruvallurc").append(my_district533.Thiruvallur.confirmed);
    $("#Thiruvallurr").append(my_district533.Thiruvallur.recovered);
    $("#Thiruvallurd").append(my_district533.Thiruvallur.deceased);

     const my_district534 = data2["Tamil Nadu"].districtData;

    $("#Salemc").append(my_district534.Salem.confirmed);
    $("#Salemr").append(my_district534.Salem.recovered);
    $("#Salemd").append(my_district534.Salem.deceased);

     const my_district535 = data2["Tamil Nadu"].districtData;

    $("#Erodec").append(my_district535.Erode.confirmed);
    $("#Eroder").append(my_district535.Erode.recovered);
    $("#Eroded").append(my_district535.Erode.deceased);

     const my_district536 = data2["Tamil Nadu"].districtData;

    $("#Tiruppurc").append(my_district536.Tiruppur.confirmed);
    $("#Tiruppurr").append(my_district536.Tiruppur.recovered);
    $("#Tiruppurd").append(my_district536.Tiruppur.deceased);

     const my_district537 = data2["Tamil Nadu"].districtData;

    $("#Maduraic").append(my_district537.Madurai.confirmed);
    $("#Madurair").append(my_district537.Madurai.recovered);
    $("#Maduraid").append(my_district537.Madurai.deceased);

     const my_district538 = data2["Tamil Nadu"].districtData;

    $("#Tiruchirappallic").append(my_district538.Tiruchirappalli.confirmed);
    $("#Tiruchirappallir").append(my_district538.Tiruchirappalli.recovered);
    $("#Tiruchirappallid").append(my_district538.Tiruchirappalli.deceased);

     const my_district539 = data2["Tamil Nadu"].districtData;

    $("#Kancheepuramc").append(my_district539.Kancheepuram.confirmed);
    $("#Kancheepuramr").append(my_district539.Kancheepuram.recovered);
    $("#Kancheepuramd").append(my_district539.Kancheepuram.deceased);

     const my_district540 = data2["Tamil Nadu"].districtData;

    $("#Thanjavurc").append(my_district540.Thanjavur.confirmed);
    $("#Thanjavurr").append(my_district540.Thanjavur.recovered);
    $("#Thanjavurd").append(my_district540.Thanjavur.deceased);

     const my_district541 = data2["Tamil Nadu"].districtData;

    $("#Kanyakumaric").append(my_district541.Kanyakumari.confirmed);
    $("#Kanyakumarir").append(my_district541.Kanyakumari.recovered);
    $("#Kanyakumarid").append(my_district541.Kanyakumari.deceased);

     const my_district542 = data2["Tamil Nadu"].districtData;

    $("#Cuddalorec").append(my_district542.Cuddalore.confirmed);
    $("#Cuddalorer").append(my_district542.Cuddalore.recovered);
    $("#Cuddalored").append(my_district542.Cuddalore.deceased);

     const my_district543 = data2["Tamil Nadu"].districtData;

    $("#Thoothukkudic").append(my_district543.Thoothukkudi.confirmed);
    $("#Thoothukkudir").append(my_district543.Thoothukkudi.recovered);
    $("#Thoothukkudid").append(my_district543.Thoothukkudi.deceased);

     const my_district544 = data2["Tamil Nadu"].districtData;

    $("#Tiruvannamalaic").append(my_district544.Tiruvannamalai.confirmed);
    $("#Tiruvannamalair").append(my_district544.Tiruvannamalai.recovered);
    $("#Tiruvannamalaid").append(my_district544.Tiruvannamalai.deceased);

     const my_district545 = data2["Tamil Nadu"].districtData;

    $("#Vellorec").append(my_district545.Vellore.confirmed);
    $("#Vellorer").append(my_district545.Vellore.recovered);
    $("#Vellored").append(my_district545.Vellore.deceased);

     const my_district546 = data2["Tamil Nadu"].districtData;

    $("#Tirunelvelic").append(my_district546.Tirunelveli.confirmed);
    $("#Tirunelvelir").append(my_district546.Tirunelveli.recovered);
    $("#Tirunelvelid").append(my_district546.Tirunelveli.deceased);

     const my_district547 = data2["Tamil Nadu"].districtData;

    $("#Namakkalc").append(my_district547.Namakkal.confirmed);
    $("#Namakkalr").append(my_district547.Namakkal.recovered);
    $("#Namakkald").append(my_district547.Namakkal.deceased);

     const my_district548 = data2["Tamil Nadu"].districtData;

    $("#Virudhunagarc").append(my_district548.Virudhunagar.confirmed);
    $("#Virudhunagarr").append(my_district548.Virudhunagar.recovered);
    $("#Virudhunagard").append(my_district548.Virudhunagar.deceased);

     const my_district549 = data2["Tamil Nadu"].districtData;

    $("#Viluppuramc").append(my_district549.Viluppuram.confirmed);
    $("#Viluppuramr").append(my_district549.Viluppuram.recovered);
    $("#Viluppuramd").append(my_district549.Viluppuram.deceased);

     const my_district550 = data2["Tamil Nadu"].districtData;

    $("#Thenic").append(my_district550.Theni.confirmed);
    $("#Thenir").append(my_district550.Theni.recovered);
    $("#Thenid").append(my_district550.Theni.deceased);

     const my_district551 = data2["Tamil Nadu"].districtData;

    $("#Ranipetc").append(my_district551.Ranipet.confirmed);
    $("#Ranipetr").append(my_district551.Ranipet.recovered);
    $("#Ranipetd").append(my_district551.Ranipet.deceased);

     const my_district552 = data2["Tamil Nadu"].districtData;

    $("#Krishnagiric").append(my_district552.Krishnagiri.confirmed);
    $("#Krishnagirir").append(my_district552.Krishnagiri.recovered);
    $("#Krishnagirid").append(my_district552.Krishnagiri.deceased);

     const my_district553 = data2["Tamil Nadu"].districtData;

    $("#Thiruvarurc").append(my_district553.Thiruvarur.confirmed);
    $("#Thiruvarurr").append(my_district553.Thiruvarur.recovered);
    $("#Thiruvarurd").append(my_district553.Thiruvarur.deceased);

     const my_district554 = data2["Tamil Nadu"].districtData;

    $("#Dindigulc").append(my_district554.Dindigul.confirmed);
    $("#Dindigulr").append(my_district554.Dindigul.recovered);
    $("#Dindiguld").append(my_district554.Dindigul.deceased);

     const my_district555 = data2["Tamil Nadu"].districtData;

    $("#Nilgirisc").append(my_district555.Nilgiris.confirmed);
    $("#Nilgirisr").append(my_district555.Nilgiris.recovered);
    $("#Nilgirisd").append(my_district555.Nilgiris.deceased);

     const my_district556 = data2["Tamil Nadu"].districtData;

    $("#Kallakurichic").append(my_district556.Kallakurichi.confirmed);
    $("#Kallakurichir").append(my_district556.Kallakurichi.recovered);
    $("#Kallakurichid").append(my_district556.Kallakurichi.deceased);

     const my_district557 = data2["Tamil Nadu"].districtData;

    $("#Tirupathurc").append(my_district557.Tirupathur.confirmed);
    $("#Tirupathurr").append(my_district557.Tirupathur.recovered);
    $("#Tirupathurd").append(my_district557.Tirupathur.deceased);

     const my_district558 = data2["Tamil Nadu"].districtData;

    $("#Pudukkottaic").append(my_district558.Pudukkottai.confirmed);
    $("#Pudukkottair").append(my_district558.Pudukkottai.recovered);
    $("#Pudukkottaid").append(my_district558.Pudukkottai.deceased);

     const my_district559 = data2["Tamil Nadu"].districtData;

    $("#Tenkasic").append(my_district559.Tenkasi.confirmed);
    $("#Tenkasir").append(my_district559.Tenkasi.recovered);
    $("#Tenkasid").append(my_district559.Tenkasi.deceased);

     const my_district560 = data2["Tamil Nadu"].districtData;

    $("#Dharmapuric").append(my_district560.Dharmapuri.confirmed);
    $("#Dharmapurir").append(my_district560.Dharmapuri.recovered);
    $("#Dharmapurid").append(my_district560.Dharmapuri.deceased);

     const my_district561 = data2["Tamil Nadu"].districtData;

    $("#Karurc").append(my_district561.Karur.confirmed);
    $("#Karurr").append(my_district561.Karur.recovered);
    $("#Karurd").append(my_district561.Karur.deceased);

     const my_district562 = data2["Tamil Nadu"].districtData;

    $("#Mayiladuthuraic").append(my_district562.Mayiladuthurai.confirmed);
    $("#Mayiladuthurair").append(my_district562.Mayiladuthurai.recovered);
    $("#Mayiladuthuraid").append(my_district562.Mayiladuthurai.deceased);

     const my_district563 = data2["Tamil Nadu"].districtData;

    $("#Ramanathapuramc").append(my_district563.Ramanathapuram.confirmed);
    $("#Ramanathapuramr").append(my_district563.Ramanathapuram.recovered);
    $("#Ramanathapuramd").append(my_district563.Ramanathapuram.deceased);

     const my_district564 = data2["Tamil Nadu"].districtData;

    $("#Sivagangac").append(my_district564.Sivaganga.confirmed);
    $("#Sivagangar").append(my_district564.Sivaganga.recovered);
    $("#Sivagangad").append(my_district564.Sivaganga.deceased);

     const my_district565 = data2["Tamil Nadu"].districtData;

    $("#Nagapattinamc").append(my_district565.Nagapattinam.confirmed);
    $("#Nagapattinamr").append(my_district565.Nagapattinam.recovered);
    $("#Nagapattinamd").append(my_district565.Nagapattinam.deceased);

     const my_district566 = data2["Tamil Nadu"].districtData;

    $("#Ariyalurc").append(my_district566.Ariyalur.confirmed);
    $("#Ariyalurr").append(my_district566.Ariyalur.recovered);
    $("#Ariyalurd").append(my_district566.Ariyalur.deceased);

     const my_district567 = data2["Tamil Nadu"].districtData;

    $("#Perambalurc").append(my_district567.Perambalur.confirmed);
    $("#Perambalurr").append(my_district567.Perambalur.recovered);
    $("#Perambalurd").append(my_district567.Perambalur.deceased);

     const my_district578 = data2["Tamil Nadu"].districtData;

    $("#AirportQuarantinetamc").append(my_district578["Airport Quarantine"].confirmed);
    $("#AirportQuarantinetamr").append(my_district578["Airport Quarantine"].recovered);
    $("#AirportQuarantinetamd").append(my_district578["Airport Quarantine"].deceased);

     const my_district579 = data2["Tamil Nadu"].districtData;

    $("#RailwayQuarantinetamc").append(my_district579["Railway Quarantine"].confirmed);
    $("#RailwayQuarantinetamr").append(my_district579["Railway Quarantine"].recovered);
    $("#RailwayQuarantinetamd").append(my_district579["Railway Quarantine"].deceased);

     const my_district580 = data2["Tamil Nadu"].districtData;

    $("#OtherStatetamc").append(my_district580["Other State"].confirmed);
    $("#OtherStatetamr").append(my_district580["Other State"].recovered);
    $("#OtherStatetamd").append(my_district580["Other State"].deceased);

     // gujarat district
    const my_district581 = data2.Gujarat.districtData;

    $("#Ahmedabadc").append(my_district581.Ahmedabad.confirmed);
    $("#Ahmedabadr").append(my_district581.Ahmedabad.recovered);
    $("#Ahmedabadd").append(my_district581.Ahmedabad.deceased);

     const my_district582 = data2.Gujarat.districtData;

    $("#Suratc").append(my_district582.Surat.confirmed);
    $("#Suratr").append(my_district582.Surat.recovered);
    $("#Suratd").append(my_district582.Surat.deceased);

     const my_district583 = data2.Gujarat.districtData;

    $("#Vadodarac").append(my_district583.Vadodara.confirmed);
    $("#Vadodarar").append(my_district583.Vadodara.recovered);
    $("#Vadodarad").append(my_district583.Vadodara.deceased);

     const my_district584 = data2.Gujarat.districtData;

    $("#Rajkotc").append(my_district584.Rajkot.confirmed);
    $("#Rajkotr").append(my_district584.Rajkot.recovered);
    $("#Rajkotd").append(my_district584.Rajkot.deceased);

     const my_district585 = data2.Gujarat.districtData;

    $("#Jamnagarc").append(my_district585.Jamnagar.confirmed);
    $("#Jamnagarr").append(my_district585.Jamnagar.recovered);
    $("#Jamnagard").append(my_district585.Jamnagar.deceased);

     const my_district586 = data2.Gujarat.districtData;

    $("#Mehsanac").append(my_district586.Mehsana.confirmed);
    $("#Mehsanar").append(my_district586.Mehsana.recovered);
    $("#Mehsanad").append(my_district586.Mehsana.deceased);

     const my_district587 = data2.Gujarat.districtData;

    $("#Bhavnagarc").append(my_district587.Bhavnagar.confirmed);
    $("#Bhavnagarr").append(my_district587.Bhavnagar.recovered);
    $("#Bhavnagard").append(my_district587.Bhavnagar.deceased);

     const my_district588 = data2.Gujarat.districtData;

    $("#Gandhinagarc").append(my_district588.Gandhinagar.confirmed);
    $("#Gandhinagarr").append(my_district588.Gandhinagar.recovered);
    $("#Gandhinagard").append(my_district588.Gandhinagar.deceased);

     const my_district589 = data2.Gujarat.districtData;

    $("#Junagadhc").append(my_district589.Junagadh.confirmed);
    $("#Junagadhr").append(my_district589.Junagadh.recovered);
    $("#Junagadhd").append(my_district589.Junagadh.deceased);

     const my_district590 = data2.Gujarat.districtData;

    $("#Banaskanthac").append(my_district590.Banaskantha.confirmed);
    $("#Banaskanthar").append(my_district590.Banaskantha.recovered);
    $("#Banaskanthad").append(my_district590.Banaskantha.deceased);

     const my_district591 = data2.Gujarat.districtData;

    $("#Kutchc").append(my_district591.Kutch.confirmed);
    $("#Kutchr").append(my_district591.Kutch.recovered);
    $("#Kutchd").append(my_district591.Kutch.deceased);

     const my_district592 = data2.Gujarat.districtData;

    $("#Panchmahalc").append(my_district592.Panchmahal.confirmed);
    $("#Panchmahalr").append(my_district592.Panchmahal.recovered);
    $("#Panchmahald").append(my_district592.Panchmahal.deceased);

     const my_district593 = data2.Gujarat.districtData;

    $("#Patanc").append(my_district593.Patan.confirmed);
    $("#Patanr").append(my_district593.Patan.recovered);
    $("#Patand").append(my_district593.Patan.deceased);

     const my_district594 = data2.Gujarat.districtData;

    $("#Bharuchc").append(my_district594.Bharuch.confirmed);
    $("#Bharuchr").append(my_district594.Bharuch.recovered);
    $("#Bharuchd").append(my_district594.Bharuch.deceased);

     const my_district595 = data2.Gujarat.districtData;

    $("#Amrelic").append(my_district595.Amreli.confirmed);
    $("#Amrelir").append(my_district595.Amreli.recovered);
    $("#Amrelid").append(my_district595.Amreli.deceased);

     const my_district596 = data2.Gujarat.districtData;

    $("#Khedac").append(my_district596.Kheda.confirmed);
    $("#Khedar").append(my_district596.Kheda.recovered);
    $("#Khedad").append(my_district596.Kheda.deceased);

     const my_district597 = data2.Gujarat.districtData;

    $("#Dahodc").append(my_district597.Dahod.confirmed);
    $("#Dahodr").append(my_district597.Dahod.recovered);
    $("#Dahodd").append(my_district597.Dahod.deceased);

     const my_district598 = data2.Gujarat.districtData;

    $("#Anandc").append(my_district598.Anand.confirmed);
    $("#Anandr").append(my_district598.Anand.recovered);
    $("#Anandd").append(my_district598.Anand.deceased);

     const my_district599 = data2.Gujarat.districtData;

    $("#Sabarkanthac").append(my_district599.Sabarkantha.confirmed);
    $("#Sabarkanthar").append(my_district599.Sabarkantha.recovered);
    $("#Sabarkanthad").append(my_district599.Sabarkantha.deceased);

     const my_district600 = data2.Gujarat.districtData;

    $("#GirSomnathc").append(my_district600["Gir Somnath"].confirmed);
    $("#GirSomnathr").append(my_district600["Gir Somnath"].recovered);
    $("#GirSomnathd").append(my_district600["Gir Somnath"].deceased);

     const my_district601 = data2.Gujarat.districtData;

    $("#Mahisagarc").append(my_district601.Mahisagar.confirmed);
    $("#Mahisagarr").append(my_district601.Mahisagar.recovered);
    $("#Mahisagard").append(my_district601.Mahisagar.deceased);

     const my_district602 = data2.Gujarat.districtData;

    $("#Surendranagarc").append(my_district602.Surendranagar.confirmed);
    $("#Surendranagarr").append(my_district602.Surendranagar.recovered);
    $("#Surendranagard").append(my_district602.Surendranagar.deceased);

     const my_district603 = data2.Gujarat.districtData;

    $("#Navsaric").append(my_district603.Navsari.confirmed);
    $("#Navsarir").append(my_district603.Navsari.recovered);
    $("#Navsarid").append(my_district603.Navsari.deceased);

     const my_district604 = data2.Gujarat.districtData;

    $("#Morbic").append(my_district604.Morbi.confirmed);
    $("#Morbir").append(my_district604.Morbi.recovered);
    $("#Morbid").append(my_district604.Morbi.deceased);

     const my_district605 = data2.Gujarat.districtData;

    $("#Valsadc").append(my_district605.Valsad.confirmed);
    $("#Valsadr").append(my_district605.Valsad.recovered);
    $("#Valsadd").append(my_district605.Valsad.deceased);

     const my_district606 = data2.Gujarat.districtData;

    $("#Narmadac").append(my_district606.Narmada.confirmed);
    $("#Narmadar").append(my_district606.Narmada.recovered);
    $("#Narmadad").append(my_district606.Narmada.deceased);

     const my_district607 = data2.Gujarat.districtData;

    $("#Aravallic").append(my_district607.Aravalli.confirmed);
    $("#Aravallir").append(my_district607.Aravalli.recovered);
    $("#Aravallid").append(my_district607.Aravalli.deceased);

     const my_district608 = data2.Gujarat.districtData;

    $("#Tapic").append(my_district608.Tapi.confirmed);
    $("#Tapir").append(my_district608.Tapi.recovered);
    $("#Tapid").append(my_district608.Tapi.deceased);

     const my_district609 = data2.Gujarat.districtData;

    $("#DevbhumiDwarkac").append(my_district609["Devbhumi Dwarka"].confirmed);
    $("#DevbhumiDwarkar").append(my_district609["Devbhumi Dwarka"].recovered);
    $("#DevbhumiDwarkad").append(my_district609["Devbhumi Dwarka"].deceased);

     const my_district610 = data2.Gujarat.districtData;

    $("#Porbandarc").append(my_district610.Porbandar.confirmed);
    $("#Porbandarr").append(my_district610.Porbandar.recovered);
    $("#Porbandard").append(my_district610.Porbandar.deceased);

     const my_district611 = data2.Gujarat.districtData;

    $("#ChhotaUdaipurc").append(my_district611["Chhota Udaipur"].confirmed);
    $("#ChhotaUdaipurr").append(my_district611["Chhota Udaipur"].recovered);
    $("#ChhotaUdaipurd").append(my_district611["Chhota Udaipur"].deceased);

     const my_district612 = data2.Gujarat.districtData;

    $("#Botadc").append(my_district612.Botad.confirmed);
    $("#Botadr").append(my_district612.Botad.recovered);
    $("#Botadd").append(my_district612.Botad.deceased);

      const my_district613 = data2.Gujarat.districtData;

    $("#Dangc").append(my_district613.Dang.confirmed);
    $("#Dangr").append(my_district613.Dang.recovered);
    $("#Dangd").append(my_district613.Dang.deceased);

      const my_district614 = data2.Gujarat.districtData;

    $("#OtherStategujc").append(my_district614["Other State"].confirmed);
    $("#OtherStategujr").append(my_district614["Other State"].recovered);
    $("#OtherStategujd").append(my_district614["Other State"].deceased);


      
       // bihar district

       const my_district615 = data2.Bihar.districtData;

    $("#Patnac").append(my_district615.Patna.confirmed);
    $("#Patnar").append(my_district615.Patna.recovered);
    $("#Patnad").append(my_district615.Patna.deceased);

    const my_district616 = data2.Bihar.districtData;

    $("#Gayac").append(my_district616.Gaya.confirmed);
    $("#Gayar").append(my_district616.Gaya.recovered);
    $("#Gayad").append(my_district616.Gaya.deceased);

    const my_district617 = data2.Bihar.districtData;

    $("#Muzaffarpurc").append(my_district617.Muzaffarpur.confirmed);
    $("#Muzaffarpurr").append(my_district617.Muzaffarpur.recovered);
    $("#Muzaffarpurd").append(my_district617.Muzaffarpur.deceased);


    const my_district618 = data2.Bihar.districtData;

    $("#Begusaraic").append(my_district618.Begusarai.confirmed);
    $("#Begusarair").append(my_district618.Begusarai.recovered);
    $("#Begusaraid").append(my_district618.Begusarai.deceased);

    const my_district6118 = data2.Bihar.districtData;

    $("#Bhagalpurc").append(my_district6118.Bhagalpur.confirmed);
    $("#Bhagalpurr").append(my_district6118.Bhagalpur.recovered);
    $("#Bhagalpurd").append(my_district6118.Bhagalpur.deceased);

    const my_district619 = data2.Bihar.districtData;

    $("#Purniac").append(my_district619.Purnia.confirmed);
    $("#Purniar").append(my_district619.Purnia.recovered);
    $("#Purniad").append(my_district619.Purnia.deceased);

    const my_district620 = data2.Bihar.districtData;

    $("#Nalandac").append(my_district620.Nalanda.confirmed);
    $("#Nalandar").append(my_district620.Nalanda.recovered);
    $("#Nalandad").append(my_district620.Nalanda.deceased);

    const my_district621 = data2.Bihar.districtData;

    $("#Saranc").append(my_district621.Saran.confirmed);
    $("#Saranr").append(my_district621.Saran.recovered);
    $("#Sarand").append(my_district621.Saran.deceased);

    const my_district622 = data2.Bihar.districtData;

    $("#WestChamparanc").append(my_district622["West Champaran"].confirmed);
    $("#WestChamparanr").append(my_district622["West Champaran"].recovered);
    $("#WestChamparand").append(my_district622["West Champaran"].deceased);

    const my_district623 = data2.Bihar.districtData;

    $("#Aurangabadc").append(my_district623.Aurangabad.confirmed);
    $("#Aurangabadr").append(my_district623.Aurangabad.recovered);
    $("#Aurangabadd").append(my_district623.Aurangabad.deceased);

    const my_district624 = data2.Bihar.districtData;

    $("#Samastipurc").append(my_district624.Samastipur.confirmed);
    $("#Samastipurr").append(my_district624.Samastipur.recovered);
    $("#Samastipurd").append(my_district624.Samastipur.deceased);

    const my_district625 = data2.Bihar.districtData;

    $("#Vaishalic").append(my_district625.Vaishali.confirmed);
    $("#Vaishalir").append(my_district625.Vaishali.recovered);
    $("#Vaishalid").append(my_district625.Vaishali.deceased);

    const my_district626 = data2.Bihar.districtData;

    $("#EastChamparanc").append(my_district626["East Champaran"].confirmed);
    $("#EastChamparanr").append(my_district626["East Champaran"].recovered);
    $("#EastChamparand").append(my_district626["East Champaran"].deceased);

    const my_district627 = data2.Bihar.districtData;

    $("#Madhubanic").append(my_district627.Madhubani.confirmed);
    $("#Madhubanir").append(my_district627.Madhubani.recovered);
    $("#Madhubanid").append(my_district627.Madhubani.deceased);

    const my_district628 = data2.Bihar.districtData;

    $("#Katiharc").append(my_district628.Katihar.confirmed);
    $("#Katiharr").append(my_district628.Katihar.recovered);
    $("#Katihard").append(my_district628.Katihar.deceased);

    const my_district629 = data2.Bihar.districtData;

    $("#Saharsac").append(my_district629.Saharsa.confirmed);
    $("#Saharsar").append(my_district629.Saharsa.recovered);
    $("#Saharsad").append(my_district629.Saharsa.deceased);

    const my_district630 = data2.Bihar.districtData;

    $("#Supaulc").append(my_district630.Supaul.confirmed);
    $("#Supaulr").append(my_district630.Supaul.recovered);
    $("#Supauld").append(my_district630.Supaul.deceased);

    const my_district631 = data2.Bihar.districtData;

    $("#Gopalganjc").append(my_district631.Gopalganj.confirmed);
    $("#Gopalganjr").append(my_district631.Gopalganj.recovered);
    $("#Gopalganjd").append(my_district631.Gopalganj.deceased);

    const my_district632 = data2.Bihar.districtData;

    $("#Siwanc").append(my_district632.Siwan.confirmed);
    $("#Siwanr").append(my_district632.Siwan.recovered);
    $("#Siwand").append(my_district632.Siwan.deceased);

    const my_district633 = data2.Bihar.districtData;

    $("#Mungerc").append(my_district633.Munger.confirmed);
    $("#Mungerr").append(my_district633.Munger.recovered);
    $("#Mungerd").append(my_district633.Munger.deceased);

    const my_district634 = data2.Bihar.districtData;

    $("#Arariac").append(my_district634.Araria.confirmed);
    $("#Arariar").append(my_district634.Araria.recovered);
    $("#Arariad").append(my_district634.Araria.deceased);

    const my_district635 = data2.Bihar.districtData;

    $("#Rohtasc").append(my_district635.Rohtas.confirmed);
    $("#Rohtasr").append(my_district635.Rohtas.recovered);
    $("#Rohtasd").append(my_district635.Rohtas.deceased);

    const my_district636 = data2.Bihar.districtData;

    $("#Madhepurac").append(my_district636.Madhepura.confirmed);
    $("#Madhepurar").append(my_district636.Madhepura.recovered);
    $("#Madhepurad").append(my_district636.Madhepura.deceased);

    const my_district637 = data2.Bihar.districtData;

    $("#Darbhangac").append(my_district637.Darbhanga.confirmed);
    $("#Darbhangar").append(my_district637.Darbhanga.recovered);
    $("#Darbhangad").append(my_district637.Darbhanga.deceased);

    const my_district638 = data2.Bihar.districtData;

    $("#Jehanabadc").append(my_district638.Jehanabad.confirmed);
    $("#Jehanabadr").append(my_district638.Jehanabad.recovered);
    $("#Jehanabadd").append(my_district638.Jehanabad.deceased);

    const my_district639 = data2.Bihar.districtData;

    $("#Nawadac").append(my_district639.Nawada.confirmed);
    $("#Nawadar").append(my_district639.Nawada.recovered);
    $("#Nawadad").append(my_district639.Nawada.deceased);

    const my_district640 = data2.Bihar.districtData;

    $("#Bhojpurc").append(my_district640.Bhojpur.confirmed);
    $("#Bhojpurr").append(my_district640.Bhojpur.recovered);
    $("#Bhojpurd").append(my_district640.Bhojpur.deceased);

    const my_district641 = data2.Bihar.districtData;

    $("#Kishanganjc").append(my_district641.Kishanganj.confirmed);
    $("#Kishanganjr").append(my_district641.Kishanganj.recovered);
    $("#Kishanganjd").append(my_district641.Kishanganj.deceased);

    const my_district642 = data2.Bihar.districtData;

    $("#Khagariac").append(my_district642.Khagaria.confirmed);
    $("#Khagariar").append(my_district642.Khagaria.recovered);
    $("#Khagariad").append(my_district642.Khagaria.deceased);

    const my_district643 = data2.Bihar.districtData;

    $("#Jamuic").append(my_district643.Jamui.confirmed);
    $("#Jamuir").append(my_district643.Jamui.recovered);
    $("#Jamuid").append(my_district643.Jamui.deceased);

    const my_district644 = data2.Bihar.districtData;

    $("#Buxarc").append(my_district644.Buxar.confirmed);
    $("#Buxarr").append(my_district644.Buxar.recovered);
    $("#Buxard").append(my_district644.Buxar.deceased);

    const my_district645 = data2.Bihar.districtData;

    $("#Sitamarhic").append(my_district645.Sitamarhi.confirmed);
    $("#Sitamarhir").append(my_district645.Sitamarhi.recovered);
    $("#Sitamarhid").append(my_district645.Sitamarhi.deceased);

    const my_district646 = data2.Bihar.districtData;

    $("#Lakhisaraic").append(my_district646.Lakhisarai.confirmed);
    $("#Lakhisarair").append(my_district646.Lakhisarai.recovered);
    $("#Lakhisaraid").append(my_district646.Lakhisarai.deceased);

    const my_district647 = data2.Bihar.districtData;

    $("#Sheikhpurac").append(my_district647.Sheikhpura.confirmed);
    $("#Sheikhpurar").append(my_district647.Sheikhpura.recovered);
    $("#Sheikhpurad").append(my_district647.Sheikhpura.deceased);

    const my_district648 = data2.Bihar.districtData;

    $("#Bankac").append(my_district648.Banka.confirmed);
    $("#Bankar").append(my_district648.Banka.recovered);
    $("#Bankad").append(my_district648.Banka.deceased);

    const my_district649 = data2.Bihar.districtData;

    $("#Arwalc").append(my_district649.Arwal.confirmed);
    $("#Arwalr").append(my_district649.Arwal.recovered);
    $("#Arwald").append(my_district649.Arwal.deceased);

    const my_district650 = data2.Bihar.districtData;

    $("#Kaimurc").append(my_district650.Kaimur.confirmed);
    $("#Kaimurr").append(my_district650.Kaimur.recovered);
    $("#Kaimurd").append(my_district650.Kaimur.deceased);

    const my_district651 = data2.Bihar.districtData;

    $("#Sheoharc").append(my_district651.Sheohar.confirmed);
    $("#Sheoharr").append(my_district651.Sheohar.recovered);
    $("#Sheohard").append(my_district651.Sheohar.deceased);

  
      // madhya pradesh district

     const my_district652 = data2["Madhya Pradesh"].districtData;

    $("#Indorec").append(my_district652.Indore.confirmed);
    $("#Indorer").append(my_district652.Indore.recovered);
    $("#Indored").append(my_district652.Indore.deceased);

      const my_district653 = data2["Madhya Pradesh"].districtData;

    $("#Bhopalc").append(my_district653.Bhopal.confirmed);
    $("#Bhopalr").append(my_district653.Bhopal.recovered);
    $("#Bhopald").append(my_district653.Bhopal.deceased);

      const my_district654 = data2["Madhya Pradesh"].districtData;

    $("#Gwaliorc").append(my_district654.Gwalior.confirmed);
    $("#Gwaliorr").append(my_district654.Gwalior.recovered);
    $("#Gwaliord").append(my_district654.Gwalior.deceased);

      const my_district655 = data2["Madhya Pradesh"].districtData;

    $("#Jabalpurc").append(my_district655.Jabalpur.confirmed);
    $("#Jabalpurr").append(my_district655.Jabalpur.recovered);
    $("#Jabalpurd").append(my_district655.Jabalpur.deceased);

      const my_district656 = data2["Madhya Pradesh"].districtData;

    $("#Ujjainc").append(my_district656.Ujjain.confirmed);
    $("#Ujjainr").append(my_district656.Ujjain.recovered);
    $("#Ujjaind").append(my_district656.Ujjain.deceased);

      const my_district657 = data2["Madhya Pradesh"].districtData;

    $("#Ratlamc").append(my_district657.Ratlam.confirmed);
    $("#Ratlamr").append(my_district657.Ratlam.recovered);
    $("#Ratlamd").append(my_district657.Ratlam.deceased);

      const my_district658 = data2["Madhya Pradesh"].districtData;

    $("#Sagarc").append(my_district658.Sagar.confirmed);
    $("#Sagarr").append(my_district658.Sagar.recovered);
    $("#Sagard").append(my_district658.Sagar.deceased);

      const my_district659 = data2["Madhya Pradesh"].districtData;

    $("#Rewac").append(my_district659.Rewa.confirmed);
    $("#Rewar").append(my_district659.Rewa.recovered);
    $("#Rewad").append(my_district659.Rewa.deceased);

      const my_district660 = data2["Madhya Pradesh"].districtData;

    $("#Khargonec").append(my_district660.Khargone.confirmed);
    $("#Khargoner").append(my_district660.Khargone.recovered);
    $("#Khargoned").append(my_district660.Khargone.deceased);

      const my_district661 = data2["Madhya Pradesh"].districtData;

    $("#Dharc").append(my_district661.Dhar.confirmed);
    $("#Dharr").append(my_district661.Dhar.recovered);
    $("#Dhard").append(my_district661.Dhar.deceased);

      const my_district662 = data2["Madhya Pradesh"].districtData;

    $("#Shivpuric").append(my_district662.Shivpuri.confirmed);
    $("#Shivpurir").append(my_district662.Shivpuri.recovered);
    $("#Shivpurid").append(my_district662.Shivpuri.deceased);

      const my_district663 = data2["Madhya Pradesh"].districtData;

    $("#Satnac").append(my_district663.Satna.confirmed);
    $("#Satnar").append(my_district663.Satna.recovered);
    $("#Satnad").append(my_district663.Satna.deceased);

      const my_district664 = data2["Madhya Pradesh"].districtData;

    $("#Vidishac").append(my_district664.Vidisha.confirmed);
    $("#Vidishar").append(my_district664.Vidisha.recovered);
    $("#Vidishad").append(my_district664.Vidisha.deceased);

      const my_district665 = data2["Madhya Pradesh"].districtData;

    $("#Narsinghpurc").append(my_district665.Narsinghpur.confirmed);
    $("#Narsinghpurr").append(my_district665.Narsinghpur.recovered);
    $("#Narsinghpurd").append(my_district665.Narsinghpur.deceased);

      const my_district666 = data2["Madhya Pradesh"].districtData;

    $("#Hoshangabadc").append(my_district666.Hoshangabad.confirmed);
    $("#Hoshangabadr").append(my_district666.Hoshangabad.recovered);
    $("#Hoshangabadd").append(my_district666.Hoshangabad.deceased);

      const my_district667 = data2["Madhya Pradesh"].districtData;

    $("#Sehorec").append(my_district667.Sehore.confirmed);
    $("#Sehorer").append(my_district667.Sehore.recovered);
    $("#Sehored").append(my_district667.Sehore.deceased);

      const my_district668 = data2["Madhya Pradesh"].districtData;

    $("#Shahdolc").append(my_district668.Shahdol.confirmed);
    $("#Shahdolr").append(my_district668.Shahdol.recovered);
    $("#Shahdold").append(my_district668.Shahdol.deceased);

      const my_district669 = data2["Madhya Pradesh"].districtData;

    $("#Katnic").append(my_district669.Katni.confirmed);
    $("#Katnir").append(my_district669.Katni.recovered);
    $("#Katnid").append(my_district669.Katni.deceased);

      const my_district670 = data2["Madhya Pradesh"].districtData;

    $("#Raisenc").append(my_district670.Raisen.confirmed);
    $("#Raisenr").append(my_district670.Raisen.recovered);
    $("#Raisend").append(my_district670.Raisen.deceased);

      const my_district671 = data2["Madhya Pradesh"].districtData;

    $("#Anuppurc").append(my_district671.Anuppur.confirmed);
    $("#Anuppurr").append(my_district671.Anuppur.recovered);
    $("#Anuppurd").append(my_district671.Anuppur.deceased);

      const my_district672 = data2["Madhya Pradesh"].districtData;

    $("#Sidhic").append(my_district672.Sidhi.confirmed);
    $("#Sidhir").append(my_district672.Sidhi.recovered);
    $("#Sidhid").append(my_district672.Sidhi.deceased);

      const my_district673 = data2["Madhya Pradesh"].districtData;

    $("#Balaghatc").append(my_district673.Balaghat.confirmed);
    $("#Balaghatr").append(my_district673.Balaghat.recovered);
    $("#Balaghatd").append(my_district673.Balaghat.deceased);

      const my_district674 = data2["Madhya Pradesh"].districtData;

    $("#Singraulic").append(my_district674.Singrauli.confirmed);
    $("#Singraulir").append(my_district674.Singrauli.recovered);
    $("#Singraulid").append(my_district674.Singrauli.deceased);

      const my_district675 = data2["Madhya Pradesh"].districtData;

    $("#Rajgarhc").append(my_district675.Rajgarh.confirmed);
    $("#Rajgarhr").append(my_district675.Rajgarh.recovered);
    $("#Rajgarhd").append(my_district675.Rajgarh.deceased);

      const my_district676 = data2["Madhya Pradesh"].districtData;

    $("#Mandsaurc").append(my_district676.Mandsaur.confirmed);
    $("#Mandsaurr").append(my_district676.Mandsaur.recovered);
    $("#Mandsaurd").append(my_district676.Mandsaur.deceased);

      const my_district677 = data2["Madhya Pradesh"].districtData;

    $("#Barwanic").append(my_district677.Barwani.confirmed);
    $("#Barwanir").append(my_district677.Barwani.recovered);
    $("#Barwanid").append(my_district677.Barwani.deceased);

      const my_district678 = data2["Madhya Pradesh"].districtData;

    $("#Morenac").append(my_district678.Morena.confirmed);
    $("#Morenar").append(my_district678.Morena.recovered);
    $("#Morenad").append(my_district678.Morena.deceased);

      const my_district679 = data2["Madhya Pradesh"].districtData;

    $("#Damohc").append(my_district679.Damoh.confirmed);
    $("#Damohr").append(my_district679.Damoh.recovered);
    $("#Damohd").append(my_district679.Damoh.deceased);

      const my_district680 = data2["Madhya Pradesh"].districtData;

    $("#Neemuchc").append(my_district680.Neemuch.confirmed);
    $("#Neemuchr").append(my_district680.Neemuch.recovered);
    $("#Neemuchd").append(my_district680.Neemuch.deceased);

      const my_district681 = data2["Madhya Pradesh"].districtData;

    $("#Dewasc").append(my_district681.Dewas.confirmed);
    $("#Dewasr").append(my_district681.Dewas.recovered);
    $("#Dewasd").append(my_district681.Dewas.deceased);

      const my_district682 = data2["Madhya Pradesh"].districtData;

    $("#Jhabuac").append(my_district682.Jhabua.confirmed);
    $("#Jhabuar").append(my_district682.Jhabua.recovered);
    $("#Jhabuad").append(my_district682.Jhabua.deceased);

      const my_district683 = data2["Madhya Pradesh"].districtData;

    $("#Chhatarpurc").append(my_district683.Chhatarpur.confirmed);
    $("#Chhatarpurr").append(my_district683.Chhatarpur.recovered);
    $("#Chhatarpurd").append(my_district683.Chhatarpur.deceased);

      const my_district684 = data2["Madhya Pradesh"].districtData;

    $("#Pannac").append(my_district684.Panna.confirmed);
    $("#Pannar").append(my_district684.Panna.recovered);
    $("#Pannad").append(my_district684.Panna.deceased);

      const my_district685 = data2["Madhya Pradesh"].districtData;

    $("#Datiac").append(my_district685.Datia.confirmed);
    $("#Datiar").append(my_district685.Datia.recovered);
    $("#Datiad").append(my_district685.Datia.deceased);

      const my_district686 = data2["Madhya Pradesh"].districtData;

    $("#Tikamgarhc").append(my_district686.Tikamgarh.confirmed);
    $("#Tikamgarhr").append(my_district686.Tikamgarh.recovered);
    $("#Tikamgarhd").append(my_district686.Tikamgarh.deceased);

      const my_district687 = data2["Madhya Pradesh"].districtData;

    $("#Seonic").append(my_district687.Seoni.confirmed);
    $("#Seonir").append(my_district687.Seoni.recovered);
    $("#Seonid").append(my_district687.Seoni.deceased);

      const my_district688 = data2["Madhya Pradesh"].districtData;

    $("#Chhindwarac").append(my_district688.Chhindwara.confirmed);
    $("#Chhindwarar").append(my_district688.Chhindwara.recovered);
    $("#Chhindwarad").append(my_district688.Chhindwara.deceased);

      const my_district689 = data2["Madhya Pradesh"].districtData;

    $("#Shajapurc").append(my_district689.Shajapur.confirmed);
    $("#Shajapurr").append(my_district689.Shajapur.recovered);
    $("#Shajapurd").append(my_district689.Shajapur.deceased);

      const my_district690 = data2["Madhya Pradesh"].districtData;

    $("#Umariac").append(my_district690.Umaria.confirmed);
    $("#Umariar").append(my_district690.Umaria.recovered);
    $("#Umariad").append(my_district690.Umaria.deceased);

      const my_district691 = data2["Madhya Pradesh"].districtData;

    $("#Mandlac").append(my_district691.Mandla.confirmed);
    $("#Mandlar").append(my_district691.Mandla.recovered);
    $("#Mandlad").append(my_district691.Mandla.deceased);

      const my_district692 = data2["Madhya Pradesh"].districtData;

    $("#Gunac").append(my_district692.Guna.confirmed);
    $("#Gunar").append(my_district692.Guna.recovered);
    $("#Gunad").append(my_district692.Guna.deceased);

      const my_district693 = data2["Madhya Pradesh"].districtData;

    $("#Hardac").append(my_district693.Harda.confirmed);
    $("#Hardar").append(my_district693.Harda.recovered);
    $("#Hardad").append(my_district693.Harda.deceased);

      const my_district694 = data2["Madhya Pradesh"].districtData;

    $("#Dindoric").append(my_district694.Dindori.confirmed);
    $("#Dindorir").append(my_district694.Dindori.recovered);
    $("#Dindorid").append(my_district694.Dindori.deceased);

      const my_district695 = data2["Madhya Pradesh"].districtData;

    $("#Khandwac").append(my_district695.Khandwa.confirmed);
    $("#Khandwar").append(my_district695.Khandwa.recovered);
    $("#Khandwad").append(my_district695.Khandwa.deceased);

      const my_district696 = data2["Madhya Pradesh"].districtData;

    $("#Sheopurc").append(my_district696.Sheopur.confirmed);
    $("#Sheopurr").append(my_district696.Sheopur.recovered);
    $("#Sheopurd").append(my_district696.Sheopur.deceased);

      const my_district697 = data2["Madhya Pradesh"].districtData;

    $("#Niwaric").append(my_district697.Niwari.confirmed);
    $("#Niwarir").append(my_district697.Niwari.recovered);
    $("#Niwarid").append(my_district697.Niwari.deceased);

      const my_district698 = data2["Madhya Pradesh"].districtData;

    $("#Ashoknagarc").append(my_district698.Ashoknagar.confirmed);
    $("#Ashoknagarr").append(my_district698.Ashoknagar.recovered);
    $("#Ashoknagard").append(my_district698.Ashoknagar.deceased);

      const my_district699 = data2["Madhya Pradesh"].districtData;

    $("#Alirajpurc").append(my_district699.Alirajpur.confirmed);
    $("#Alirajpurr").append(my_district699.Alirajpur.recovered);
    $("#Alirajpurd").append(my_district699.Alirajpur.deceased);

      const my_district700 = data2["Madhya Pradesh"].districtData;

    $("#AgarMalwac").append(my_district700["Agar Malwa"].confirmed);
    $("#AgarMalwar").append(my_district700["Agar Malwa"].recovered);
    $("#AgarMalwad").append(my_district700["Agar Malwa"].deceased);

      const my_district701 = data2["Madhya Pradesh"].districtData;

    $("#Bhindc").append(my_district701.Bhind.confirmed);
    $("#Bhindr").append(my_district701.Bhind.recovered);
    $("#Bhindd").append(my_district701.Bhind.deceased);

      const my_district702 = data2["Madhya Pradesh"].districtData;

    $("#Burhanpurc").append(my_district702.Burhanpur.confirmed);
    $("#Burhanpurr").append(my_district702.Burhanpur.recovered);
    $("#Burhanpurd").append(my_district702.Burhanpur.deceased);

      const my_district703 = data2["Madhya Pradesh"].districtData;

    $("#Unknownmpc").append(my_district703.Unknown.confirmed);
    $("#Unknownmpr").append(my_district703.Unknown.recovered);
    $("#Unknownmpd").append(my_district703.Unknown.deceased);

      const my_district704 = data2["Madhya Pradesh"].districtData;

    $("#OtherRegionmpc").append(my_district704["Other Region"].confirmed);
    $("#OtherRegionmpr").append(my_district704["Other Region"].recovered);
    $("#OtherRegionmpd").append(my_district704["Other Region"].deceased);

      const my_district705 = data2["Madhya Pradesh"].districtData;

    $("#Betulc").append(my_district705.Betul.confirmed);
    $("#Betulr").append(my_district705.Betul.recovered);
    $("#Betuld").append(my_district705.Betul.deceased);


    // uttar pradesh district

    const my_district706 = data2["Uttar Pradesh"].districtData;

    $("#Lucknowc").append(my_district706.Lucknow.confirmed);
    $("#Lucknowr").append(my_district706.Lucknow.recovered);
    $("#Lucknowd").append(my_district706.Lucknow.deceased);

    
    const my_district707 = data2["Uttar Pradesh"].districtData;

    $("#Varanasic").append(my_district707.Varanasi.confirmed);
    $("#Varanasir").append(my_district707.Varanasi.recovered);
    $("#Varanasid").append(my_district707.Varanasi.deceased);

    
    const my_district708 = data2["Uttar Pradesh"].districtData;

    $("#KanpurNagarc").append(my_district708["Kanpur Nagar"].confirmed);
    $("#KanpurNagarr").append(my_district708["Kanpur Nagar"].recovered);
    $("#KanpurNagard").append(my_district708["Kanpur Nagar"].deceased);

    
    const my_district709 = data2["Uttar Pradesh"].districtData;

    $("#Prayagrajc").append(my_district709.Prayagraj.confirmed);
    $("#Prayagrajr").append(my_district709.Prayagraj.recovered);
    $("#Prayagrajd").append(my_district709.Prayagraj.deceased);

    
    const my_district710 = data2["Uttar Pradesh"].districtData;

    $("#Meerutc").append(my_district710.Meerut.confirmed);
    $("#Meerutr").append(my_district710.Meerut.recovered);
    $("#Meerutd").append(my_district710.Meerut.deceased);

     const my_district711 = data2["Uttar Pradesh"].districtData;

    $("#GautamBuddhaNagarc").append(my_district711["Gautam Buddha Nagar"].confirmed);
    $("#GautamBuddhaNagarr").append(my_district711["Gautam Buddha Nagar"].recovered);
    $("#GautamBuddhaNagard").append(my_district711["Gautam Buddha Nagar"].deceased);

     const my_district712 = data2["Uttar Pradesh"].districtData;

    $("#Gorakhpurc").append(my_district712.Gorakhpur.confirmed);
    $("#Gorakhpurr").append(my_district712.Gorakhpur.recovered);
    $("#Gorakhpurd").append(my_district712.Gorakhpur.deceased);

     const my_district713 = data2["Uttar Pradesh"].districtData;

    $("#Ghaziabadc").append(my_district713.Ghaziabad.confirmed);
    $("#Ghaziabadr").append(my_district713.Ghaziabad.recovered);
    $("#Ghaziabadd").append(my_district713.Ghaziabad.deceased);

     const my_district714 = data2["Uttar Pradesh"].districtData;

    $("#Bareillyc").append(my_district714.Bareilly.confirmed);
    $("#Bareillyr").append(my_district714.Bareilly.recovered);
    $("#Bareillyd").append(my_district714.Bareilly.deceased);

     const my_district715 = data2["Uttar Pradesh"].districtData;

    $("#Moradabadc").append(my_district715.Moradabad.confirmed);
    $("#Moradabadr").append(my_district715.Moradabad.recovered);
    $("#Moradabadd").append(my_district715.Moradabad.deceased);


     const my_district716 = data2["Uttar Pradesh"].districtData;

    $("#Jhansic").append(my_district716.Jhansi.confirmed);
    $("#Jhansir").append(my_district716.Jhansi.recovered);
    $("#Jhansid").append(my_district716.Jhansi.deceased);

     const my_district717 = data2["Uttar Pradesh"].districtData;

    $("#Saharanpurc").append(my_district717.Saharanpur.confirmed);
    $("#Saharanpurr").append(my_district717.Saharanpur.recovered);
    $("#Saharanpurd").append(my_district717.Saharanpur.deceased);

     const my_district718 = data2["Uttar Pradesh"].districtData;

    $("#Muzaffarnagarc").append(my_district718.Muzaffarnagar.confirmed);
    $("#Muzaffarnagarr").append(my_district718.Muzaffarnagar.recovered);
    $("#Muzaffarnagard").append(my_district718.Muzaffarnagar.deceased);


     const my_district719 = data2["Uttar Pradesh"].districtData;

    $("#Agrac").append(my_district719.Agra.confirmed);
    $("#Agrar").append(my_district719.Agra.recovered);
    $("#Agrad").append(my_district719.Agra.deceased);

     const my_district720 = data2["Uttar Pradesh"].districtData;

    $("#LakhimpurKheric").append(my_district720["Lakhimpur Kheri"].confirmed);
    $("#LakhimpurKherir").append(my_district720["Lakhimpur Kheri"].recovered);
    $("#LakhimpurKherid").append(my_district720["Lakhimpur Kheri"].deceased);

     const my_district721 = data2["Uttar Pradesh"].districtData;

    $("#Jaunpurc").append(my_district721.Jaunpur.confirmed);
    $("#Jaunpurr").append(my_district721.Jaunpur.recovered);
    $("#Jaunpurd").append(my_district721.Jaunpur.deceased);

     const my_district722 = data2["Uttar Pradesh"].districtData;

    $("#Ghazipurc").append(my_district722.Ghazipur.confirmed);
    $("#Ghazipurr").append(my_district722.Ghazipur.recovered);
    $("#Ghazipurd").append(my_district722.Ghazipur.deceased);

     const my_district723 = data2["Uttar Pradesh"].districtData;

    $("#Balliac").append(my_district723.Ballia.confirmed);
    $("#Balliar").append(my_district723.Ballia.recovered);
    $("#Balliad").append(my_district723.Ballia.deceased);

     const my_district724 = data2["Uttar Pradesh"].districtData;

    $("#Aligarhc").append(my_district724.Aligarh.confirmed);
    $("#Aligarhr").append(my_district724.Aligarh.recovered);
    $("#Aligarhd").append(my_district724.Aligarh.deceased);

     const my_district725 = data2["Uttar Pradesh"].districtData;

    $("#Shahjahanpurc").append(my_district725.Shahjahanpur.confirmed);
    $("#Shahjahanpurr").append(my_district725.Shahjahanpur.recovered);
    $("#Shahjahanpurd").append(my_district725.Shahjahanpur.deceased);

     const my_district726 = data2["Uttar Pradesh"].districtData;

    $("#Mathurac").append(my_district726.Mathura.confirmed);
    $("#Mathurar").append(my_district726.Mathura.recovered);
    $("#Mathurad").append(my_district726.Mathura.deceased);

     const my_district727 = data2["Uttar Pradesh"].districtData;

    $("#Deoriac").append(my_district727.Deoria.confirmed);
    $("#Deoriar").append(my_district727.Deoria.recovered);
    $("#Deoriad").append(my_district727.Deoria.deceased);

     const my_district728 = data2["Uttar Pradesh"].districtData;

    $("#Bulandshahrc").append(my_district728.Bulandshahr.confirmed);
    $("#Bulandshahrr").append(my_district728.Bulandshahr.recovered);
    $("#Bulandshahrd").append(my_district728.Bulandshahr.deceased);

     const my_district729 = data2["Uttar Pradesh"].districtData;

    $("#Barabankic").append(my_district729.Barabanki.confirmed);
    $("#Barabankir").append(my_district729.Barabanki.recovered);
    $("#Barabankid").append(my_district729.Barabanki.deceased);

     const my_district730 = data2["Uttar Pradesh"].districtData;

    $("#Azamgarhc").append(my_district730.Azamgarh.confirmed);
    $("#Azamgarhr").append(my_district730.Azamgarh.recovered);
    $("#Azamgarhd").append(my_district730.Azamgarh.deceased);


     const my_district731 = data2["Uttar Pradesh"].districtData;

    $("#RaeBarelic").append(my_district731["Rae Bareli"].confirmed);
    $("#RaeBarelir").append(my_district731["Rae Bareli"].recovered);
    $("#RaeBarelid").append(my_district731["Rae Bareli"].deceased);

     const my_district732 = data2["Uttar Pradesh"].districtData;

    $("#Ayodhyac").append(my_district732.Ayodhya.confirmed);
    $("#Ayodhyar").append(my_district732.Ayodhya.recovered);
    $("#Ayodhyad").append(my_district732.Ayodhya.deceased);

     const my_district733 = data2["Uttar Pradesh"].districtData;

    $("#Sonbhadrac").append(my_district733.Sonbhadra.confirmed);
    $("#Sonbhadrar").append(my_district733.Sonbhadra.recovered);
    $("#Sonbhadrad").append(my_district733.Sonbhadra.deceased);

     const my_district734 = data2["Uttar Pradesh"].districtData;

    $("#Amrohac").append(my_district734.Amroha.confirmed);
    $("#Amrohar").append(my_district734.Amroha.recovered);
    $("#Amrohad").append(my_district734.Amroha.deceased);

     const my_district735 = data2["Uttar Pradesh"].districtData;

    $("#Chandaulic").append(my_district735.Chandauli.confirmed);
    $("#Chandaulir").append(my_district735.Chandauli.recovered);
    $("#Chandaulid").append(my_district735.Chandauli.deceased);

     const my_district736 = data2["Uttar Pradesh"].districtData;

    $("#Pratapgarhupc").append(my_district736.Pratapgarh.confirmed);
    $("#Pratapgarhupr").append(my_district736.Pratapgarh.recovered);
    $("#Pratapgarhupd").append(my_district736.Pratapgarh.deceased);

     const my_district737 = data2["Uttar Pradesh"].districtData;

    $("#Kushinagarc").append(my_district737.Kushinagar.confirmed);
    $("#Kushinagarr").append(my_district737.Kushinagar.recovered);
    $("#Kushinagard").append(my_district737.Kushinagar.deceased);

     const my_district738 = data2["Uttar Pradesh"].districtData;

    $("#Unnaoc").append(my_district738.Unnao.confirmed);
    $("#Unnaor").append(my_district738.Unnao.recovered);
    $("#Unnaod").append(my_district738.Unnao.deceased);

     const my_district739 = data2["Uttar Pradesh"].districtData;

    $("#Budaunc").append(my_district739.Budaun.confirmed);
    $("#Budaunr").append(my_district739.Budaun.recovered);
    $("#Budaund").append(my_district739.Budaun.deceased);

     const my_district740 = data2["Uttar Pradesh"].districtData;

    $("#Sultanpurc").append(my_district740.Sultanpur.confirmed);
    $("#Sultanpurr").append(my_district740.Sultanpur.recovered);
    $("#Sultanpurd").append(my_district740.Sultanpur.deceased);

     const my_district741 = data2["Uttar Pradesh"].districtData;

    $("#Bijnorc").append(my_district741.Bijnor.confirmed);
    $("#Bijnorr").append(my_district741.Bijnor.recovered);
    $("#Bijnord").append(my_district741.Bijnor.deceased);

     const my_district742 = data2["Uttar Pradesh"].districtData;

    $("#Etawahc").append(my_district742.Etawah.confirmed);
    $("#Etawahr").append(my_district742.Etawah.recovered);
    $("#Etawahd").append(my_district742.Etawah.deceased);

     const my_district743 = data2["Uttar Pradesh"].districtData;

    $("#Hardoic").append(my_district743.Hardoi.confirmed);
    $("#Hardoir").append(my_district743.Hardoi.recovered);
    $("#Hardoid").append(my_district743.Hardoi.deceased);

     const my_district744 = data2["Uttar Pradesh"].districtData;

    $("#Shamlic").append(my_district744.Shamli.confirmed);
    $("#Shamlir").append(my_district744.Shamli.recovered);
    $("#Shamlid").append(my_district744.Shamli.deceased);

     const my_district745 = data2["Uttar Pradesh"].districtData;

    $("#Lalitpurc").append(my_district745.Lalitpur.confirmed);
    $("#Lalitpurr").append(my_district745.Lalitpur.recovered);
    $("#Lalitpurd").append(my_district745.Lalitpur.deceased);

     const my_district746 = data2["Uttar Pradesh"].districtData;

    $("#Hapurc").append(my_district746.Hapur.confirmed);
    $("#Hapurr").append(my_district746.Hapur.recovered);
    $("#Hapurd").append(my_district746.Hapur.deceased);

     const my_district747 = data2["Uttar Pradesh"].districtData;

    $("#Sitapurc").append(my_district747.Sitapur.confirmed);
    $("#Sitapurr").append(my_district747.Sitapur.recovered);
    $("#Sitapurd").append(my_district747.Sitapur.deceased);

     const my_district748 = data2["Uttar Pradesh"].districtData;

    $("#Maharajganjc").append(my_district748.Maharajganj.confirmed);
    $("#Maharajganjr").append(my_district748.Maharajganj.recovered);
    $("#Maharajganjd").append(my_district748.Maharajganj.deceased);

     const my_district749 = data2["Uttar Pradesh"].districtData;

    $("#Gondac").append(my_district749.Gonda.confirmed);
    $("#Gondar").append(my_district749.Gonda.recovered);
    $("#Gondad").append(my_district749.Gonda.deceased);

     const my_district750 = data2["Uttar Pradesh"].districtData;

    $("#Rampurc").append(my_district750.Rampur.confirmed);
    $("#Rampurr").append(my_district750.Rampur.recovered);
    $("#Rampurd").append(my_district750.Rampur.deceased);

     const my_district751 = data2["Uttar Pradesh"].districtData;

    $("#Bastic").append(my_district751.Basti.confirmed);
    $("#Bastir").append(my_district751.Basti.recovered);
    $("#Bastid").append(my_district751.Basti.deceased);

     const my_district752 = data2["Uttar Pradesh"].districtData;

    $("#Jalaunc").append(my_district752.Jalaun.confirmed);
    $("#Jalaunr").append(my_district752.Jalaun.recovered);
    $("#Jalaund").append(my_district752.Jalaun.deceased);

     const my_district753 = data2["Uttar Pradesh"].districtData;

    $("#Bahraichc").append(my_district753.Bahraich.confirmed);
    $("#Bahraichr").append(my_district753.Bahraich.recovered);
    $("#Bahraichd").append(my_district753.Bahraich.deceased);

     const my_district754 = data2["Uttar Pradesh"].districtData;

    $("#Mirzapurc").append(my_district754.Mirzapur.confirmed);
    $("#Mirzapurr").append(my_district754.Mirzapur.recovered);
    $("#Mirzapurd").append(my_district754.Mirzapur.deceased);

     const my_district755 = data2["Uttar Pradesh"].districtData;

    $("#Pilibhitc").append(my_district755.Pilibhit.confirmed);
    $("#Pilibhitr").append(my_district755.Pilibhit.recovered);
    $("#Pilibhitd").append(my_district755.Pilibhit.deceased);

     const my_district756 = data2["Uttar Pradesh"].districtData;

    $("#Bandac").append(my_district756.Banda.confirmed);
    $("#Bandar").append(my_district756.Banda.recovered);
    $("#Bandad").append(my_district756.Banda.deceased);

     const my_district757 = data2["Uttar Pradesh"].districtData;

    $("#Farrukhabadc").append(my_district757.Farrukhabad.confirmed);
    $("#Farrukhabadr").append(my_district757.Farrukhabad.recovered);
    $("#Farrukhabadd").append(my_district757.Farrukhabad.deceased);

     const my_district758 = data2["Uttar Pradesh"].districtData;

    $("#Auraiyac").append(my_district758.Auraiya.confirmed);
    $("#Auraiyar").append(my_district758.Auraiya.recovered);
    $("#Auraiyad").append(my_district758.Auraiya.deceased);

     const my_district759 = data2["Uttar Pradesh"].districtData;

    $("#Mainpuric").append(my_district759.Mainpuri.confirmed);
    $("#Mainpurir").append(my_district759.Mainpuri.recovered);
    $("#Mainpurid").append(my_district759.Mainpuri.deceased);

     const my_district760 = data2["Uttar Pradesh"].districtData;

    $("#Etahc").append(my_district760.Etah.confirmed);
    $("#Etahr").append(my_district760.Etah.recovered);
    $("#Etahd").append(my_district760.Etah.deceased);

     const my_district761 = data2["Uttar Pradesh"].districtData;

    $("#Amethic").append(my_district761.Amethi.confirmed);
    $("#Amethir").append(my_district761.Amethi.recovered);
    $("#Amethid").append(my_district761.Amethi.deceased);

     const my_district762 = data2["Uttar Pradesh"].districtData;

    $("#Sambhalc").append(my_district762.Sambhal.confirmed);
    $("#Sambhalr").append(my_district762.Sambhal.recovered);
    $("#Sambhald").append(my_district762.Sambhal.deceased);

     const my_district763 = data2["Uttar Pradesh"].districtData;

    $("#Siddharthnagarc").append(my_district763.Siddharthnagar.confirmed);
    $("#Siddharthnagarr").append(my_district763.Siddharthnagar.recovered);
    $("#Siddharthnagard").append(my_district763.Siddharthnagar.deceased);

     const my_district764 = data2["Uttar Pradesh"].districtData;

    $("#Kannaujc").append(my_district764.Kannauj.confirmed);
    $("#Kannaujr").append(my_district764.Kannauj.recovered);
    $("#Kannaujd").append(my_district764.Kannauj.deceased);

     const my_district765 = data2["Uttar Pradesh"].districtData;

    $("#Baghpatc").append(my_district765.Baghpat.confirmed);
    $("#Baghpatr").append(my_district765.Baghpat.recovered);
    $("#Baghpatd").append(my_district765.Baghpat.deceased);

     const my_district766 = data2["Uttar Pradesh"].districtData;

    $("#Firozabadc").append(my_district766.Firozabad.confirmed);
    $("#Firozabadr").append(my_district766.Firozabad.recovered);
    $("#Firozabadd").append(my_district766.Firozabad.deceased);

     const my_district767 = data2["Uttar Pradesh"].districtData;

    $("#Mauc").append(my_district767.Mau.confirmed);
    $("#Maur").append(my_district767.Mau.recovered);
    $("#Maud").append(my_district767.Mau.deceased);
     const my_district768 = data2["Uttar Pradesh"].districtData;

    $("#SantKabirNagarc").append(my_district768["Sant Kabir Nagar"].confirmed);
    $("#SantKabirNagarr").append(my_district768["Sant Kabir Nagar"].recovered);
    $("#SantKabirNagard").append(my_district768["Sant Kabir Nagar"].deceased);

     const my_district769 = data2["Uttar Pradesh"].districtData;

    $("#Bhadohic").append(my_district769.Bhadohi.confirmed);
    $("#Bhadohir").append(my_district769.Bhadohi.recovered);
    $("#Bhadohid").append(my_district769.Bhadohi.deceased);

     const my_district770 = data2["Uttar Pradesh"].districtData;

    $("#Balrampurupc").append(my_district770.Balrampur.confirmed);
    $("#Balrampurupr").append(my_district770.Balrampur.recovered);
    $("#Balrampurupd").append(my_district770.Balrampur.deceased);

     const my_district771 = data2["Uttar Pradesh"].districtData;

    $("#Chitrakootc").append(my_district771.Chitrakoot.confirmed);
    $("#Chitrakootr").append(my_district771.Chitrakoot.recovered);
    $("#Chitrakootd").append(my_district771.Chitrakoot.deceased);

     const my_district772 = data2["Uttar Pradesh"].districtData;

    $("#Fatehpurc").append(my_district772.Fatehpur.confirmed);
    $("#Fatehpurr").append(my_district772.Fatehpur.recovered);
    $("#Fatehpurd").append(my_district772.Fatehpur.deceased);

     const my_district773 = data2["Uttar Pradesh"].districtData;

    $("#KanpurDehatc").append(my_district773["Kanpur Dehat"].confirmed);
    $("#KanpurDehatr").append(my_district773["Kanpur Dehat"].recovered);
    $("#KanpurDehatd").append(my_district773["Kanpur Dehat"].deceased);

     const my_district774 = data2["Uttar Pradesh"].districtData;

    $("#Hamirpurupc").append(my_district774.Hamirpur.confirmed);
    $("#Hamirpurupr").append(my_district774.Hamirpur.recovered);
    $("#Hamirpurupd").append(my_district774.Hamirpur.deceased);

    
     const my_district775 = data2["Uttar Pradesh"].districtData;

    $("#AmbedkarNagarc").append(my_district775["Ambedkar Nagar"].confirmed);
    $("#AmbedkarNagarr").append(my_district775["Ambedkar Nagar"].recovered);
    $("#AmbedkarNagard").append(my_district775["Ambedkar Nagar"].deceased);

    
     const my_district776 = data2["Uttar Pradesh"].districtData;

    $("#Kaushambic").append(my_district776.Kaushambi.confirmed);
    $("#Kaushambir").append(my_district776.Kaushambi.recovered);
    $("#Kaushambid").append(my_district776.Kaushambi.deceased);

    
     const my_district777 = data2["Uttar Pradesh"].districtData;

    $("#Shrawastic").append(my_district777.Shrawasti.confirmed);
    $("#Shrawastir").append(my_district777.Shrawasti.recovered);
    $("#Shrawastid").append(my_district777.Shrawasti.deceased);


    
     const my_district778 = data2["Uttar Pradesh"].districtData;

    $("#Mahobac").append(my_district778.Mahoba.confirmed);
    $("#Mahobar").append(my_district778.Mahoba.recovered);
    $("#Mahobad").append(my_district778.Mahoba.deceased);

    
     const my_district779 = data2["Uttar Pradesh"].districtData;

    $("#Kasganjc").append(my_district779.Kasganj.confirmed);
    $("#Kasganjr").append(my_district779.Kasganj.recovered);
    $("#Kasganjd").append(my_district779.Kasganj.deceased);

    
     const my_district780 = data2["Uttar Pradesh"].districtData;

    $("#Hathrasc").append(my_district780.Hathras.confirmed);
    $("#Hathrasr").append(my_district780.Hathras.recovered);
    $("#Hathrasd").append(my_district780.Hathras.deceased);

    

    
     // const my_district774 = data2["Uttar Pradesh"].districtData;

    // $("#Hamirpurc").append(my_district774.Hamirpur.confirmed);
    // $("#Hamirpurr").append(my_district774.Hamirpur.recovered);
    // $("#Hamirpurd").append(my_district774.Hamirpur.deceased);



   // transition: background 0.5s ease-in-out;




    // $("#san").append(my_district.Aurangabad.active);
    // console.log(my_district);



    // Andhra Pradesh districtData Anantapur Araria active
    // $("#distric").append(my_district.districtData.Anantapur.confirmed);
  })

   //  // font-family: "Roboto",sans-serif;

   //     border: 2.7px solid rgb(112 124 128);
 


});

