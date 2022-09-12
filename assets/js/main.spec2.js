describe('Тестирование функции weekFn()', function() {

  it('Функция должна вернуть "Понедельник" при значении n = 1', function() {
    const n = 1;
    expect(weekFn(n)).toBe('Понедельник');
  });

  it('Функция должна вернуть "Среда" при значении n = 3', function() {
    const n = 3;
    expect(weekFn(n)).toBe('Среда');
  });

  it('Функция должна вернуть "Воскресенье" при значении n = 7', function() {
    const n = 7;
    expect(weekFn(n)).toBe('Воскресенье');
  });

  it('Функция должна вернуть null при значении n = 9', function() {
    const n = 9;
    expect(weekFn(n)).toBe(null);
  });

  it('Функция должна вернуть "понедельник" при значении n = 1.5', function() {
    const n = 1.5;
    expect(weekFn(n)).toBe(null);
  });

  it('Функция должна вернуть "понедельник" при значении n = "2"', function() {
    const n = '2';
    expect(weekFn(n)).toBe(null);
  });
});