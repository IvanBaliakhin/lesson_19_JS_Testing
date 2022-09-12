describe('Тестирование функции ageClassification()', function() {

  it('Функция должна вернуть null при значении n < 0', function() {
    const n = -1;
    expect(ageClassification(n)).toBe(null);
  });

  it('Функция должна вернуть "детский возраст" при значении n = [0..24]', function() {
    const n = 1;
    expect(ageClassification(n)).toBe('детский возраст');
  });

  it('Функция должна вернуть "детский возраст" при значении n = [0..24]', function() {
    const n = 24;
    expect(ageClassification(n)).toBe('детский возраст');
  });

  it('Функция должна вернуть "молодой возраст" при значении n = (24..44]', function() {
    const n = 24.01;
    expect(ageClassification(n)).toBe('молодой возраст');
  });

  it('Функция должна вернуть "молодой возраст" при значении n = (24..44]', function() {
    const n = 44;
    expect(ageClassification(n)).toBe('молодой возраст');
  });

  it('Функция должна вернуть "средний возраст" при значении n = (44..65]', function() {
    const n = 44.01;
    expect(ageClassification(n)).toBe('средний возраст');
  });

  it('Функция должна вернуть "средний возраст" при значении n = (44..65]', function() {
    const n = 65;
    expect(ageClassification(n)).toBe('средний возраст');
  });

  it('Функция должна вернуть "пожилой возраст" при значении  n = (65..75]', function() {
    const n = 65.1;
    expect(ageClassification(n)).toBe('пожилой возраст');
  });

  it('Функция должна вернуть "пожилой возраст" при значении  n = (65..75]', function() {
    const n = 75;
    expect(ageClassification(n)).toBe('пожилой возраст');
  });

  it('Функция должна вернуть "старческий возраст" при значении  n = (75..90]', function() {
    const n = 75.01;
    expect(ageClassification(n)).toBe('старческий возраст');
  });

  it('Функция должна вернуть "старческий возраст" при значении  n = (75..90]', function() {
    const n = 90;
    expect(ageClassification(n)).toBe('старческий возраст');
  });

  it('Функция должна вернуть "долгожители" при значении  n = (90..122]', function() {
    const n = 90.01;
    expect(ageClassification(n)).toBe('долгожители');
  });

  it('Функция должна вернуть "долгожители" при значении  n = (90..122]', function() {
    const n = 122;
    expect(ageClassification(n)).toBe('долгожители');
  });

  it('Функция должна вернуть null при значении  n > 122', function() {
    const n = 122.01;
    expect(ageClassification(n)).toBe(null);
  });

  it('Функция должна вернуть null при значении  n > 122', function() {
    const n = 150;
    expect(ageClassification(n)).toBe(null);
  });
});