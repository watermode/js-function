function sumTo(n) {
    if (n === 0) return 0;
  
    if (n > 0) {
      return (n * (n + 1)) / 2; 
    } else {
      return (n * (n - 1)) / 2; 
    }
  }
  
