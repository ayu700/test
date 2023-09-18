// 再生アイテム
var play_item = 
[
	'1',
	'2'
];



// 設定初期化
var play_num = 0;
var play_movie;
var movie = document.getElementById("hero-movie");

// 初回の表示要素を設定
play_movie = play_item[play_num];

// 初回再生
moviePlay();

// 動画再生とコピーの入れ替え
function moviePlay()
{
	// 動画入れ替え
	document.getElementById('hero-movie-mp4').setAttribute('src',+ play_movie + '.mp4');
	document.getElementById('hero-movie-webm').setAttribute('src',+ play_movie + '.webm');
	movie.load();

	// 再生開始
	movie.addEventListener("loadeddata", function()
	{
		movie.play();
	}, false);

	// 再生終了
	movie.addEventListener("ended", function()
	{
		nextSetting();
	}, false);
}

// 次の動画を準備して再生
function nextSetting()
{
	if(play_num >= play_item.length - 1)
	{
		$("#hero-movie").remove();
	} else {
		play_num++;
	}

	// 次を予約
	play_movie = play_item[play_num];
    setTimeout(moviePlay(), 500);
	// 動画再生
}

// // 配列シャッフル
// function shuffle(array)
// {
// 	var n = array.length, t, i;
// 	while (n)
// 	{
// 		i = Math.floor(Math.random() * n--);
// 		t = array[n];
// 		array[n] = array[i];
// 		array[i] = t;
// 	}
// 	return array;
// }