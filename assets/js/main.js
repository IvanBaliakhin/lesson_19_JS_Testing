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