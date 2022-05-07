# 基于Github/Gitee制作自己的学术主页

## 介绍

对于科研工作者来说，拥有个人学术主页作为线上简历是必不可少的。我们遵循 **低代码**、**轻量**、**简洁**、**优雅** 的原则，提出一个数据驱动型的开源项目，有助于科研工作者快速生成部署和更新自己的学术主页。

本项目采用 VUE + ElementUI 作为前端框架，JSON 配置文件作为数据驱动源，Github / Gitee Pages 提供静态页面托管服务。

用户无需编程基础，只需简单 3 步，即可生成自己的学术主页。

此仓库为私有主页，请勿 Fork 。

---

## 步骤

#### 1. 创建自己的 Github 账号
已有账户则忽略此步骤，Gitee 同理。
#### 2. 通过 Fork 将项目代码转存至自己的代码仓库
2.1 访问 
2.2 点击右上角 Fork
2.3 页面将自动跳转到自己的仓库
2.4 Settings > Rename 仓库名称为 username.github.io

#### 3. 修改配置文件
3.1 仓库 > config > setting.json > 编辑
3.2 配置文件为键值对，根据模板修改对应的内容
3.3 修改完成后点击 Commit changes

#### 4. 完成
至此学术主页已生成，通过 username.github.io 即可访问。

---
## 内容

### 基本信息
#### 姓名
对应键名为 **name**
无需增加头衔，只需要姓名即可。
```JSON
"name": "Darwin",
```
#### 个人照片
对应键名为 **bio_img**
使用互联网图片，配置如下：
```JSON
"bio_img": "https://xx.xx.com/xx.jpg",
```
使用仓库内照片，则需要上传照片至 **img** 路径下，配置如下：
```JSON
"bio_img": "img/xx.jpg",
```
#### Email
对应键名为 **Email**
无需增加头衔，只需要姓名即可。
```JSON
"Email": "xx@xx.com",
```
#### 所属单位
对应键名为 **affiliation**
```JSON
"affiliation": "Institute of ABC",
```
#### 通讯地址
对应键名为 **address**
```JSON
"address": "Road, City, Nation",
```
#### 专业
对应键名为 **major**
```JSON
"major": "Your major",
```
#### 自述
对应键名为 **bio_descr**
请使用`<br>`作为换行符，切记不可用回车。
```JSON
"bio_descr": "xx <br> xx",
```
#### 实验室课题组信息
对应键名为 **lab**
允许多个课题组，单条信息包含课题组名称和 LOGO，以`{"name": "xxx","logo": "img/lab_logo.png"}`的形式添加至`[ ] `数组中，注意条目之间应该有`,`。例如：
```JSON
"lab": [ 
    {
        "name": "AAAAA",
        "logo": "img/lab_logo.png"
    },
    {
        "name": "BBBBB",
        "logo": "img/lab_logo.png"
    },
],
```
如果课题组没有 LOGO ，可留空 `"logo": ""`。
#### 技术体系
对应键名为 **skills**
技术体系由软件`Program`、编程语言`Coding`、研发平台`Development Platform`、库`Library`、研究方法`Methdology`组成，每个技能由若干个条目组成。
```JSON
"skills": {
    "Program": [
        "AAAAA",
        "BBBBB",
        "CCCCC",
        "DDDDD"
    ],
    "Coding": [
        "AAAAA",
        "BBBBB",
        "CCCCC",
        "DDDDD"
    ],
    "Development Platform": [
        "AAAAA",
        "BBBBB",
        "CCCCC",
        "DDDDD"
    ],
    "Library": [
        "AAAAA",
        "BBBBB",
        "CCCCC",
        "DDDDD"
    ],
    "Methdology": [
        "AAAAA",
        "BBBBB",
        "CCCCC",
        "DDDDD"
    ]
},
```
#### 研究兴趣
对应键名为 **interestes**
该项是指研究人员所在领域面向研究对象自主构建或常引用数据集。
```JSON
"interestes": [
    {
        "major": "AAAAAAA",
        "keywords": "AA AAA AAAAA AAAAAA"
    },
    {
        "major": "BBBBBBB",
        "keywords": "BB BBB BBBBB BBBBBB"
    },
    {
        "major": "CCCCCCC",
        "keywords": "CC CCC CCCCC CCCCCC"
    },
    {
        "major": "DDDDDDD",
        "keywords": "DD DDD DDDDD DDDDDD"
    }
],
```
#### 监测数据集
对应键名为 **datasets**
该项是指研究人员所在领域面向研究对象自主构建或常引用数据集。
```JSON
"datasets": [
    "AAAAA Database (2011-)",
    "BBBBB Database (2020-)",
    "AAAAA Database (2022-)"
],
```
#### 寻求合作
对应键名为 **cooperations**
该项是增强学者合作或期刊专题征稿。
```JSON
"cooperations": [
    "ABCDEFG (2011-)",
    "ABCDEFG (2020-)",
    "ABCDEFG (2022-)"
],
```
#### 合作学者
对应键名为 **co_authors**
该项是合作学者列表，每个学者的信息包含姓名`year`、链接`year`、头像`year`。
```JSON
"co_authors": [
    {
        "name": "AA BBBB",
        "url": "#",
        "img": "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
    }
]
```
### 科研成果
#### 发表文章
对应键名为 **papers**
该项是研究者发表的论文，包含年份`year`、作者次序`index`、期刊分区`jcr`、题目`title`、期刊`journal`、影响因子`if`、论文链接`url`。
```JSON
"papers": [
    {
        "year": 2022,
        "jcr": "Q1",
        "index": "1st",
        "title": "ABCDEFG ABCDEFG ABC",
        "journal": "Nature",
        "if": 9.999,
        "url": "https://www.nature.com/"
    },
    {
        "year": 2022,
        "jcr": "Q1",
        "index": "1st",
        "title": "HIJKLN HIJKLNG HIJKLNTUY",
        "journal": "Science",
        "if": 9.999,
        "url": "https://www.nature.com/"
    }
],
```
#### 参与的科研项目
对应键名为 **projects**
该项是研究者参与的科研项目，包含执行期`period`、角色`role`、项目名称`name`、编号`no`。
```JSON
"projects": [
    {
        "period": "2019-2022",
        "name": "AAAAAAAAAAAAAAAA (XYZ).",
        "no": "[Grant No. 2019ABCDFG01]",
        "role": "Involve"
    },
    {
        "period": "2019-2022",
        "name": "BBBBBBBBBBBBBBBB (XYZ).",
        "no": "[Grant No. 2019ABCDFG02]",
        "role": "Involve"
    }
],
```
---
## 声明

欢迎各位同学使用，好的改进意见请提交 Issue，或发邮件。

祝大家，CNS 发到手软，早日评院士。
