# eval
evalコマンドを実行する拡張機能<br>
botでサーバーの設定などを行うことができる。<br>
botを使うことで、**ユーザーには設定できない項目や、ユーザーが行うと面倒な作業をすぐ終える**ことができる。
## !!!注意!!!
evalをだれでも使える状態にするのは非常に危険です。
デフォルトではbotオーナーにしか実行できないようになっているので、そのままの設定にしておいてください。
また、evalはjavascriptのコードをdiscord上で実行するためのものです。javascriptに関して知識がある方がのぞましいです。

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
#### メッセージを送信したチャンネルに送信する。
```javascript
!eval message.channel.send("送りたい内容")
//message.delete({timeout:500})//このメッセージを自動的に消したい場合はこれを使う
```
<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/eval-content.png" width="320px">
<br>

#### 低速モードを設定する(5秒以下も設定可)
```javascript
!eval message.channel.setRatelimitPerUser(秒数)
```
<img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/eval-setRateLimit.png" width="640px"><br>

#### `'ロール名'`に入れた名前のロールをすべてのメンバーに付与する。
```javascript
!eval const role = message.guild.roles.cache.find(role => role.name === 'ロール名')
message.guild.members.fetch()
    .then(members => Promise.all(members.map(member => member.roles.add(role))))
```
<br><img src="https://github.com/MakeYourOwnDiscordBot/assets/blob/main/IMAGES/eval-roleadd.jpg" width="640px"><br>

#### 先ほどのコマンドの逆、すべてのメンバーから外す。
```javascript
!eval const role = message.guild.roles.cache.find(role => role.name === 'ロール名')
message.guild.members.fetch()
    .then(members => Promise.all(members.map(member => member.roles.remove(role))))
```
<br>
