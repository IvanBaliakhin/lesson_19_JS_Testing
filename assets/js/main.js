class Mat {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sum() {
    return this.a + this.b;
  }

  sub() {
    return this.a - this.b;
  }

  mul() {
    return this.a * this.b;
  }
}

function defUpperStr(str) {
  return (str || 'Default text').toUpperCase();
}

function ageClassification(n) {
  var age;
age = n < 0 ? null : n <= 24 ? 'детский возраст' : n <= 44 ? 'молодой возраст' : n <= 65 ? 'средний возраст' : n <= 75 ? 'пожилой возраст' : n <= 90 ? 'старческий возраст' : n <= 122 ? 'долгожители' : null;
return age;
}

function weekFn(n) {
  var day;
  switch(n) {
    case 1: day = 'Понедельник'; break;
    case 2: day = 'Вторник'; break;
    case 3: day = 'Среда'; break;
    case 4: day = 'Четверг'; break;
    case 5: day = 'Пятница'; break;
    case 6: day = 'Суббота'; break;
    case 7: day = 'Воскресенье'; break;
    default: day = null;
  }
  return day;
}