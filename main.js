function stopWatch(options){

    // 何時にスタートやストップをクリックしたかを表示するにまとめた関数
    function addMessage(message){
        var messageElm = document.createElement('div');  // 新しいdiv要素を作成
        var now = new Date();   // 現在の日時を取得
        // メッセージと現在時刻を設定
        messageElm.innerText = now.getHours() + '時' + now.getMinutes() + '分' + now.getSeconds() + '秒 ' + message; 
        messageElm.classList.add('message');   // クラス'message'を追加
        logElm.appendChild(messageElm); // logElmにmessageElmを子として追加
    
    }
    
    // オプションの初期化。オプションが指定されていない場合、デフォルト値を使用
    options = options || {}; 
    var color = options.color || 'white'; // オプションのcolorが指定されていない場合は'white'を使用
    var backgroundColor = options.backgroundColor || 'gray'; // オプションのbackgroundColorが指定されていない場合は'black'を使用
    // ストップウォッチの表示要素を取得し、スタイルを設定していく
    var displayElm = document.getElementsByClassName('display')[0];
    displayElm.style.color = color; // 取得した要素の文字色を設定
    displayElm.style.backgroundColor = backgroundColor; // 取得した要素の背景色を設定


    // ログを表示する要素を取得    
    var logElm = document.querySelector('.log');
    
    // タイマーを初期化
    var timer = null; 
    
    // 'startButton'クラスを持つ要素のうち最初の要素を取得
    var startButton = document.getElementsByClassName('startButton')[0]; 
    // 取得したstartButtonにクリックイベントリスナーを追加
    startButton.addEventListener('click', function() {
        if (timer === null) { //timerがnullの場合
            var seconds = 0; // 秒数を初期化
            // 1秒ごとに実行される関数をセット
            timer = setInterval(function(){
                seconds++;
                displayElm.innerText = seconds; // displayElmのテキストにsecondsを入れて、秒数を表示
                console.log(seconds);
            }, 1000); 
            
            // 何時に「開始」したかを表示させるための関数を呼び出す
            addMessage('開始');
    
        }
    
    });
    

    // 'stopButton'クラスを持つ要素のうち最初の要素を取得
    var stopButton = document.getElementsByClassName('stopButton')[0]; 
     // 取得したstopButtonにクリックイベントリスナーを追加
    stopButton.addEventListener('click', function() {
        if (timer !== null){ //タイマがnullじゃない場合（タイマーが動作中の場合）
            clearInterval(timer); // タイマーをクリア
            timer = null; // タイマーをリセット

            // 何時に「終了」したかを表示させるための関数を呼び出す
            addMessage('終了');
    
        }
        
    });


}


// オプションを設定
var options = { 
    color: 'limegreen',
    backgroundColor: 'black'
};

// 関数を呼び出し、実行
stopWatch(options);

// 以下のようにオプションなしでも、実行可能（デフォルトのオプションが適用）
// stopWatch();
