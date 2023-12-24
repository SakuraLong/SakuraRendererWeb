const data = `= 全部图片显示器

段落非常简单，可以直接进行书写，前面什么都不用加。

例如上面内容的源代码就应该为：

**代码：**

<code>##
{|allIS
|-
| https://www.nankai.edu.cn/_upload/tpl/02/58/600/template600/images/schoolpic1.jpg
|}
</code>

{|allIS|column=200px|center
|-
| https://www.nankai.edu.cn/_upload/tpl/02/58/600/template600/images/schoolpic1.jpg
| https://www.nankai.edu.cn/_upload/article/images/4e/63/79dc74604b17b67b2d8128f898dd/3a140736-6902-421a-975e-d07f0b01a408.jpg
|}

= 组件名称

标题的名称为**allIS**或**图片展示框**：

**代码：**

<code>
{|allIS
|-
| https://www.nankai.edu.cn/_upload/tpl/02/58/600/template600/images/schoolpic1.jpg
|}

{|图片展示框
|-
| https://www.nankai.edu.cn/_upload/tpl/02/58/600/template600/images/schoolpic1.jpg
|}
</code>

= 语法

当段落通过<code>###{||}</code>设置时，内容中通过“|”进行换行，例如：

**代码：**

<code>
{|para
|-
| 第一行
| 第二行
第二行
|}
</code>

有如下效果：

{|para
|-
| 第一行
| 第二行
第二行
|}

= 段落类型

段落类型分为5种，分别是：

普通段落 default，（默认情况）

{|para|default
|-
| 这是一个default段落
|}

要点段落 tip

{|para|tip
|-
| 这是一个tip段落
|}

警告段落 warning

{|para|warning
|-
| 这是一个warning段落
|}

信息段落 info

{|para|info
|-
| 这是一个info段落
|}

成功段落 success

{|para|success
|-
| 这是一个success段落
|}

同时可以为他设置title，（除了default才能设置）

{|para|success|title=title改变啦
|-
| 这是一个success段落
|}

= 段落配置项

{|table|w=100%|center
|-
| + 配置项名称 | 配置项意义 | 配置项key值（key=value） | 配置项可选值
| 配置项默认值 | 示例 | 备注 
|-
| type | 段落的类型 | 可以直接写或key=type | default/d<br>warning/w<br>success/s<br>info/i<br>tip/t
| default | type=default/default/d |
|-
| title | 段落在类型不是default时的标题 | title | 标题名字
| type对应名字的英文大写（type=warning时title默认为WARNING） | title=段落标题 |
|-
| lineHeight | 段落的行高 | lineHeight/LH | css允许的行高设置
| 1 | lineHeight=1/LH=1 |
|-
| backgroundColor | 段落背景色 | backgroundColor/BGC | css允许的颜色设置/DEFAUL
| DEFAULT | backgroundColor=white/BGC=white |
|-
| border | 段落边框 | border | css允许的边框设置/DEFAULT
| DEFAULT | border=1px solid black |
|}

= 贡献者

{|para
|-
|{{github|nkuAlexLee}}{{github|sakuraLong}}
|}`
export default {
  data
}