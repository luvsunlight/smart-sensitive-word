# Smart-Sensitive-Word 智能敏感词识别

> 用 Javascript 实现的智能识别敏感词，正确率高达 100%

# 在线链接

[点这里体验](https://luvsunlight.github.io/smart-sensitive-word/)

# Usage

## npm

> 安装

```
npm i smart-sensitive-word -S
```

> 引入

```
import { filter } from "smart-sensitive-word"
const word = "anything you want to test"
console.log(filter(word, "*")) // [try it by yourself]
```

## script

> 安装

```
<script src=""></script>
```

> 引入

```
const { filter } = SmartSensitiveWord;
const word = "anything you want to test"
console.log(filter(word)) // [try it by yourself]
```

# API

## `filter(text<string>, replaceWord<string>)`

|   params    |             desc             |  type  | default |
| :---------: | :--------------------------: | :----: | :-----: |
|    text     | 用户需要进行敏感词筛选的文本 | string |    -    |
| replaceWord |     用于替换敏感词的字符     | string |   \*    |

# Special Sponsers

- http://www.nrta.gov.cn/
