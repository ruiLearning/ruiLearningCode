---
title: Markdown数学公式写法
permalink: Markdown数学公式写法.html
tags:
  - 数学
  - markdown
categories:
  - tech
description: 数学
toc: true
cover: /img/cb423f162652e4dfad5b5faca14ae5fe.jpeg
top_img: /img/cb423f162652e4dfad5b5faca14ae5fe.jpeg
date: 2022-03-23 19:20:15
---

## 常用
$
\because
\therefore
\forall
\exists
\not=
\not>
\not\subset
\approx
$

$h^2$
$A\prime$
$C_n^2$
$\{a\*b\}: $
$(2+3)[4+4]$

$\frac{1}{2}$

$(\frac{x}{y})$

$\frac{n+1}{2k}$

$\frac {a+c+1}{b+c+2}$

$\binom{n+1}{2k}$

$\sqrt[4]{\frac xy}$

$\sqrt {a+b}$

$|𝑥+𝑦|$

$n\geq 2$

一元二次方程求根公式：$\dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $

$ \Delta = \sqrt{b^2 - 4ac}$


`外边框` 
$
\fbox{a+b+c+d}
$

`高亮一行公式` 
$
\bbox[#9ff, 5px]{
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\\\
a_2x+b_2y+c_2z=d_2 \\\\
a_3x+b_3y+c_3z=d_3
\end{array}
}
$

```
\because
\therefore
\forall
\exists
\not=
\not>
\not\subset
\approx
$h^2$
$C_n^2$
$\{a\*b\}: $
$(2+3)[4+4]$

$\frac{1}{2}$

$(\frac{x}{y})$

$\frac{n+1}{2k}$

$\frac {a+c+1}{b+c+2}$

$\binom{n+1}{2k}$

$\sqrt[4]{\frac xy}$

$\sqrt {a+b}$

$|𝑥+𝑦|$

$n\geq 2$

一元二次方程求根公式：$\dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $

$ \Delta = \sqrt{b^2 - 4ac}$


`外边框` 
$
\fbox{a+b+c+d}
$

`高亮一行公式` 
$
\bbox[#9ff, 5px]{
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\\\
a_2x+b_2y+c_2z=d_2 \\\\
a_3x+b_3y+c_3z=d_3
\end{array}
}
$
```
## 数学公式

行内公式y=ax+b：$y=ax+b$

三角函数:$\cos 2\theta = \cos^2 \theta - \sin^2 \theta = 2 \cos^2 \theta$

集合运算:$M(\beta^{\ast}(D),D) \subseteq C$

指数对数
$$ \log_a b = \frac{\log_c b}{\log_c a} = \frac{\ln b}{\ln a} $$
$$ \log_a b = \frac{1}{\log_b a} $$
$$ \log_{a^n} b = \frac{\log_a b}{n} $$
$$ \log_a b^n = n \log_a b $$
$$ \log_{a^n} b^m = \frac{m}{n} \log_a b $$
$$ x = e^{\ln x} $$
$$ a^x = e^{\ln {a^x}} = e^{x \ln a} $$
$$ \sqrt{x} = x^{\frac{1}{2}} = (e^{\ln x})^{\frac{1}{2}} = e^{\frac{1}{2} \ln x} $$

---



## 基础语法
### 上下标
- 上标:^
- 下标:_
- 例如:C_n^2，显示为$C_n^2$

### 括号
- 小括号:()，显示为()
- 中括号：[]，显示为[]
- 尖括号：\langle,\rangle呈现为⟨⟩
- 自适应括号：
   - \left(...\right)能使符号大小与邻近公式相适应
   - (\frac{x}{y})，显示为(xy)
   - \left(\frac{x}{y}\right)，显示为(xy)

### 求和、极限与积分
- 求和：\sum
  - 举例：\sum_{i=1}^n{a_i}呈现为$\sum_{i=1}^n{a_i}$
- 极限：\lim
  - 举例:\lim_{x\to 0}呈现为$\sum_{i=1}^n{a_i}$
- 积分:\int
  - 举例:\int_0^xf(x)dx呈现为$\int_0^xf(x)dx$

### 分式与根式
- 分式:\frac
  - 举例:\frac{分子}{分母}呈现为 分子分母
