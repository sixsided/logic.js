const {lvar, run, eq, and, or, add, conso, emptyo} = require ('../lib/logic.js')

function length(Arr, N) {
  return or(
    and(emptyo(Arr), eq(N, 0)),
    (Head=lvar(), Rest=lvar(), N1=lvar())=> and(
      conso(Head, Rest, Arr),
      length(Rest, N1),
      add(N1, 1, N)
    )
  )
}

const x = lvar('x')
// console.log(run(1, [x], length([], x)))
// console.log(run(1, [x], length([1, 2], x)))