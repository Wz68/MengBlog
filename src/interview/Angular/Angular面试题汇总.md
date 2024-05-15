---
title: Angular面试题汇总
order: 1
# 设置作者
author: Ms.LM
# 设置写作时间
date: 2024-05-15 

# 你可以自定义页脚
footer: 加油！
# 你可以自定义版权信息
copyright: Copyright © 2024-present Mr.LM
---

## 1. 生命周期钩子

生命周期的顺序，见下图：

![angular面试题及答案_angular面试](https://mengblog-1305308047.cos.ap-guangzhou.myqcloud.com/202405151349328.png)

| 钩子方法                  | 用途                                                                                                                                                                                      |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnChanges()`           | 当组件数据绑定的输入属性发生变化是触发，该方法接收一个SimpleChanges对象，包括当前值和上一个属性值。**首次调用一定发生在ngOnInit前，**值得注意的是该方法仅限于对象的引用发生变化时才会触发 |
| `ngOnInit()`              | 初始化指令或组件，在angular第一次显示展示组件的绑定属性后调用，该方法只会调用一次                                                                                                         |
| `ngDoCheck()`             | 检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应                                                                                                                               |
| `ngAfterContentInit()`    | 当把内容投影进组件之后调用，第一次调用ngDocheck()之后调用，只调用一次，只适用于组件                                                                                                       |
| `ngAfterContentChecked()` | 每次完成被投影组件内容的变更检测之后调用，只适用于组件                                                                                                                                    |
| `ngAfterViewInit()`       | 当 Angular 初始化完组件视图及其子视图或包含该指令的视图之后调用                                                                                                                           |
| `ngAfterViewChecked()`    | 每次做完组件视图和子视图的变更检测之后调用，只适用于组件                                                                                                                                  |
| `ngOnDestroy()`           | 在angular每次销毁组件或指令之前调用，通常用于移除事件监听，退订可观察对象，以防内存泄露                                                                                                   |

## 2. 指令分类

组件：用于构建UI组件，继承于Directive类

属性指令：用于改变组件的外观或行为

- `ngClass`
- `ngStyle`

结构指令：用于动态添加或删除DOM元素来改变DOM布局

- `ngIf`
- `ngFor`
- `ngSwitch`

自定义指令

## 3. 父子组件之间的数据传递

- `@Input` 父组件向子组件传递数据和传递方法(子组件中使用)
- `@output` 子组件传值给父组件  （事件传递的方式）（子组件中使用）

```typescript
//子组件中使用事件发射器
@output()  somethingChanged = new EventEmitter();
somethingChanged.emit(value);
```

- 使用`@ViewChid`父组件通过局部变量获取子组件的引用，主动获取子组件的数据和方法（父组件中使用）

## 4. 双向数据绑定的原理

- data => view：数据绑定，模板语法 [ ]
- view => data:   事件绑定，模板语法（）
- angular的双向数据绑定就是 数据绑定 + 事件绑定 ，模板语法 [()]

## 5. 组件和指令的区别

- component使用注解`@Component`修饰，directive使用注解`@Directive`修饰
- component是组件化思想，基于组件创建应用，把应用划分成细小的可重复利用的组件，而directive用来在已经存在的DOM元素上实现一些行为
- component是可重复使用的组件，directive是可重复使用的行为
- component可创建一个view，即template或templateUrl，而directive没有。

## 6. ng-content指令？

>  像p标签或者h1标签，在标记之间可以添加内容，` <p>this is a paragraph</p>`那我们如果想在angular的标签之间添加内容呢，例如在`<app-test></app-test>`,这种情况下就可以使用`<ng-content>tag directive is used</ng-content> `

##  7. router.navigate 的使用？

>  当我们想路由到一个组件的时候使用`router.navigate` ` this.router.navigate(['./component name']) `  

## 8. 什么是ViewEncapsulation

>  ViewEncapsulation 决定组件中定义的样式是否会影响整个应用程序。在Angular中有三种方法可以做到这一点: Emulated : 样式从其他HTML传播到组件。 Native : 来自其他HTML的样式不会传播到组件。 None:组件中定义的样式对所有组件都是可见的。 

## 9.  RouterOutlet

>  `<router-outlet></router-outlet>` 简单理解：页面占位符,决定component显示在哪里，最终会被相应的component的view替换掉 

##  10. {{}}数据引用

>  与HTML标签一起使用，`<h1>{{var}}</h1>` var 是来自于ts（component）中的值。 

## 11.  有几种数据绑定方式？

- 属性绑定  [ ]
- 事件绑定（）
- 双向数据绑定 [()]

##  12. 单页面应用和传统的web技术有什么不同？

>  在传统的web技术中，客户端请求一个web页面(HTML/JSP/asp)，服务器返回资源(或HTML页面)，客户端再次请求另一个页面，服务器用另一个资源响应。问题就在于请求/响应中消耗了大量时间，或者是重新加载使用了大量时间。而在SPA技术中，即使URL不断变化，我们也只维护一个页面(index.HTML)。 

##  13. Observables 和Promises的区别

- Observables 是惰性的，意思是在subsciption之前什么都不会发生。

​         Promise是eager的，意思是一旦创建，就会执行 

- Observable是一个stream，可以传递0,1，或者多个事件，并且为每个事件回调。

​         Promise只处理一个事件 

- Observable可取消

​         Promise不可取消   

##  14. AsyncPipe ？

>  当`observable`或pr`omise`返回`data`时，我们使用一个临时属性来保存内容。稍后，我们将相同的内容绑定到模板。通过使用`AsyncPipe`, `promise`或`observable`可以直接在模板中使用，而不需要临时属性。 

##  15. Authentication and Authorization的区别？

- `Authentication (认证)` ： 用户登录凭据传递给(服务器上的)认证API。在服务器端验证凭据并返回JSON Web Token(JWT)。JWT是一个JSON对象，它有关于当前用户的一些信息或属性。一旦JWT返回给给客户端，客户端或用户将被该JWT所标记。
- `Authorization（授权）`：登录成功后，经过[身份验证](https://cloud.tencent.com/product/mfas?from_column=20065&from=20065)或真正的用户不能访问所有内容。用户未被授权访问其他人的数据，他/她被授权访问某些数据。

##  16. AOT编译 和JIT编译？

- Just-In-Time (JIT) 生成的JS代码，在浏览器中进行。

​        — 大概的开发流程：           

​			– 使用Typescript开发          

​			– 使用tsc编译           

​			– 打包、压缩、部署          

​		部署好之后，用户在浏览器端：           

​			– 浏览器下载js代码           

​			– angular启动，在浏览器中开始JIT的编译过程           

​			– 渲染页面 

- Ahead-of-Time（AOT）生成的是TS代码

​        — 流程：           

​			– typescript开发angular应用           

​			– 用ngc编译              

​			   用angular编译器对模板进行编译，生成typescript代码              

​			   typescript编译车JavaScript           

​			– 打包部署           

​			   用户端           

​			– 下载代码           

​			– 启动angular           

​			– 页面渲染 

​	AOT优势 　　

​		1、渲染得更快 　　

​		2、需要的异步请求更少 　　

​		3、需要下载的Angular框架体积更小 　　

​		4、提早检测模板错误 　　

​		5、更安全

​	 JIT优势 　　

​		编译时间短，除非确实有动态组件的需求，否则jit唯一的优势就是能用来做在线 Demo和开发调试。 

##  17. 什么是Redux?

>  它是一个帮助我们维护应用程序状态的库。简单的数据流应用程序不需要Redux，它用于具有复杂数据流的单页应用程序。 

## 18. 什么是Pipes?

>   此功能用于更改模板上的输出;比如将字符串更改为大写并在模板上显示它。它还可以相应地更改日期格式。 

## 19. ng-Class 和 ng-Style的区别

-  `ng-Class`: 加载css类 
- `ng-Style`:设置css样式

## 20. component和module的区别？

- component控制视图（html）.组件之间以及组件和service之间互相交互给app提供功能
- module是包括一个或多个组件，module不会控制视图（HTML）。module声明了哪些模块可以被其他模块使用，依赖注入了哪些类，以及启动的component，模块来管理组件，使app实现模块化。

## 21. 怎样在组件中选择一个元素？

>   在组件的constructor中引入 ElementRef 来操作DOM元素 constructor(myElement: ElementRef) { ... }   

## 22. 设置base href 标签的作用？

>  angular路由器使用base href 作为组件、模板的基地址，开发期间，通常会在index.html所在目录中启动服务器，所以这个目录就是根目录，所以可以在index.html 的顶部添加<base href=”/”>。 当没有配置base标签时，加载应用会失败。 

## 23.  Observer / Observable 

- Observable（可观察者） 接受一个Observer作为参数然后返回unsubscribe函数

​         –  特征：            

​				— 是一个函数            

​				— 接受一个Observer对象（包含next、error、complete方法的对象）作为参数            

​				— 返回 unsubscribe 函数，用于取消订阅          

​		  –  作用：             

​				— 作为生产者和观察者之间的桥梁，并返回一种方法来解除生产者和观察者之间的关系，其中观察者用于处理时间序列上的数据流。 

- Observer (观察者)对象

 观察者用来接收可观察者发送过来的消息

```ts
var observer = {     
	next : x => console.log('Observer got a next value' + x),     
	error : err => console.error('Observer got a error:' + err),     
	complete: () => console.log('Observer got a complete notification') 
}     
使用 observable.subscribe(observer); 
```

##  24. Constructor 和 ngOnInit 的本质区别

- **Constructor** 

>  在ES6中 constructor表示构造函数，使用在class中。来初始化操作。当类被初始化之后，构造函数会被调用 

- **ngOnInit**

>  ngOnInit 是angular中OnInit钩子的实现，用来初始化组件。 ngOnInit  : 在angular 第一次显示数据绑定和设置指令、组件的输入属性之后，初始化指令、组件 所以从angular的生命周期看，constructor是执行在先的 所以既然ngOnchanges是输入属性发生变化的时候调用，并且ngOnInit是在ngOnchanges执行之后才调用，而constructor是在组件实例化的时候就调用了，也就是说，在constructor中是取不到输入属性的值的。 

- **使用场景**

  - constructor 中不适合进行任何和组件通信类似的复杂操作，一般在constructor中进行一些简单的初始化操作，比如依赖注入、变量初始化等。

  - ngOnInit可以用来初始化组件之间通信的，如异步请求等

### 25.  Angular的懒加载

>  默认情况下，在初始化的时候所有路由都会加载，导致加载缓慢，启动速度慢，所以可以使用懒加载 懒加载 ： 通俗 的讲就是进入主模块之后，子模块不加载，等真正访问到子模块之后，再去加载。使用loadChildren配置路由 知识点： 

- RouterModule.forRoot() 用于主模块 
- RouterModule.forChild() 用于子模块
- loadChildren 

```ts
const routes: Routes = [
    {path:'',redirectTo:'child'},   
    {path:'child',loadChildren:'./children-load/children-load.module#ChildrenLoadModule'},   	    			  	                 {path:'childNew',loadChildren:'./children-newload/children-newload.module#ChildrenNewloadModule'}
];   
```



### 26. **如何优化Angular 2应用程序来获得更好的性能？**

>  1）考虑AOT编译。
>
>  2）确保应用程序已经经过了捆绑，uglify和tree shaking。
>
>  3）确保应用程序不存在不必要的import语句。
>
>  4）确保应用中已经移除了不使用的第三方库。
>
>  5）所有dependencies 和dev-dependencies都是明确分离的。
>
>  6）如果应用程序较大时，我会考虑延迟加载而不是完全捆绑的应用程序。 

## 27. 使用Angular的好处

-  可以添加自定义的directive.
- 优秀的社区支持。
- 客户端和服务器的通讯非常便利。
- 强大的功能比如动画和事件处理。
- 使用mvc模式。
- 支持双向数据绑定。
- 支持依赖注入， restful service和有效验证。

## 28.  Angular的核心部件有哪些?

>  1、模块（Modules）
>
>  2、组件（Components）
>
>  3、模版（Templates）
>
>  4、元数据（Metadata）
>
>  5、数据绑定（Data Binding）
>
>  6、指令（Directives）
>
>  7、服务（Services）
>
>  8、依赖注入（Dependency Injection）
>
>  9、路由（routing） 

## 29.   列举一下Angular中的filter类型

>  Currency. Date. Filter. Json. limitTo lowercase number orderBy 

## 30. Dirty check是怎么回事?

>   Dirty check是比较新的数据跟老的数据的差别，如果看到有改变, 就用新的数据更新现有的视图。 

## 31. DOM和BOM的区别是什么?

- Dom是document object model。Bom是browser object model。
- DOM代表的是网页的内容。Bom包含dom, 它还包含有浏览器的属性。
- Dom是一棵树结构，通过对应的API来访问里面的数据。Bom包含在全局的JavaScript对象里面，是window object的子成员。
- Dom用来操作html文档。Bom用来操作浏览器窗口。
- Dom有w3c的标准。Bom,对各个浏览器来说都是有自己具体的实现，都不一样。

## 32. 模板驱动表单和 响应式表单的比较

>  **Template-Driven Forms (模板驱动表单) 的特点** 

-  使用方便 
-  适用于简单的场景 
-  通过 [(ngModel)] 实现数据双向绑定 
-  最小化组件类的代码 
-  不易于单元测试 

>  **Reactive Forms (响应式表单) 的特点** 

-  比较灵活 
-  适用于复杂的场景 
-  简化了HTML模板的代码，把验证逻辑抽离到组件类中 
-  方便的跟踪表单控件值的变化 
-  易于单元测试 

## 33. ContentChild 与 ViewChild 的异同点

>  相同点 

-  都是属性装饰器 
-  都有对应的复数形式装饰器：ContentChildren、ViewChildren 
-  都支持 Type(any) |Function|string 类型的选择器 

>  不同点 

-  ContentChild 用来从通过 Content Projection 方式 (ng-content) 设置的视图中获取匹配的元素 
-  ViewChild 用来从模板视图中获取匹配的元素 
-  在父组件的 ngAfterContentInit 生命周期钩子中才能成功获取通过 ContentChild 查询的元素 
-  在父组件的 ngAfterViewInit 生命周期钩子中才能成功获取通过 ViewChild 查询的元素