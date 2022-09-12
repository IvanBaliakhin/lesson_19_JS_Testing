describe('Тестирование класса Mat с помощью beforeEach()', function() {

  let m;
  let i = 2;
  let j = 3;

  beforeEach(function () {
    m = new Mat(i++, j++);
  })

  it('Сложение методом sum 2, 3 => 5', () => {
    expect(m.sum()).toBe(m.a + m.b);
  });

  it('Сложение методом sum 3, 4 => 7', () => {
    expect(m.sum()).toBe(m.a + m.b);
  });

  it('Сложение методом sum 4, 5 => 9', () => {
    expect(m.sum()).toBe(m.a + m.b);
  });

  it('Сложение методом sum 5, 6 => 11', () => {
    expect(m.sum()).toBe(m.a + m.b);
  });
});