- 根式:\sqrt
  - 举例：\sqrt[x]{y}呈现为 $\sqrt[x]{y}$

- 函数名
  - 举例:\sin x，\ln x，\max(A,B,C)呈现为$\sin x，\ln x，\max(A,B,C)$

### 如何输入一个方程组
- 可以使用 `\begin{array}` … `\end{array}` 和 `\left\{` … `\right.` 来创建一个方程组

### 矩阵
- 基本语法
  - 起始标记\begin{matrix}``，结束标记``\end{matrix}
  - 每一行末尾标记\\，行间元素以$分割

- 举例

$$\begin{matrix}
1&0&0\\\\
0&1&0\\\\
0&0&1\\\\ 
\end{matrix}$$

$$\begin{bmatrix}
{a_{11}}&{a_{12}}&{\cdots}&{a_{1n}}\\\\
{a_{21}}&{a_{22}}&{\cdots}&{a_{2n}}\\\\
{\vdots}&{\vdots}&{\ddots}&{\vdots}\\\\
{a_{m1}}&{a_{m2}}&{\cdots}&{a_{mn}}\\\\
\end{bmatrix}$$

### 方程组
- 需要cases环境：起始、结束处以`{cases}`声明
- 举例
$$\begin{cases}
a_1x+b_1y+c_1z=d_1\\\\
a_2x+b_2y+c_2z=d_2\\\\
a_3x+b_3y+c_3z=d_3\\\\
\end{cases}
$$

### 公式编号
- 用\tag{n}标签
- 举例f(x)=x\tag{1}显示为 $f(x)=x\tag{1}$

### 分段函数
$$
f(x) =
\begin{cases}
0 & x为无理数 \\
x & x为有理数 \\
\end{cases}$$

## LaTex语法
LaTex语法会忽略空格，需要用`转义字符\`
小空格:a\ b呈现为a b
四个空格:a\quad b呈现为a    b

-------

## 例子

行间公式$$ \sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6} $$

一元二次方程求根公式 $$ x_{1,2} = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
$$ \Delta = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$


斐波那契数列通项公式

$$
f(n) =
\frac{1}{\sqrt{5}}
\left[ \left( \frac{1 + \sqrt{5}}{2} \right)^n - \left( \frac{1 - \sqrt{5}}{2} \right)^n \right]
$$

平面中两点(x1,y1)和(x2,y2)之间的直线距离就是欧式距离：
$$
\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}
$$



$h^2$

$\{a\*b\}: $

$(2+3)[4+4]$

$(\frac{x}{y})$

$$
\begin{equation}
a_1+a_2+\ldots+a_n \\\\
a_1+a_2+\cdots+a_n
\end{equation}
$$

$\binom{n+1}{2k}$

$\frac {a+c+1}{b+c+2}$


$\sqrt[4]{\frac xy}$
$\sqrt {a+b}$


$\sum_{r=1}^n$
$\int_{r=1}^\infty$

123
$$
\begin{equation}\begin{split}
a&=b+c-d \\\\
&\quad +e-f\\\\
&=g+h\\\\
& =i
\end{split}\end{equation}
$$

高亮一行公式
$$
\bbox[#9ff, 5px]{
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\\\
a_2x+b_2y+c_2z=d_2 \\\\
a_3x+b_3y+c_3z=d_3
\end{array}
}
$$

\begin{align}
\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\\\
& = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\\\
& = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\\\
& = \frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\\\
& \approx \frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right) \\\\
\end{align}

$$x=a_0 + \frac {1^2}{a_1 + \frac {2^2}{a_2 + \frac {3^2}{a_3 + \frac {4^2}{a_4 + ...}}}}$$

$
\overleftarrow{a+b+c+d}
$
$
\fbox{a+b+c+d}
$
$
\fbox{a+b+c+d}^{Sample}
$

```
行间公式$$ \sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6} $$

一元二次方程求根公式 $$ x_{1,2} = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$
$$ \Delta = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} $$


斐波那契数列通项公式

$$
f(n) =
\frac{1}{\sqrt{5}}
\left[ \left( \frac{1 + \sqrt{5}}{2} \right)^n - \left( \frac{1 - \sqrt{5}}{2} \right)^n \right]
$$

