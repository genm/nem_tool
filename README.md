# Vested Balance Calculator
XEM買ったはいいけどいつになったらハーベスト出来るんや…という自分のために作りました

現在のところ以下のことが出来ます．
* Vested Balance，保有XEM，購入予定XEMからハーベスト解禁日とそれまでの日数を計算
* NEM ADDRESS から 保有XEMとvestedBalanceを読み取る


## 細かな仕様
* 現状SNのalice2.nem.ninjaに依存しているので，SNが停止した場合NEMアドレスから情報を取得できません．
  * NEM公式のSNとかあったら教えて下さい
* グラフ描画が重くなるので，保有XEMと購入予定XEMの合計が10000XEM以上にならないとグラフを描画しません．

## 使用しているライブラリ等
* bootstrap
* chartJS
* fontawesome

## 寄付
BTC: 1EnJRZzT6KHNzPF7jtBcDbVCkffFidf7B4

XEM: NAH3YZCQMVZJNDZLDBDDYYSNC36JWASHL2QDMCVU

寄付されたコインは，この貧乏学生の生きる糧になります．