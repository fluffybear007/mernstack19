// node.js
// a run time enviroment for JS
// single threaded, high performance module
// google chrome v8 -engine
// scalable network programmes
// allows to execute js on server
// npm - node package manager <node comman line>
// non blocking IO processes <concurrent systems>

// Restaurant Example = <eatable preparation time>
// Attendendant is going to take the order 
// Order is prepared at kitchen

//1. Duncan => 30 mins
//2. Ben => 20 mins
//3. Honbo => 10 mins

// blocking system

//1. Duncan => Takes the order => Kitchen (waits for 30 mins) => Duncan - Delivers<30mins>
//2. Ben => Takes the order => Kitchen (waits for 20 mins) => Duncan - Delivers<20mins>
//3. Honbo => Takes the order => Kitchen (waits for 10 mins) => Duncan - Delivers<10mins>

// Total 30 + 20 + 10 => 60 mins 

// non - blocking system <node.js - request response system>
// node js system is able to take as many requests as possible in one go and then responds them as soon as the task done


//1. Duncan => Takes all 3 the order <=> Kitchen (doesn't waits for 30 mins) <=>Token1<pending, ready, cancelled>
//2. Ben => Takes all 3 the order <=> Kitchen (doesn't waits for 20 mins) <=>Token2<pending, ready, cancelled>  
//3. Honbo => Takes all 3 the order <=> Kitchen (doesn't waits for 10 mins)<=>Token3<pending, ready, cancelled>  

//First Ready Hongbo -10 min
//Second Eatable Ben - 20 min
//Third Duncan Eatable - 30 min 

// Max(10,20,30) ==> 30 mins


//Percentage performance better => 50%










// 01 Node.js是什么

// Node.js是一个基于Chrome V8引擎的JavaScript运行环境。Node.js使用了一个事件驱动的、非阻塞式I/O的模型，轻量又高效，它的底层是用C/C++编写的。这是Node.js的官方描述，对前端开发人员来说，想要搞清楚其中所包含的“引擎”“运行环境”“事件驱动”以及“非阻塞I/O模型”到底是什么意思，并不是一件容易的事情。

// 那么Node.js到底是什么？我们先用一个类比的示例来进行解释。比如，有人向你发送了一个扩展名为docx的文档，你想要查看其中的内容，于是打开记事本，把该文档拖到记事本的窗口里，然后就看到了一大堆乱码。这是因为记事本程序并不能识别这种格式的文档，你需要先安装Microsoft Office 2007以上版本的软件，然后用Word程序打开，这样才能看到正确解码的内容。

// 如果把示例中的docx文件看作程序，那么Word就是它的运行环境，这就像JavaScript程序与浏览器的关系一样。如果你了解过现代浏览器的结构，就会知道其中包含了JavaScript引擎。

// 以前，想要查看docx文件的内容，几乎只能依赖于Microsoft Office，后来金山公司也推出了办公软件工具WPS Office，它也能够解释和运行docx文件，于是docx文件就有了多个可运行环境，而Node.js对于JavaScript语言的意义也是如此。

// 为了更加直观地理解运行时的概念，你可以尝试一个有趣的实验，自己创造一种简单的编程语言，规定一些简易的语法，然后使用JavaScript来编写能够解释这些语法的代码。

// 例如，用自创的语言编写一些简单的程序，最后通过Node.js运行JavaScript程序，并在程序中用Node.js提供的文件读写接口（File API）读入你用自创的编程语言编写的程序，看看它能否被正确地解释和执行。待你了解了JavaScript是如何完成对自创编程语言的解释和执行的，自然就能明白在Node.js运行环境中，C/C++对JavaScript脚本做了什么事情。

// 当然，真实的代码解释执行过程要复杂得多，很多关键的思想和技术也被应用在前端框架的设计中，这些可以在今后的学习中慢慢消化。

// Node.js作用是什么？
// Node.js的主要作用是提供一个事件驱动、非阻塞式I/O模型，使得JavaScript能够高效地处理大量并发请求。 在传统的Web应用程序中，每个请求都需要一个独立的线程来处理，这会消耗大量的系统资源。 而Node.js采用单线程事件循环模型，可以处理大量并发请求，并且只使用少量的系统资源。