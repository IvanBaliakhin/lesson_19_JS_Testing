describe('Тестирование функции defUpperStr()', function() {

  it('Функция должна вернуть переданный текст в верхнем регистре', function() {
    const t1 = 'My test text';
    expect(defUpperStr(t1)).toBe(t1.toUpperCase());
  });

  it('Функция должна вернуть текст по умолчанию "DEFAULT TEXT" в верхнем регистре', function() {
    const t1 = 'My test text';
    expect(defUpperStr()).toBe('DEFAULT TEXT');
  });
});