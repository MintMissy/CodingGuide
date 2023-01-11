# Layout Snippets

## Display

```scss
display : none; // dis
display : block; // disb
display : inline-block; // disi
display : none; // disn
display : flex; // disf
display : inline-flex; // disif
display : grid; // disg
display : inline-grid; // disig
```

## Flex Properties
```scss
flex : 1 1 auto; // flex
flex : 1 1 auto; // fle

flex-direction : row; // fld
flex-direction : row; // fldr
flex-direction : column; // fldc

flex-flow : row, wrap; // flf
flex-wrap : wrap; // flw
```

## Grid Properties
```scss
grid-columns : 1; // gc
grid-rows : 1; // gr

grid-area : some-grid-area; // ga
grid-template-area : some-grid-area; // gta

grid-template-columns : 1fr; // gtc
grid-template-columns : repeat(auto-fill, minmax(${0:300px}, 1fr)); // gtcre
grid-template-rows : 1fr; // gtr
```

## Align Items

```scss
align-items: flex-start; // ai
align-items: baseline; // aib
align-items: center; // aic
align-items: flex-start; // aifs
align-items: flex-end; // aife
align-items: stretch; // ais
```

## Justify Content
```scss
justify-content : flex-start; // jc
justify-content : flex-end; // jcfe
justify-content : flex-start; // jcfs
justify-content : center; // jcc
justify-content : space-around; // jcsa
justify-content : space-between; // jcsb
```

## Align Self

```scss
align-self: flex-start; // as
```

## Overflow & Visibility

```scss
overflow : visible; // ov
overflow : auto; // ova
overflow : hidden; // ovh
overflow : scroll; // ovs
overflow : visible; // ovv

visibility : visible; // vis
visibility : visible; // visv
visibility : hidden; // vish
```

## Floats
```scss
float : left; // fl
float : left; // fll
float : right; // flr
float : none; // fln
clear : both; // clr
```