平面中两点(x1,y1)和(x2,y2)之间的直线距离就是欧式距离：
$$
\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}
$$



$h^2$

$\{a\*b\}: $

$(2+3)[4+4]$

$(\frac{x}{y})$

$$
\begin{equation}
a_1+a_2+\ldots+a_n \\\\
a_1+a_2+\cdots+a_n
\end{equation}
$$

$\binom{n+1}{2k}$

$\frac {a+c+1}{b+c+2}$


$\sqrt[4]{\frac xy}$
$\sqrt {a+b}$


$\sum_{r=1}^n$
$\int_{r=1}^\infty$

123
$$
\begin{equation}\begin{split}
a&=b+c-d \\\\
&\quad +e-f\\\\
&=g+h\\\\
& =i
\end{split}\end{equation}
$$

高亮一行公式
$$
\bbox[#9ff, 5px]{
\begin{array}{c}
a_1x+b_1y+c_1z=d_1 \\\\
a_2x+b_2y+c_2z=d_2 \\\\
a_3x+b_3y+c_3z=d_3
\end{array}
}
$$

\begin{align}
\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\\\
& = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\\\
& = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\\\
& = \frac{73}{12}\sqrt{1-\frac{1}{73^2}} \\\\
& \approx \frac{73}{12}\left(1-\frac{1}{2\cdot73^2}\right) \\\\
\end{align}

$$x=a_0 + \frac {1^2}{a_1 + \frac {2^2}{a_2 + \frac {3^2}{a_3 + \frac {4^2}{a_4 + ...}}}}$$

$
\overleftarrow{a+b+c+d}
$
$
\fbox{a+b+c+d}
$
$
\fbox{a+b+c+d}^{Sample}
$
```

---

## 其它

### 箭头
$
(\to ):
(\rightarrow ):
(\leftarrow ):
(\Rightarrow ):
(\Leftarrow ):
(\mapsto ):
$

### 逻辑运算符
$
(\land ):
(\lor ):
(\lnot ):
(\forall ):
$
$
(\exists ):
(\top ):
(\bot ):
(\vdash ):
(\vDash ):
$

### 操作符
$
(\star ):
(\ast ):
(\oplus ):
(\circ ):
(\bullet ):
$

### 等于
$
(\approx ):
(\sim ):
(\equiv ):
(\prec ):
$

### 范围
$
(\infty ):
(\aleph_o ):
(\nabla ):
(\Im ):
(\Re ):
$


### 点
$
(\ldots ): \ldots
(\cdots ): \cdots
(\cdot ): \cdot
$
其区别是点的位置不同，\ldots 位置稍低，\cdots 位置居中。


$$
f(n)
\begin{cases}
\cfrac n2, &if\ n\ is\ even\\\\
3n + 1, &if\  n\ is\ odd
\end{cases}
$$

$\prod$ ：
$\bigcup$ ：
$\bigcap$ ：
$arg\,\max_{c_k}$：
$arg\,\min_{c_k}$：

```

### 箭头
$
(\to ):
(\rightarrow ):
(\leftarrow ):
(\Rightarrow ):
(\Leftarrow ):
(\mapsto ):
$

### 逻辑运算符
$
(\land ):
(\lor ):
(\lnot ):
(\forall ):
$
$
(\exists ):
(\top ):
(\bot ):
(\vdash ):
(\vDash ):
$

### 操作符
$
(\star ):
(\ast ):
(\oplus ):
(\circ ):
(\bullet ):
$

### 等于
$
(\approx ):
(\sim ):
(\equiv ):
(\prec ):
$

### 范围
$
(\infty ):
(\aleph_o ):
(\nabla ):
(\Im ):
(\Re ):
$


### 点
$
(\ldots ): \ldots
(\cdots ): \cdots
(\cdot ): \cdot
$
其区别是点的位置不同，\ldots 位置稍低，\cdots 位置居中。


$$
f(n)
\begin{cases}
\cfrac n2, &if\ n\ is\ even\\\\
3n + 1, &if\  n\ is\ odd
\end{cases}
$$

$\prod$ ：
$\bigcup$ ：
$\bigcap$ ：
$arg\,\max_{c_k}$：
$arg\,\min_{c_k}$：
```


# 参考文献
https://www.zybuluo.com/codeep/note/163962

