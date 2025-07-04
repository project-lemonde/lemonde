# 現行のネットワーク空間における課題

## 課題1. 一部の企業や団体が多くの権利を持ち、エンドユーザーは企業方針の変更により想定していない不利益を被ることがある(例: Twitter -> X 改称問題)

- 企業の利益のためにサービスに広告が貼られる(広告モデルは安易なビジネス商法だが、エンドユーザー受けは悪い)

## 課題2. デジタルデータは容易に複製可能であり、絵やモデルのクリエイターが誰なのかぱっと見わからない、閲覧するためにはコピーをローカルにダウンロードする必要があり、そのデータの所有権があやふやである

## 課題3. メタバースや Web3.0 が失敗し廃れたのは、技術と金銭投機が先行しイメージが悪く、またエンドユーザーへの利点がよくわからなかったため

- 具体的な技術がどんなに理想的でも、エンドユーザーが理解する必要はない（技術先行である必要はない）
- Web3.0 = 投機界隈というイメージがついてしまったため、怪しまれている
- エンドユーザーが本質的に求めているサービスが理解されていない

## ソリューション1. `LeMonde Communication Protocol` により、中央集権型ネットワーク(特定の URL にアクセスして、サービスを受ける)ではなく、分散型(De-centralized)ネットワークを構築する

- インターネット黎明期に流行した IRC や ICQ のように、任意の個人や団体がサーバを自由に運営したり、 Peer-to-Peer 通信を基本としたデータ通信による非大企業依存のネットワークを構築する
- Transport-agnostic なプロトコルの提案により、 OSS として自由にユーザーがネットワークを構築出来る

## ソリューション2. `rk` という秘密鍵を用いた sign/verify システムを構築し、デジタルデータに対して署名を行い、誰によって作成されたデータなのかを誰でも確認できるようにする

- 秘密鍵は常にロテート可能な仕組みにし、仮に鍵をロストしても復旧出来るシステムを設ける
- 複数人で作成されたデータは連名で署名することで、団体による作成物であることがわかる
- 署名を連続させることで、データの譲渡や販売を行うことが出来る
- ニコニコ動画のクリエイター収益モデルが理想に近く、派生作品の収益がオリジナルに還元されるシステムであると良い

## ソリューション3. `LeMonde` により、モノづくりをしたい人、新しいデジタル空間で生活したい人を支える

- GTA Online のような経済のある第二の生活基盤
- マリオメーカー, Fortnite, Roblox, Minecraft のようなノーコードのモノづくりプラットフォーム
- 生成 AI を活用した様々な新しいモノの作成と流通
- Oz やレディプレイヤーワンのような SF 映画の世界が、生成 AI による爆発的な開発力で実現可能になったのではないかという期待

# 要するに何がしたいか

- Post-FLASH
- Post-Twitter(X)
- Post-Unity
- Post-Web3.0
- Post-Metaverse
- Post-Everything!

これらを過去のものとし、あたらしいデジタルコミュニケーションプラットフォーム基盤となるプロトコル、リファレンス実装を作りたい。
