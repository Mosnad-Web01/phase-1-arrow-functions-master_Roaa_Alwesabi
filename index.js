// 1. تعريف دالة باستخدام تعبير الدالة (Function Expression) 
const divide = function(a, b) {
    return a / b;
  }
  
  // 2. تعريف دالة باستخدام صياغة السهم (Arrow Function)
  const square = x => x * x;
  
  const add = (a, b) => a + b;
  
  // تأكد من تصدير الدوال حتى يتمكن اختبار من الوصول إليها
  module.exports = { divide, square, add };
  