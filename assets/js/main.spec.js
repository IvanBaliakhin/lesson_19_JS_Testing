describe('Тестирование класса Mat', function() {

  it('Проверяем суммирование методом sum()', function() {
    const m = new Mat(2, 3);
    expect(m.sum()).toBe(5);
  });

  it('Проверяем вычитание методом sub()', function() {
    const m1 = new Mat(2, 3);
    const m2 = new Mat(21, 11);
    const m3 = new Mat(4, -20);
    expect(m1.sub()).toBe(-1);
    expect(m2.sub()).toBe(10);
    expect(m3.sub()).toBe(24);
  });

  it('Проверяем mul() для чисел 2, 3, должно вернуть 6', function() {
    expect(new Mat(2, 3).mul()).toBe(6);
    expect(new Mat('2', 3).mul()).toBe(6);
    expect(new Mat(2, '3').mul()).toBe(6);
    expect(new Mat('2', '3').mul()).toBe(6);
  });

  it('Умножение mul() для не чисел должно вернуть NaN', function() {
    expect(new Mat(2, 'str').mul()).toBeNaN();
    expect(new Mat(2, 3).mul()).not.toBeNaN();
  });
});