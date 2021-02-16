/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

jurosSimples = (c,i,t) => console.log(c+(c*i*t))

jurosCompostos = (c,i,t) => console.log(c*(1+i)*t)


jurosSimples(100, 10/100, 2)
jurosCompostos(100, 10/100, 2)
