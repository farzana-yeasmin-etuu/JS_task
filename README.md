# JS Task
## Question1
#### Var in terms of  Scope
* If decalared globally ,it can be accessible from any scope(global,function & block scope)
* If var is declared inside a function scope ,it can be accessible in that function scope only
* If var is declared inside a block scope(if_else ,loop) ,it can be accessible in that block scope.If the block scope is a part of a function scope var can be accessible to that function also.If the block scope is not a part of any function var can accessible globally.

#### Let,const in terms of Scope
* If decalared globally ,it can be accessible from any scope(global,function & block scope)
* If declared inside a function or block scope ,it can be accessible to the nearest block scope ({..})

#### Var , let , const in terms of hoisting
* Var is "undefiend" until initialization if an attempt is made to access before declaration.
* Let is "error" until initialization if an attempt is made to access before declaration.After declaration without assigning any value ,when an attempt is made to access is shows "undefined".
* Const must be initialize with a value,otherwise it shows "error".
