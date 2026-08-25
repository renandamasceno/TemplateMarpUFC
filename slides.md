---
marp: true
theme: ufc
paginate: true
html: true
lang: pt-BR
title: Título da Apresentação - Subtítulo da Apresentação
author: Nome do Autor
description: Template Marp fiel ao Template Beamer UFC.
footer: '<span class="footer-author">Nome do Autor / UFC</span><span class="footer-title">short title</span><span class="footer-date">24 de agosto de 2026</span>'
---

<!-- _class: lead -->

# Título da Apresentação

## Subtítulo da Apresentação

<div class="author">Nome do Autor</div>
<div class="email">usuario@dominio</div>
<div class="institution">Nome do Departamento<br>Universidade Federal do Ceará</div>
<div class="date">24 de agosto de 2026</div>

---

# Sumário

<div class="toc">
  <div>
    <div><span class="toc-number">1</span>Seção I</div>
    <div class="toc-sub">Subseção I</div>
    <div class="toc-sub">Subseção II</div>
  </div>
  <div>
    <div><span class="toc-number">2</span>Multicolunas</div>
    <div><span class="toc-number">3</span>Imagens</div>
  </div>
</div>

---

<!-- ufc-section: Seção I -->

# Explicações

Este é um template que pode ser utilizado para:

- Apresentação de Trabalhos Acadêmicos
- Apresentação de Disciplinas
- Apresentações de Teses e Dissertações

Para utilizar este template corretamente é importante que:

1. Tenha conhecimento mínimo sobre Markdown e Marp
2. Leia os comentários no template
3. Leia o README.md com a documentação

<span class="example-text">Este é um texto de exemplo!</span> <span class="alert-text">Texto de Ênfase!</span>

---

# Criando Blocos

<div class="blocks">

<div class="block">
  <div class="block-title">Bloco Padrão</div>
  <div class="block-body">Texto do corpo do bloco.</div>
</div>

<div class="block alert">
  <div class="block-title">Bloco de Alerta</div>
  <div class="block-body">Texto do corpo do bloco.</div>
</div>

<div class="block success">
  <div class="block-title">Bloco de Exemplo</div>
  <div class="block-body">Texto do corpo do bloco.</div>
</div>

</div>

---

# Criando Caixas

<div class="boxes">
  <div class="box success">testando o success box</div>
  <div class="box alert">testando o alert box</div>
  <div class="box">testando o simple box</div>
</div>

---

# Algoritmos (Pseudocódigo)

<div class="algorithm">
  <div class="io"><strong>input</strong> &nbsp;: x: float, y: float<br><strong>output</strong>: r: float</div>
  <div class="line"><span class="n">1</span><strong>while <span class="alert-text">True</span> do</strong></div>
  <div class="line"><span class="n">2</span><span class="indent-1">r = x + y;</span></div>
  <div class="line"><span class="n">3</span><strong class="indent-1">if <span class="alert-text">r &gt;= 30</span> then</strong></div>
  <div class="line"><span class="n">4</span><span class="indent-2">“O valor de r é maior ou igual a 10”;</span></div>
  <div class="line"><span class="n">5</span><span class="indent-2">break;</span></div>
  <div class="line"><span class="n">6</span><strong class="indent-1">else</strong></div>
  <div class="line"><span class="n">7</span><span class="indent-2">“O valor de r = ”, r;</span></div>
  <div class="line"><span class="n">8</span><strong class="indent-1">end</strong></div>
  <div class="line"><span class="n">9</span><strong>end</strong></div>
  <div class="algorithm-caption"><strong>Algorithm 1:</strong> Algorithm Example</div>
</div>

---

<!-- _class: code-slide -->

# Inserindo Algoritmos

```python
def main():
    print("Hello World!")

if __name__ == "__main__":
    main()
```

<div class="code-caption">code/main.py</div>

---

<!-- _class: code-slide -->

# Inserindo Algoritmos

```c
#include <stdio.h>

int main(){
    printf("Hello World!");
    return 0;
}
```

<div class="code-caption">code/source.c</div>

---

<!-- _class: code-slide -->

# Inserindo Algoritmos

```java
public class FirstClass {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

<div class="code-caption">code/helloworld.java</div>

---

<!-- _class: code-slide -->

# Inserindo Algoritmos

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>My First HTML</h1>
</body>
</html>
```

<div class="code-caption">code/index.html</div>

---

<!-- ufc-section: Multicolunas -->

# Seção II - Multicolunas

<div class="columns">

<div>

É possível colocar mais de uma coluna utilizando o componente `columns` do template.

</div>

<div>

Porém, o espaçamento deve ser proporcional entre as colunas para que elas não entrem em conflito.

</div>

</div>

---

<!-- ufc-section: Imagens -->

# Seção III - Figuras

<div class="figure">
  <div class="caption"><strong>Figura:</strong> Emblema da UFC.</div>
  <img src="assets/emblema-ufc.png" alt="Emblema e assinatura da Universidade Federal do Ceará">
  <div class="source"><strong>Fonte:</strong> ativo do Template Beamer UFC.</div>
</div>

---

<!-- ufc-section: Referências -->

# Referências I

<div class="refs">
  <div class="ref"><span>[1]</span><span>Maurício Moreira Neto. <em>TemplateBeamerUFC</em>. Versão 1.3. 2021.</span></div>
  <div class="ref"><span>[2]</span><span>Universidade Federal do Ceará. <em>Identidade Visual da UFC</em>. Disponível em: ufc.br.</span></div>
  <div class="ref"><span>[3]</span><span>Albert Einstein. “Zur Elektrodynamik bewegter Körper”. <em>Annalen der Physik</em> 322.10 (1905), 891-921.</span></div>
</div>

---

<!-- _class: thanks -->
<!-- ufc-nav: off -->

# Obrigado(a) pela Atenção!

<div class="contact-label">Contato:</div>
<div class="contact">usuario@dominio</div>
