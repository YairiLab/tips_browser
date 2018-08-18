ブラウザで動くProcessingである、Processing.jsを使ってみる。
ブラウザでページを開くと、文字列がカーソルを追ってくる。

Processing.jsは、Processingをブラウザ上で動かせるようにするJavaScriptのライブラリ。  
Processing.js自体はJSで書かれているが、
Processing.jsのスケッチは、Processingと同じく **Javaで動かせる** 。
基本的な関数も同じで、ProcessingのJavaコードが
Processing.jsを使う場合でもほぼそのまま動く。  
（ハードウェアとの連携は厳しいが）

processing.jsはCDNのものを読んで使うのでダウンロード不要。  
このindex.htmlとsketch.pdeをウェブサーバに配置するだけで実行できる。
