function max(...param) {
    return Math.max.apply(null ,param);
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);