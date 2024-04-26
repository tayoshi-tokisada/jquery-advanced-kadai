$(function(){
  // もっとみるボタンアニメーション
  $('.button-more').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
   $('.button-more').on('mouseout', function(){
     $(this).animate({
       opacity: 1.0,
       marginLeft: 0
     }, 100);
   });

  //  メインビジュアルカルーセル
  $(".carousel").slick({
    autoplay: true,
    dots: true,
    Infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 送信ボタンクリック時の処理
  $("#submit").on("click", function(event){
    // formタグによる送信を拒否
    event.preventDefault();
    // 入力チェックをした結果をresultに格納
    let result = inputCheck();

    // エラー判定とメッセージを取得
    let error = result.error;
    let message = result.message;

    if(error){
      // エラーあり
      alert(message);
    }
    else{
      // エラーなし
      alert("お問い合わせを送信しました。");
    }
  });

  // フォーカスが外れた時に入力チェックをする
  $("#name").blur(function(){
    inputCheck();
  });
  $("#hurigana").blur(function(){
    inputCheck();
  });
  $("#email").blur(function(){
    inputCheck();
  });
  $("#tel").blur(function(){
    inputCheck();
  });
  $("#message").blur(function(){
    inputCheck();
  });
  $("#agree").blur(function(){
    inputCheck();
  });

  // お問い合わせフォーム入力チェック
  function inputCheck(){
    // エラーチェック結果
    let result;
    // エラーメッセージ
    let message = "";
    // エラーかどうか
    let error = false;

    // お名前のチェック
    if($("#name").val() == ""){
      // エラーあり
      $("#name").css("background-color", "#f79999");
      error = true;
      message += "お名前を入力してください。\n";
    }
    else{
      // エラーなし
      $("#name").css("background-color", "#fafafa");
    }

    // フリガナのチェック
    if($("#hurigana").val() == ""){
      // エラーあり
      $("#hurigana").css("background-color", "#f79999");
      error = true;
      message += "フリガナを入力してください。\n";
    }
    else{
      // エラーなし
      $("#hurigana").css("background-color", "#fafafa");
    }

    // お問い合わせ内容のチェック
    if($("#message").val() == ""){
      // エラーあり
      $("#message").css("background-color", "#f79999");
      error = true;
      message += "お問い合わせ内容を入力してください。\n";
    }
    else{
      // エラーなし
      $("#message").css("background-color", "#fafafa");
    }

    // メールアドレスのチェック
    if($("#email").val() == ""
    || $("#email").val().indexOf("@") == -1
    || $("#email").val().indexOf(".") == -1){
      // エラーあり
      $("#email").css("background-color", "#f79999");
      error = true;
      message += "メールアドレスが未記入、または「@」「.」が含まれていません。\n";
    }
    else{
      // エラーなし
      $("#email").css("background-color", "#fafafa");
    }

    // 電話番号のチェック（任意）
    if($("#tel").val() != ""
    && $("#tel").val().indexOf("-") == -1){
      // エラーあり
      $("#tel").css("background-color", "#f79999");
      error = true;
      message += "電話番号に「-」が含まれていません。\n";
    }
    else{
      // エラーなし
      $("#tel").css("background-color", "#fafafa");
    }

    // 個人情報の取り扱いのチェックボックスのチェック
    if(!$("#agree").prop("checked")){
      error = true;
      message += "個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n";
    }

    // エラーの有無で送信ボタンの切り替え
    if(error){
      // エラーあり
      $("#submit").attr("src", "images/button-submit.png");
    }
    else{
      // エラーなし
      $("#submit").attr("src", "images/button-submit-blue.png");
    }

    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    // 戻り値を返す
    return result;
  }
});