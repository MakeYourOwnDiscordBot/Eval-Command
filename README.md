# eval
evalコマンドを実行する拡張機能<br>
botでサーバーの設定などを行うことができる。<br>
botを使うことで、**ユーザーには設定できない項目や、ユーザーが行うと面倒な作業をすぐ終える**ことができる。

## 拡張コマンド
|追加されるコマンド|使用方法(※設定によって変わります)|スクリーンショット|
|---|---|---|
|eval|`!eval <javascript code>`|<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/eval-command.png" width="640px">|

## 設定方法

### 1.このリポジトリは下記リポジトリの拡張機能です。
[これ(main)](https://github.com/MakeYourOwnDiscordBot/main)をセットアップする。<br><br>
### 2.コマンドを使えるようにする。
`eval`フォルダを**直接**`Extensions`フォルダにドラッグ&ドロップ<br>
<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/info-folder.png" width=160px>
<br><br>
### 3.使用例

|コマンド|スクリーンショット&説明|
|---|---|
|`!eval message.channel.setRatelimitPeruser(秒数)`|低速モードを設定する(5秒以下も設定可)|
|||
