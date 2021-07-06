+++
title = "Solutions ConstructsでSQS+Lambdaを作る"
date = "2021-03-27"
tags = ["Solutions Constructs", "SQS", "Lambda"]
category = "楽に作る"
+++

[Solutions Constructs](https://docs.aws.amazon.com/solutions/latest/constructs/welcome.html)は便利かもしれない。

ということに気がついて試してみた。

Solutions ConstructsというのはAWSのサービスの定番の組み合わせを短いコードで作ることができる。
例えばApi Gateway + Lambdaなんかはその定番だと思う。

今回試したのはSQS + Lambdaという組み合わせ。

試しにやってみて思ったことは、SQSとそれのコンシューマーとなるLambda、そしてデッドレターキューまでをほんの20行で作れてしまうのは便利だということだった。しかもSolutions Constructsを使ったからといって、設定上で何かを妥協する部分はなかった。

ただ1点今ひとつだと思ったのは、Solutions Constructsを他のCDKのプロジェクトとまぜこぜで使う場合に、Solutions Constructsの要求するnpmライブラリが、CDKの最新バージョンより少し古いものである場合があるということだ。

[Githubのリポジトリ](https://github.com/suzukiken/scsqslamda)
